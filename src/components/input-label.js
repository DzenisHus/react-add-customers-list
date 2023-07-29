export function InputLabel(props) {
    return (
        // return input with label and error message
        <label className="block text-left mb-4" htmlFor={props.name}>
            <span className="text-gray-700">{props.label}</span>
            <input type={props.type} 
                id={props.name}
                className="mb-1 block w-full rounded-md px-3 py-2 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                {...props.register(props.name, props.required)}
                aria-invalid={props.errors[props.name] ? "true" : "false"}
                defaultValue={props.defaultValue}
            />

            {props.errors[props.name] && props.errors[props.name].type === "required" && (
                <span className="text-red-500" role="alert">This is required</span>
            )}
            {props.errors[props.name] && props.errors[props.name].type === "min" && (
                <span className="text-red-500" role="alert">Min length exceeded</span>
            )}
            {props.errors[props.name] && props.errors[props.name].type === "max" && (
                <span className="text-red-500"role="alert">Max length exceeded</span>
            )}

        </label>
    )
}

export default InputLabel;