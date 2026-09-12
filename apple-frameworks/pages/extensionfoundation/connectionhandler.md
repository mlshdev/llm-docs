> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/connectionhandler](https://developer.apple.com/documentation/extensionfoundation/connectionhandler)

# ConnectionHandler

**Framework:** ExtensionFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 1.1+

A type that contains a custom closure that handles incoming XPC connections.

## Declaration

```swift
@MainActor @preconcurrency struct ConnectionHandler
```

## Mentioned In

- [Building an app extension to support a host app](building-an-app-extension-to-support-a-host-app.md)

<a id="overview"></a>

## Overview

This type manages a closure in your app extension that accepts incoming XPC connections from a host app. Create an instance of this structure and initialize it with a closure for the type of XPC connection the host app uses with app extensions. Assign the instance you created to the [configuration](appextension/configuration-swift.property.md) property of your custom [AppExtension](appextension.md) type. When the host app tries to open a connection, the system runs your closure to accept that connection.

Use this type to establish connections with either the [Foundation](../foundation.md) or [XPC](../xpc.md) framework.

## Topics

### Initializing the connection handler

- [init(onConnection:)](connectionhandler/init%28onconnection_%29.md): Initializes the connection handler with a closure that accepts a Foundation XPC object.
- [init(onSessionRequest:)](connectionhandler/init%28onsessionrequest_%29.md): Initializes the connection handler with a closure that accepts an XPC session.

## Relationships

### Conforms To

- [AppExtensionConfiguration](appextensionconfiguration.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App-extension setup

- [Building an app extension to support a host app](building-an-app-extension-to-support-a-host-app.md): Create an app extension to perform tasks in a separate process from a host app.
- [AppExtension](appextension.md): An interface you use to declare the content, structure, and behavior of an app extension.
- [AppExtensionConfiguration](appextensionconfiguration.md): An interface you use to configure the XPC connection in your app extension.
