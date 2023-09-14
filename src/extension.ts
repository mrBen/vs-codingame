import * as vscode from 'vscode';
import * as synchro from './synchro';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vs-codingame" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('vs-codingame.openCodingame', () => {
			vscode.env.openExternal(vscode.Uri.parse('https://www.codingame.com/home'));
		})
	);
	vscode.window.registerTreeDataProvider(
		'cgSynchro',
		new synchro.SyncedProvider()
	);
}

export function deactivate() { }
