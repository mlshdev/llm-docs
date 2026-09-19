> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwprotocolframerimplementation/label

# label

**Framework:** Network  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A label defined by your custom protocol for use in debugging.

## Declaration

```swift
static var label: String { get }
```

## See Also

### Handling Instance Lifetime

- [init(framer:)](init%28framer_%29.md): Initializes your custom framing protocol for use in one connection attempt.
- [start(framer:)](start%28framer_%29.md): Requests that your protocol set up its state and begin a handshake, if necessary.
- [NWProtocolFramer.StartResult](../nwprotocolframer/startresult.md): Results that you send to indicate the disposition of your protocol after receiving the call to start.
- [wakeup(framer:)](wakeup%28framer_%29.md): Delivers a scheduled wakeup event.
- [stop(framer:)](stop%28framer_%29.md): Requests that your protocol send any final messages to close the connection.
- [cleanup(framer:)](cleanup%28framer_%29.md): Indicates that your protocol should clean up all allocations before being deallocated.
