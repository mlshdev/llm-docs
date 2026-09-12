> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolframer/startresult/willmarkready](https://developer.apple.com/documentation/network/nwprotocolframer/startresult/willmarkready)

# NWProtocolFramer.StartResult.willMarkReady

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The protocol will perform a handshake, preventing the overall connection from becoming ready until [markReady()](../instance/markready%28%29.md) is called.

## Declaration

```swift
case willMarkReady
```

## See Also

### Related Documentation

- [markReady()](../instance/markready%28%29.md): Indicates to a connection that your protocol’s handshake is complete.

### Start Results

- [NWProtocolFramer.StartResult.ready](ready.md): The protocol is immediately ready to send and receive data.
