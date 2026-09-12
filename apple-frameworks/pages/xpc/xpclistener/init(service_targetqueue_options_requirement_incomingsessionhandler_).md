> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpclistener/init(service:targetqueue:options:requirement:incomingsessionhandler:)](https://developer.apple.com/documentation/xpc/xpclistener/init(service:targetqueue:options:requirement:incomingsessionhandler:))

# init(service:targetQueue:options:requirement:incomingSessionHandler:)

**Framework:** XPC  
**Kind:** Initializer  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Creates a listener with the service defined by the provided name, and requires that the session peer has the specified requirement.

## Declaration

```swift
@preconcurrency convenience init(service: String, targetQueue: DispatchQueue? = nil, options: XPCListener.InitializationOptions = .none, requirement: XPCPeerRequirement, incomingSessionHandler: @escaping @Sendable (XPCListener.IncomingSessionRequest) -> XPCListener.IncomingSessionRequest.Decision) throws
```

<a id="discussion"></a>

## Discussion

- service: The Mach service or XPC Service name to create the listener with.
- requirement: The requirement the peer must have

> **Note**

> For a listener, requests that do not satisfy the requirement are dropped.
