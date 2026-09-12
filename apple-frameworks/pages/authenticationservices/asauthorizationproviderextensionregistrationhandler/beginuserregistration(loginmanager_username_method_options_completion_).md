> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler/beginuserregistration(loginmanager:username:method:options:completion:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler/beginuserregistration(loginmanager:username:method:options:completion:))

# beginUserRegistration(loginManager:userName:method:options:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Initiates the user registration process for the user and the single sign-on extension.

## Declaration

```swift
func beginUserRegistration(loginManager: ASAuthorizationProviderExtensionLoginManager, userName: String?, method authenticationMethod: ASAuthorizationProviderExtensionAuthenticationMethod, options: ASAuthorizationProviderExtensionRequestOptions = [], completion: @escaping @Sendable (ASAuthorizationProviderExtensionRegistrationResult) -> Void)
```

```swift
func beginUserRegistration(loginManager: ASAuthorizationProviderExtensionLoginManager, userName: String?, method authenticationMethod: ASAuthorizationProviderExtensionAuthenticationMethod, options: ASAuthorizationProviderExtensionRequestOptions = []) async -> ASAuthorizationProviderExtensionRegistrationResult
```

## Parameters

- `loginManager`: The login manager for interfacing with platform SSO.
- `userName`: The user name for the user registration.
- `authenticationMethod`: The authentication method to use for the user.
- `options`: The request options that apply to the request.
- `completion`: The completion to call to continue user registration.

## Mentioned In

- [Registering devices and users](../registering-devices-and-users.md)

<a id="Discussion"></a>

## Discussion

The completion handler returns the status as an [ASAuthorizationProviderExtensionRegistrationResult](../asauthorizationproviderextensionregistrationresult.md).

## See Also

### Registering users and devices

- [beginDeviceRegistration(loginManager:options:completion:)](begindeviceregistration%28loginmanager_options_completion_%29.md): Initiates the device registration process for the single sign-on extension.
- [registrationDidComplete()](registrationdidcomplete%28%29.md): Calls the extension to allow it to complete registration.

# beginUserRegistrationUsingLoginManager:userName:authenticationMethod:options:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Initiates the user registration process for the user and the single sign-on extension.

## Declaration

```objectivec
- (void) beginUserRegistrationUsingLoginManager:(ASAuthorizationProviderExtensionLoginManager *) loginManager userName:(NSString *) userName authenticationMethod:(ASAuthorizationProviderExtensionAuthenticationMethod) authenticationMethod options:(ASAuthorizationProviderExtensionRequestOptions) options completion:(void (^)(ASAuthorizationProviderExtensionRegistrationResult result)) completion;
```

## Parameters

- `loginManager`: The login manager for interfacing with platform SSO.
- `userName`: The user name for the user registration.
- `authenticationMethod`: The authentication method to use for the user.
- `options`: The request options that apply to the request.
- `completion`: The completion to call to continue user registration.

## Mentioned In

- [Registering devices and users](../registering-devices-and-users.md)

<a id="Discussion"></a>

## Discussion

The completion handler returns the status as an [ASAuthorizationProviderExtensionRegistrationResult](../asauthorizationproviderextensionregistrationresult.md).

## See Also

### Registering users and devices

- [beginDeviceRegistrationUsingLoginManager:options:completion:](begindeviceregistration%28loginmanager_options_completion_%29.md): Initiates the device registration process for the single sign-on extension.
- [registrationDidComplete](registrationdidcomplete%28%29.md): Calls the extension to allow it to complete registration.
