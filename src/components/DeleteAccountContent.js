import React, { useState } from "react";

function DeleteAccountContent() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = {
      _subject: "Account Deletion Request",
      email,
      phone,
      reason: reason === "other" ? otherReason : reason,
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/frebson.ivs@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again later.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <section className="delete-account-container">
        <div className="delete-account-content">
          <div className="confirmation-message">
            <h2>Request Submitted</h2>
            <p>
              Your account deletion request has been received. You will receive
              a confirmation email at <strong>{email}</strong> once the process
              is complete.
            </p>
            <p>
              Please note that deletion requests are processed within 7 business
              days.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="delete-account-container">
      <div className="delete-account-content">
        {/* 1. Header */}
        <h1 className="delete-account-title">Request Account Deletion</h1>
        <p className="delete-account-subtitle">
          We're sorry to see you go. Please review the details below to submit
          your deletion request.
        </p>

        {/* 2. "What Happens Next" Disclosure */}
        <h2 className="disclosure-heading">What Happens When You Delete Your Account?</h2>
        <ul className="disclosure-list">
          <li>
            <strong>Account Data:</strong> Your profile, login credentials, and
            personal details will be permanently erased.
          </li>
          <li>
            <strong>App Progress/History:</strong> Any workout history, gym
            check-ins, or saved preferences will be lost.
          </li>
          <li>
            <strong>Subscriptions:</strong> Deleting your account does not
            automatically cancel App Store or Google Play subscriptions. You
            must cancel those via your phone settings.
          </li>
        </ul>

        {/* 3. The Deletion Request Form */}
        <form className="deletion-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              className="form-input"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason for Leaving</label>
            <select
              id="reason"
              className="form-input form-select"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            >
              <option value="">Select a reason...</option>
              <option value="none">None</option>
              <option value="not-using">Not using the app anymore</option>
              <option value="too-expensive">Too expensive</option>
              <option value="found-alternative">Found a better alternative</option>
              <option value="privacy-concerns">Privacy concerns</option>
              <option value="technical-issues">Technical issues</option>
              <option value="other">Other</option>
            </select>
          </div>

          {reason === "other" && (
            <div className="form-group">
              <label htmlFor="other-reason">
                Please specify <span className="required">*</span>
              </label>
              <textarea
                id="other-reason"
                className="form-input form-textarea"
                placeholder="Tell us your reason..."
                rows="3"
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
                required
              />
            </div>
          )}

          {/* 4. The Final Action Button */}
          <button
            type="submit"
            className="btn-delete-account"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Request Deletion"}
          </button>

          {/* Error message */}
          {status === "error" && (
            <p className="error-message">{errorMsg}</p>
          )}
        </form>

        {/* 5. Timeline Transparency */}
        <p className="timeline-note">
          Account deletion requests are processed within 7 business days.
        </p>
      </div>
    </section>
  );
}

export default DeleteAccountContent;