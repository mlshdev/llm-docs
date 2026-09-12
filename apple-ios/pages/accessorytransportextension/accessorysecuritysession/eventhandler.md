> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorysecuritysession/eventhandler](https://developer.apple.com/documentation/accessorytransportextension/accessorysecuritysession/eventhandler)

# AccessorySecuritySession.EventHandler

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 26.5+

A protocol that defines methods for handling security session events.

## Declaration

```swift
protocol EventHandler
```

## Mentioned In

- [Receiving iOS notifications on an accessory](../receiving-ios-notifications-on-an-accessory.md)

<a id="overview"></a>

## Overview

Implement this protocol to respond to key exchange messages and session invalidation during the cryptographic key exchange process.

## Topics

### Handling security messages

- [messageReceived(\_:completion:)](eventhandler/messagereceived%28__completion_%29.md): Handles incoming key material from the system during key exchange.

### Handling session life cycle

- [sessionInvalidated(error:)](eventhandler/sessioninvalidated%28error_%29.md): Handles session invalidation.

## See Also

### Handling session events

- [AccessorySecuritySession.Error](error.md): An error that occurs during accessory security-session operations.
