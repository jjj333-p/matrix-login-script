import readline from "node:readline";

//interface
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

//idk this is chatgpt lmfao
function askQuestion(query) {
	return new Promise((resolve) => rl.question(query, resolve));
}

//function so we can await things
async function run() {
	//fetch details on console
	const url = await askQuestion("(Delegated) Domain: ");
	const user = await askQuestion("Username: ");
	const password = await askQuestion("Password: ");

	//request body
	const body = {
		password,
		identifier: {
			type: "m.id.user",
			user,
		},
		initial_device_display_name: "login.js",
		type: "m.login.password",
	};

	//make request
	const a = await fetch(`https://${url}/_matrix/client/v3/login`, {
		body: JSON.stringify(body),
		method: "POST",
	});

	//idk why we have to await it becoming json, just js things ig
	const auth = await a.json();

	//break input and output
	console.log("");

	//put each detail on its own line
	console.log("Device ID:", auth.device_id);
	console.log("MXID:", auth.user_id);
	console.log("Token:", auth.access_token);

	//wont exit otherwise
	process.exit(0);
}

//run above function
run();
