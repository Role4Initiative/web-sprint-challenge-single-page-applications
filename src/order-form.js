import React from 'react';

const OrderForm = (props) => {
    const { change, submit, errors } = props;
    const { orderName } = props.values;

    const onChange = (evt) => {
        const { orderName } = evt.target
        change(orderName)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <h1>Pizza Order Form!</h1>
            <p>{errors.orderName}</p>
            <form id="pizza-form" onSubmit={onSubmit}>
                <label>Name:
                    <input id="name-input"
                        type="text"
                        name="orderName"
                        Value={orderName}
                        onChange={onChange}
                    />
                </label>
                <label>
                    <input 
                        
                    />
                </label>
                <label>
                    <input id="order-button"
                        type="submit"
                        value="Add to Order"
                    />
                </label>
            </form>
        </div>
    )
}

export default OrderForm;