import React from "react";
import { useState } from "react";
import { Flex, Text, Spinner } from "@chakra-ui/react";

function fetch({ category }) {
  const arxiv = require("arxiv-api");
  const [newdata, Setnewdata] = useState([]);
  const [spin, Setspin] = useState(true);

  const render = (data) => {
    Setnewdata(data);
    Setspin(false);
  };

  const papers = arxiv
    .search({
      searchQueryParams: [
        {
          include: [{ name: category }],
        },
      ],
      start: 0,
      maxResults: 100,
      // sortBy: 'lastUpdatedDate',
      // sortOrder: 'descending',
    })
    .then((papers) => render(papers))
    .catch((error) => console.log(error));

  return (
    <>
      <Flex justify={"center"} align={"Center"} marginBottom={"40px"}>
        {spin ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
          <Flex
            gap={"20px"}
            flexDir={"column"}
            width={{ base: "300px", lg: "600px" }}
          >
            {newdata.map(({ id, title, summary, links, authors }) => {
              return (
                <>
                  <Flex key={id} flexDir={"column"} gap={"8px"}>
                    <Text
                      color={"blue"}
                      fontSize={{ base: "16px", lg: "20px" }}
                    >
                      <a
                        href={links[1]["href"]}
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        {title}
                      </a>
                    </Text>
                    <Text
                      fontStyle={"italic"}
                      fontSize={{ base: "14px", lg: "16px" }}
                    >
                      {" "}
                      by <u>{authors[0]}</u>
                    </Text>
                    <Text fontSize={{ base: "14px", lg: "16px" }}>
                      {summary}
                    </Text>
                  </Flex>
                </>
              );
            })}
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default fetch;
