function calculate(){
    const total = parseFloat(document.getElementById('total').value)
    const rate = parseFloat(document.getElementById('rate').value)

    const tip = total * (rate / 100)
    const tax = total * (5.5 / 100)
    const total = total + tip + tax

    document.getElementById('tip-label').innerHTML = `$${tip.toFixed(2)}`
    document.getElementById('tax-label').innerHTML = `$${tax.toFixed(2)}`
    document.getElementById('grand-total') = `$${total.toFixed(2)}`
}

document.getElementById('calculateTotal').addEventListener('click', calculate)