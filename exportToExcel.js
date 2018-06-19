function exportTableToExcel(tableID, filename = ''){
  var downloadLink;
  var dataType = 'application/vnd.ms-excel';
  var tableSelect = document.getElementById(tableID);
  var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

  // Specify file Name
  filename = filename?filename+'.xls':'website_template.xls';

  // create downlaod link element
  downloadLink = document.createElement("a");
  document.body.appendChild(downloadLink);

  if(navigator.msSaveOrOpenBlob){
    var blob = new Blob(['\ufeff', tableHTML], {
      type:dataType
    });
    navigator.msSaveOrOpenBlob(blob, filename);
  }else{
    downloadLink.href = 'data:' + dataType + ',' + tableHTML;
    // Create link to the file
    downloadLink.download = filename;
    // triggering the function
    downloadLink.click();
  }
}
