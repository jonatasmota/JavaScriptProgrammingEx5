let firstName = prompt('What is you first name?');
let lastName = prompt('What is your last name?');
let customerType = prompt('Customer type: ');
let invoiceAmt = parseFloat(prompt('Whats the invoice amount?', 0.00));
let invoiceDate = new Date();
let discountPercentage = 0.0;
let discountAmt = 0.0;


try {
    if (firstName === '') throw new Error('The first name is required');
    if (lastName === '') throw new Error('The last name is required');
    if (customerType === '' || customerType.length !== 1) throw new Error('The customer type is not valid.');
    if (isNaN(invoiceAmt)) throw new Error('Invoice amount is not valid.');
    
    switch (customerType.toUpperCase()) {
        case 'R':
            switch (true) {
                case invoiceAmt >= 250.0:
                    discountPercentage = 0.2;
                break;
                case invoiceAmt >= 100:
                    discountPercentage = 0.1;
                break;
                default:
                    discountPercentage = 0;
                break;

            }
            break;
        case 'C':
            switch (true) {
                case invoiceAmt >= 250.0:
                    discountPercentage = 0.3;
                break;
                default:
                    discountPercentage = 0.2;
                break;
            }
            break;
    }

    discountAmt = discountPercentage * invoiceAmt;
    invoiceTotal = invoiceAmt - discountAmt;
}
catch (error) {
    alert(error);
    window.location = 'index.html';
}



/*try {
    if(customerType === "" || customerType.length > 1 || customerType.length < 1 ) {
        throw new Error(`${customerType} is not a valid value.`);
    }
    else {
        customerType;
    }
} catch (error) {

}



try {
    if(isNaN(invoiceAmt)) {
        throw new Error("Error in the value entered");
    }
} catch {
    alert(error.message);
}

if (customerType === 'R' && invoiceAmt >= 250) {
    discountPercentage = 0.20;
}
else if (customerType === 'R' && invoiceAmt < 250 && invoiceAmt >= 100){
    discountPercentage = 0.10;
}

else if (customerType === 'R' && invoiceAmt < 100) {
    discountPercentage = 0;
}

else if (customerType === 'C' && invoiceAmt >= 250) {
    discountPercentage = 0.30;
}

else if (customerType === 'C' && invoiceAmt < 250) {
    discountPercentage = 0.20;
}

else {
    discountPercentage = 0;
}

*/