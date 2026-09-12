> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport](https://developer.apple.com/documentation/mattersupport)

# MatterSupport

**Framework:** MatterSupport  
**Kind:** Framework  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 14.0+ · macOS 14.0+ · visionOS 1.0+

Coordinate and control compatible smart home accessories.

<a id="Overview"></a>

## Overview

Matter is a smart home connectivity standard that gives your app the ability to control devices from a wide variety of manufacturers and across platforms. Adopt this framework in your app to add compatible devices to your ecosystem, then use [Matter](matter.md) to commission and control them.

> **Important**

> Calls to this framework return errors to Mac apps built with Mac Catalyst.

## Topics

### Adding a device

- [Adding Matter support to your ecosystem](mattersupport/adding-matter-support-to-your-ecosystem.md): Allow people to add Matter accessories to your platform.
- [MatterAddDeviceRequest](mattersupport/matteradddevicerequest.md): A request that adds and sets up a device into an ecosystem.
- [MatterAddDeviceExtensionRequestHandler](mattersupport/matteradddeviceextensionrequesthandler.md): The object that handles configuration and commissioning of a device into an ecosystem.
