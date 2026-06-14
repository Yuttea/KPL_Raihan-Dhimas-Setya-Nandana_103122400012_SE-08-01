async function fetchOrderDetails(orderId, token) {
    try {
        const order = await getOrder(orderId, token);
        renderOrderModal(order, token);
    } 
    
    catch (error) {
        console.error('Error fetching order details:', error);
    }
}

async function getOrder(orderId, token) {
    const response = await fetch(
        `https://example.com/api/order/${orderId}`,
        
        {
            headers: { Authorization: token }
        }
    
    );

    if (!response.ok) { throw new Error('Failed to fetch order details'); }

    return response.json();
}

function renderOrderModal(order, token) {
    const modal         = document.getElementById('orderModal');
    const detailsDiv    = document.getElementById('orderDetails');
    const closeBtn      = modal.querySelector('.close');
    const confirmBtn    = document.getElementById('confirmOrderBtn');

    detailsDiv.replaceChildren(
        createElement('h3', `Order ID: ${order.id}`),
        createElement('p', `Status: ${order.status}`)
    );

    configureConfirmButton(confirmBtn, order, token);

    closeBtn.onclick = () => hideModal(modal);

    showModal(modal);
}

function configureConfirmButton(button, order, token) {
    if (order.status === 'Delivered') {
        button.style.display = 'none';
        return;
    }

    button.style.display = 'block';
    button.onclick = () => confirmOrder(order.id, token);
}

function showModal(modal) {
    modal.style.display = 'block';
}

function hideModal(modal) {
    modal.style.display = 'none';
}

function createElement(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}