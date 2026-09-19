> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/dataevent

# AccessoryTransportSession.DataEvent

**Framework:** Accessory Transport Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ (deprecated in 26.5)

An enumeration of data events that the transport extension receives.

> TransportMessage

## Declaration

```swift
enum DataEvent
```

<a id="overview"></a>

## Overview

The [AccessoryTransportSession.EventHandler](eventhandler.md) protocol’s [dataEventHandler(event:)](eventhandler/dataeventhandler%28event_%29.md) method receives events of this type.

## See Also

### Handling session events

- [AccessoryTransportSession.EventHandler](eventhandler.md): A protocol that defines methods for handling transport session events.
