> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorysecuritysession](https://developer.apple.com/documentation/accessorytransportextension/accessorysecuritysession)

# AccessorySecuritySession

**Framework:** Accessory Transport Extension  
**Kind:** Class  
**Availability:** iOS 26.5+

A class that manages a security session between the extension and the system.

## Declaration

```swift
class AccessorySecuritySession
```

## Mentioned In

- [Receiving iOS notifications on an accessory](receiving-ios-notifications-on-an-accessory.md)

<a id="overview"></a>

## Overview

The security session handles a key exchange process (see `AccessorySecurity/Event`) that establishes encrypted communication with your accessory.

## Topics

### Managing session requests

- [AccessorySecuritySession.Request](accessorysecuritysession/request.md): A structure that represents an incoming security session request.

### Handling session events

- [AccessorySecuritySession.EventHandler](accessorysecuritysession/eventhandler.md): A protocol that defines methods for handling security session events.
- [AccessorySecuritySession.Error](accessorysecuritysession/error.md): An error that occurs during accessory security-session operations.

### Accessing session properties

- [description](accessorysecuritysession/description.md): A string that describes the security session.

### Managing the session life cycle

- [sendSecurityMessage(\_:)](accessorysecuritysession/sendsecuritymessage%28__%29.md): Sends a security message to the system.
- [cancel(error:)](accessorysecuritysession/cancel%28error_%29.md): Cancels the security session.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)

## See Also

### Data and sessions

- [AccessoryFeature](accessoryfeature.md): A protocol that defines a capability for an accessory data provider extension.
- [AccessoryMessage](accessorymessage.md): A structure that represents a message to send to an accessory.
- [TransportMessage](transportmessage.md): A structure that represents a message for transmission between the system and an accessory.
- [SecurityMessage](securitymessage.md): A structure that carries key material for a secure channel between the system and an accessory.
- [AccessoryTransport](accessorytransport.md): Transport methods for communicating with an accessory.
