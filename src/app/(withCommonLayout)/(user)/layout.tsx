export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <h1> User Layouts</h1>
      <div className="">{children}</div>
    </section>
  );
}
