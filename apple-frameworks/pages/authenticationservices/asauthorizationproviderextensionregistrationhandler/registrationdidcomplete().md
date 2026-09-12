> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler/registrationdidcomplete()](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler/registrationdidcomplete())

# registrationDidComplete() (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Calls the extension to allow it to complete registration.

## Declaration

```swift
optional func registrationDidComplete()
```

<a id="Discussion"></a>

## Discussion

The system calls this method once after all current registration calls complete. The extension may free any resources it allocates during registration.

## See Also

### Registering users and devices

- [beginDeviceRegistration(loginManager:options:completion:)](begindeviceregistration%28loginmanager_options_completion_%29.md): Initiates the device registration process for the single sign-on extension.
- [beginUserRegistration(loginManager:userName:method:options:completion:)](beginuserregistration%28loginmanager_username_method_options_completion_%29.md): Initiates the user registration process for the user and the single sign-on extension.

# registrationDidComplete (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Calls the extension to allow it to complete registration.

## Declaration

```objectivec
- (void) registrationDidComplete;
```

<a id="Discussion"></a>

## Discussion

The system calls this method once after all current registration calls complete. The extension may free any resources it allocates during registration.

## See Also

### Registering users and devices

- [beginDeviceRegistrationUsingLoginManager:options:completion:](begindeviceregistration%28loginmanager_options_completion_%29.md): Initiates the device registration process for the single sign-on extension.
- [beginUserRegistrationUsingLoginManager:userName:authenticationMethod:options:completion:](beginuserregistration%28loginmanager_username_method_options_completion_%29.md): Initiates the user registration process for the user and the single sign-on extension.
