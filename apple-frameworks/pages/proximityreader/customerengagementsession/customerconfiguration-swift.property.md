> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/customerconfiguration-swift.property](https://developer.apple.com/documentation/proximityreader/customerengagementsession/customerconfiguration-swift.property)

# customerConfiguration

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A structure containing configuration information of the customer device.

## Declaration

```swift
final var customerConfiguration: CustomerEngagementSession.CustomerConfiguration? { get }
```

<a id="discussion"></a>

## Discussion

The value is available after the [CustomerEngagementSession.Event.ready](event/ready.md) event.

## See Also

### Getting customer configuration

- [CustomerEngagementSession.CustomerConfiguration](customerconfiguration-swift.struct.md): A structure that contains configuration details for the connected customer device.
- [CustomerEngagementSession.PeerClientType](peerclienttype.md): A value that indicates the type of connected peer client.
