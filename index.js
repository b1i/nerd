function nerd(...fns) {
    fns.forEach((fn, index) => {
        try {
            console.log(`Debug Test ${index + 1}`,fn);
            console.time(`Execution Time ${index + 1}`);
            fn();
            console.timeEnd(`Execution Time ${index + 1}`);
        } catch (e) {
            console.log(`An error occurred in line ${e.lineNumber}`);
            console.log(e);
            console.trace();
        }
    });
}
