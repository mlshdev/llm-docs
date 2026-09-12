> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/customerconfiguration-swift.struct](https://developer.apple.com/documentation/proximityreader/customerengagementsession/customerconfiguration-swift.struct)

# CustomerEngagementSession.CustomerConfiguration

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A structure that contains configuration details for the connected customer device.

## Declaration

```swift
struct CustomerConfiguration
```

<a id="overview"></a>

## Overview

This is available on the [CustomerEngagementSession.Event.ready](event/ready.md) event after the merchant device establishes the peer connection with the customer’s device.

## Topics

### Instance Properties

- [clientType](customerconfiguration-swift.struct/clienttype.md): An enum value that indicates the type of connected peer client.
- [locale](customerconfiguration-swift.struct/locale.md): The customer’s current locale.
- [sessionToken](customerconfiguration-swift.struct/sessiontoken.md): The session token from the customer’s device.
- [version](customerconfiguration-swift.struct/version.md): The engagement schema version of the connected customer device.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting customer configuration

- [customerConfiguration](customerconfiguration-swift.property.md): A structure containing configuration information of the customer device.
- [CustomerEngagementSession.PeerClientType](peerclienttype.md): A value that indicates the type of connected peer client.
