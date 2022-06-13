const readXlsxFile = require("read-excel-file/node");
// File path.
readXlsxFile("./server/uploads/file_example_XLSX_1000.xlsx").then(rows => {
    console.time();
    console.log(rows.length);
    console.timeEnd();
    // `rows` is an array of rows
    // each row being an array of cells.
});
