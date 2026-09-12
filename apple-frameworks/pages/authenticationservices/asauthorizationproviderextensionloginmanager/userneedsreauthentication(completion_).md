> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/userneedsreauthentication(completion:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/userneedsreauthentication(completion:))

# userNeedsReauthentication(completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Requests platform single sign-on to reauthenticate the current user.

## Declaration

```swift
func userNeedsReauthentication(completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func userNeedsReauthentication() async throws
```

## Parameters

- `completion`: The completion with the error, if any.

<a id="Discussion"></a>

## Discussion

Use this method to request reauthentication, such as when revoking or expiring tokens.

## See Also

### Performing authentication

- [ASAuthorizationProviderExtensionKeyType](../asauthorizationproviderextensionkeytype.md): The key types for platform single sign-on.
- [isDeviceRegistered](isdeviceregistered.md): A Boolean value that indicates whether the device completes registration.
- [isUserRegistered](isuserregistered.md): A Boolean value that indicates whether the user completes registration.
- [loginConfiguration](loginconfiguration.md): The current login configuration for the extension.
- [ssoTokens](ssotokens.md): The single sign-on response tokens for the current user and extension.
- [identity(for:)](identity%28for_%29.md): Retrieves the identity for the specified platform single sign-on key type.
- [key(for:)](key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.

# userNeedsReauthenticationWithCompletion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Requests platform single sign-on to reauthenticate the current user.

## Declaration

```objectivec
- (void) userNeedsReauthenticationWithCompletion:(void (^)(NSError *error)) completion;
```

## Parameters

- `completion`: The completion with the error, if any.

<a id="Discussion"></a>

## Discussion

Use this method to request reauthentication, such as when revoking or expiring tokens.

## See Also

### Performing authentication

- [ASAuthorizationProviderExtensionKeyType](../asauthorizationproviderextensionkeytype.md): The key types for platform single sign-on.
- [deviceRegistered](isdeviceregistered.md): A Boolean value that indicates whether the device completes registration.
- [userRegistered](isuserregistered.md): A Boolean value that indicates whether the user completes registration.
- [loginConfiguration](loginconfiguration.md): The current login configuration for the extension.
- [ssoTokens](ssotokens.md): The single sign-on response tokens for the current user and extension.
- [copyIdentityForKeyType:](identity%28for_%29.md): Retrieves the identity for the specified platform single sign-on key type.
- [copyKeyForKeyType:](key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
