> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicediscoveryextension/dddiscoveryextensionconfigurationprotocol

# DDDiscoveryExtensionConfigurationProtocol

**Framework:** DeviceDiscoveryExtension  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst · macOS 13.0+ · visionOS

A specification that provides a communication channel between the extension and the framework.

## Declaration

```swift
protocol DDDiscoveryExtensionConfigurationProtocol : AppExtensionConfiguration
```

<a id="overview"></a>

## Overview

The `DDDiscoveryExtensionConfiguration` class adopts this protocol. For an example, see `Appex.swift` in [Discovering a third-party media-streaming device](discovering-a-third-party-media-streaming-device.md).

## Relationships

### Inherits From

- [AppExtensionConfiguration](../extensionfoundation/appextensionconfiguration.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Extension

- [DDDiscoveryExtension](dddiscoveryextension.md): A specification that enables the framework to start and stop the extension’s discovery process.
- [DDDiscoverySession](dddiscoverysession.md): An object that relays device discovery events from the extension to the system.
