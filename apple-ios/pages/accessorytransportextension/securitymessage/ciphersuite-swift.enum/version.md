> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/securitymessage/ciphersuite-swift.enum/version](https://developer.apple.com/documentation/accessorytransportextension/securitymessage/ciphersuite-swift.enum/version)

# SecurityMessage.CipherSuite.Version

**Framework:** Accessory Transport Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.5+

A version of the cipher suite protocol.

## Declaration

```swift
enum Version
```

<a id="overview"></a>

## Overview

The version determines the format of the protocol information string that the system uses for HPKE key derivation. Use [SecurityMessage.CipherSuite.Version.version1](version/version1.md) when creating security messages. On your accessory, format the protocol information as `{cipherSuite}-Version1-{identifier}` when deriving HPKE keys.

## Topics

### Identifying protocol versions

- [SecurityMessage.CipherSuite.Version.version1](version/version1.md): Version 1 of the cipher suite protocol.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
