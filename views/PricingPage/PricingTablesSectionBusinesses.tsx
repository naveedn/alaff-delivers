import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';
import RichText from 'components/RichText';

export default function PricingTablesSectionBusinesses() {
  return (
    <Wrapper>
      <SectionTitle>Pricing for Businesses</SectionTitle>
      <DarkerBackgroundContainer>
        <RichText>
          <p>For businesses in the alaff network, we charge a <strong>3.5% processing fee on all orders.</strong></p>
          <br />
          <p>This fee helps us cover the costs associated with maintaining our secure and reliable payment processing system, as well as ensuring that our customer service team is well-equipped to handle any questions or concerns you may have.
          </p>
        </RichText>
      </DarkerBackgroundContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }

  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
  margin-bottom: 5rem;
`;