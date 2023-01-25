import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Fetch from "@/component/fetch";
import Head from "next/head";

export default function news() {
  return (
    <>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <Flex>
        <Tabs>
          <Flex flexDir={"row"} marginTop={"40px"} gap={{ base: "80px" }}>
            <Flex width={{ base: "250px", lg: "70vw" }} marginLeft={"10px"}>
              <TabPanels>
                <TabPanel>
                  <Fetch category="physics" />
                </TabPanel>
                <TabPanel>
                  <Fetch category="artifical intelligence" />
                </TabPanel>
                <TabPanel>
                  <Fetch category="bioinformatics" />
                </TabPanel>
              </TabPanels>
            </Flex>

            <Flex width={{ base: "50px", lg: "20vw" }}>
              <TabList border={"0px"}>
                <Flex flexDir={"column"} gap={"4px"}>
                  <Tab
                    _selected={{ color: "blue", background: "" }}
                    _active={""}
                    m={"0"}
                    p={"0px 0px 0px 0px"}
                    display={"flex"}
                    justifyContent={"right"}
                  >
                    <Text
                      textAlign={"right"}
                      fontSize={{ base: "14px", lg: "18px" }}
                    >
                      physics
                    </Text>
                  </Tab>
                  <Tab
                    _selected={{ color: "blue", background: "" }}
                    _active={""}
                    m={"0"}
                    p={"0px 0px 0px 0px"}
                    display={"flex"}
                    justifyContent={"right"}
                  >
                    <Text
                      textAlign={"right"}
                      fontSize={{ base: "14px", lg: "18px" }}
                    >
                      ai/ml
                    </Text>
                  </Tab>
                  <Tab
                    _selected={{ color: "blue", background: "" }}
                    _active={""}
                    m={"0"}
                    p={"0px 0px 0px 0px"}
                    display={"flex"}
                    justifyContent={"right"}
                  >
                    <Text
                      textAlign={"right"}
                      fontSize={{ base: "14px", lg: "18px" }}
                    >
                      bio-info
                    </Text>
                  </Tab>
                </Flex>
              </TabList>
            </Flex>
          </Flex>
        </Tabs>
      </Flex>
    </>
  );
}
