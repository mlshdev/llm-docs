> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/securitymessage/ciphersuite-swift.enum](https://developer.apple.com/documentation/accessorytransportextension/securitymessage/ciphersuite-swift.enum)

# SecurityMessage.CipherSuite

**Framework:** Accessory Transport Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.5+

A cryptographic cipher suite for key exchange.

## Declaration

```swift
enum CipherSuite
```

<a id="overview"></a>

## Overview

Choose a cipher suite based on your accessory’s capabilities and the transport methods it supports. Use [SecurityMessage.CipherSuite.xWing](ciphersuite-swift.enum/xwing.md) for post-quantum security, which is required for [AccessoryTransport.internet](../accessorytransport/internet.md) and [AccessoryTransport.localNetwork](../accessorytransport/localnetwork.md) transports. Use [SecurityMessage.CipherSuite.p256](ciphersuite-swift.enum/p256.md) as a fallback option for Bluetooth-only accessories that don’t support xWing.

## Topics

### Identifying cipher suite types

- [SecurityMessage.CipherSuite.p256](ciphersuite-swift.enum/p256.md): A cipher suite that uses NIST P-256 elliptic curve cryptography.
- [SecurityMessage.CipherSuite.xWing](ciphersuite-swift.enum/xwing.md): A cipher suite that provides xWing hybrid post-quantum key encapsulation.

### Determining protocol versions

- [SecurityMessage.CipherSuite.Version](ciphersuite-swift.enum/version.md): A version of the cipher suite protocol.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining encryption method

- [cipherSuite](ciphersuite-swift.property.md): The cipher suite used for key exchange.
- [version](version.md): The cipher suite version.
