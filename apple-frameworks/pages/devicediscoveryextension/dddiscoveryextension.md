> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddiscoveryextension](https://developer.apple.com/documentation/devicediscoveryextension/dddiscoveryextension)

# DDDiscoveryExtension

**Framework:** DeviceDiscoveryExtension  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst · macOS 13.0+ · visionOS

A specification that enables the framework to start and stop the extension’s discovery process.

## Declaration

```swift
protocol DDDiscoveryExtension : AppExtension
```

<a id="overview"></a>

## Overview

Your extension adopts this protocol as the primary entry and exit points for device discovery.

The system calls your extension’s [startDiscovery(session:)](dddiscoveryextension/startdiscovery%28session_%29.md) when [AVRoutePickerView](../avkit/avroutepickerview.md) displays so your extension can include a specific third-party device in the picker. When the picker UI dismisses or the user selects a device, the system calls your extension’s [stopDiscovery(session:)](dddiscoveryextension/stopdiscovery%28session_%29.md) implementation to instruct it to perform any cleanup.

## Topics

### Controlling discovery

- [startDiscovery(session:)](dddiscoveryextension/startdiscovery%28session_%29.md): Begins the extension’s device discovery process.
- [stopDiscovery(session:)](dddiscoveryextension/stopdiscovery%28session_%29.md): Ends the extension’s device discovery process.

### Observing state changes

- [didReceiveEvent(\_:)](dddiscoveryextension/didreceiveevent%28__%29.md): Provides a device event from the system to the extension.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)

## See Also

### Extension

- [DDDiscoverySession](dddiscoverysession.md): An object that relays device discovery events from the extension to the system.
- [DDDiscoveryExtensionConfigurationProtocol](dddiscoveryextensionconfigurationprotocol.md): A specification that provides a communication channel between the extension and the framework.
