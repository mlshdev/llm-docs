> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpadding](https://developer.apple.com/documentation/security/secpadding)

# SecPadding (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.6+ (deprecated in 12.0) · tvOS 4.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

The types of padding to use when you create or verify a digital signature.

> Replaced with SecKeyAlgorithm

## Declaration

```swift
struct SecPadding
```

## Topics

### Initializers

- [init(rawValue:)](secpadding/init%28rawvalue_%29.md): Deprecated.

### Constants

- [sigRaw](secpadding/sigraw.md): Deprecated.
- [PKCS1](secpadding/pkcs1.md): Deprecated. PKCS1 padding.
- [OAEP](secpadding/oaep.md): Deprecated.
- [PKCS1MD2](secpadding/pkcs1md2.md): Deprecated. Data to be signed is an MD2 hash.
- [PKCS1MD5](secpadding/pkcs1md5.md): Deprecated. Data to be signed is an MD5 hash.
- [PKCS1SHA1](secpadding/pkcs1sha1.md): Deprecated. Data to be signed is a SHA1 hash.
- [PKCS1SHA224](secpadding/pkcs1sha224.md): Deprecated. Data to be signed is a SHA224 hash.
- [PKCS1SHA256](secpadding/pkcs1sha256.md): Deprecated. Data to be signed is a SHA256 hash.
- [PKCS1SHA384](secpadding/pkcs1sha384.md): Deprecated. Data to be signed is a SHA384 hash.
- [PKCS1SHA512](secpadding/pkcs1sha512.md): Deprecated. Data to be signed is a SHA512 hash.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SecPadding (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.6+ (deprecated in 12.0) · tvOS 4.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

The types of padding to use when you create or verify a digital signature.

> Replaced with SecKeyAlgorithm

## Declaration

```objectivec
enum SecPadding : uint32_t;
```

## Topics

### Constants

- [kSecPaddingNone](secpadding/ksecpaddingnone.md): Deprecated. No padding.
- [kSecPaddingSigRaw](secpadding/sigraw.md): Deprecated.
- [kSecPaddingPKCS1](secpadding/pkcs1.md): Deprecated. PKCS1 padding.
- [kSecPaddingOAEP](secpadding/oaep.md): Deprecated.
- [kSecPaddingPKCS1MD2](secpadding/pkcs1md2.md): Deprecated. Data to be signed is an MD2 hash.
- [kSecPaddingPKCS1MD5](secpadding/pkcs1md5.md): Deprecated. Data to be signed is an MD5 hash.
- [kSecPaddingPKCS1SHA1](secpadding/pkcs1sha1.md): Deprecated. Data to be signed is a SHA1 hash.
- [kSecPaddingPKCS1SHA224](secpadding/pkcs1sha224.md): Deprecated. Data to be signed is a SHA224 hash.
- [kSecPaddingPKCS1SHA256](secpadding/pkcs1sha256.md): Deprecated. Data to be signed is a SHA256 hash.
- [kSecPaddingPKCS1SHA384](secpadding/pkcs1sha384.md): Deprecated. Data to be signed is a SHA384 hash.
- [kSecPaddingPKCS1SHA512](secpadding/pkcs1sha512.md): Deprecated. Data to be signed is a SHA512 hash.
