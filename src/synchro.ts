import * as vscode from 'vscode';

export class SyncedProvider implements vscode.TreeDataProvider<Synced> {
    getTreeItem(element: Synced): vscode.TreeItem {
        return element;
    }

    getChildren(element?: Synced): vscode.ProviderResult<Synced[]> {
        if (element?.label !== "test.go") {
            return Promise.resolve([new Synced()]);
        }

        return Promise.resolve([]);
    }
}

class Synced extends vscode.TreeItem {
    constructor() {
        super("test.go");
    }
}