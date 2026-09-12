> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/discovering-a-third-party-media-streaming-device](https://developer.apple.com/documentation/devicediscoveryextension/discovering-a-third-party-media-streaming-device)

# Discovering a third-party media-streaming device

**Interface languages:** Swift, Objective-C

**Framework:** DeviceDiscoveryExtension  
**Kind:** Sample Code  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · Xcode 16.0+

Build an extension that streams media to a server app in iOS or macOS.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC22 session [10096: What’s new in privacy](https://developer.apple.com/wwdc22/10096).

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

Run either the macOS or iOS server target to emulate a third-party media-streaming receiver. Set the client scheme’s run destination to an iOS 16 device. Run the client and select the emulated device from the system device-picker UI.

## See Also

### Essentials

- [Media Device Discovery Extension](../bundleresources/entitlements/com.apple.developer.media-device-discovery-extension.md): Deprecated. An entitlement for an app extension that adds a specific third-party media receiver to a system device-picker UI.
