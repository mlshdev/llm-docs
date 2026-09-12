> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolip/metadata/serviceclass](https://developer.apple.com/documentation/network/nwprotocolip/metadata/serviceclass)

# serviceClass

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A specific service class to mark on an IP packet.

## Declaration

```swift
var serviceClass: NWParameters.ServiceClass { get set }
```

## See Also

### Related Documentation

- [serviceClass](../../nwparameters/serviceclass-swift.property.md): The traffic characteristics network connections send and receive.

### Sending IP Options

- [init()](init%28%29.md): Initializes an IP packet configuration with default settings.
- [ecn](ecn.md): A specific Explicit Congestion Notification flag value to set on an IP packet.
- [NWProtocolIP.ECN](../ecn.md): Flag values for Explicit Congestion Notifications in IP packets.
