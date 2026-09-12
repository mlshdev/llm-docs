> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smappservice/status-swift.enum/requiresapproval](https://developer.apple.com/documentation/servicemanagement/smappservice/status-swift.enum/requiresapproval)

# SMAppService.Status.requiresApproval (Swift)

**Framework:** Service Management  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The service has been successfully registered, but the user needs to take action in System Preferences.

## Declaration

```swift
case requiresApproval
```

<a id="Discussion"></a>

## Discussion

The Service Management framework successfully registered this service, but the user needs to take action in System Settings before the service is eligible to run. The framework also returns this status if the user revokes consent for the service to run in System Settings.

## See Also

### Constants

- [SMAppService.Status.notRegistered](notregistered.md): The service hasn’t registered with the Service Management framework, or the service attempted to reregister after it was already registered.
- [SMAppService.Status.enabled](enabled.md): The service has been successfully registered and is eligible to run.
- [SMAppService.Status.notFound](notfound.md): An error occurred and the framework couldn’t find this service.

# SMAppServiceStatusRequiresApproval (Objective-C)

**Framework:** Service Management  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The service has been successfully registered, but the user needs to take action in System Preferences.

## Declaration

```objectivec
SMAppServiceStatusRequiresApproval
```

<a id="Discussion"></a>

## Discussion

The Service Management framework successfully registered this service, but the user needs to take action in System Settings before the service is eligible to run. The framework also returns this status if the user revokes consent for the service to run in System Settings.

## See Also

### Constants

- [SMAppServiceStatusNotRegistered](notregistered.md): The service hasn’t registered with the Service Management framework, or the service attempted to reregister after it was already registered.
- [SMAppServiceStatusEnabled](enabled.md): The service has been successfully registered and is eligible to run.
- [SMAppServiceStatusNotFound](notfound.md): An error occurred and the framework couldn’t find this service.
