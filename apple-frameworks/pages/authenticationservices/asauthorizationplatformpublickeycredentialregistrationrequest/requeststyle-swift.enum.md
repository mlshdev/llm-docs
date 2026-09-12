> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationplatformpublickeycredentialregistrationrequest/requeststyle-swift.enum](https://developer.apple.com/documentation/authenticationservices/asauthorizationplatformpublickeycredentialregistrationrequest/requeststyle-swift.enum)

# ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest.RequestStyle (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```swift
enum RequestStyle
```

## Topics

### Enumeration Cases

- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest.RequestStyle.conditional](requeststyle-swift.enum/conditional.md): Perform a conditional request. This style of request is meant to opportunistically add passkeys to existing password-based accounts, at the discretion of the user’s credential manager. It should be performed shortly after a user has signed in with a password. If the user is using a password and passkey manager, and certain internal conditions of that credential manager are met (e.g. the user signed in recently with a matching password-based account and does not yet have a passkey for this account), then this request may proceed automatically, without further user interaction. If any of the internal conditions are not met, this request will return an error without showing any UI to the user, and may be retried the next time they sign in.
- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequest.RequestStyle.standard](requeststyle-swift.enum/standard.md): Perform a request using the standard presentation style. This is the default style.

### Initializers

- [init(rawValue:)](requeststyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# ASAuthorizationPlatformPublicKeyCredentialRegistrationRequestStyle (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```objectivec
enum ASAuthorizationPlatformPublicKeyCredentialRegistrationRequestStyle : NSInteger;
```

## Topics

### Enumeration Cases

- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequestStyleConditional](requeststyle-swift.enum/conditional.md): Perform a conditional request. This style of request is meant to opportunistically add passkeys to existing password-based accounts, at the discretion of the user’s credential manager. It should be performed shortly after a user has signed in with a password. If the user is using a password and passkey manager, and certain internal conditions of that credential manager are met (e.g. the user signed in recently with a matching password-based account and does not yet have a passkey for this account), then this request may proceed automatically, without further user interaction. If any of the internal conditions are not met, this request will return an error without showing any UI to the user, and may be retried the next time they sign in.
- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequestStyleStandard](requeststyle-swift.enum/standard.md): Perform a request using the standard presentation style. This is the default style.
