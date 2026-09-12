> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportsession](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession)

# AccessoryTransportSession

**Framework:** Accessory Transport Extension  
**Kind:** Class  
**Availability:** iOS 26.2+

A class that manages a transport session between the extension and the system.

## Declaration

```swift
class AccessoryTransportSession
```

<a id="overview"></a>

## Overview

The [AccessoryTransportAppExtension](accessorytransportappextension.md) protocol’s [accept(sessionRequest:)](accessorytransportappextension/accept%28sessionrequest_%29.md) method receives a [AccessoryTransportSession.Request](accessorytransportsession/request.md) object containing an instance of this class.

## Topics

### Managing session requests

- [AccessoryTransportSession.Request](accessorytransportsession/request.md): An incoming session request that your extension accepts or rejects.

### Handling session events

- [AccessoryTransportSession.EventHandler](accessorytransportsession/eventhandler.md): A protocol that defines methods for handling transport session events.
- [AccessoryTransportSession.DataEvent](accessorytransportsession/dataevent.md): Deprecated. An enumeration of data events that the transport extension receives.

### Managing the session life cycle

- [cancel(error:)](accessorytransportsession/cancel%28error_%29.md): Cancels the session.

### Accessing session properties

- [description](accessorytransportsession/description.md): A string that describes the transport session.

### Sending data

- [sendMessageToDataProvider(\_:)](accessorytransportsession/sendmessagetodataprovider%28__%29.md): Sends a message to the data provider extension.

### Handling errors

- [AccessoryTransportSession.Error](accessorytransportsession/error.md): Errors that can occur with an accessory transport session.

### Determining the communication method

- [transport](accessorytransportsession/transport.md): A transport method that the session uses to communicate with the accessory.
- [transportStateRestoreIdentifier](accessorytransportsession/transportstaterestoreidentifier.md): An optional identifier for restoring transport state across sessions.
- [pushToken](accessorytransportsession/pushtoken.md): A token that identifies the iOS device to the Apple Push Notification service for routing accessory responses over the internet.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)

## See Also

### Wi-Fi network sharing

- [AccessoryTransportAppExtension](accessorytransportappextension.md): A protocol for an extension that transmits data to an accessory you develop.
- [AccessoryTransportExtensionConfiguration](accessorytransportextensionconfiguration.md): An interface that enables you to configure and manage communication between your extension and the system.
- [Wi-Fi Infrastructure](../wifiinfrastructure.md): Share Wi-Fi network credentials securely between devices and connected accessories.
