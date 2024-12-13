import React, { Children } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function OSTabs({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const childrenArray = Children.toArray(children)
  const WindowsInfo = childrenArray[0]
  const LinuxInfo = childrenArray[1] || childrenArray[0]
  const MacInfo = childrenArray[2] || LinuxInfo
  const AndroidInfo = childrenArray[3] || LinuxInfo
  const IOSInfo = childrenArray[4] || LinuxInfo

  return (
    <Tabs groupId="os" queryString>
      <TabItem value="windows" label="Windows" default>
        {WindowsInfo}
      </TabItem>
      <TabItem value="linux" label="Linux">
        {LinuxInfo}
      </TabItem>
      <TabItem value="mac" label="Mac">
        {MacInfo}
      </TabItem>
      <TabItem value="android" label="Android">
        {AndroidInfo}
      </TabItem>
      <TabItem value="ios" label="iOS">
        {IOSInfo}
      </TabItem>
    </Tabs>
  );
}
