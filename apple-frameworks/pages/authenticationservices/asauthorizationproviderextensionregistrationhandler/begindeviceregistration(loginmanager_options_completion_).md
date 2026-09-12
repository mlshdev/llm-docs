> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler/begindeviceregistration(loginmanager:options:completion:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler/begindeviceregistration(loginmanager:options:completion:))

# beginDeviceRegistration(loginManager:options:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Initiates the device registration process for the single sign-on extension.

## Declaration

```swift
func beginDeviceRegistration(loginManager: ASAuthorizationProviderExtensionLoginManager, options: ASAuthorizationProviderExtensionRequestOptions = [], completion: @escaping @Sendable (ASAuthorizationProviderExtensionRegistrationResult) -> Void)
```

```swift
func beginDeviceRegistration(loginManager: ASAuthorizationProviderExtensionLoginManager, options: ASAuthorizationProviderExtensionRequestOptions = []) async -> ASAuthorizationProviderExtensionRegistrationResult
```

## Parameters

- `loginManager`: The login manager for interfacing with platform SSO.
- `options`: The request options that apply to the request.
- `completion`: The completion to call to continue device registration.

## Mentioned In

- [Registering devices and users](../registering-devices-and-users.md)

<a id="Discussion"></a>

## Discussion

The completion handler returns the status as an [ASAuthorizationProviderExtensionRegistrationResult](../asauthorizationproviderextensionregistrationresult.md).

## See Also

### Registering users and devices

- [beginUserRegistration(loginManager:userName:method:options:completion:)](beginuserregistration%28loginmanager_username_method_options_completion_%29.md): Initiates the user registration process for the user and the single sign-on extension.
- [registrationDidComplete()](registrationdidcomplete%28%29.md): Calls the extension to allow it to complete registration.

# beginDeviceRegistrationUsingLoginManager:options:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Initiates the device registration process for the single sign-on extension.

## Declaration

```objectivec
- (void) beginDeviceRegistrationUsingLoginManager:(ASAuthorizationProviderExtensionLoginManager *) loginManager options:(ASAuthorizationProviderExtensionRequestOptions) options completion:(void (^)(ASAuthorizationProviderExtensionRegistrationResult result)) completion;
```

## Parameters

- `loginManager`: The login manager for interfacing with platform SSO.
- `options`: The request options that apply to the request.
- `completion`: The completion to call to continue device registration.

## Mentioned In

- [Registering devices and users](../registering-devices-and-users.md)

<a id="Discussion"></a>

## Discussion

The completion handler returns the status as an [ASAuthorizationProviderExtensionRegistrationResult](../asauthorizationproviderextensionregistrationresult.md).

## See Also

### Registering users and devices

- [beginUserRegistrationUsingLoginManager:userName:authenticationMethod:options:completion:](beginuserregistration%28loginmanager_username_method_options_completion_%29.md): Initiates the user registration process for the user and the single sign-on extension.
- [registrationDidComplete](registrationdidcomplete%28%29.md): Calls the extension to allow it to complete registration.
