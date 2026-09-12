> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lacredentialtype](https://developer.apple.com/documentation/localauthentication/lacredentialtype)

# LACredentialType (Swift)

**Framework:** Local Authentication  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

The types of credentials to be used for authentication.

## Declaration

```swift
enum LACredentialType
```

## Topics

### Cases

- [LACredentialType.applicationPassword](lacredentialtype/applicationpassword.md): Specifies that a password is provided by the application.
- [LACredentialType.smartCardPIN](lacredentialtype/smartcardpin.md)

### Constants

- [kLACredentialTypeApplicationPassword](klacredentialtypeapplicationpassword.md): Specifies that a password is provided by the application.
- [kLACredentialSmartCardPIN](klacredentialsmartcardpin.md)

### Initializers

- [init(rawValue:)](lacredentialtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing credentials

- [setCredential(\_:type:)](lacontext/setcredential%28__type_%29.md): Sets an application-provided credential to be used when evaluating authentication.
- [isCredentialSet(\_:)](lacontext/iscredentialset%28__%29.md): Returns a Boolean value indicating whether the specified credential type is set.

# LACredentialType (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

The types of credentials to be used for authentication.

## Declaration

```objectivec
enum LACredentialType : NSInteger;
```

## Topics

### Cases

- [LACredentialTypeApplicationPassword](lacredentialtype/applicationpassword.md): Specifies that a password is provided by the application.
- [LACredentialTypeSmartCardPIN](lacredentialtype/smartcardpin.md)

### Constants

- [kLACredentialTypeApplicationPassword](klacredentialtypeapplicationpassword.md): Specifies that a password is provided by the application.
- [kLACredentialSmartCardPIN](klacredentialsmartcardpin.md)

## See Also

### Managing credentials

- [setCredential:type:](lacontext/setcredential%28__type_%29.md): Sets an application-provided credential to be used when evaluating authentication.
- [isCredentialSet:](lacontext/iscredentialset%28__%29.md): Returns a Boolean value indicating whether the specified credential type is set.
