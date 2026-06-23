import React from "react";
import Sidebar from "../Sidebar";

function TermContent() {
const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "definitions", title: "Definitions" },
    { id: "account", title: "Account Registration and Security" },
    { id: "access", title: "Access Control" },
    { id: "membership", title: "Membership Management" },
    { id: "session", title: "Session History" },
    { id: "payment", title: "Payment Processing" },
    { id: "community", title: "Community" },
    { id: "notifications", title: "Notifications" },
    { id: "privacy", title: "Privacy Policy" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "modifications", title: "Modifications" },
    { id: "termination", title: "Termination" },
    { id: "law", title: "Governing Law" },
    { id: "contact", title: "Contact Information" },
  ];

  return (
    <section className="policy-container">
      <Sidebar sections={sections} />
      <div className="content">
        <div id="introduction" className="section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to the Frebson Gym App ("App"). By using the App, you agree
            to comply with and be bound by the following terms and conditions
            ("Terms"). Please review these Terms carefully. If you do not agree
            to these Terms, you must not use the App.
          </p>
        </div>

        <div id="definitions" className="section">
          <h2>2. Definitions</h2>
          <ul>
            <li>
              <strong>Users:</strong> refers to any individual who uses the App.
            </li>
            <li>
              <strong>Administrator:</strong> refers to gym staff with access to
              the admin dashboard.
            </li>
            <li>
              <strong>Membership:</strong> refers to the subscription or access
              package purchased by the User.
            </li>
          </ul>
        </div>

        <div id="account" className="section">
          <h2>3. Account Registration and Security</h2>
          <ol>
            <li>
              To use the App, you must register an account with Frebson Gym and
              provide accurate and complete information.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account information, including your username and password.
            </li>
            <li>
              You must notify Frebson Gym immediately of any unauthorized use of
              your account or any other breach of security.
            </li>
          </ol>
        </div>

        <div id="access" className="section">
          <h2>4. Access Control</h2>
          <ul>
            <li>
              Access to the gym facility is granted through the App via QR code
              scanning.
            </li>
            <li>Access will only be granted if your Membership is active.</li>
            <li>You must log in to the App before using the QR scanner.</li>
            <li>If your Membership is inactive, access will be denied.</li>
          </ul>
        </div>

        <div id="membership" className="section">
          <h2>5. Membership Management</h2>
          <p>
            You can view your Membership details, including expiration dates,
            within the App.
          </p>
        </div>

        <div id="session" className="section">
          <h2>6. Session History</h2>
          <p>
            The App maintains a record of your gym session history. You can view
            your session history in the form of a calendar matrix within the
            App.
          </p>
        </div>

        <div id="payment" className="section">
          <h2>7. Payment Processing</h2>
          <p>
            You may make payments directly through the App for membership
            renewals and other services.
          </p>
          <ul>
            <li>The App supports multiple payment methods.</li>
            <li>All payment transactions are processed securely.</li>
          </ul>
        </div>

        <div id="community" className="section">
          <h2>8. Community</h2>
          <p>
            The App includes real-time chat functionality for users to send and
            receive messages.
          </p>
        </div>

        <div id="notifications" className="section">
          <h2>9. Notifications</h2>
          <p>
            Administrators may send broadcast notifications for important
            updates. You will receive in-app notifications for membership
            renewals, session reminders, and other relevant information. Push
            notifications may be used for urgent updates and alerts.
          </p>
        </div>

        <div id="privacy" className="section">
          <h2>10. Privacy Policy</h2>
          <p>
            Your use of the App is also governed by our Privacy Policy, which
            outlines how we collect, use, and protect your personal information.
          </p>
        </div>

        <div id="liability" className="section">
          <h2>11. Limitation of Liability</h2>
          <p>
            Frebson Gym is not liable for any indirect, incidental, or
            consequential damages arising from the use of the App or access to
            the gym facility. We do not guarantee uninterrupted or error-free
            access to the App.
          </p>
        </div>

        <div id="modifications" className="section">
          <h2>12. Modifications</h2>
          <p>
            Frebson Gym reserves the right to modify these Terms at any time.
            Changes will be effective immediately upon posting on the App.
            Continued use of the App following any changes constitutes
            acceptance of the revised Terms.
          </p>
        </div>

        <div id="termination" className="section">
          <h2>13. Termination</h2>
          <p>
            Frebson Gym reserves the right to suspend or terminate your access
            to the App if you violate these Terms or for any other reason deemed
            appropriate.
          </p>
          <p>
            If you wish to request deletion of your account and associated data,
            please visit our{" "}
            <a href="/delete-account" className="content-link">
              Request Account Deletion
            </a>{" "}
            page.
          </p>
        </div>

        <div id="law" className="section">
          <h2>14. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of [Insert Jurisdiction].
          </p>
        </div>

        <div id="contact" className="section">
          <h2>15. Contact Information</h2>
          <p>
            If you have any questions or concerns about these Terms, please
            contact us at:
          </p>
          <address>
            Frebson Gym
            <br />
            Email: frebson.ivs@gmail.com
            <br />
            Phone: 08034947725
            <br />
          </address>
        </div>
      </div>
    </section>
  );
}

export default TermContent;
