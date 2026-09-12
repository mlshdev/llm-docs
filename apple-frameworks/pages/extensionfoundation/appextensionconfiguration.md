> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionconfiguration](https://developer.apple.com/documentation/extensionfoundation/appextensionconfiguration)

# AppExtensionConfiguration

**Framework:** ExtensionFoundation  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 9.0+

An interface you use to configure the XPC connection in your app extension.

## Declaration

```swift
@MainActor @preconcurrency protocol AppExtensionConfiguration : Sendable
```

## Mentioned In

- [Building an app extension to support a host app](building-an-app-extension-to-support-a-host-app.md)

<a id="overview"></a>

## Overview

Adopt this protocol in a custom type, and use that type to finalize the XPC connection to the host app. The host app tries to create an XPC connection to your app extension shortly after launching it. The system directs that connection request to the code in your configuration object. Use your code to provide the host with the information it needs to communicate with your app extension.

This protocol supports app extensions that don’t offer any custom UI. If your app extension provides custom UI, instead use the  [AppExtensionSceneConfiguration](../extensionkit/appextensionsceneconfiguration.md) type from [ExtensionKit](../extensionkit.md).

## Topics

### Accepting a connection to the host app

- [accept(connection:)](appextensionconfiguration/accept%28connection_%29.md): Returns a Boolean value that indicates whether you accept an incoming connection request from the host app.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [ConnectionHandler](connectionhandler.md)

## See Also

### App-extension setup

- [Building an app extension to support a host app](building-an-app-extension-to-support-a-host-app.md): Create an app extension to perform tasks in a separate process from a host app.
- [AppExtension](appextension.md): An interface you use to declare the content, structure, and behavior of an app extension.
- [ConnectionHandler](connectionhandler.md): A type that contains a custom closure that handles incoming XPC connections.
