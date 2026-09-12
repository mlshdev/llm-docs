> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolip/metadata/ecn](https://developer.apple.com/documentation/network/nwprotocolip/metadata/ecn)

# ecn

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A specific Explicit Congestion Notification flag value to set on an IP packet.

## Declaration

```swift
var ecn: NWProtocolIP.ECN { get set }
```

## See Also

### Sending IP Options

- [init()](init%28%29.md): Initializes an IP packet configuration with default settings.
- [NWProtocolIP.ECN](../ecn.md): Flag values for Explicit Congestion Notifications in IP packets.
- [serviceClass](serviceclass.md): A specific service class to mark on an IP packet.
