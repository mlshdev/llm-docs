> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccsdigestalgorithm](https://developer.apple.com/documentation/security/seccsdigestalgorithm)

# SecCSDigestAlgorithm (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The list of digest algorithms available for code signatures.

## Declaration

```swift
enum SecCSDigestAlgorithm
```

<a id="overview"></a>

## Overview

Use these values with the [kSecCodeInfoDigestAlgorithm](kseccodeinfodigestalgorithm.md) and [kSecCodeInfoDigestAlgorithms](kseccodeinfodigestalgorithms.md) keys described in [Signing Information Dictionary Keys](signing-information-dictionary-keys.md).

## Topics

### Enumeration Cases

- [SecCSDigestAlgorithm.codeSignatureHashSHA1](seccsdigestalgorithm/codesignaturehashsha1.md)
- [SecCSDigestAlgorithm.codeSignatureHashSHA256](seccsdigestalgorithm/codesignaturehashsha256.md)
- [SecCSDigestAlgorithm.codeSignatureHashSHA256Truncated](seccsdigestalgorithm/codesignaturehashsha256truncated.md)
- [SecCSDigestAlgorithm.codeSignatureHashSHA384](seccsdigestalgorithm/codesignaturehashsha384.md)
- [SecCSDigestAlgorithm.codeSignatureHashSHA512](seccsdigestalgorithm/codesignaturehashsha512.md)
- [SecCSDigestAlgorithm.codeSignatureNoHash](seccsdigestalgorithm/codesignaturenohash.md)

### Initializers

- [init(rawValue:)](seccsdigestalgorithm/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecCSDigestAlgorithm (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The list of digest algorithms available for code signatures.

## Declaration

```objectivec
enum SecCSDigestAlgorithm : uint32_t;
```

<a id="overview"></a>

## Overview

Use these values with the [kSecCodeInfoDigestAlgorithm](kseccodeinfodigestalgorithm.md) and [kSecCodeInfoDigestAlgorithms](kseccodeinfodigestalgorithms.md) keys described in [Signing Information Dictionary Keys](signing-information-dictionary-keys.md).

## Topics

### Enumeration Cases

- [kSecCodeSignatureHashSHA1](seccsdigestalgorithm/codesignaturehashsha1.md)
- [kSecCodeSignatureHashSHA256](seccsdigestalgorithm/codesignaturehashsha256.md)
- [kSecCodeSignatureHashSHA256Truncated](seccsdigestalgorithm/codesignaturehashsha256truncated.md)
- [kSecCodeSignatureHashSHA384](seccsdigestalgorithm/codesignaturehashsha384.md)
- [kSecCodeSignatureHashSHA512](seccsdigestalgorithm/codesignaturehashsha512.md)
- [kSecCodeSignatureNoHash](seccsdigestalgorithm/codesignaturenohash.md)
