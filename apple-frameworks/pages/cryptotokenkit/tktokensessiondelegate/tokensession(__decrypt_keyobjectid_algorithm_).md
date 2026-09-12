> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokensessiondelegate/tokensession(_:decrypt:keyobjectid:algorithm:)](https://developer.apple.com/documentation/cryptotokenkit/tktokensessiondelegate/tokensession(_:decrypt:keyobjectid:algorithm:))

# tokenSession(\_:decrypt:keyObjectID:algorithm:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate to decrypt a data object using the specified key and algorithm.

## Declaration

```swift
optional func tokenSession(_ session: TKTokenSession, decrypt ciphertext: Data, keyObjectID: TKToken.ObjectID, algorithm: TKTokenKeyAlgorithm) throws -> Data
```

## Parameters

- `session`: The token session.
- `ciphertext`: The data to decrypt.
- `keyObjectID`: The identifier of the public key object.
- `algorithm`: The algorithm to be used for decryption.

<a id="return-value"></a>

## Return Value

The decrypted data, or `nil` if an error occurred.

## See Also

### Performing Cryptographic Operations

- [tokenSession(\_:sign:keyObjectID:algorithm:)](tokensession%28__sign_keyobjectid_algorithm_%29.md): Tells the delegate to sign a data object using the specified key and algorithm.
- [tokenSession(\_:performKeyExchange:keyObjectID:algorithm:parameters:)](tokensession%28__performkeyexchange_keyobjectid_algorithm_parameters_%29.md): Tells the delegate to perform a key exchange using the specified key and algorithm.
- [TKTokenKeyExchangeParameters](../tktokenkeyexchangeparameters.md): Parameters used to perform specific key exchange operations.

# tokenSession:decryptData:usingKey:algorithm:error: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate to decrypt a data object using the specified key and algorithm.

## Declaration

```objectivec
- (NSData *) tokenSession:(TKTokenSession *) session decryptData:(NSData *) ciphertext usingKey:(TKTokenObjectID) keyObjectID algorithm:(TKTokenKeyAlgorithm *) algorithm error:(NSError **) error;
```

## Parameters

- `session`: The token session.
- `ciphertext`: The data to decrypt.
- `keyObjectID`: The identifier of the public key object.
- `algorithm`: The algorithm to be used for decryption.
- `error`: If an error occurred, this method should return `nil` and populate this parameter with an object containing details of the error. The error object should have a `domain` equal to [TKErrorDomain](../tkerrordomain.md) and a `code` equal to a value defined by the [TKErrorCode](../tkerror/code.md) enumeration.

<a id="return-value"></a>

## Return Value

The decrypted data, or `nil` if an error occurred.

## See Also

### Performing Cryptographic Operations

- [tokenSession:signData:usingKey:algorithm:error:](tokensession%28__sign_keyobjectid_algorithm_%29.md): Tells the delegate to sign a data object using the specified key and algorithm.
- [tokenSession:performKeyExchangeWithPublicKey:usingKey:algorithm:parameters:error:](tokensession%28__performkeyexchange_keyobjectid_algorithm_parameters_%29.md): Tells the delegate to perform a key exchange using the specified key and algorithm.
- [TKTokenKeyExchangeParameters](../tktokenkeyexchangeparameters.md): Parameters used to perform specific key exchange operations.
