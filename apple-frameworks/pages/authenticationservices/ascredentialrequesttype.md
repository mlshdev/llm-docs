> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialrequesttype](https://developer.apple.com/documentation/authenticationservices/ascredentialrequesttype)

# ASCredentialRequestType (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An enumeration that identifies different types of credentials that apps and websites can request.

## Declaration

```swift
enum ASCredentialRequestType
```

## Topics

### Credential types

- [ASCredentialRequestType.passkeyAssertion](ascredentialrequesttype/passkeyassertion.md): The app or website is requesting a passkey assertion credential.
- [ASCredentialRequestType.passkeyRegistration](ascredentialrequesttype/passkeyregistration.md): The app or website is requesting a passkey registration credential.
- [ASCredentialRequestType.password](ascredentialrequesttype/password.md): The app or website is requesting a password credential.
- [ASCredentialRequestType.oneTimeCode](ascredentialrequesttype/onetimecode.md): The app or website is requesting a one-time passcode.

### Initializers

- [init(rawValue:)](ascredentialrequesttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying the requested credential type

- [type](ascredentialrequest/type.md): The type of credential used for this request.

# ASCredentialRequestType (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An enumeration that identifies different types of credentials that apps and websites can request.

## Declaration

```objectivec
enum ASCredentialRequestType : NSInteger;
```

## Topics

### Credential types

- [ASCredentialRequestTypePasskeyAssertion](ascredentialrequesttype/passkeyassertion.md): The app or website is requesting a passkey assertion credential.
- [ASCredentialRequestTypePasskeyRegistration](ascredentialrequesttype/passkeyregistration.md): The app or website is requesting a passkey registration credential.
- [ASCredentialRequestTypePassword](ascredentialrequesttype/password.md): The app or website is requesting a password credential.
- [ASCredentialRequestTypeOneTimeCode](ascredentialrequesttype/onetimecode.md): The app or website is requesting a one-time passcode.

## See Also

### Identifying the requested credential type

- [type](ascredentialrequest/type.md): The type of credential used for this request.
