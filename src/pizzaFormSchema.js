import * as yup from 'yup';

const pizzaFormSchema = yup.object().shape({
    orderName: yup
        .string()
        .trim()
        .required("Order must have a name.")
        .min(2, "name must be at least 2 characters")
})

export default pizzaFormSchema;