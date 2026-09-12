> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionregistrationresult](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionregistrationresult)

# ASAuthorizationProviderExtensionRegistrationResult (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

The registration result.

## Declaration

```swift
enum ASAuthorizationProviderExtensionRegistrationResult
```

## Mentioned In

- [Registering devices and users](registering-devices-and-users.md)

## Topics

### Identifying the results

- [ASAuthorizationProviderExtensionRegistrationResult.failed](asauthorizationproviderextensionregistrationresult/failed.md): The registration fails to complete and the system retries later.
- [ASAuthorizationProviderExtensionRegistrationResult.failedNoRetry](asauthorizationproviderextensionregistrationresult/failednoretry.md): The registration fails to complete and the system doesn’t retry later.
- [ASAuthorizationProviderExtensionRegistrationResult.success](asauthorizationproviderextensionregistrationresult/success.md): The registration succeeds.
- [ASAuthorizationProviderExtensionRegistrationResult.userInterfaceRequired](asauthorizationproviderextensionregistrationresult/userinterfacerequired.md): The user interface is required to complete registration.

### Initializers

- [init(rawValue:)](asauthorizationproviderextensionregistrationresult/init%28rawvalue_%29.md)

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
- [ASAuthorizationProviderExtensionAuthenticationMethod](asauthorizationproviderextensionauthenticationmethod.md): The platform single sign-on method for the user.
- [ASAuthorizationProviderExtensionRequestOptions](asauthorizationproviderextensionrequestoptions.md): The options for the extension to obtain the status of the registration.

# ASAuthorizationProviderExtensionRegistrationResult (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

The registration result.

## Declaration

```objectivec
enum ASAuthorizationProviderExtensionRegistrationResult : NSInteger;
```

## Mentioned In

- [Registering devices and users](registering-devices-and-users.md)

## Topics

### Identifying the results

- [ASAuthorizationProviderExtensionRegistrationResultFailed](asauthorizationproviderextensionregistrationresult/failed.md): The registration fails to complete and the system retries later.
- [ASAuthorizationProviderExtensionRegistrationResultFailedNoRetry](asauthorizationproviderextensionregistrationresult/failednoretry.md): The registration fails to complete and the system doesn’t retry later.
- [ASAuthorizationProviderExtensionRegistrationResultSuccess](asauthorizationproviderextensionregistrationresult/success.md): The registration succeeds.
- [ASAuthorizationProviderExtensionRegistrationResultUserInterfaceRequired](asauthorizationproviderextensionregistrationresult/userinterfacerequired.md): The user interface is required to complete registration.

## See Also

### Essentials

- [Creating extensions that support Platform SSO](creating-extensions-that-support-platform-sso.md): Configure capabilities and authentication options for extensions.
- [Registering devices and users](registering-devices-and-users.md): Implement device and user registration.
- [ASAuthorizationProviderExtensionRegistrationHandler](asauthorizationproviderextensionregistrationhandler.md): An interface through which a single sign-on (SSO) authentication provider extension registers users and devices for platform SSO.
- [ASAuthorizationProviderExtensionAuthenticationMethod](asauthorizationproviderextensionauthenticationmethod.md): The platform single sign-on method for the user.
- [ASAuthorizationProviderExtensionRequestOptions](asauthorizationproviderextensionrequestoptions.md): The options for the extension to obtain the status of the registration.
