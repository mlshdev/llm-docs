> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpcsession/init(xpcservice:targetqueue:options:requirement:incomingmessagehandler:cancellationhandler:)-osu4

# init(xpcService:targetQueue:options:requirement:incomingMessageHandler:cancellationHandler:)

**Framework:** XPC  
**Kind:** Initializer  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```swift
@preconcurrency convenience init<Message>(xpcService: String, targetQueue: DispatchQueue? = nil, options: XPCSession.InitializationOptions = .none, requirement: XPCPeerRequirement, incomingMessageHandler: (@Sendable (Message) -> (any Encodable)?)? = nil, cancellationHandler: (@Sendable (XPCRichError) -> Void)? = nil) throws where Message : Decodable
```
