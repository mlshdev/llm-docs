> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler)

# ASAuthorizationProviderExtensionRegistrationHandler (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** macOS 13.0+

An interface through which a single sign-on (SSO) authentication provider extension registers users and devices for platform SSO.

## Declaration

```swift
protocol ASAuthorizationProviderExtensionRegistrationHandler : NSObjectProtocol
```

## Mentioned In

- [Registering devices and users](registering-devices-and-users.md)

## Topics

### Registering users and devices

- [beginDeviceRegistration(loginManager:options:completion:)](asauthorizationproviderextensionregistrationhandler/begindeviceregistration%28loginmanager_options_completion_%29.md): Initiates the device registration process for the single sign-on extension.
- [beginUserRegistration(loginManager:userName:method:options:completion:)](asauthorizationproviderextensionregistrationhandler/beginuserregistration%28loginmanager_username_method_options_completion_%29.md): Initiates the user registration process for the user and the single sign-on extension.
- [registrationDidComplete()](asauthorizationproviderextensionregistrationhandler/registrationdidcomplete%28%29.md): Calls the extension to allow it to complete registration.

### Instance Methods

- [protocolVersion()](asauthorizationproviderextensionregistrationhandler/protocolversion%28%29.md)
- [registrationDidCancel()](asauthorizationproviderextensionregistrationhandler/registrationdidcancel%28%29.md)
- [supportedGrantTypes()](asauthorizationproviderextensionregistrationhandler/supportedgranttypes%28%29.md)
- [displayNames(forGroups:using:completion:)](asauthorizationproviderextensionregistrationhandler/displaynames%28forgroups_using_completion_%29.md)
- [keyWillRotate(for:newKey:loginManager:completion:)](asauthorizationproviderextensionregistrationhandler/keywillrotate%28for_newkey_loginmanager_completion_%29.md)
- [profilePictureForUser(using:completion:)](asauthorizationproviderextensionregistrationhandler/profilepictureforuser%28using_completion_%29.md)

### Instance Properties

- [supportedDeviceEncryptionAlgorithms](asauthorizationproviderextensionregistrationhandler/supporteddeviceencryptionalgorithms.md)
- [supportedDeviceSigningAlgorithms](asauthorizationproviderextensionregistrationhandler/supporteddevicesigningalgorithms.md)
- [supportedUserSecureEnclaveKeySigningAlgorithms](asauthorizationproviderextensionregistrationhandler/supportedusersecureenclavekeysigningalgorithms.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Creating extensions that support Platform SSO](creating-extensions-that-support-platform-sso.md): Configure capabilities and authentication options for extensions.
- [Registering devices and users](registering-devices-and-users.md): Implement device and user registration.
- [ASAuthorizationProviderExtensionAuthenticationMethod](asauthorizationproviderextensionauthenticationmethod.md): The platform single sign-on method for the user.
- [ASAuthorizationProviderExtensionRequestOptions](asauthorizationproviderextensionrequestoptions.md): The options for the extension to obtain the status of the registration.
- [ASAuthorizationProviderExtensionRegistrationResult](asauthorizationproviderextensionregistrationresult.md): The registration result.

# ASAuthorizationProviderExtensionRegistrationHandler (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** macOS 13.0+

An interface through which a single sign-on (SSO) authentication provider extension registers users and devices for platform SSO.

## Declaration

```objectivec
@protocol ASAuthorizationProviderExtensionRegistrationHandler <NSObject>
```

## Mentioned In

- [Registering devices and users](registering-devices-and-users.md)

## Topics

### Registering users and devices

- [beginDeviceRegistrationUsingLoginManager:options:completion:](asauthorizationproviderextensionregistrationhandler/begindeviceregistration%28loginmanager_options_completion_%29.md): Initiates the device registration process for the single sign-on extension.
- [beginUserRegistrationUsingLoginManager:userName:authenticationMethod:options:completion:](asauthorizationproviderextensionregistrationhandler/beginuserregistration%28loginmanager_username_method_options_completion_%29.md): Initiates the user registration process for the user and the single sign-on extension.
- [registrationDidComplete](asauthorizationproviderextensionregistrationhandler/registrationdidcomplete%28%29.md): Calls the extension to allow it to complete registration.

### Instance Methods

- [protocolVersion](asauthorizationproviderextensionregistrationhandler/protocolversion%28%29.md)
- [registrationDidCancel](asauthorizationproviderextensionregistrationhandler/registrationdidcancel%28%29.md)
- [supportedGrantTypes](asauthorizationproviderextensionregistrationhandler/supportedgranttypes%28%29.md)
- [displayNamesForGroups:loginManager:completion:](asauthorizationproviderextensionregistrationhandler/displaynames%28forgroups_using_completion_%29.md)
- [keyWillRotateForKeyType:newKey:loginManager:completion:](asauthorizationproviderextensionregistrationhandler/keywillrotate%28for_newkey_loginmanager_completion_%29.md)
- [profilePictureForUserUsingLoginManager:completion:](asauthorizationproviderextensionregistrationhandler/profilepictureforuser%28using_completion_%29.md)

### Instance Properties

- [supportedDeviceEncryptionAlgorithms](asauthorizationproviderextensionregistrationhandler/supporteddeviceencryptionalgorithms.md)
- [supportedDeviceSigningAlgorithms](asauthorizationproviderextensionregistrationhandler/supporteddevicesigningalgorithms.md)
- [supportedUserSecureEnclaveKeySigningAlgorithms](asauthorizationproviderextensionregistrationhandler/supportedusersecureenclavekeysigningalgorithms.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Creating extensions that support Platform SSO](creating-extensions-that-support-platform-sso.md): Configure capabilities and authentication options for extensions.
- [Registering devices and users](registering-devices-and-users.md): Implement device and user registration.
- [ASAuthorizationProviderExtensionAuthenticationMethod](asauthorizationproviderextensionauthenticationmethod.md): The platform single sign-on method for the user.
- [ASAuthorizationProviderExtensionRequestOptions](asauthorizationproviderextensionrequestoptions.md): The options for the extension to obtain the status of the registration.
- [ASAuthorizationProviderExtensionRegistrationResult](asauthorizationproviderextensionregistrationresult.md): The registration result.
