> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/connectionhandler/init(onconnection:)](https://developer.apple.com/documentation/extensionfoundation/connectionhandler/init(onconnection:))

# init(onConnection:)

**Framework:** ExtensionFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 1.1+

Initializes the connection handler with a closure that accepts a Foundation XPC object.

## Declaration

```swift
@MainActor @preconcurrency init(onConnection connectionHandler: @escaping @Sendable (NSXPCConnection) -> Bool)
```

<a id="discussion"></a>

## Discussion

Use this initializer if your app extension communicates with the host app using [Foundation XPC types](../../foundation/xpc.md).

## See Also

### Initializing the connection handler

- [init(onSessionRequest:)](init%28onsessionrequest_%29.md): Initializes the connection handler with a closure that accepts an XPC session.
