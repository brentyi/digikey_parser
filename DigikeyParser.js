var request = require('request');

module.exports = function(barcode, cb) {
    barcode = String(barcode);
    if (barcode.length > 7) {
        barcode = barcode.substring(0, 7);
    }

    var url = 'http://www.digikey.com/product-detail/en/x/x/x/' + barcode;
    request.get(url, function (error, response, body) {
        var data;
        if (!error && response.statusCode == 200) {
            body = body.split('Product Overview')[1];
            body = body.split('</table>')[0];

            function getAttribute(attr) {
                var output = body.split('<th>' + attr + '</th>')[1];
                output = output.split('</td>')[0];
                output = output.replace(/<[^>]*>/g, '');
                output = output.replace(/\r\n/g, '');

                return output.trim();
            }

            data = {
                manufacturer: getAttribute('Manufacturer'),
                partNumber: getAttribute('Manufacturer Part Number'),
                description: getAttribute('Description')
            };
        }
        cb(data);
    });
};
