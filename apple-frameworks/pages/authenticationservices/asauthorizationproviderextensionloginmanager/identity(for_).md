> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/identity(for:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/identity(for:))

# identity(for:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Retrieves the identity for the specified platform single sign-on key type.

## Declaration

```swift
func identity(for keyType: ASAuthorizationProviderExtensionKeyType) -> SecIdentity?
```

## Parameters

- `keyType`: The key type to retrieve.

<a id="return-value"></a>

## Return Value

The identity if it exists, or `nil` if it doesn’t.

## See Also

### Performing authentication

- [ASAuthorizationProviderExtensionKeyType](../asauthorizationproviderextensionkeytype.md): The key types for platform single sign-on.
- [isDeviceRegistered](isdeviceregistered.md): A Boolean value that indicates whether the device completes registration.
- [isUserRegistered](isuserregistered.md): A Boolean value that indicates whether the user completes registration.
- [loginConfiguration](loginconfiguration.md): The current login configuration for the extension.
- [ssoTokens](ssotokens.md): The single sign-on response tokens for the current user and extension.
- [key(for:)](key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
- [userNeedsReauthentication(completion:)](userneedsreauthentication%28completion_%29.md): Requests platform single sign-on to reauthenticate the current user.

# copyIdentityForKeyType: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Retrieves the identity for the specified platform single sign-on key type.

## Declaration

```objectivec
- (SecIdentityRef) copyIdentityForKeyType:(ASAuthorizationProviderExtensionKeyType) keyType;
```

## Parameters

- `keyType`: The key type to retrieve.

<a id="return-value"></a>

## Return Value

The identity if it exists, or `nil` if it doesn’t.

## See Also

### Performing authentication

- [ASAuthorizationProviderExtensionKeyType](../asauthorizationproviderextensionkeytype.md): The key types for platform single sign-on.
- [deviceRegistered](isdeviceregistered.md): A Boolean value that indicates whether the device completes registration.
- [userRegistered](isuserregistered.md): A Boolean value that indicates whether the user completes registration.
- [loginConfiguration](loginconfiguration.md): The current login configuration for the extension.
- [ssoTokens](ssotokens.md): The single sign-on response tokens for the current user and extension.
- [copyKeyForKeyType:](key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
- [userNeedsReauthenticationWithCompletion:](userneedsreauthentication%28completion_%29.md): Requests platform single sign-on to reauthenticate the current user.
