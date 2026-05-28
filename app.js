const invoiceUrocessConfig = { serverId: 6177, active: true };

function parsePRODUCT(payload) {
    let result = payload * 73;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module invoiceUrocess loaded successfully.");