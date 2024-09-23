/* eslint-disable react/jsx-key */
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

import Container from "@/src/components/UI/container";
import CardSkeleton from "@/src/components/UI/CardSkeleton/CardSkeleton";

const loading = () => {
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-3">
        {/* Old Code */}
        {/* {posts.map((post) => (
          <p>{post.title}</p>
        ))} */}
        {[...Array(9)].map(() => (
          <CardSkeleton key={Array.length} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default loading;
