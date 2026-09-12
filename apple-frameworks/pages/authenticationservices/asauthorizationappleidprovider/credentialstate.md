> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidprovider/credentialstate](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidprovider/credentialstate)

# ASAuthorizationAppleIDProvider.CredentialState (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Possible values for the credential state of a user.

## Declaration

```swift
enum CredentialState
```

## Topics

### User Credential States

- [ASAuthorizationAppleIDProvider.CredentialState.authorized](credentialstate/authorized.md): The user is authorized.
- [ASAuthorizationAppleIDProvider.CredentialState.notFound](credentialstate/notfound.md): The user hasn’t established a relationship with Sign in with Apple.
- [ASAuthorizationAppleIDProvider.CredentialState.revoked](credentialstate/revoked.md): The given user’s authorization has been revoked and they should be signed out.
- [ASAuthorizationAppleIDProvider.CredentialState.transferred](credentialstate/transferred.md): The app has been transferred to a different team, and you need to migrate the user’s identifier.

### Initializers

- [init(rawValue:)](credentialstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting State

- [getCredentialState(forUserID:completion:)](getcredentialstate%28foruserid_completion_%29.md): Returns the credential state for the given user in a completion handler.
- [credentialRevokedNotification](credentialrevokednotification.md): A notification that indicates the user’s credentials have been revoked and they should be signed out.

# ASAuthorizationAppleIDProviderCredentialState (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Possible values for the credential state of a user.

## Declaration

```objectivec
enum ASAuthorizationAppleIDProviderCredentialState : NSInteger;
```

## Topics

### User Credential States

- [ASAuthorizationAppleIDProviderCredentialAuthorized](credentialstate/authorized.md): The user is authorized.
- [ASAuthorizationAppleIDProviderCredentialNotFound](credentialstate/notfound.md): The user hasn’t established a relationship with Sign in with Apple.
- [ASAuthorizationAppleIDProviderCredentialRevoked](credentialstate/revoked.md): The given user’s authorization has been revoked and they should be signed out.
- [ASAuthorizationAppleIDProviderCredentialTransferred](credentialstate/transferred.md): The app has been transferred to a different team, and you need to migrate the user’s identifier.

## See Also

### Getting State

- [getCredentialStateForUserID:completion:](getcredentialstate%28foruserid_completion_%29.md): Returns the credential state for the given user in a completion handler.
- [ASAuthorizationAppleIDProviderCredentialRevokedNotification](credentialrevokednotification.md): A notification that indicates the user’s credentials have been revoked and they should be signed out.
