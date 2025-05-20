"use client";
import { Issue } from "@prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  issue: Issue;
}

const IssueDetailActions = ({ issue }: Props) => {
  return (
    <div>
      <Button>
        <Pencil2Icon />
        <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
      </Button>
    </div>
  );
};

export default IssueDetailActions;
