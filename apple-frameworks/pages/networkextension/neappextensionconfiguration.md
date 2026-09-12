> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappextensionconfiguration](https://developer.apple.com/documentation/networkextension/neappextensionconfiguration)

# NEAppExtensionConfiguration

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A class that defines configuration options for use in NetworkExtension app extensions.

## Declaration

```swift
@MainActor @preconcurrency class NEAppExtensionConfiguration
```

<a id="overview"></a>

## Overview

This class conforms to `NEAppExtensionConfigurationProtocol` and [AppExtensionConfiguration](../extensionfoundation/appextensionconfiguration.md) from the [ExtensionFoundation](../extensionfoundation.md) framework. It exists only for use by the framework; you don’t need to use its methods and properties directly.

## Topics

### Communicating over XPC

- [accept(connection:)](neappextensionconfiguration/accept%28connection_%29.md): Accepts incoming XPC connections from the host process.

## Relationships

### Inherited By

- [NEHotspotAuthenticationProviderConfiguration](nehotspotauthenticationproviderconfiguration.md)
- [NEHotspotEvaluationProviderConfiguration](nehotspotevaluationproviderconfiguration.md)
- [NEURLFilterControlProviderConfiguration](neurlfiltercontrolproviderconfiguration.md)

### Conforms To

- [AppExtensionConfiguration](../extensionfoundation/appextensionconfiguration.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
