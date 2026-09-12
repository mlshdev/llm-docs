> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthenticationmethod](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthenticationmethod)

# ASAuthorizationProviderExtensionAuthenticationMethod (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

The platform single sign-on method for the user.

## Declaration

```swift
enum ASAuthorizationProviderExtensionAuthenticationMethod
```

## Topics

### Identifying the methods

- [ASAuthorizationProviderExtensionAuthenticationMethod.password](asauthorizationproviderextensionauthenticationmethod/password.md): Password authentication.
- [ASAuthorizationProviderExtensionAuthenticationMethod.userSecureEnclaveKey](asauthorizationproviderextensionauthenticationmethod/usersecureenclavekey.md): Secure Enclave key authentication.

### Enumeration Cases

- [ASAuthorizationProviderExtensionAuthenticationMethod.smartCard](asauthorizationproviderextensionauthenticationmethod/smartcard.md)
- [ASAuthorizationProviderExtensionAuthenticationMethod.openID](asauthorizationproviderextensionauthenticationmethod/openid.md)

### Initializers

- [init(rawValue:)](asauthorizationproviderextensionauthenticationmethod/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Creating extensions that support Platform SSO](creating-extensions-that-support-platform-sso.md): Configure capabilities and authentication options for extensions.
- [Registering devices and users](registering-devices-and-users.md): Implement device and user registration.
- [ASAuthorizationProviderExtensionRegistrationHandler](asauthorizationproviderextensionregistrationhandler.md): An interface through which a single sign-on (SSO) authentication provider extension registers users and devices for platform SSO.
- [ASAuthorizationProviderExtensionRequestOptions](asauthorizationproviderextensionrequestoptions.md): The options for the extension to obtain the status of the registration.
- [ASAuthorizationProviderExtensionRegistrationResult](asauthorizationproviderextensionregistrationresult.md): The registration result.

# ASAuthorizationProviderExtensionAuthenticationMethod (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

The platform single sign-on method for the user.

## Declaration

```objectivec
enum ASAuthorizationProviderExtensionAuthenticationMethod : NSInteger;
```

## Topics

### Identifying the methods

- [ASAuthorizationProviderExtensionAuthenticationMethodPassword](asauthorizationproviderextensionauthenticationmethod/password.md): Password authentication.
- [ASAuthorizationProviderExtensionAuthenticationMethodUserSecureEnclaveKey](asauthorizationproviderextensionauthenticationmethod/usersecureenclavekey.md): Secure Enclave key authentication.

### Enumeration Cases

- [ASAuthorizationProviderExtensionAuthenticationMethodSmartCard](asauthorizationproviderextensionauthenticationmethod/smartcard.md)
- [ASAuthorizationProviderExtensionAuthenticationMethodOpenID](asauthorizationproviderextensionauthenticationmethod/openid.md)

## See Also

### Essentials

- [Creating extensions that support Platform SSO](creating-extensions-that-support-platform-sso.md): Configure capabilities and authentication options for extensions.
- [Registering devices and users](registering-devices-and-users.md): Implement device and user registration.
- [ASAuthorizationProviderExtensionRegistrationHandler](asauthorizationproviderextensionregistrationhandler.md): An interface through which a single sign-on (SSO) authentication provider extension registers users and devices for platform SSO.
- [ASAuthorizationProviderExtensionRequestOptions](asauthorizationproviderextensionrequestoptions.md): The options for the extension to obtain the status of the registration.
- [ASAuthorizationProviderExtensionRegistrationResult](asauthorizationproviderextensionregistrationresult.md): The registration result.
