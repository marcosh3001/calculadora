
 
        function calculateTotal() {
            // Obtener valores
            const price = parseFloat(document.getElementById('price').value) || 0;
            const margin = parseFloat(document.getElementById('margin').value) || 0;
            const shipping = parseFloat(document.getElementById('shipping').value) || 0;
            const fee = parseFloat(document.getElementById('fee').value) || 0;

            // Calcular
            const marginAmount = price * (margin / 100);
            const subtotal = price + marginAmount;
            const feeAmount = subtotal * (fee / 100);
            const total = subtotal + feeAmount + shipping;

            // Mostrar resultado
            document.getElementById('total').textContent = `$${total.toFixed(2)}`;
        }
