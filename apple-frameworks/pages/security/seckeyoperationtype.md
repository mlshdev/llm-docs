> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeyoperationtype](https://developer.apple.com/documentation/security/seckeyoperationtype)

# SecKeyOperationType (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The types of operations that you can use a cryptographic key to perform.

## Declaration

```swift
enum SecKeyOperationType
```

## Topics

### Enumeration Cases

- [SecKeyOperationType.decrypt](seckeyoperationtype/decrypt.md)
- [SecKeyOperationType.encrypt](seckeyoperationtype/encrypt.md)
- [SecKeyOperationType.keyExchange](seckeyoperationtype/keyexchange.md)
- [SecKeyOperationType.sign](seckeyoperationtype/sign.md)
- [SecKeyOperationType.verify](seckeyoperationtype/verify.md)

### Initializers

- [init(rawValue:)](seckeyoperationtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecKeyOperationType (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The types of operations that you can use a cryptographic key to perform.

## Declaration

```objectivec
enum SecKeyOperationType : CFIndex;
```

## Topics

### Enumeration Cases

- [kSecKeyOperationTypeDecrypt](seckeyoperationtype/decrypt.md)
- [kSecKeyOperationTypeEncrypt](seckeyoperationtype/encrypt.md)
- [kSecKeyOperationTypeKeyExchange](seckeyoperationtype/keyexchange.md)
- [kSecKeyOperationTypeSign](seckeyoperationtype/sign.md)
- [kSecKeyOperationTypeVerify](seckeyoperationtype/verify.md)
