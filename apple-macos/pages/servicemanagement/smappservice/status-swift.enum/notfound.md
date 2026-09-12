> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smappservice/status-swift.enum/notfound](https://developer.apple.com/documentation/servicemanagement/smappservice/status-swift.enum/notfound)

# SMAppService.Status.notFound (Swift)

**Framework:** Service Management  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

An error occurred and the framework couldn’t find this service.

## Declaration

```swift
case notFound
```

## See Also

### Constants

- [SMAppService.Status.notRegistered](notregistered.md): The service hasn’t registered with the Service Management framework, or the service attempted to reregister after it was already registered.
- [SMAppService.Status.enabled](enabled.md): The service has been successfully registered and is eligible to run.
- [SMAppService.Status.requiresApproval](requiresapproval.md): The service has been successfully registered, but the user needs to take action in System Preferences.

# SMAppServiceStatusNotFound (Objective-C)

**Framework:** Service Management  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

An error occurred and the framework couldn’t find this service.

## Declaration

```objectivec
SMAppServiceStatusNotFound
```

## See Also

### Constants

- [SMAppServiceStatusNotRegistered](notregistered.md): The service hasn’t registered with the Service Management framework, or the service attempted to reregister after it was already registered.
- [SMAppServiceStatusEnabled](enabled.md): The service has been successfully registered and is eligible to run.
- [SMAppServiceStatusRequiresApproval](requiresapproval.md): The service has been successfully registered, but the user needs to take action in System Preferences.
