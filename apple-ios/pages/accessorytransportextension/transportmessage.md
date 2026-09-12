> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/transportmessage](https://developer.apple.com/documentation/accessorytransportextension/transportmessage)

# TransportMessage

**Framework:** Accessory Transport Extension  
**Kind:** Structure  
**Availability:** iOS 26.5+

A structure that represents a message for transmission between the system and an accessory.

## Declaration

```swift
struct TransportMessage
```

<a id="overview"></a>

## Overview

The [AccessoryTransportSession.EventHandler](accessorytransportsession/eventhandler.md) protocol’s [messageReceived(\_:completion:)](accessorytransportsession/eventhandler/messagereceived%28__completion_%29.md) method receives messages of this type from the system. Use the [sendMessageToDataProvider(\_:)](accessorytransportsession/sendmessagetodataprovider%28__%29.md) method to send messages from your accessory back to the data provider extension.

<a id="Correlate-messages-with-capabilities"></a>

## Correlate messages with capabilities

The [sessionID](transportmessage/sessionid.md) property identifies the capability session to which the message belongs. The system generates this identifier at feature enrollment time, and the value is fixed while the accessory remains paired through AccessorySetupKit.

## Topics

### Creating a transport message

- [init(sessionID:data:)](transportmessage/init%28sessionid_data_%29.md): Initializes a transport message for a specific capability session.

### Accessing message content

- [data](transportmessage/data.md): A data object that contains the message content.
- [sessionID](transportmessage/sessionid.md): A unique identifier for the message’s capability session.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data and sessions

- [AccessoryFeature](accessoryfeature.md): A protocol that defines a capability for an accessory data provider extension.
- [AccessoryMessage](accessorymessage.md): A structure that represents a message to send to an accessory.
- [AccessorySecuritySession](accessorysecuritysession.md): A class that manages a security session between the extension and the system.
- [SecurityMessage](securitymessage.md): A structure that carries key material for a secure channel between the system and an accessory.
- [AccessoryTransport](accessorytransport.md): Transport methods for communicating with an accessory.
