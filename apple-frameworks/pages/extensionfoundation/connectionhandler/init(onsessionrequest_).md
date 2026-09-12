> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/connectionhandler/init(onsessionrequest:)](https://developer.apple.com/documentation/extensionfoundation/connectionhandler/init(onsessionrequest:))

# init(onSessionRequest:)

**Framework:** ExtensionFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Initializes the connection handler with a closure that accepts an XPC session.

## Declaration

```swift
@MainActor @preconcurrency init(onSessionRequest requestHandler: @escaping @Sendable (XPCListener.IncomingSessionRequest) -> XPCListener.IncomingSessionRequest.Decision)
```

<a id="discussion"></a>

## Discussion

Use this initializer if your app extension communicates with the host app using types from the [XPC](../../xpc.md) framework.

## See Also

### Initializing the connection handler

- [init(onConnection:)](init%28onconnection_%29.md): Initializes the connection handler with a closure that accepts a Foundation XPC object.
