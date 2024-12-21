import React, { Children } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function OSTabs({
  children,
  hidden,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const showEmptyTabs = !hidden
  const childrenArray = Children.toArray(children)
  const WindowsInfo = childrenArray[0]
  const LinuxInfo = childrenArray[1] || (showEmptyTabs ? childrenArray[0] : undefined)
  const MacInfo = childrenArray[2] || (showEmptyTabs ? LinuxInfo : undefined)
  const AndroidInfo = childrenArray[3] || (showEmptyTabs ? LinuxInfo : undefined)
  const IOSInfo = childrenArray[4] || (showEmptyTabs ? LinuxInfo : undefined)

  return (
    <Tabs groupId="os" queryString>
      <TabItem value="windows" label="Windows" default>
        {WindowsInfo}
      </TabItem>
      {LinuxInfo && <TabItem value="linux" label="Linux">{LinuxInfo}</TabItem>}
      {MacInfo && <TabItem value="mac" label="Mac">{MacInfo}</TabItem>}
      {AndroidInfo && <TabItem value="android" label="Android">{AndroidInfo}</TabItem>}
      {IOSInfo && <TabItem value="ios" label="iOS">{IOSInfo}</TabItem>}
    </Tabs>
  );
}
