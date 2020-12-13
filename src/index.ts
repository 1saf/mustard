import { mustard } from "./core/required";

function hello() {
    const x = undefined;
    mustard({ x });
}

hello();