> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionregistrationresult/failednoretry](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionregistrationresult/failednoretry)

# ASAuthorizationProviderExtensionRegistrationResult.failedNoRetry (Swift)

**Framework:** Authentication Services  
**Kind:** Case  
**Availability:** macOS 13.0+

The registration fails to complete and the system doesn’t retry later.

## Declaration

```swift
case failedNoRetry
```

## Mentioned In

- [Registering devices and users](../registering-devices-and-users.md)

<a id="Discussion"></a>

## Discussion

The system attemps to reregister when the mobile device management (MDM) profile changes, or the extension updates.

## See Also

### Identifying the results

- [ASAuthorizationProviderExtensionRegistrationResult.failed](failed.md): The registration fails to complete and the system retries later.
- [ASAuthorizationProviderExtensionRegistrationResult.success](success.md): The registration succeeds.
- [ASAuthorizationProviderExtensionRegistrationResult.userInterfaceRequired](userinterfacerequired.md): The user interface is required to complete registration.

# ASAuthorizationProviderExtensionRegistrationResultFailedNoRetry (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration Case  
**Availability:** macOS 13.0+

The registration fails to complete and the system doesn’t retry later.

## Declaration

```objectivec
ASAuthorizationProviderExtensionRegistrationResultFailedNoRetry
```

## Mentioned In

- [Registering devices and users](../registering-devices-and-users.md)

<a id="Discussion"></a>

## Discussion

The system attemps to reregister when the mobile device management (MDM) profile changes, or the extension updates.

## See Also

### Identifying the results

- [ASAuthorizationProviderExtensionRegistrationResultFailed](failed.md): The registration fails to complete and the system retries later.
- [ASAuthorizationProviderExtensionRegistrationResultSuccess](success.md): The registration succeeds.
- [ASAuthorizationProviderExtensionRegistrationResultUserInterfaceRequired](userinterfacerequired.md): The user interface is required to complete registration.
