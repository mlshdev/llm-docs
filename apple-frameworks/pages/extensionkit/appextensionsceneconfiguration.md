> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/appextensionsceneconfiguration](https://developer.apple.com/documentation/extensionkit/appextensionsceneconfiguration)

# AppExtensionSceneConfiguration

**Framework:** ExtensionKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object you use to configure an app extension that provides a custom UI.

## Declaration

```swift
@MainActor @preconcurrency struct AppExtensionSceneConfiguration
```

<a id="overview"></a>

## Overview

Use this type to provide the configuration details for an [AppExtension](../extensionfoundation/appextension.md) type when the corresponding app extension provides a custom UI.

## Topics

### Creating the configuration

- [init(\_:)](appextensionsceneconfiguration/init%28__%29.md): Creates a scene configuration from a closure.
- [init(\_:configuration:)](appextensionsceneconfiguration/init%28__configuration_%29.md): Creates a scene configuration object from a closure and extension configuration.

### Accepting a connection to the host app

- [accept(connection:)](appextensionsceneconfiguration/accept%28connection_%29.md): A closure the framework calls when a host tries to connect to this extension.

## Relationships

### Conforms To

- [AppExtensionConfiguration](../extensionfoundation/appextensionconfiguration.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
