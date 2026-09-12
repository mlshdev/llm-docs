> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/newconnectiongrouphandler](https://developer.apple.com/documentation/network/nwlistener/newconnectiongrouphandler)

# newConnectionGroupHandler

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
@preconcurrency final var newConnectionGroupHandler: (@Sendable (NWConnectionGroup) -> Void)? { get set }
```
