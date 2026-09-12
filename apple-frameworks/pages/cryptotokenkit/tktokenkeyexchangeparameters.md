> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeyexchangeparameters](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeyexchangeparameters)

# TKTokenKeyExchangeParameters (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Parameters used to perform specific key exchange operations.

## Declaration

```swift
class TKTokenKeyExchangeParameters
```

## Topics

### Accessing Parameters

- [requestedSize](tktokenkeyexchangeparameters/requestedsize.md): Returns the requested output size, in bytes, of key exchange result.
- [sharedInfo](tktokenkeyexchangeparameters/sharedinfo.md): Returns shared information typically used during the key derivation (KDF) step of a key exchange algorithm.

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

### Performing Cryptographic Operations

- [tokenSession(\_:sign:keyObjectID:algorithm:)](tktokensessiondelegate/tokensession%28__sign_keyobjectid_algorithm_%29.md): Tells the delegate to sign a data object using the specified key and algorithm.
- [tokenSession(\_:decrypt:keyObjectID:algorithm:)](tktokensessiondelegate/tokensession%28__decrypt_keyobjectid_algorithm_%29.md): Tells the delegate to decrypt a data object using the specified key and algorithm.
- [tokenSession(\_:performKeyExchange:keyObjectID:algorithm:parameters:)](tktokensessiondelegate/tokensession%28__performkeyexchange_keyobjectid_algorithm_parameters_%29.md): Tells the delegate to perform a key exchange using the specified key and algorithm.

# TKTokenKeyExchangeParameters (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Parameters used to perform specific key exchange operations.

## Declaration

```objectivec
@interface TKTokenKeyExchangeParameters : NSObject
```

## Topics

### Accessing Parameters

- [requestedSize](tktokenkeyexchangeparameters/requestedsize.md): Returns the requested output size, in bytes, of key exchange result.
- [sharedInfo](tktokenkeyexchangeparameters/sharedinfo.md): Returns shared information typically used during the key derivation (KDF) step of a key exchange algorithm.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Performing Cryptographic Operations

- [tokenSession:signData:usingKey:algorithm:error:](tktokensessiondelegate/tokensession%28__sign_keyobjectid_algorithm_%29.md): Tells the delegate to sign a data object using the specified key and algorithm.
- [tokenSession:decryptData:usingKey:algorithm:error:](tktokensessiondelegate/tokensession%28__decrypt_keyobjectid_algorithm_%29.md): Tells the delegate to decrypt a data object using the specified key and algorithm.
- [tokenSession:performKeyExchangeWithPublicKey:usingKey:algorithm:parameters:error:](tktokensessiondelegate/tokensession%28__performkeyexchange_keyobjectid_algorithm_parameters_%29.md): Tells the delegate to perform a key exchange using the specified key and algorithm.
