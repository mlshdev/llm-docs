> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportsession/transport](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/transport)

# transport

**Framework:** Accessory Transport Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A transport method that the session uses to communicate with the accessory.

## Declaration

```swift
var transport: AccessoryTransport?
```

## Mentioned In

- [Forwarding notifications to your accessory using the internet transport type](../forwarding-notifications-to-your-accessory-using-the-internet-transport-type.md)

<a id="discussion"></a>

## Discussion

Use this property to determine which transport the current instance handles, and customize your message delivery accordingly. The system may launch your extension in separate processes for different transports.

> **Note**

> The system automatically selects transports in this order: Bluetooth (if connected), local network (if available), then internet (if available). The system notifies your extension of the transport method it selects. Customize payload contents based on the selected type.

## See Also

### Determining the communication method

- [transportStateRestoreIdentifier](transportstaterestoreidentifier.md): An optional identifier for restoring transport state across sessions.
- [pushToken](pushtoken.md): A token that identifies the iOS device to the Apple Push Notification service for routing accessory responses over the internet.
