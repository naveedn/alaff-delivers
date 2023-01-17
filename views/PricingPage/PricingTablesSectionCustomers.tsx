import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSectionCustomers() {
    return (
      <Wrapper>
        <SectionTitle>Flat Rate Pricing for Customers</SectionTitle>
        <AutofitGrid>
          <PricingCard
            title="Basic"
            description="For deliveries up to 5 miles"
            benefits={['Up to 5 miles', 'Same Day Delivery', '$75 cart minimum']}
          >
            $7<span>/ Delivery</span>
          </PricingCard>
          <PricingCard
            title="Express"
            description="For deliveries up to 10 miles"
            benefits={['Up to 10 miles', 'Delivery within 2 hours', '$25 cart minimum']}
            isOutlined
          >
            $15<span>/Delivery</span>
          </PricingCard>
          {/* <PricingCard
            title="Premium"
            description="Get your team together"
            benefits={[
              'Up to 15 miles',
              'Delivery within 2 hours',
              '$10 cart minimum',
            ]}
          >
            $23<span>/Delivery</span>
          </PricingCard> */}
        </AutofitGrid>
      </Wrapper>
    );
  }

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
