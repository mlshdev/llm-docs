> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcpeerhandler/handlecancellation(error:)-2rady](https://developer.apple.com/documentation/xpc/xpcpeerhandler/handlecancellation(error:)-2rady)

# handleCancellation(error:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A closure the system invokes when it cancels a session with a client.

## Declaration

```swift
func handleCancellation(error: XPCRichError)
```

## Parameters

- `error`: A description of the reason for the session’s cancellation.
