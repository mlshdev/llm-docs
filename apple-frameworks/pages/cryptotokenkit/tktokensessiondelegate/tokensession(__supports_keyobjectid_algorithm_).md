> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokensessiondelegate/tokensession(_:supports:keyobjectid:algorithm:)](https://developer.apple.com/documentation/cryptotokenkit/tktokensessiondelegate/tokensession(_:supports:keyobjectid:algorithm:))

# tokenSession(\_:supports:keyObjectID:algorithm:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Asks the delegate whether the token session supports a given operation using the specified key and algorithm.

## Declaration

```swift
optional func tokenSession(_ session: TKTokenSession, supports operation: TKTokenOperation, keyObjectID: TKToken.ObjectID, algorithm: TKTokenKeyAlgorithm) -> Bool
```

## Parameters

- `session`: The token session.
- `operation`: The operation to perform. For possible values, see `TKTokenOperation`.
- `keyObjectID`: The identifier of the private key object.
- `algorithm`: The algorithm to be used by the operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is supported; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining Support for Operations

- [TKTokenOperation](../tktokenoperation.md): Operations that can be performed with a token’s keys and certificates.
- [TKToken.ObjectID](../tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKTokenKeyAlgorithm](../tktokenkeyalgorithm.md): Cryptographic algorithms used by token keys.

# tokenSession:supportsOperation:usingKey:algorithm: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Asks the delegate whether the token session supports a given operation using the specified key and algorithm.

## Declaration

```objectivec
- (BOOL) tokenSession:(TKTokenSession *) session supportsOperation:(TKTokenOperation) operation usingKey:(TKTokenObjectID) keyObjectID algorithm:(TKTokenKeyAlgorithm *) algorithm;
```

## Parameters

- `session`: The token session.
- `operation`: The operation to perform. For possible values, see `TKTokenOperation`.
- `keyObjectID`: The identifier of the private key object.
- `algorithm`: The algorithm to be used by the operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is supported; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining Support for Operations

- [TKTokenOperation](../tktokenoperation.md): Operations that can be performed with a token’s keys and certificates.
- [TKTokenObjectID](../tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKTokenKeyAlgorithm](../tktokenkeyalgorithm.md): Cryptographic algorithms used by token keys.
