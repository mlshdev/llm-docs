> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkerror](https://developer.apple.com/documentation/healthkit/hkerror)

# HKError

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An error returned from a HealthKit method.

## Declaration

```swift
struct HKError
```

## Topics

### Accessing errors

- [HKError.Code](hkerror/code.md): Error codes returned by HealthKit.
- [noError](hkerror/noerror.md): Deprecated. No error occurred.
- [errorHealthDataUnavailable](hkerror/errorhealthdataunavailable.md): The user accessed HealthKit on an unsupported device.
- [errorHealthDataRestricted](hkerror/errorhealthdatarestricted.md): A Mobile Device Management (MDM) profile restricts the use of HealthKit on this device.
- [errorInvalidArgument](hkerror/errorinvalidargument.md): The app passed an invalid argument to the HealthKit API.
- [errorAuthorizationDenied](hkerror/errorauthorizationdenied.md): The user hasn’t given the app permission to save data.
- [errorAuthorizationNotDetermined](hkerror/errorauthorizationnotdetermined.md): The app hasn’t yet asked the user for the authorization required to complete the task.
- [errorRequiredAuthorizationDenied](hkerror/errorrequiredauthorizationdenied.md): The user hasn’t granted the application authorization to access all the required clinical record types.
- [errorDatabaseInaccessible](hkerror/errordatabaseinaccessible.md): The HealthKit data is unavailable because it’s protected and the device is locked.
- [errorUserCanceled](hkerror/errorusercanceled.md): The user canceled the operation.
- [errorAnotherWorkoutSessionStarted](hkerror/erroranotherworkoutsessionstarted.md): Another app started a workout session.
- [errorUserExitedWorkoutSession](hkerror/erroruserexitedworkoutsession.md): The user exited your application while a workout session was running.
- [errorNoData](hkerror/errornodata.md): Data is unavailable for the requested query and predicate.

### Type Properties

- [errorBackgroundWorkoutSessionNotAllowed](hkerror/errorbackgroundworkoutsessionnotallowed.md)
- [errorDataSizeExceeded](hkerror/errordatasizeexceeded.md)
- [errorDomain](hkerror/errordomain.md)
- [errorNotPermissibleForGuestUserMode](hkerror/errornotpermissibleforguestusermode.md): The app attempted to write HealthKit data while in a Guest User session in visionOS.
- [errorWorkoutActivityNotAllowed](hkerror/errorworkoutactivitynotallowed.md)
- [unknownError](hkerror/unknownerror.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [HKErrorDomain](hkerrordomain.md): The domain for all HealthKit errors.
- [HKError.Code](hkerror/code.md): Error codes returned by HealthKit.
