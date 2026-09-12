> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolquic/options/isdatagram](https://developer.apple.com/documentation/network/nwprotocolquic/options/isdatagram)

# isDatagram

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean that indicates that this is a QUIC datagram flow, not a stream of bytes.

## Declaration

```swift
var isDatagram: Bool { get set }
```

## See Also

### Customizing Stream Options

- [direction](direction-swift.property.md): The direction of the QUIC stream.
- [NWProtocolQUIC.Options.Direction](direction-swift.enum.md): A directionality of a QUIC stream.
