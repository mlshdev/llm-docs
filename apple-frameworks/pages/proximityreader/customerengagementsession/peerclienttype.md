> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/peerclienttype](https://developer.apple.com/documentation/proximityreader/customerengagementsession/peerclienttype)

# CustomerEngagementSession.PeerClientType

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A value that indicates the type of connected peer client.

## Declaration

```swift
enum PeerClientType
```

## Topics

### Enumeration Cases

- [CustomerEngagementSession.PeerClientType.localWireless](peerclienttype/localwireless.md): This case indicates a peer client connection using a direct local wireless connection.
- [CustomerEngagementSession.PeerClientType.none](peerclienttype/none.md): This case indicates no peer client connection.
- [CustomerEngagementSession.PeerClientType.web](peerclienttype/web.md): This case indicates a peer web application client connection via a server relay.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting customer configuration

- [CustomerEngagementSession.CustomerConfiguration](customerconfiguration-swift.struct.md): A structure that contains configuration details for the connected customer device.
- [customerConfiguration](customerconfiguration-swift.property.md): A structure containing configuration information of the customer device.
