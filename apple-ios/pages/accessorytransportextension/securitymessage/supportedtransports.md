> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/securitymessage/supportedtransports](https://developer.apple.com/documentation/accessorytransportextension/securitymessage/supportedtransports)

# supportedTransports

**Framework:** Accessory Transport Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

An array of transports that the accessory supports for sending sensitive information.

## Declaration

```swift
let supportedTransports: [AccessoryTransport]
```

## Mentioned In

- [Forwarding notifications to your accessory using the internet transport type](../forwarding-notifications-to-your-accessory-using-the-internet-transport-type.md)

<a id="discussion"></a>

## Discussion

The default is [AccessoryTransport.bluetooth](../accessorytransport/bluetooth.md). To support the [AccessoryTransport.internet](../accessorytransport/internet.md) or [AccessoryTransport.localNetwork](../accessorytransport/localnetwork.md) transport types, use the [SecurityMessage.CipherSuite.xWing](ciphersuite-swift.enum/xwing.md) cipher suite.

> **Note**

> Specify all transports your accessory supports when initiating key exchange. The system automatically selects the best available transport for each message.
