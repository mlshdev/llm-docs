> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/securitymessage/ciphersuite-swift.enum/xwing](https://developer.apple.com/documentation/accessorytransportextension/securitymessage/ciphersuite-swift.enum/xwing)

# SecurityMessage.CipherSuite.xWing

**Framework:** Accessory Transport Extension  
**Kind:** Case  
**Availability:** iOS 26.5+

A cipher suite that provides xWing hybrid post-quantum key encapsulation.

## Declaration

```swift
case xWing
```

## Mentioned In

- [Receiving iOS notifications on an accessory](../../receiving-ios-notifications-on-an-accessory.md)
- [Forwarding notifications to your accessory using the internet transport type](../../forwarding-notifications-to-your-accessory-using-the-internet-transport-type.md)

<a id="discussion"></a>

## Discussion

Implement this cipher suite for post-quantum security. The [AccessoryTransport.internet](../../accessorytransport/internet.md) and [AccessoryTransport.localNetwork](../../accessorytransport/localnetwork.md) transport types require this cipher suite. Bluetooth transport supports this cipher suite, but you can alternatively use [SecurityMessage.CipherSuite.p256](p256.md) as a fallback.

## See Also

### Identifying cipher suite types

- [SecurityMessage.CipherSuite.p256](p256.md): A cipher suite that uses NIST P-256 elliptic curve cryptography.
