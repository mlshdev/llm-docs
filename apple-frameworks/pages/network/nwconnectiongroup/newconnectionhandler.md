> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/newconnectionhandler](https://developer.apple.com/documentation/network/nwconnectiongroup/newconnectionhandler)

# newConnectionHandler

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
@preconcurrency final var newConnectionHandler: (@Sendable (NWConnection) -> Void)? { get set }
```
