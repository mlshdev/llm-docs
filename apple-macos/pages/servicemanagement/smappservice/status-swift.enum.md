> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smappservice/status-swift.enum](https://developer.apple.com/documentation/servicemanagement/smappservice/status-swift.enum)

# SMAppService.Status (Swift)

**Framework:** Service Management  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

Constants that describe the registration or authorization status of a helper executable.

## Declaration

```swift
enum Status
```

## Mentioned In

- [Updating helper executables from earlier versions of macOS](../updating-helper-executables-from-earlier-versions-of-macos.md)

## Topics

### Constants

- [SMAppService.Status.notRegistered](status-swift.enum/notregistered.md): The service hasn’t registered with the Service Management framework, or the service attempted to reregister after it was already registered.
- [SMAppService.Status.enabled](status-swift.enum/enabled.md): The service has been successfully registered and is eligible to run.
- [SMAppService.Status.requiresApproval](status-swift.enum/requiresapproval.md): The service has been successfully registered, but the user needs to take action in System Preferences.
- [SMAppService.Status.notFound](status-swift.enum/notfound.md): An error occurred and the framework couldn’t find this service.

### Initializers

- [init(rawValue:)](status-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SMAppServiceStatus (Objective-C)

**Framework:** Service Management  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

Constants that describe the registration or authorization status of a helper executable.

## Declaration

```objectivec
enum SMAppServiceStatus : NSInteger;
```

## Mentioned In

- [Updating helper executables from earlier versions of macOS](../updating-helper-executables-from-earlier-versions-of-macos.md)

## Topics

### Constants

- [SMAppServiceStatusNotRegistered](status-swift.enum/notregistered.md): The service hasn’t registered with the Service Management framework, or the service attempted to reregister after it was already registered.
- [SMAppServiceStatusEnabled](status-swift.enum/enabled.md): The service has been successfully registered and is eligible to run.
- [SMAppServiceStatusRequiresApproval](status-swift.enum/requiresapproval.md): The service has been successfully registered, but the user needs to take action in System Preferences.
- [SMAppServiceStatusNotFound](status-swift.enum/notfound.md): An error occurred and the framework couldn’t find this service.
