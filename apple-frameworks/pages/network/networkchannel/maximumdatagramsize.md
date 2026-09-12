> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkchannel/maximumdatagramsize](https://developer.apple.com/documentation/network/networkchannel/maximumdatagramsize)

# maximumDatagramSize

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Retrieve the maximum datagram size that can be sent on the channel. Any datagrams sent should be less than or equal to this size.

## Declaration

```swift
var maximumDatagramSize: Int { get }
```
