> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransport/localnetwork](https://developer.apple.com/documentation/accessorytransportextension/accessorytransport/localnetwork)

# AccessoryTransport.localNetwork

**Framework:** Accessory Transport Extension  
**Kind:** Case  
**Availability:** iOS 26.5+

A transport method that uses the local network for data delivery.

## Declaration

```swift
case localNetwork
```

## Mentioned In

- [Receiving iOS notifications on an accessory](../receiving-ios-notifications-on-an-accessory.md)

<a id="discussion"></a>

## Discussion

The system requires [SecurityMessage.CipherSuite.xWing](../securitymessage/ciphersuite-swift.enum/xwing.md) cryptography for this transport method.

## See Also

### Identifying transport types

- [AccessoryTransport.bluetooth](bluetooth.md): A transport method that uses Bluetooth for data delivery.
- [AccessoryTransport.internet](internet.md): A transport method that uses the internet for data delivery.
