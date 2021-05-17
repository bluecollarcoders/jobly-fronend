import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";

function LoginForm({ login }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [formErrors, setformErrors] = useState([]);

    console.debug(
        "LoginForm",
        "login=", typeof login,
        "fromData=", formData,
        "formErrors", formErrors,
    );

    // Handle form submit:

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await login(formData);
        if (result.success) {
            history.push("/companies");
        } else {
            setformErrors(result.errors);
        }
    }

    // Update form data field
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(l => ({ ...l, [name]: value }));
      }

      return (
          <div className="LoginForm">
              
          </div>
      )
    
}