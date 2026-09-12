> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolip/ecn](https://developer.apple.com/documentation/network/nwprotocolip/ecn)

# NWProtocolIP.ECN

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Flag values for Explicit Congestion Notifications in IP packets.

## Declaration

```swift
enum ECN
```

## Topics

### ECN Flags

- [NWProtocolIP.ECN.nonECT](ecn/nonect.md): Non-ECN Capable Transport.
- [NWProtocolIP.ECN.ect0](ecn/ect0.md): ECN Capable Transport (flag 0).
- [NWProtocolIP.ECN.ect1](ecn/ect1.md): ECN Capable Transport (flag 1).
- [NWProtocolIP.ECN.ce](ecn/ce.md): Congestion Experienced.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Sending IP Options

- [init()](metadata/init%28%29.md): Initializes an IP packet configuration with default settings.
- [ecn](metadata/ecn.md): A specific Explicit Congestion Notification flag value to set on an IP packet.
- [serviceClass](metadata/serviceclass.md): A specific service class to mark on an IP packet.
