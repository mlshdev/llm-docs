> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorymessage](https://developer.apple.com/documentation/accessorytransportextension/accessorymessage)

# AccessoryMessage

**Framework:** Accessory Transport Extension  
**Kind:** Structure  
**Availability:** iOS 26.5+

A structure that represents a message to send to an accessory.

## Declaration

```swift
struct AccessoryMessage
```

## Mentioned In

- [Receiving iOS notifications on an accessory](receiving-ios-notifications-on-an-accessory.md)

<a id="overview"></a>

## Overview

Create accessory messages in your app’s [AccessoryDataProvider](accessorydataprovider.md) extension and send them using [send(message:)](../accessorynotifications/notificationsforwarding/accessorynotificationssession/send%28message_%29.md). The system encrypts the message before delivering it to the transport extension.

## Topics

### Creating messages

- [init(\_:)](accessorymessage/init%28__%29.md): Initializes an accessory message using a result builder closure.
- [AccessoryMessage.Builder](accessorymessage/builder.md): A builder that constructs accessory messages declaratively.

### Accessing message content

- [payloads](accessorymessage/payloads.md): An array of payload objects that comprise the message.
- [AccessoryMessage.Payload](accessorymessage/payload.md): A structure that represents a single data payload within an accessory message.

### Assessing outcomes

- [AccessoryMessage.Error](accessorymessage/error.md): An enumeration of errors that can occur during message transmission.
- [AccessoryMessage.Result](accessorymessage/result.md): An enumeration of results for message transmission.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data and sessions

- [AccessoryFeature](accessoryfeature.md): A protocol that defines a capability for an accessory data provider extension.
- [AccessorySecuritySession](accessorysecuritysession.md): A class that manages a security session between the extension and the system.
- [TransportMessage](transportmessage.md): A structure that represents a message for transmission between the system and an accessory.
- [SecurityMessage](securitymessage.md): A structure that carries key material for a secure channel between the system and an accessory.
- [AccessoryTransport](accessorytransport.md): Transport methods for communicating with an accessory.
