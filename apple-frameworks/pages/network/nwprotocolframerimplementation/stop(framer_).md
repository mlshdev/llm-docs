> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframerimplementation/stop(framer:)](https://developer.apple.com/documentation/network/nwprotocolframerimplementation/stop(framer:))

# stop(framer:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Requests that your protocol send any final messages to close the connection.

## Declaration

```swift
func stop(framer: NWProtocolFramer.Instance) -> Bool
```

## See Also

### Handling Instance Lifetime

- [init(framer:)](init%28framer_%29.md): Initializes your custom framing protocol for use in one connection attempt.
- [start(framer:)](start%28framer_%29.md): Requests that your protocol set up its state and begin a handshake, if necessary.
- [NWProtocolFramer.StartResult](../nwprotocolframer/startresult.md): Results that you send to indicate the disposition of your protocol after receiving the call to start.
- [wakeup(framer:)](wakeup%28framer_%29.md): Delivers a scheduled wakeup event.
- [cleanup(framer:)](cleanup%28framer_%29.md): Indicates that your protocol should clean up all allocations before being deallocated.
- [label](label.md): A label defined by your custom protocol for use in debugging.
