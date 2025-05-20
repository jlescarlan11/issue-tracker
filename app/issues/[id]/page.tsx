import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import IssueDetailActions from "./IssueDetailActions";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: params.id },
  });
  await delay(2000);

  if (!issue) return notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="4">
      <Box>
        <Heading as="h2">{issue.title}</Heading>
        <Flex className="space-x-2 " my="2">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <IssueDetailActions issue={issue} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
