import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Alaff Delivers LLC™ is the first recreational marijuana delivery business in Maryland. Join the Alaff network to reach your customers faster and build your brand!"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <BasicSection imageUrl="/demo-illustration-1.svg" title="The most options, at your fingertips." overTitle="Our Inventory">
            <p>
            Our selection includes a wide variety of strains, edibles, concentrates, and more, all from top-rated growers and manufacturers in the state. We pride ourselves on offering only the finest products that are lab-tested for quality and safety.{' '}
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="The fastest delivery, guaranteed." overTitle="Our Deliveries" reversed>
            <p>
            Our experienced and friendly drivers are dedicated to providing prompt and discreet service, so you can rest assured that your order will arrive on time and in perfect condition. Plus, we offer flexible delivery options to fit your schedule, including same-day and next-day service.{' '}
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Discounts for Members" overTitle="Loyalty Program">
            <p>
            Join our loyalty program and earn points on every purchase and redeem them for discounts on future orders. Sign up today and receive 10% off your first order!
            </p>
            <br />
            <p>
            Don&apos;t miss out on the convenience and quality that our recreational marijuana delivery service has to offer. Place your order now and experience the difference!
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        {/* <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer> */}
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
