> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smappservice/status-swift.enum/enabled](https://developer.apple.com/documentation/servicemanagement/smappservice/status-swift.enum/enabled)

# SMAppService.Status.enabled (Swift)

**Framework:** Service Management  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The service has been successfully registered and is eligible to run.

## Declaration

```swift
case enabled
```

## See Also

### Constants

- [SMAppService.Status.notRegistered](notregistered.md): The service hasn’t registered with the Service Management framework, or the service attempted to reregister after it was already registered.
- [SMAppService.Status.requiresApproval](requiresapproval.md): The service has been successfully registered, but the user needs to take action in System Preferences.
- [SMAppService.Status.notFound](notfound.md): An error occurred and the framework couldn’t find this service.

# SMAppServiceStatusEnabled (Objective-C)

**Framework:** Service Management  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The service has been successfully registered and is eligible to run.

## Declaration

```objectivec
SMAppServiceStatusEnabled
```

## See Also

### Constants

- [SMAppServiceStatusNotRegistered](notregistered.md): The service hasn’t registered with the Service Management framework, or the service attempted to reregister after it was already registered.
- [SMAppServiceStatusRequiresApproval](requiresapproval.md): The service has been successfully registered, but the user needs to take action in System Preferences.
- [SMAppServiceStatusNotFound](notfound.md): An error occurred and the framework couldn’t find this service.
