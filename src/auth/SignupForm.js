import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";



function SignupForm({ signup }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    });
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "SignupForm",
        "signup", typeof signup,
        "formData=", formData,
        "formErrors=", formErrors,
    );
}