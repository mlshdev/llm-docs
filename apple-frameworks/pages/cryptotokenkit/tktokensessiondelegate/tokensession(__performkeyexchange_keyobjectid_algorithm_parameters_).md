> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokensessiondelegate/tokensession(_:performkeyexchange:keyobjectid:algorithm:parameters:)](https://developer.apple.com/documentation/cryptotokenkit/tktokensessiondelegate/tokensession(_:performkeyexchange:keyobjectid:algorithm:parameters:))

# tokenSession(\_:performKeyExchange:keyObjectID:algorithm:parameters:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate to perform a key exchange using the specified key and algorithm.

## Declaration

```swift
optional func tokenSession(_ session: TKTokenSession, performKeyExchange otherPartyPublicKeyData: Data, keyObjectID objectID: TKToken.ObjectID, algorithm: TKTokenKeyAlgorithm, parameters: TKTokenKeyExchangeParameters) throws -> Data
```

## Parameters

- `session`: The token session.
- `otherPartyPublicKeyData`: The public key of the other party.
- `objectID`: The identifier of the private key object.
- `algorithm`: The algorithm to be used for key exchange.
- `parameters`: Additional parameters used by `algorithm` to perform the key exchange.

<a id="return-value"></a>

## Return Value

The result of the key exchange, or `nil` if an error occurred.

## See Also

### Performing Cryptographic Operations

- [tokenSession(\_:sign:keyObjectID:algorithm:)](tokensession%28__sign_keyobjectid_algorithm_%29.md): Tells the delegate to sign a data object using the specified key and algorithm.
- [tokenSession(\_:decrypt:keyObjectID:algorithm:)](tokensession%28__decrypt_keyobjectid_algorithm_%29.md): Tells the delegate to decrypt a data object using the specified key and algorithm.
- [TKTokenKeyExchangeParameters](../tktokenkeyexchangeparameters.md): Parameters used to perform specific key exchange operations.

# tokenSession:performKeyExchangeWithPublicKey:usingKey:algorithm:parameters:error: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate to perform a key exchange using the specified key and algorithm.

## Declaration

```objectivec
- (NSData *) tokenSession:(TKTokenSession *) session performKeyExchangeWithPublicKey:(NSData *) otherPartyPublicKeyData usingKey:(TKTokenObjectID) objectID algorithm:(TKTokenKeyAlgorithm *) algorithm parameters:(TKTokenKeyExchangeParameters *) parameters error:(NSError **) error;
```

## Parameters

- `session`: The token session.
- `otherPartyPublicKeyData`: The public key of the other party.
- `objectID`: The identifier of the private key object.
- `algorithm`: The algorithm to be used for key exchange.
- `parameters`: Additional parameters used by `algorithm` to perform the key exchange.
- `error`: If an error occurred, this method should return `nil` and populate this parameter with an object containing details of the error. The error object should have a `domain` equal to [TKErrorDomain](../tkerrordomain.md) and a `code` equal to a value defined by the [TKErrorCode](../tkerror/code.md) enumeration.

<a id="return-value"></a>

## Return Value

The result of the key exchange, or `nil` if an error occurred.

## See Also

### Performing Cryptographic Operations

- [tokenSession:signData:usingKey:algorithm:error:](tokensession%28__sign_keyobjectid_algorithm_%29.md): Tells the delegate to sign a data object using the specified key and algorithm.
- [tokenSession:decryptData:usingKey:algorithm:error:](tokensession%28__decrypt_keyobjectid_algorithm_%29.md): Tells the delegate to decrypt a data object using the specified key and algorithm.
- [TKTokenKeyExchangeParameters](../tktokenkeyexchangeparameters.md): Parameters used to perform specific key exchange operations.
