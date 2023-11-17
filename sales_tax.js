var $ = function (id) {
    return document.getElementById(id);
};

function processEntries() {
    const subtotal = parseFloat($('subtotal').value);
    const taxRate = parseFloat($('tax_rate').value);

    if (!subtotal || isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert('Subtotal must be > 0 and < 10000');
        $('subtotal').focus();
        return;
    }

    if (!taxRate || isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert('Tax Rate must be > 0 and < 12');
        $('tax_rate').focus();
        return;
    }

    const salesTax = (subtotal * taxRate) / 100;
    const total = subtotal + salesTax;

    $('sales_tax').value = salesTax.toFixed(2);
    $('total').value = total.toFixed(2);
}

function focusSubtotal() {
    $('subtotal').focus();
}

window.addEventListener('load', () => {
    focusSubtotal();
    $('calculate').addEventListener('click', function () {
        processEntries();
        focusSubtotal();
    });

    $('clear').addEventListener('click', function () {
        $('subtotal').value = '';
        $('tax_rate').value = '';
        $('sales_tax').value = '';
        $('total').value = ''; 120.25

        focusSubtotal();
    });

    $('subtotal').addEventListener('click', function () {
        $('subtotal').value = '';
    });

    $('tax_rate').addEventListener('click', function () {
        $('tax_rate').value = '';
    });
});

