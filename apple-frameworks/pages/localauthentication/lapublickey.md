> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lapublickey](https://developer.apple.com/documentation/localauthentication/lapublickey)

# LAPublicKey (Swift)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The public portion of an asymmetric key pair.

## Declaration

```swift
class LAPublicKey
```

## Topics

### Checking algorithm support

- [canEncrypt(using:)](lapublickey/canencrypt%28using_%29.md): Checks whether the algorithm you supply is valid for encrypting data with the key.
- [canVerify(using:)](lapublickey/canverify%28using_%29.md): Checks whether the algorithm you supply is valid for verifying signatures with the key.

### Performing cryptographic operations

- [encrypt(\_:algorithm:completion:)](lapublickey/encrypt%28__algorithm_completion_%29.md): Encrypts the data you supply with a given algorithm.
- [exportBytes(completion:)](lapublickey/exportbytes%28completion_%29.md): Exports the data that represents a public key.
- [verify(\_:signature:algorithm:completion:)](lapublickey/verify%28__signature_algorithm_completion_%29.md): Verifies a digital signature for the data you supply.

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

### Key pairs

- [LAPrivateKey](laprivatekey.md): The private portion of an asymmetric key pair.

# LAPublicKey (Objective-C)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The public portion of an asymmetric key pair.

## Declaration

```objectivec
@interface LAPublicKey : NSObject
```

## Topics

### Checking algorithm support

- [canEncryptUsingSecKeyAlgorithm:](lapublickey/canencrypt%28using_%29.md): Checks whether the algorithm you supply is valid for encrypting data with the key.
- [canVerifyUsingSecKeyAlgorithm:](lapublickey/canverify%28using_%29.md): Checks whether the algorithm you supply is valid for verifying signatures with the key.

### Performing cryptographic operations

- [encryptData:secKeyAlgorithm:completion:](lapublickey/encrypt%28__algorithm_completion_%29.md): Encrypts the data you supply with a given algorithm.
- [exportBytesWithCompletion:](lapublickey/exportbytes%28completion_%29.md): Exports the data that represents a public key.
- [verifyData:signature:secKeyAlgorithm:completion:](lapublickey/verify%28__signature_algorithm_completion_%29.md): Verifies a digital signature for the data you supply.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Key pairs

- [LAPrivateKey](laprivatekey.md): The private portion of an asymmetric key pair.
