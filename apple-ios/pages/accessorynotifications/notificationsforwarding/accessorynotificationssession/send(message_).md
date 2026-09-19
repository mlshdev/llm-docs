> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationssession/send(message:)

# send(message:)

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Sends a message to the paired accessory.

## Declaration

```swift
func send(message: AccessoryMessage) async throws
```

## Parameters

- `message`: The message to send to the accessory.

<a id="discussion"></a>

## Discussion

Create an [AccessoryMessage](../../../accessorytransportextension/accessorymessage.md) containing your notification data and send it to your accessory. The system encrypts the message before delivering it to the transport extension for transmission.
