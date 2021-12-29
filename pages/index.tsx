import { Container, Box, Text, Heading, SimpleGrid, Stat as ChakraStat, useColorModeValue as mode, Image, Flex, Spacer, Stack, InputGroup, Input, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FadeInDown } from '../animations'
import DetailIcon from '../components/Icons/DetailIcon'
import EmojiIcon from '../components/Icons/EmojiIcon'
import FavIcon from '../components/Icons/FavIcon'
import HeartIcon from '../components/Icons/HeartIcon'
import MessageIcon from '../components/Icons/MessageIcon'
import TelegramIcon from '../components/Icons/TelegramIcon'
import { Homepage, Network, User } from './index.module'

const Home: NextPage = () => {
  const users = [
    {
      url: 'images/user/1.png',
      name: 'terrylucas'
    },
    {
      url: 'images/user/2.png',
      name: 'laura'
    },
    {
      url: 'images/user/3.png',
      name: 'john'
    },
    {
      url: 'images/user/4.png',
      name: 'douglas'
    },
    {
      url: 'images/user/1.png',
      name: 'terrylucas'
    },
    {
      url: 'images/user/2.png',
      name: 'laura'
    },
    {
      url: 'images/user/3.png',
      name: 'john'
    },
    {
      url: 'images/user/4.png',
      name: 'douglas'
    }
  ]
  return (
    <div>
      <Head>
        <title>Instagram</title>
        {/* Meta Tags */}
      </Head>
      <Container maxW="container.xl" py="27">
        <FadeInDown>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacingX="1.75rem" spacingY={{ base: '8', md: '14' }}>
            <Homepage>
              <ChakraStat
                px={{ base: 4, sm: 6 }}
                py="5"
                bg={mode('white', 'gray.700')}
                shadow="base"
                rounded="lg"
                width="100%"
              >
                <Box as="section" className="user-container">
                  {users.map((user, index) => {
                  return <User key={index}>
                    <Image  src={user.url} rounded="full" objectFit="cover" w="14" h="14" mr="5" alt='user' className='avatar-img'/>
                    <p className='username-text'>{user.name}</p>
                  </User>
                } )}
                </Box>
                
                <Box as="section" className="user-detail-info-container">
                  <Flex align="center">
                    <Flex align="center">
                      <User>
                          <Image  src='images/user/1.png' rounded="full" objectFit="cover" w="14" h="14" mr="5" alt='user' className='avatar-img'/>
                      </User>
                      <p className='name'>terrylucas</p>
                    </Flex>
                    <Spacer />
                    <Box>
                      <DetailIcon />
                    </Box>
                  </Flex>
                </Box>

                <Image src='images/user/1.jpg' objectFit="cover" alt='user'/>
                
                <Box as="section" className="user-detail-info-footer">
                  <Flex align="center">
                    <Flex align="center">
                      <HeartIcon size="lg" />
                      <MessageIcon />
                      <TelegramIcon />
                    </Flex>
                    <Spacer />
                    <Box>
                      <FavIcon />
                    </Box>
                  </Flex>

                  <Stack spacing={3}>
                    <p className='likes'> 1069 likes </p>
                    <p className='info'> 
                      <span className='name'>terrylucas</span> 
                      <span className='desc'>Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque</span> 
                    </p>
                    <p className='comments-text'> View all 100 comments </p>
                    <p className='date'> 1 hour ago </p>
                  </Stack>
                </Box>
                <Box as="section" className="comment-input-section">
                  <InputGroup className='comment-container'>
                    <InputLeftElement
                      pointerEvents='none'
                      color='gray.300'
                      fontSize='1.2em'
                      children={<EmojiIcon />}
                    />
                    <Input placeholder='Add a comment' className='comment-input' />
                    <InputRightElement children={<span className='post-button'> Post </span>} />
                  </InputGroup>
                </Box>
                
              </ChakraStat>
            </Homepage>

            <Network>
              <Text color={'gray.500'} fontSize={'sm'}>
                Right
              </Text>
            </Network>
          </SimpleGrid>
        </FadeInDown>
      </Container>
    </div>
  )
}

export default Home
