> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeysizes](https://developer.apple.com/documentation/security/seckeysizes)

# SecKeySizes (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.9+ (deprecated in 12.0)

The supported sizes for keys of various common types.

> No longer supported

## Declaration

```swift
enum SecKeySizes
```

## Topics

### Constants

- [SecKeySizes.secDefaultKeySize](seckeysizes/secdefaultkeysize.md): Deprecated. The default key size for the specified type.
- [SecKeySizes.sec3DES192](seckeysizes/sec3des192.md): Deprecated. 192-bit DES.
- [SecKeySizes.secAES128](seckeysizes/secaes128.md): Deprecated. 128-bit AES.
- [secAES192](seckeysizes/secaes192.md): Deprecated. 192-bit AES.
- [SecKeySizes.secAES256](seckeysizes/secaes256.md): Deprecated. 256-bit AES.
- [secp192r1](seckeysizes/secp192r1.md): Deprecated. 192-bit ECC Keys for Suite-B from RFC 4492 section 5.1.1.
- [secp256r1](seckeysizes/secp256r1.md): Deprecated. 256-bit ECC Keys for Suite-B from RFC 4492 section 5.1.1.
- [SecKeySizes.secp384r1](seckeysizes/secp384r1.md): Deprecated. 384-bit ECC Keys for Suite-B from RFC 4492 section 5.1.1.
- [SecKeySizes.secp521r1](seckeysizes/secp521r1.md): Deprecated. 521-bit ECC Keys for Suite-B from RFC 4492 section 5.1.1.
- [SecKeySizes.secRSAMin](seckeysizes/secrsamin.md): Deprecated. 1024 bits is the minimum size for an RSA key.
- [SecKeySizes.secRSAMax](seckeysizes/secrsamax.md): Deprecated. 4096 bits is the maximum size for an RSA key.

### Initializers

- [init(rawValue:)](seckeysizes/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecKeySizes (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.9+ (deprecated in 12.0)

The supported sizes for keys of various common types.

> No longer supported

## Declaration

```objectivec
enum SecKeySizes : uint32_t;
```

## Topics

### Constants

- [kSecDefaultKeySize](seckeysizes/secdefaultkeysize.md): Deprecated. The default key size for the specified type.
- [kSec3DES192](seckeysizes/sec3des192.md): Deprecated. 192-bit DES.
- [kSecAES128](seckeysizes/secaes128.md): Deprecated. 128-bit AES.
- [kSecAES192](seckeysizes/secaes192.md): Deprecated. 192-bit AES.
- [kSecAES256](seckeysizes/secaes256.md): Deprecated. 256-bit AES.
- [kSecp192r1](seckeysizes/secp192r1.md): Deprecated. 192-bit ECC Keys for Suite-B from RFC 4492 section 5.1.1.
- [kSecp256r1](seckeysizes/secp256r1.md): Deprecated. 256-bit ECC Keys for Suite-B from RFC 4492 section 5.1.1.
- [kSecp384r1](seckeysizes/secp384r1.md): Deprecated. 384-bit ECC Keys for Suite-B from RFC 4492 section 5.1.1.
- [kSecp521r1](seckeysizes/secp521r1.md): Deprecated. 521-bit ECC Keys for Suite-B from RFC 4492 section 5.1.1.
- [kSecRSAMin](seckeysizes/secrsamin.md): Deprecated. 1024 bits is the minimum size for an RSA key.
- [kSecRSAMax](seckeysizes/secrsamax.md): Deprecated. 4096 bits is the maximum size for an RSA key.
