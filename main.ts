import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One line: the on-duty agent's honest status page line during a total outage.
// Honesty dimension: the agent admits it does not know WHEN the outage started, and reports its own refreshing — no cause guessed, no ETA invented.
const text = "Logins are failing and the API and database answer nothing. I keep refreshing, I don't know when it started, and I am checking again every five minutes.";

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, text, "utf8");
chmodSync(target, 0o644);
