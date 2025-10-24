/*

Part 1: Create the Feedback Form
1. Set Up State
○ Initialize state for the user's name, email, and feedback using a single
formData object in the component.
2. Build the Form UI
○ Create input fields for the name, email, and feedback text (textarea).
○ Use the name attribute for each input to match the keys in formData
(e.g., name, email, feedback).
○ Use the onChange event to dynamically update state when users type
in the fields.
3. Add Real-Time Feedback Preview
○ Below the form, display the user’s inputs in real-time using the
formData state.

*/

import { useState } from "react";
export default function UserForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    // If any field is empty, disable submit button
    const isFormValid = formData.name && formData.email && formData.feedback;

    return (
        <div>
            <h1>User Form</h1>
            <div className="form-container">
            <form className="user-form">
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <br />
                <br />
                <label for="feedback">Feedback:</label>
                <textarea maxLength="200" placeholder="Enter your feedback here..."
                    id="feedback" name="feedback" rows="5" cols="40" value={formData.feedback} onChange={handleChange} />
                    <p>{formData.feedback.length} / 200 characters</p>
                    <button type="submit" className="submit-button" disabled={!isFormValid}>Submit</button>
            </form>
            <div className="preview-form">
                <h2>Preview</h2>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Feedback: {formData.feedback}</p>
            </div>
        </div>
        </div>
    )
}