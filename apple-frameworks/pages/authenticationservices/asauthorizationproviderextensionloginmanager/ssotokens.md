> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/ssotokens](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/ssotokens)

# ssoTokens (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The single sign-on response tokens for the current user and extension.

## Declaration

```swift
var ssoTokens: [AnyHashable : Any]? { get set }
```

## See Also

### Performing authentication

- [ASAuthorizationProviderExtensionKeyType](../asauthorizationproviderextensionkeytype.md): The key types for platform single sign-on.
- [isDeviceRegistered](isdeviceregistered.md): A Boolean value that indicates whether the device completes registration.
- [isUserRegistered](isuserregistered.md): A Boolean value that indicates whether the user completes registration.
- [loginConfiguration](loginconfiguration.md): The current login configuration for the extension.
- [identity(for:)](identity%28for_%29.md): Retrieves the identity for the specified platform single sign-on key type.
- [key(for:)](key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
- [userNeedsReauthentication(completion:)](userneedsreauthentication%28completion_%29.md): Requests platform single sign-on to reauthenticate the current user.

# ssoTokens (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The single sign-on response tokens for the current user and extension.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary * ssoTokens;
```

## See Also

### Performing authentication

- [ASAuthorizationProviderExtensionKeyType](../asauthorizationproviderextensionkeytype.md): The key types for platform single sign-on.
- [deviceRegistered](isdeviceregistered.md): A Boolean value that indicates whether the device completes registration.
- [userRegistered](isuserregistered.md): A Boolean value that indicates whether the user completes registration.
- [loginConfiguration](loginconfiguration.md): The current login configuration for the extension.
- [copyIdentityForKeyType:](identity%28for_%29.md): Retrieves the identity for the specified platform single sign-on key type.
- [copyKeyForKeyType:](key%28for_%29.md): Retrieves the key for the specified platform single sign-on key type.
- [userNeedsReauthenticationWithCompletion:](userneedsreauthentication%28completion_%29.md): Requests platform single sign-on to reauthenticate the current user.
