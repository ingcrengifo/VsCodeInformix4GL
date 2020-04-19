import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerDocumentSymbolProvider(
      {
        scheme: "file",
        language: "4GL",
      },
      new SwmfConfigDocumentSymbolProvider()
    )
  );
}

class SwmfConfigDocumentSymbolProvider
  implements vscode.DocumentSymbolProvider {
  private format(cmd: string): string {
    return cmd.replace(/\(.*/, "");
  }

  public provideDocumentSymbols(
    document: vscode.TextDocument,
    _token: vscode.CancellationToken
  ): Promise<vscode.DocumentSymbol[]> {
    return new Promise((resolve) => {
      let symbols: vscode.DocumentSymbol[] = [];
      let nodes = [symbols];

      let key = vscode.SymbolKind.Key;
      let func = vscode.SymbolKind.Function;

      for (var i = 0; i < document.lineCount; i++) {
        var line = document.lineAt(i);

        let tokens = line.text.split(" ");

        if (line.text.match(/^ *function /i)) {
          let marker_symbol = new vscode.DocumentSymbol(
            this.format(tokens[1]),
            "",
            func,
            line.range,
            line.range
          );

          nodes[nodes.length - 1].push(marker_symbol);
        } else if (line.text.startsWith("MAIN")) {
          let marker_symbol = new vscode.DocumentSymbol(
            tokens[0],
            "MAIN statement",
            func,
            line.range,
            line.range
          );

          nodes[nodes.length - 1].push(marker_symbol);
        } else if (line.text.startsWith("GLOBALS")) {
          let marker_symbol = new vscode.DocumentSymbol(
            tokens[0],
            "",
            key,
            line.range,
            line.range
          );

          nodes[nodes.length - 1].push(marker_symbol);
        }
      }
      resolve(symbols);
    });
  }
}
