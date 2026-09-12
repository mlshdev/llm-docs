> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession/init(machservice:targetqueue:options:requirement:cancellationhandler:)](https://developer.apple.com/documentation/xpc/xpcsession/init(machservice:targetqueue:options:requirement:cancellationhandler:))

# init(machService:targetQueue:options:requirement:cancellationHandler:)

**Framework:** XPC  
**Kind:** Initializer  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```swift
@preconcurrency convenience init(machService: String, targetQueue: DispatchQueue? = nil, options: XPCSession.InitializationOptions = .none, requirement: XPCPeerRequirement, cancellationHandler: (@Sendable (XPCRichError) -> Void)? = nil) throws
```
