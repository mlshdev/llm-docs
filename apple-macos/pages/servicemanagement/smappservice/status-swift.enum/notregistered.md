> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smappservice/status-swift.enum/notregistered](https://developer.apple.com/documentation/servicemanagement/smappservice/status-swift.enum/notregistered)

# SMAppService.Status.notRegistered (Swift)

**Framework:** Service Management  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The service hasn’t registered with the Service Management framework, or the service attempted to reregister after it was already registered.

## Declaration

```swift
case notRegistered
```

## See Also

### Constants

- [SMAppService.Status.enabled](enabled.md): The service has been successfully registered and is eligible to run.
- [SMAppService.Status.requiresApproval](requiresapproval.md): The service has been successfully registered, but the user needs to take action in System Preferences.
- [SMAppService.Status.notFound](notfound.md): An error occurred and the framework couldn’t find this service.

# SMAppServiceStatusNotRegistered (Objective-C)

**Framework:** Service Management  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The service hasn’t registered with the Service Management framework, or the service attempted to reregister after it was already registered.

## Declaration

```objectivec
SMAppServiceStatusNotRegistered
```

## See Also

### Constants

- [SMAppServiceStatusEnabled](enabled.md): The service has been successfully registered and is eligible to run.
- [SMAppServiceStatusRequiresApproval](requiresapproval.md): The service has been successfully registered, but the user needs to take action in System Preferences.
- [SMAppServiceStatusNotFound](notfound.md): An error occurred and the framework couldn’t find this service.
