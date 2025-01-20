import { $ } from "bun";


console.log("Hello via Bun!");

for (let i = 1; i < 5; i++) {
    console.log(i);
}


await $`echo "Hello World!"`;
await $`ls`;