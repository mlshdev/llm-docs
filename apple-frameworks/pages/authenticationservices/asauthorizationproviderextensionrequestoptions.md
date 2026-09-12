> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionrequestoptions](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionrequestoptions)

# ASAuthorizationProviderExtensionRequestOptions (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** macOS 13.0+

The options for the extension to obtain the status of the registration.

## Declaration

```swift
struct ASAuthorizationProviderExtensionRequestOptions
```

## Topics

### Creating the options

- [init(rawValue:)](asauthorizationproviderextensionrequestoptions/init%28rawvalue_%29.md): Creates the request options.

### Identifying the options

- [registrationRepair](asauthorizationproviderextensionrequestoptions/registrationrepair.md): Indicates that the registration is undergoing repair.
- [userInteractionEnabled](asauthorizationproviderextensionrequestoptions/userinteractionenabled.md): Indicates that the user interface is in an enabled state.

### Type Properties

- [registrationDeviceKeyMigration](asauthorizationproviderextensionrequestoptions/registrationdevicekeymigration.md)
- [registrationSharedDeviceKeys](asauthorizationproviderextensionrequestoptions/registrationshareddevicekeys.md)
- [userKeyInvalid](asauthorizationproviderextensionrequestoptions/userkeyinvalid.md)
- [setupAssistant](asauthorizationproviderextensionrequestoptions/setupassistant.md)
- [strongerKeyAvailable](asauthorizationproviderextensionrequestoptions/strongerkeyavailable.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Essentials

- [Creating extensions that support Platform SSO](creating-extensions-that-support-platform-sso.md): Configure capabilities and authentication options for extensions.
- [Registering devices and users](registering-devices-and-users.md): Implement device and user registration.
- [ASAuthorizationProviderExtensionRegistrationHandler](asauthorizationproviderextensionregistrationhandler.md): An interface through which a single sign-on (SSO) authentication provider extension registers users and devices for platform SSO.
- [ASAuthorizationProviderExtensionAuthenticationMethod](asauthorizationproviderextensionauthenticationmethod.md): The platform single sign-on method for the user.
- [ASAuthorizationProviderExtensionRegistrationResult](asauthorizationproviderextensionregistrationresult.md): The registration result.

# ASAuthorizationProviderExtensionRequestOptions (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The options for the extension to obtain the status of the registration.

## Declaration

```objectivec
enum ASAuthorizationProviderExtensionRequestOptions : NSUInteger;
```

## Topics

### Identifying the options

- [ASAuthorizationProviderExtensionRequestOptionsNone](asauthorizationproviderextensionrequestoptions/asauthorizationproviderextensionrequestoptionsnone.md): Options aren’t available.
- [ASAuthorizationProviderExtensionRequestOptionsRegistrationRepair](asauthorizationproviderextensionrequestoptions/registrationrepair.md): Indicates that the registration is undergoing repair.
- [ASAuthorizationProviderExtensionRequestOptionsUserInteractionEnabled](asauthorizationproviderextensionrequestoptions/userinteractionenabled.md): Indicates that the user interface is in an enabled state.

### Type Properties

- [ASAuthorizationProviderExtensionRequestOptionsRegistrationDeviceKeyMigration](asauthorizationproviderextensionrequestoptions/registrationdevicekeymigration.md)
- [ASAuthorizationProviderExtensionRequestOptionsRegistrationSharedDeviceKeys](asauthorizationproviderextensionrequestoptions/registrationshareddevicekeys.md)
- [ASAuthorizationProviderExtensionRequestOptionsUserKeyInvalid](asauthorizationproviderextensionrequestoptions/userkeyinvalid.md)

### Enumeration Cases

- [ASAuthorizationProviderExtensionRequestOptionsOpenIDFallback](asauthorizationproviderextensionrequestoptions/asauthorizationproviderextensionrequestoptionsopenidfallback.md)
- [ASAuthorizationProviderExtensionRequestOptionsSetupAssistant](asauthorizationproviderextensionrequestoptions/setupassistant.md)
- [ASAuthorizationProviderExtensionRequestOptionsStrongerKeyAvailable](asauthorizationproviderextensionrequestoptions/strongerkeyavailable.md)

## See Also

### Essentials

- [Creating extensions that support Platform SSO](creating-extensions-that-support-platform-sso.md): Configure capabilities and authentication options for extensions.
- [Registering devices and users](registering-devices-and-users.md): Implement device and user registration.
- [ASAuthorizationProviderExtensionRegistrationHandler](asauthorizationproviderextensionregistrationhandler.md): An interface through which a single sign-on (SSO) authentication provider extension registers users and devices for platform SSO.
- [ASAuthorizationProviderExtensionAuthenticationMethod](asauthorizationproviderextensionauthenticationmethod.md): The platform single sign-on method for the user.
- [ASAuthorizationProviderExtensionRegistrationResult](asauthorizationproviderextensionregistrationresult.md): The registration result.
