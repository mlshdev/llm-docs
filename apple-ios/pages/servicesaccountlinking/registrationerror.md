> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/servicesaccountlinking/registrationerror](https://developer.apple.com/documentation/servicesaccountlinking/registrationerror)

# RegistrationError

**Framework:** ServicesAccountLinking  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Registration error codes.

## Declaration

```swift
struct RegistrationError
```

## Topics

### Type Properties

- [errorDomain](registrationerror/errordomain.md)
- [failed](registrationerror/failed.md): Registration failed.
- [notEligible](registrationerror/noteligible.md): The application is not registered as an authorized partner.
- [rateLimited](registrationerror/ratelimited.md)

### Enumerations

- [RegistrationError.Code](registrationerror/code.md): Registration error codes.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error handling

- [RegistrationErrorDomain](registrationerrordomain.md): Error domain for account registration failures.
