> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/startresult](https://developer.apple.com/documentation/network/nwprotocolframer/startresult)

# NWProtocolFramer.StartResult

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Results that you send to indicate the disposition of your protocol after receiving the call to start.

## Declaration

```swift
enum StartResult
```

## Topics

### Start Results

- [NWProtocolFramer.StartResult.ready](startresult/ready.md): The protocol is immediately ready to send and receive data.
- [NWProtocolFramer.StartResult.willMarkReady](startresult/willmarkready.md): The protocol will perform a handshake, preventing the overall connection from becoming ready until [markReady()](instance/markready%28%29.md) is called.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Handling Instance Lifetime

- [init(framer:)](../nwprotocolframerimplementation/init%28framer_%29.md): Initializes your custom framing protocol for use in one connection attempt.
- [start(framer:)](../nwprotocolframerimplementation/start%28framer_%29.md): Requests that your protocol set up its state and begin a handshake, if necessary.
- [wakeup(framer:)](../nwprotocolframerimplementation/wakeup%28framer_%29.md): Delivers a scheduled wakeup event.
- [stop(framer:)](../nwprotocolframerimplementation/stop%28framer_%29.md): Requests that your protocol send any final messages to close the connection.
- [cleanup(framer:)](../nwprotocolframerimplementation/cleanup%28framer_%29.md): Indicates that your protocol should clean up all allocations before being deallocated.
- [label](../nwprotocolframerimplementation/label.md): A label defined by your custom protocol for use in debugging.
