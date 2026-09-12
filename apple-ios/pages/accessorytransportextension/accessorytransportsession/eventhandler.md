> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportsession/eventhandler](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/eventhandler)

# AccessoryTransportSession.EventHandler

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 26.2+

A protocol that defines methods for handling transport session events.

## Declaration

```swift
protocol EventHandler
```

<a id="overview"></a>

## Overview

Implement this protocol to respond to data events and session invalidation in your transport extension.

## Topics

### Handling data events

- [dataEventHandler(event:)](eventhandler/dataeventhandler%28event_%29.md): Deprecated. Handles events that address incoming data destined for the accessory.
- [messageReceived(\_:completion:)](eventhandler/messagereceived%28__completion_%29.md): Handles incoming messages for transmission to the accessory.

### Handling the session life cycle

- [invalidationHandler(error:)](eventhandler/invalidationhandler%28error_%29.md): Deprecated. Handles session invalidation.

### Instance Methods

- [sessionInvalidated(error:)](eventhandler/sessioninvalidated%28error_%29.md): Handles session invalidation.

## See Also

### Handling session events

- [AccessoryTransportSession.DataEvent](dataevent.md): Deprecated. An enumeration of data events that the transport extension receives.
