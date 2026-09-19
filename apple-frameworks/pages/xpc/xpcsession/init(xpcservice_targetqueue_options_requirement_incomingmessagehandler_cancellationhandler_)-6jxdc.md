> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpcsession/init(xpcservice:targetqueue:options:requirement:incomingmessagehandler:cancellationhandler:)-6jxdc

# init(xpcService:targetQueue:options:requirement:incomingMessageHandler:cancellationHandler:)

**Framework:** XPC  
**Kind:** Initializer  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```swift
@preconcurrency convenience init(xpcService: String, targetQueue: DispatchQueue? = nil, options: XPCSession.InitializationOptions = .none, requirement: XPCPeerRequirement, incomingMessageHandler: (@Sendable (XPCReceivedMessage) -> (any Encodable)?)? = nil, cancellationHandler: (@Sendable (XPCRichError) -> Void)? = nil) throws
```
