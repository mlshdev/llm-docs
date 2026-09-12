> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenoperation](https://developer.apple.com/documentation/cryptotokenkit/tktokenoperation)

# TKTokenOperation (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Operations that can be performed with a token’s keys and certificates.

## Declaration

```swift
enum TKTokenOperation
```

## Topics

### Constants

- [TKTokenOperation.none](tktokenoperation/none.md)
- [TKTokenOperation.readData](tktokenoperation/readdata.md)
- [TKTokenOperation.signData](tktokenoperation/signdata.md)
- [TKTokenOperation.decryptData](tktokenoperation/decryptdata.md)
- [TKTokenOperation.performKeyExchange](tktokenoperation/performkeyexchange.md)

### Initializers

- [init(rawValue:)](tktokenoperation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining Support for Operations

- [tokenSession(\_:supports:keyObjectID:algorithm:)](tktokensessiondelegate/tokensession%28__supports_keyobjectid_algorithm_%29.md): Asks the delegate whether the token session supports a given operation using the specified key and algorithm.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKTokenKeyAlgorithm](tktokenkeyalgorithm.md): Cryptographic algorithms used by token keys.

# TKTokenOperation (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Operations that can be performed with a token’s keys and certificates.

## Declaration

```objectivec
enum TKTokenOperation : NSInteger;
```

## Topics

### Constants

- [TKTokenOperationNone](tktokenoperation/none.md)
- [TKTokenOperationReadData](tktokenoperation/readdata.md)
- [TKTokenOperationSignData](tktokenoperation/signdata.md)
- [TKTokenOperationDecryptData](tktokenoperation/decryptdata.md)
- [TKTokenOperationPerformKeyExchange](tktokenoperation/performkeyexchange.md)

## See Also

### Determining Support for Operations

- [tokenSession:supportsOperation:usingKey:algorithm:](tktokensessiondelegate/tokensession%28__supports_keyobjectid_algorithm_%29.md): Asks the delegate whether the token session supports a given operation using the specified key and algorithm.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKTokenKeyAlgorithm](tktokenkeyalgorithm.md): Cryptographic algorithms used by token keys.
