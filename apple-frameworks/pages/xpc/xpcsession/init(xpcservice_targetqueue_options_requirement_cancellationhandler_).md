> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession/init(xpcservice:targetqueue:options:requirement:cancellationhandler:)](https://developer.apple.com/documentation/xpc/xpcsession/init(xpcservice:targetqueue:options:requirement:cancellationhandler:))

# init(xpcService:targetQueue:options:requirement:cancellationHandler:)

**Framework:** XPC  
**Kind:** Initializer  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Creates a new session object representing a connection to the named service, and requires that the session peer has the specified requirement.

## Declaration

```swift
@preconcurrency convenience init(xpcService: String, targetQueue: DispatchQueue? = nil, options: XPCSession.InitializationOptions = .none, requirement: XPCPeerRequirement, cancellationHandler: (@Sendable (XPCRichError) -> Void)? = nil) throws
```

<a id="discussion"></a>

## Discussion

- requirement: The requirement the peer must have

> **Note**

> All messages received on this session will be checked to ensure that they come from a peer who satisfies the requirement. When a reply is expected on the session and the peer does not satisfy the requirement, the session will be canceled and user’s cancelation handler will be invoked with `XPCRichError` describing the code signing error.
