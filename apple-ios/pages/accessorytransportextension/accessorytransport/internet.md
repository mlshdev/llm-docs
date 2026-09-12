> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransport/internet](https://developer.apple.com/documentation/accessorytransportextension/accessorytransport/internet)

# AccessoryTransport.internet

**Framework:** Accessory Transport Extension  
**Kind:** Case  
**Availability:** iOS 26.5+

A transport method that uses the internet for data delivery.

## Declaration

```swift
case internet
```

## Mentioned In

- [Forwarding notifications to your accessory using the internet transport type](../forwarding-notifications-to-your-accessory-using-the-internet-transport-type.md)
- [Receiving iOS notifications on an accessory](../receiving-ios-notifications-on-an-accessory.md)

<a id="discussion"></a>

## Discussion

The system requires [SecurityMessage.CipherSuite.xWing](../securitymessage/ciphersuite-swift.enum/xwing.md) cryptography for this transport method. The system tries this transport method if Bluetooth and local network are unavailable.

> **Note**

> Internet transport uses a different encryption mechanism than Bluetooth. The system handles encryption and decryption transparently using Symmetric Key Ratchet derivation from the initial key exchange.

## See Also

### Identifying transport types

- [AccessoryTransport.bluetooth](bluetooth.md): A transport method that uses Bluetooth for data delivery.
- [AccessoryTransport.localNetwork](localnetwork.md): A transport method that uses the local network for data delivery.
