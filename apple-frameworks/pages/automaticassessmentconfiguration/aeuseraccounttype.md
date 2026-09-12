> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeuseraccounttype](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeuseraccounttype)

# AEUserAccountType (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Specifies the type of account required for an assessment session.

## Declaration

```swift
@frozen enum AEUserAccountType
```

## Topics

### Enumeration Cases

- [AEUserAccountType.any](aeuseraccounttype/any.md): No specific account type is required.
- [AEUserAccountType.guest](aeuseraccounttype/guest.md): Requires a guest user account.
- [AEUserAccountType.standard](aeuseraccounttype/standard.md): Requires a standard user account.

### Initializers

- [init(rawValue:)](aeuseraccounttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AEUserAccountType (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Specifies the type of account required for an assessment session.

## Declaration

```objectivec
enum AEUserAccountType : NSInteger;
```

## Topics

### Enumeration Cases

- [AEUserAccountTypeAny](aeuseraccounttype/any.md): No specific account type is required.
- [AEUserAccountTypeGuest](aeuseraccounttype/guest.md): Requires a guest user account.
- [AEUserAccountTypeStandard](aeuseraccounttype/standard.md): Requires a standard user account.
