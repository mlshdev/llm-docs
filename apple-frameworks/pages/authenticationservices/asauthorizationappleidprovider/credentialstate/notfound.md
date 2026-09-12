> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidprovider/credentialstate/notfound](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidprovider/credentialstate/notfound)

# ASAuthorizationAppleIDProvider.CredentialState.notFound (Swift)

**Framework:** Authentication Services  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The user hasn’t established a relationship with Sign in with Apple.

## Declaration

```swift
case notFound
```

## See Also

### User Credential States

- [ASAuthorizationAppleIDProvider.CredentialState.authorized](authorized.md): The user is authorized.
- [ASAuthorizationAppleIDProvider.CredentialState.revoked](revoked.md): The given user’s authorization has been revoked and they should be signed out.
- [ASAuthorizationAppleIDProvider.CredentialState.transferred](transferred.md): The app has been transferred to a different team, and you need to migrate the user’s identifier.

# ASAuthorizationAppleIDProviderCredentialNotFound (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The user hasn’t established a relationship with Sign in with Apple.

## Declaration

```objectivec
ASAuthorizationAppleIDProviderCredentialNotFound
```

## See Also

### User Credential States

- [ASAuthorizationAppleIDProviderCredentialAuthorized](authorized.md): The user is authorized.
- [ASAuthorizationAppleIDProviderCredentialRevoked](revoked.md): The given user’s authorization has been revoked and they should be signed out.
- [ASAuthorizationAppleIDProviderCredentialTransferred](transferred.md): The app has been transferred to a different team, and you need to migrate the user’s identifier.
