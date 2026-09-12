> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransport](https://developer.apple.com/documentation/accessorytransportextension/accessorytransport)

# AccessoryTransport

**Framework:** Accessory Transport Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.5+

Transport methods for communicating with an accessory.

## Declaration

```swift
enum AccessoryTransport
```

<a id="overview"></a>

## Overview

The system selects the best available transport for each message by following this order: Bluetooth (if connected), local network (if available), then internet (if available).

## Topics

### Identifying transport types

- [AccessoryTransport.bluetooth](accessorytransport/bluetooth.md): A transport method that uses Bluetooth for data delivery.
- [AccessoryTransport.internet](accessorytransport/internet.md): A transport method that uses the internet for data delivery.
- [AccessoryTransport.localNetwork](accessorytransport/localnetwork.md): A transport method that uses the local network for data delivery.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data and sessions

- [AccessoryFeature](accessoryfeature.md): A protocol that defines a capability for an accessory data provider extension.
- [AccessoryMessage](accessorymessage.md): A structure that represents a message to send to an accessory.
- [AccessorySecuritySession](accessorysecuritysession.md): A class that manages a security session between the extension and the system.
- [TransportMessage](transportmessage.md): A structure that represents a message for transmission between the system and an accessory.
- [SecurityMessage](securitymessage.md): A structure that carries key material for a secure channel between the system and an accessory.
