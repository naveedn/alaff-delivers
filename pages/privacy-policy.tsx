import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';
import { EnvVars } from 'env';

export default function ContactPage() {
  return (
    <Page title="Privacy policy">
      <PrivacyPolicyContainer>
        <RichText>
          <p>
            At Alaff Delivers LLC, we value the privacy and security of our customers and are committed to protecting your personal information. This privacy policy (“Policy”) explains how we collect, use, and protect the information you provide to us when you use our delivery service in Maryland.
          </p>
          <br />

          <h2>Information Collection</h2>
          <br />
          <p>We collect information from you when you place an order, create an account, or contact us for customer support. The types of information we may collect include your name, email address, mailing address, phone number, payment information, and delivery instructions.</p>
          <br />
          <p>We may also collect information about your device and browsing habits when you visit our website, such as your IP address, browser type, and the pages you visit. We use this information to improve our website and provide a better user experience.</p>
          <br />

          <h2>Use of Information</h2>
          <br />
          <p>
            The information we collect is used to process your orders, provide customer support, and communicate with you about our services. We may also use your information to personalize your experience on our website and offer you relevant products and services.
          </p>
          <p>
            We may also use your information for research and analysis to improve our services, and we may share anonymized data with third parties for research and analysis.
          </p>
          <p>
            Payment information is used solely for the purpose of processing your payment and will not be stored after the transaction is completed.
          </p>
          <br />

          <h2>Sharing of Information</h2>
          <br />

          <p>
            We may share your information with third parties that assist us in providing our services, such as payment processors and delivery companies. We will only share the information necessary for these companies to perform their services.
          </p>
          <p>
            We may also disclose your information if required by law or in response to a valid legal request.
          </p>
          <br />

          <h2>Security</h2>
          <br />

          <p>
            We take the security of your information seriously and employ appropriate measures to protect it from unauthorized access, use, or disclosure. However, no data transmission over the internet can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, we cannot ensure or warrant the security of any information you transmit to us.
          </p>
          <br />

          <h2>Changes to this Policy</h2>
          <br />

          <p>We reserve the right to make changes to this Policy at any time. We will notify you of any changes by updating the Policy on our website.</p>
          <br />

          <h2>Contact Us</h2>
          <br />
          <p>
            If you have any questions or concerns about our privacy policy, please contact us at <a href={"mailto:" + EnvVars.COMPANY_EMAIL}>{EnvVars.COMPANY_EMAIL}</a>
          </p>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
