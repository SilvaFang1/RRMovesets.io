import { Box } from "@radix-ui/themes";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import path from "path";
import fs from "fs";

const Page = async () => {
  const fullPath = path.resolve(process.cwd(), "README.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const file = await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeSanitize) // Sanitize HTML input
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(fileContents);
  const html = String(file);

  // Center the content both horizontally and vertically with CSS
  const centerStyle = {
    display: 'block',      // Use 'block' display property
    width: '100%',         // Make the container take up the full width
    textAlign: 'center',   // Center text horizontally
    position: 'relative',  // Position the container relatively
    top: '50%',            // Center vertically (relative to its container)
    transform: 'translateY(-50%)', // Correct for vertical centering
    minHeight: '100vh',     // Ensure the container takes up at least the full viewport height
  };

  return (
    <Box className='py-3' style={centerStyle}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  );
};

export default Page;
