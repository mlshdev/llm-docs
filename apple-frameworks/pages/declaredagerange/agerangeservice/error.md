> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/agerangeservice/error](https://developer.apple.com/documentation/declaredagerange/agerangeservice/error)

# AgeRangeService.Error

**Framework:** Declared Age Range  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

An error that occurs when an age range request fails.

## Declaration

```swift
enum Error
```

## Topics

### Interpreting error responses

- [AgeRangeService.Error.notAvailable](error/notavailable.md): Indicates the system was unable to share the person’s age range.
- [AgeRangeService.Error.invalidRequest](error/invalidrequest.md): Indicates your request contains invalid parameters or configuration.

### Enumeration Cases

- [AgeRangeService.Error.declinedOnboarding](error/declinedonboarding.md): Indicates the person declined the age range onboarding flow.
- [AgeRangeService.Error.invalidAccount](error/invalidaccount.md): Indicates the current Apple Account isn’t eligible for age range sharing.
- [AgeRangeService.Error.network](error/network.md): Indicates a network or server issue prevented completing the age range request.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
