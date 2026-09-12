> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidprovider/getcredentialstate(foruserid:completion:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidprovider/getcredentialstate(foruserid:completion:))

# getCredentialState(forUserID:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the credential state for the given user in a completion handler.

## Declaration

```swift
func getCredentialState(forUserID userID: String, completion: @escaping @Sendable (ASAuthorizationAppleIDProvider.CredentialState, (any Error)?) -> Void)
```

```swift
func credentialState(forUserID userID: String) async throws -> ASAuthorizationAppleIDProvider.CredentialState
```

## Parameters

- `userID`: An opaque string associated with the Apple ID that your app receives in the credential’s [user](../asauthorizationappleidcredential/user.md) property after performing a successful authentication request.
- `completion`: A block the method calls to report the state and an optional error condition.

## See Also

### Getting State

- [ASAuthorizationAppleIDProvider.CredentialState](credentialstate.md): Possible values for the credential state of a user.
- [credentialRevokedNotification](credentialrevokednotification.md): A notification that indicates the user’s credentials have been revoked and they should be signed out.

# getCredentialStateForUserID:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the credential state for the given user in a completion handler.

## Declaration

```objectivec
- (void) getCredentialStateForUserID:(NSString *) userID completion:(void (^)(ASAuthorizationAppleIDProviderCredentialState credentialState, NSError *error)) completion;
```

## Parameters

- `userID`: An opaque string associated with the Apple ID that your app receives in the credential’s [user](../asauthorizationappleidcredential/user.md) property after performing a successful authentication request.
- `completion`: A block the method calls to report the state and an optional error condition.

## See Also

### Getting State

- [ASAuthorizationAppleIDProviderCredentialState](credentialstate.md): Possible values for the credential state of a user.
- [ASAuthorizationAppleIDProviderCredentialRevokedNotification](credentialrevokednotification.md): A notification that indicates the user’s credentials have been revoked and they should be signed out.
