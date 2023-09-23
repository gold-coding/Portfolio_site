import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Chat from '@/modules/chat';

const PAGE_TITLE = 'Chat';
const PAGE_DESCRIPTION =
  'Leave whatever you like to say, suggestions, questions or anything!';

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Chat />
      </Container>
    </>
  );
};

export default ContactPage;
