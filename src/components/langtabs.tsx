import React, { Children } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function LangTabs({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const childrenArray = Children.toArray(children)
  const KotlinCode = childrenArray[0]
  const JavaCode = childrenArray[1]
  const JavaScriptCode = childrenArray[2]
  const PythonCode = childrenArray[3]

  return (
    <Tabs groupId="lang" queryString>
      {KotlinCode && <TabItem value="kotlin" label="Kotlin" default>{KotlinCode}</TabItem>}
      {JavaCode && <TabItem value="java" label="Java">{JavaCode}</TabItem>}
      {JavaScriptCode && <TabItem value="js" label="JavaScript">{JavaScriptCode}</TabItem>}
      {PythonCode && <TabItem value="python" label="Python">{PythonCode}</TabItem>}
    </Tabs>
  );
}
