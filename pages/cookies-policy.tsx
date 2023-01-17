import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';
import { EnvVars } from 'env';

export default function ContactPage() {
  return (
    <Page title="Cookies policy">
      <CookiesPolicyContainer>
        <RichText>

          <h1>Cookie Policy</h1>
          <p>At Alaff Delivers™, we use cookies and other technologies on our website to enhance your browsing experience and collect information about your visit. This cookie policy (&quot;Policy&quot;) explains what cookies are, how we use them, and how you can manage them.</p>
          <br />
          <h2>What are cookies?</h2>
          <p>Cookies are small text files that are stored on your device when you visit a website. They are used to remember your preferences and settings, and to track your browsing behavior. Cookies can be session-based, which means they expire when you close your browser, or persistent, which means they remain on your device until they expire or are deleted.</p>
          <br />
          <h2>How we use cookies</h2>
          <p>We use cookies on our website to remember your preferences, such as your language and location settings. We also use cookies to improve the performance of our website and to analyze how our visitors use our website.</p>
          <p>We use both session-based and persistent cookies on our website. The session-based cookies expire when you close your browser, while the persistent cookies remain on your device for a set period of time.</p>
          <br />
          <h2>Third-party cookies</h2>
          <p>We may also use third-party cookies on our website, such as Google Analytics, to collect information about your visit to our website. These cookies are set by the third party and are subject to their own privacy policies.</p>
          <br />
          <h2>Managing cookies</h2>
          <p>Most web browsers allow you to manage cookies through the browser settings. You can choose to block or delete cookies, or to be notified when a website sets a cookie. However, please note that blocking or deleting cookies may impact the functionality of our website.</p>
          <br />
          <h2>Changes to this Policy</h2>
          <p>We reserve the right to make changes to this Policy at any time. We will notify you of any changes by updating the Policy on our website.</p>
          <br />
          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about our cookie policy, please contact us at <a href={ "mailto:" + EnvVars.COMPANY_EMAIL}>{EnvVars.COMPANY_EMAIL}</a>.</p>
        </RichText>
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
