> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokensessiondelegate](https://developer.apple.com/documentation/cryptotokenkit/tktokensessiondelegate)

# TKTokenSessionDelegate (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The interface that a session instance delegate implements to respond to token session authentication events.

## Declaration

```swift
protocol TKTokenSessionDelegate : NSObjectProtocol
```

## Topics

### Determining Support for Operations

- [tokenSession(\_:supports:keyObjectID:algorithm:)](tktokensessiondelegate/tokensession%28__supports_keyobjectid_algorithm_%29.md): Asks the delegate whether the token session supports a given operation using the specified key and algorithm.
- [TKTokenOperation](tktokenoperation.md): Operations that can be performed with a token’s keys and certificates.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKTokenKeyAlgorithm](tktokenkeyalgorithm.md): Cryptographic algorithms used by token keys.

### Authenticating

- [tokenSession(\_:beginAuthFor:constraint:)](tktokensessiondelegate/tokensession%28__beginauthfor_constraint_%29.md): Tells the delegate that authentication has begun for the specified operation and constraint.
- [TKTokenOperationConstraint](tktokenoperationconstraint.md): A token’s authentication constraint for a specific operation.
- [TKTokenAuthOperation](tktokenauthoperation.md): An authentication operation for a cryptographic token.
- [TKTokenPasswordAuthOperation](tktokenpasswordauthoperation.md): A password-based authentication operation.
- [TKTokenSmartCardPINAuthOperation](tktokensmartcardpinauthoperation.md): A Smart Card PIN authentication operation.

### Performing Cryptographic Operations

- [tokenSession(\_:sign:keyObjectID:algorithm:)](tktokensessiondelegate/tokensession%28__sign_keyobjectid_algorithm_%29.md): Tells the delegate to sign a data object using the specified key and algorithm.
- [tokenSession(\_:decrypt:keyObjectID:algorithm:)](tktokensessiondelegate/tokensession%28__decrypt_keyobjectid_algorithm_%29.md): Tells the delegate to decrypt a data object using the specified key and algorithm.
- [tokenSession(\_:performKeyExchange:keyObjectID:algorithm:parameters:)](tktokensessiondelegate/tokensession%28__performkeyexchange_keyobjectid_algorithm_parameters_%29.md): Tells the delegate to perform a key exchange using the specified key and algorithm.
- [TKTokenKeyExchangeParameters](tktokenkeyexchangeparameters.md): Parameters used to perform specific key exchange operations.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to Authentication Events

- [delegate](tktokensession/delegate.md): The token session delegate.

# TKTokenSessionDelegate (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The interface that a session instance delegate implements to respond to token session authentication events.

## Declaration

```objectivec
@protocol TKTokenSessionDelegate <NSObject>
```

## Topics

### Determining Support for Operations

- [tokenSession:supportsOperation:usingKey:algorithm:](tktokensessiondelegate/tokensession%28__supports_keyobjectid_algorithm_%29.md): Asks the delegate whether the token session supports a given operation using the specified key and algorithm.
- [TKTokenOperation](tktokenoperation.md): Operations that can be performed with a token’s keys and certificates.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKTokenKeyAlgorithm](tktokenkeyalgorithm.md): Cryptographic algorithms used by token keys.

### Authenticating

- [tokenSession:beginAuthForOperation:constraint:error:](tktokensessiondelegate/tokensession%28__beginauthfor_constraint_%29.md): Tells the delegate that authentication has begun for the specified operation and constraint.
- [TKTokenOperationConstraint](tktokenoperationconstraint.md): A token’s authentication constraint for a specific operation.
- [TKTokenAuthOperation](tktokenauthoperation.md): An authentication operation for a cryptographic token.
- [TKTokenPasswordAuthOperation](tktokenpasswordauthoperation.md): A password-based authentication operation.
- [TKTokenSmartCardPINAuthOperation](tktokensmartcardpinauthoperation.md): A Smart Card PIN authentication operation.

### Performing Cryptographic Operations

- [tokenSession:signData:usingKey:algorithm:error:](tktokensessiondelegate/tokensession%28__sign_keyobjectid_algorithm_%29.md): Tells the delegate to sign a data object using the specified key and algorithm.
- [tokenSession:decryptData:usingKey:algorithm:error:](tktokensessiondelegate/tokensession%28__decrypt_keyobjectid_algorithm_%29.md): Tells the delegate to decrypt a data object using the specified key and algorithm.
- [tokenSession:performKeyExchangeWithPublicKey:usingKey:algorithm:parameters:error:](tktokensessiondelegate/tokensession%28__performkeyexchange_keyobjectid_algorithm_parameters_%29.md): Tells the delegate to perform a key exchange using the specified key and algorithm.
- [TKTokenKeyExchangeParameters](tktokenkeyexchangeparameters.md): Parameters used to perform specific key exchange operations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to Authentication Events

- [delegate](tktokensession/delegate.md): The token session delegate.
