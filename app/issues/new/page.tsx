"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-2">
      <TextField.Root placeholder="title"></TextField.Root>
      <TextArea placeholder="description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
