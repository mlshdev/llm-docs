> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeyalgorithm](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeyalgorithm)

# TKTokenKeyAlgorithm (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Cryptographic algorithms used by token keys.

## Declaration

```swift
class TKTokenKeyAlgorithm
```

<a id="overview"></a>

## Overview

Typically, the supported algorithm for a token key can be represented by a value of the `SecKeyAlgorithm` enumeration. However, tokens such as Smart Cards require that input data for operations take the format of a more specific algorithm. For example, a token may accept raw data to generate a cryptographic signature, but require that raw data to be formatted according to PKCS1 padding rules. To express such a requirement, a `TKTokenKeyAlgorithm` object defines a target algorithm and a set of other algorithms that were used. In the previous example, the target algorithm is `kSecKeyAlgorithmRSASignatureRaw` and the `kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA1` algorithm is also reported as being  used.

## Topics

### Determining Algorithm Usage

- [isAlgorithm(\_:)](tktokenkeyalgorithm/isalgorithm%28__%29.md): Returns whether the specified algorithm is the target operation algorithm.
- [supportsAlgorithm(\_:)](tktokenkeyalgorithm/supportsalgorithm%28__%29.md): Whether the specified algorithm is the target operation algorithm, or one of the other algorithms used.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Determining Support for Operations

- [tokenSession(\_:supports:keyObjectID:algorithm:)](tktokensessiondelegate/tokensession%28__supports_keyobjectid_algorithm_%29.md): Asks the delegate whether the token session supports a given operation using the specified key and algorithm.
- [TKTokenOperation](tktokenoperation.md): Operations that can be performed with a token’s keys and certificates.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.

# TKTokenKeyAlgorithm (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Cryptographic algorithms used by token keys.

## Declaration

```objectivec
@interface TKTokenKeyAlgorithm : NSObject
```

<a id="overview"></a>

## Overview

Typically, the supported algorithm for a token key can be represented by a value of the `SecKeyAlgorithm` enumeration. However, tokens such as Smart Cards require that input data for operations take the format of a more specific algorithm. For example, a token may accept raw data to generate a cryptographic signature, but require that raw data to be formatted according to PKCS1 padding rules. To express such a requirement, a `TKTokenKeyAlgorithm` object defines a target algorithm and a set of other algorithms that were used. In the previous example, the target algorithm is `kSecKeyAlgorithmRSASignatureRaw` and the `kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA1` algorithm is also reported as being  used.

## Topics

### Determining Algorithm Usage

- [isAlgorithm:](tktokenkeyalgorithm/isalgorithm%28__%29.md): Returns whether the specified algorithm is the target operation algorithm.
- [supportsAlgorithm:](tktokenkeyalgorithm/supportsalgorithm%28__%29.md): Whether the specified algorithm is the target operation algorithm, or one of the other algorithms used.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Determining Support for Operations

- [tokenSession:supportsOperation:usingKey:algorithm:](tktokensessiondelegate/tokensession%28__supports_keyobjectid_algorithm_%29.md): Asks the delegate whether the token session supports a given operation using the specified key and algorithm.
- [TKTokenOperation](tktokenoperation.md): Operations that can be performed with a token’s keys and certificates.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
