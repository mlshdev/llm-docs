> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransport/bluetooth](https://developer.apple.com/documentation/accessorytransportextension/accessorytransport/bluetooth)

# AccessoryTransport.bluetooth

**Framework:** Accessory Transport Extension  
**Kind:** Case  
**Availability:** iOS 26.5+

A transport method that uses Bluetooth for data delivery.

## Declaration

```swift
case bluetooth
```

<a id="discussion"></a>

## Discussion

This transport method prefers [SecurityMessage.CipherSuite.xWing](../securitymessage/ciphersuite-swift.enum/xwing.md) cryptography, but supports [SecurityMessage.CipherSuite.p256](../securitymessage/ciphersuite-swift.enum/p256.md) as a fallback. The system prioritizes this transport method when the accessory connection is active.

## See Also

### Identifying transport types

- [AccessoryTransport.internet](internet.md): A transport method that uses the internet for data delivery.
- [AccessoryTransport.localNetwork](localnetwork.md): A transport method that uses the local network for data delivery.
