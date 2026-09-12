> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidprovider/credentialrevokednotification](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidprovider/credentialrevokednotification)

# credentialRevokedNotification (Swift)

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A notification that indicates the user’s credentials have been revoked and they should be signed out.

## Declaration

```swift
class let credentialRevokedNotification: NSNotification.Name
```

## See Also

### Getting State

- [getCredentialState(forUserID:completion:)](getcredentialstate%28foruserid_completion_%29.md): Returns the credential state for the given user in a completion handler.
- [ASAuthorizationAppleIDProvider.CredentialState](credentialstate.md): Possible values for the credential state of a user.

# ASAuthorizationAppleIDProviderCredentialRevokedNotification (Objective-C)

**Framework:** Authentication Services  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A notification that indicates the user’s credentials have been revoked and they should be signed out.

## Declaration

```objectivec
extern NSNotificationName const ASAuthorizationAppleIDProviderCredentialRevokedNotification;
```

## See Also

### Getting State

- [getCredentialStateForUserID:completion:](getcredentialstate%28foruserid_completion_%29.md): Returns the credential state for the given user in a completion handler.
- [ASAuthorizationAppleIDProviderCredentialState](credentialstate.md): Possible values for the credential state of a user.
