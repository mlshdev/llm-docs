> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laprivatekey](https://developer.apple.com/documentation/localauthentication/laprivatekey)

# LAPrivateKey (Swift)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The private portion of an asymmetric key pair.

## Declaration

```swift
class LAPrivateKey
```

## Topics

### Accessing the associated public key

- [publicKey](laprivatekey/publickey.md): The public key that corresponds with the private key in a key pair.

### Checking algorithm support

- [canDecrypt(using:)](laprivatekey/candecrypt%28using_%29.md): Checks whether the algorithm you supply is valid for decrypting data with the key.
- [canExchangeKeys(using:)](laprivatekey/canexchangekeys%28using_%29.md): Checks whether the algorithm you supply is valid for performing key exchanges.
- [canSign(using:)](laprivatekey/cansign%28using_%29.md): Checks whether the algorithm you supply is valid for signing data with the key.

### Performing cryptographic operations

- [decrypt(\_:algorithm:completion:)](laprivatekey/decrypt%28__algorithm_completion_%29.md): Decrypts the data you supply with a given algorithm.
- [exchangeKeys(publicKey:algorithm:parameters:completion:)](laprivatekey/exchangekeys%28publickey_algorithm_parameters_completion_%29.md): Performs a Diffie-Hellman style key exchange operation.
- [sign(\_:algorithm:completion:)](laprivatekey/sign%28__algorithm_completion_%29.md): Generates a digital signature for the data you supply.

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

- [LAPublicKey](lapublickey.md): The public portion of an asymmetric key pair.

# LAPrivateKey (Objective-C)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The private portion of an asymmetric key pair.

## Declaration

```objectivec
@interface LAPrivateKey : NSObject
```

## Topics

### Accessing the associated public key

- [publicKey](laprivatekey/publickey.md): The public key that corresponds with the private key in a key pair.

### Checking algorithm support

- [canDecryptUsingSecKeyAlgorithm:](laprivatekey/candecrypt%28using_%29.md): Checks whether the algorithm you supply is valid for decrypting data with the key.
- [canExchangeKeysUsingSecKeyAlgorithm:](laprivatekey/canexchangekeys%28using_%29.md): Checks whether the algorithm you supply is valid for performing key exchanges.
- [canSignUsingSecKeyAlgorithm:](laprivatekey/cansign%28using_%29.md): Checks whether the algorithm you supply is valid for signing data with the key.

### Performing cryptographic operations

- [decryptData:secKeyAlgorithm:completion:](laprivatekey/decrypt%28__algorithm_completion_%29.md): Decrypts the data you supply with a given algorithm.
- [exchangeKeysWithPublicKey:secKeyAlgorithm:secKeyParameters:completion:](laprivatekey/exchangekeys%28publickey_algorithm_parameters_completion_%29.md): Performs a Diffie-Hellman style key exchange operation.
- [signData:secKeyAlgorithm:completion:](laprivatekey/sign%28__algorithm_completion_%29.md): Generates a digital signature for the data you supply.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Key pairs

- [LAPublicKey](lapublickey.md): The public portion of an asymmetric key pair.
