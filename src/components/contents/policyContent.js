import React from "react";
import Sidebar from "../Sidebar";

function PolicyContent() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "Information we collect", title: "Information we collect" },
    {
      id: "How we use your information",
      title: "How we use your information ",
    },
    { id: "Sharing your Information", title: "Sharing your Information" },
    { id: "Data Security", title: "Data Security" },
    { id: "Data Retention", title: "Data Retention" },
    { id: "Non Refund Policy", title: "Non Refund Policy" },
    { id: "Your Choices", title: "Your Choices" },
    { id: "Children's Privacy", title: "Children's Privacy" },
    {
      id: "Changes to This Privacy Policy",
      title: "Changes to This Privacy Policy",
    },
    { id: "Contact Us", title: "Contact Us" },
  ];
  return (
    <section className="policy-container">
      <Sidebar sections={sections} />
           <div className="content">
        <div id="introduction" className="section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Frebson Gym (“we,” “us,” “our”). This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use the Frebson Gym App (“App”). By using the
            App, you consent to the data practices described in this policy.
          </p>
        </div>

        <div id="Information we collect" className="section">
          <h2>2. Information we collect</h2>
          <ul>
            <li>
              {" "}
              Personal Information: We collect personal information that you
              provide directly to us when you register for an account, make
              payments, or communicate with us. This may include your name,
              email address, phone number, payment details, and membership
              information.
            </li>
            <li>
              Usage Data: We automatically collect data about your interactions
              with the App, including your IP address, device type, operating
              system, and browsing activity.
            </li>
            <li>
              Location Data: With your consent, we may collect location data to
              provide location-based services, such as access to gym facilities.
            </li>
          </ul>
        </div>

        <div id="How we use your information" className="section">
          <h2>3. How we use your information</h2>
          <ol>
            <li>
              To Provide Services: We use your information to manage your
              membership, process payments, provide access to the gym, and
              maintain session history.
            </li>
            <li>
              To Communicate with You: We may use your contact information to
              send you notifications, updates, and promotional materials related
              to the App and gym services.
            </li>
            <li>
              To Improve the App: We use usage data to enhance the
              functionality, performance, and user experience of the App.
            </li>
            <li>
              {" "}
              To Comply with Legal Obligations: We may use or disclose your
              information as required by law or to enforce our terms and
              conditions.
            </li>
          </ol>
        </div>

        <div id="Sharing your Information" className="section">
          <h2>4. Sharing your Information </h2>
          <ul>
            <li>
              {" "}
              Service Providers: We may share your information with third-party
              service providers who perform services on our behalf, such as
              payment processing, data analytics, and communication services.
            </li>
            <li>
              Legal Requirements: We may disclose your information if required
              to do so by law, regulation, or legal process.
            </li>
            <li>
              Business Transfers: In the event of a merger, acquisition, or sale
              of all or a portion of our business, your information may be
              transferred as part of that transaction.
            </li>
          </ul>
        </div>

        <div id="Data Security" className="section">
          <h2>5. Data Security </h2>
          <p>
            We implement reasonable administrative, technical, and physical
            measures to protect your information from unauthorized access, use,
            or disclosure. However, no system is completely secure, and we
            cannot guarantee absolute security.
          </p>
        </div>

        <div id="Data Retention" className="section">
          <h2>6. Data Retention</h2>
          <p>
            We will retain your personal information only for as long as is necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            <ul>
              <li>Active Accounts: Data associated with your account is retained for the duration of your active membership and usage of the App.</li>
              <li>Inactive/Deleted Accounts: Upon a formal account deletion request, your personal data will be deleted or anonymized within 7 business days, except for data we are legally obligated to retain (such as financial records, tax data, and transaction histories, which may be kept for up to 7 years).</li>
              <li>Usage Data: Technical usage data and logs are retained for a shorter period (typically up to 12 months) for internal analysis and security improvements, unless needed for longer security investigations.</li>
            </ul>
          </p>
        </div>

        <div id="Non Refund Policy" className="section">
          <h2>7. Non Refund Policy</h2>
          <ul>
            <li>
              {" "}
              No Refunds: All payments made to the App are non-refundable. 
              This includes but is not limited to subscription fees, one-time purchases, and any other charges associated with the use of the App.
            </li>
            <li>
              Subscription Cancellations: You may cancel your subscription at any time. Upon cancellation, your access to premium features will
               continue until the end of the current billing cycle. No refunds, partial or otherwise, will be issued for any remaining subscription period.
            </li>
          </ul>
        </div>

        <div id="Your Choices" className="section">
          <h2>8. Your Choices</h2>
          <ul>
            <li>
              {" "}
              Access and Update: You can access and update your personal
              information through the App settings or by contacting us directly.
            </li>
            <li>
              Opt-Out: You may opt out of receiving promotional communications
              by following the unsubscribe instructions in the emails or by
              contacting us.
            </li>
            <li>
              Location Data: You can manage your location data preferences
              through your device settings.
            </li>
            <li>
              Account Deletion: You may request the deletion of your account
              and personal data by visiting our{" "}
              <a href="/delete-account" className="content-link">
                Request Account Deletion
              </a>{" "}
              page. Requests are processed within 7 business days.
            </li>
          </ul>
        </div>

        <div id="Children's Privacy" className="section">
          <h2>9. Children's Privacy</h2>
          <p>
            The App is not intended for children under the age of 13. We do not
            knowingly collect personal information from children under 13. If we
            become aware that we have collected such information, we will take
            steps to delete it.
          </p>
        </div>

        <div id="Changes to This Privacy Policy" className="section">
          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting the updated policy in the
            App and updating the effective date. Your continued use of the App
            after such changes constitutes your acceptance of the revised
            policy.
          </p>
        </div>

        <div id="contact" className="section">
          <h2>11. Contact Information</h2>
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

export default PolicyContent;
