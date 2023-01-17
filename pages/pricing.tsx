import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSectionBusinesses from 'views/PricingPage/PricingTablesSectionBusinesses';
import PricingTablesSectionCustomers from 'views/PricingPage/PricingTablesSectionCustomers';

export default function PricingPage() {
  return (
      <Wrapper>
        <PricingTablesSectionBusinesses />
        <PricingTablesSectionCustomers />
        {/* <FaqSection /> */}
      </Wrapper>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
