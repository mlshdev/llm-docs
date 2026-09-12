> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportsession/pushtoken](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/pushtoken)

# pushToken

**Framework:** Accessory Transport Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A token that identifies the iOS device to the Apple Push Notification service for routing accessory responses over the internet.

## Declaration

```swift
var pushToken: Data?
```

## Mentioned In

- [Forwarding notifications to your accessory using the internet transport type](../forwarding-notifications-to-your-accessory-using-the-internet-transport-type.md)

<a id="discussion"></a>

## Discussion

This property contains a value when the session uses internet transport. Convert the token to a hex-encoded string before including it in the JSON payload your accessory sends to your server. Your server uses the token to contact APNs and route the accessory’s encrypted response to the correct device; include the [sessionID](../transportmessage/sessionid.md) in the same payload so the system delivers the response to the correct data provider extension.

## See Also

### Determining the communication method

- [transport](transport.md): A transport method that the session uses to communicate with the accessory.
- [transportStateRestoreIdentifier](transportstaterestoreidentifier.md): An optional identifier for restoring transport state across sessions.
