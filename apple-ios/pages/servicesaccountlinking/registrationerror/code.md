> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/servicesaccountlinking/registrationerror/code](https://developer.apple.com/documentation/servicesaccountlinking/registrationerror/code)

# RegistrationError.Code (Swift)

**Framework:** ServicesAccountLinking  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Registration error codes.

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [RegistrationError.Code.failed](code/failed.md): Registration failed.
- [RegistrationError.Code.notEligible](code/noteligible.md): The application is not registered as an authorized partner.
- [RegistrationError.Code.rateLimited](code/ratelimited.md): The server rate-limited the request.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SALRegistrationError (Objective-C)

**Framework:** ServicesAccountLinking  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Registration error codes.

## Declaration

```objectivec
enum SALRegistrationError : NSInteger;
```

## Topics

### Enumeration Cases

- [SALRegistrationErrorFailed](code/failed.md): Registration failed.
- [SALRegistrationErrorNotEligible](code/noteligible.md): The application is not registered as an authorized partner.
- [SALRegistrationErrorRateLimited](code/ratelimited.md): The server rate-limited the request.
