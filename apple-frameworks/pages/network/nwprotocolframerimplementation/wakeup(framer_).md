> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframerimplementation/wakeup(framer:)](https://developer.apple.com/documentation/network/nwprotocolframerimplementation/wakeup(framer:))

# wakeup(framer:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Delivers a scheduled wakeup event.

## Declaration

```swift
func wakeup(framer: NWProtocolFramer.Instance)
```

## See Also

### Related Documentation

- [scheduleWakeup(wakeupTime:)](../nwprotocolframer/instance/schedulewakeup%28wakeuptime_%29.md): Requests that [wakeup(framer:)](wakeup%28framer_%29.md) be called on your protocol at a specific time in the future.

### Handling Instance Lifetime

- [init(framer:)](init%28framer_%29.md): Initializes your custom framing protocol for use in one connection attempt.
- [start(framer:)](start%28framer_%29.md): Requests that your protocol set up its state and begin a handshake, if necessary.
- [NWProtocolFramer.StartResult](../nwprotocolframer/startresult.md): Results that you send to indicate the disposition of your protocol after receiving the call to start.
- [stop(framer:)](stop%28framer_%29.md): Requests that your protocol send any final messages to close the connection.
- [cleanup(framer:)](cleanup%28framer_%29.md): Indicates that your protocol should clean up all allocations before being deallocated.
- [label](label.md): A label defined by your custom protocol for use in debugging.
