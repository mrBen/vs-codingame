import * as vscode from 'vscode';
import * as synchro from './synchro';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vs-codingame" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('vs-codingame.openCodingame', openCodingame)
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('vs-codingame.openSettings', openSettings)
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('vs-codingame.changeFile', chooseFile)
	);

	vscode.window.registerTreeDataProvider(
		'cgSynchro',
		new synchro.SyncedProvider()
	);
}

export function deactivate() { }

function openCodingame() {
	vscode.env.openExternal(vscode.Uri.parse('https://www.codingame.com/home'));
}

function openSettings() {
	vscode.commands.executeCommand('workbench.action.openSettings', 'VS CodinGame');
}

export async function chooseFile() {
	console.log('begin choosing a file');

	let file = await vscode.window.showOpenDialog({
		defaultUri: vscode.Uri.parse('/home/benjamin/Projects/vs-codingame/'),
		title: 'Hop'
	});

	console.log(file);
}