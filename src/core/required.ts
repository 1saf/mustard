type MustardOptions = {
    messageFormatter: () => string;
};

function whoIsMyDaddy() {
    try {
        throw new Error();
    } catch (error) {
        // matches this function, the caller and the parent
        const allMatches = error.stack.match(/(\w+)@|at (\w+) \(/g);

        // match parent function name
        const parentMatches = allMatches[1].match(/(\w+)@|at (\w+) \(/);
        // return only name
        return parentMatches[1] || parentMatches[2];
    }
}

export function mustard(variables: Record<string, unknown>, options?: MustardOptions) {
    const variableNames = Object.keys(variables);
    for (const variableName of variableNames) {
        if (variableNames[variableName] === undefined || variableNames[variableName] === null) {
            throw new Error(`Function '${whoIsMyDaddy()}' expected '${variableName}' to not be undefined or null.`);
        }
    }
}
