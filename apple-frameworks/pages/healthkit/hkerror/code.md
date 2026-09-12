> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkerror/code](https://developer.apple.com/documentation/healthkit/hkerror/code)

# HKError.Code (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Error codes returned by HealthKit.

## Declaration

```swift
enum Code
```

## Mentioned In

- [Executing Statistics Collection Queries](../executing-statistics-collection-queries.md)

## Topics

### Errors

- [HKError.Code.errorHealthDataUnavailable](code/errorhealthdataunavailable.md): HealthKit accessed on an unsupported device, such as an iPad.
- [HKError.Code.errorHealthDataRestricted](code/errorhealthdatarestricted.md): A Mobile Device Management (MDM) profile restricts the use of HealthKit on this device.
- [HKError.Code.errorInvalidArgument](code/errorinvalidargument.md): The app passed an invalid argument to the HealthKit API.
- [HKError.Code.errorAuthorizationDenied](code/errorauthorizationdenied.md): The user hasn’t given the app permission to save data.
- [HKError.Code.errorAuthorizationNotDetermined](code/errorauthorizationnotdetermined.md): The app hasn’t yet asked the user for the authorization required to complete the task.
- [HKError.Code.errorRequiredAuthorizationDenied](code/errorrequiredauthorizationdenied.md): The user hasn’t granted the application authorization to access all the required clinical record types.
- [HKError.Code.errorDatabaseInaccessible](code/errordatabaseinaccessible.md): The HealthKit data is unavailable because it’s protected and the device is locked.
- [HKError.Code.errorUserCanceled](code/errorusercanceled.md): The user canceled the operation.
- [HKError.Code.errorAnotherWorkoutSessionStarted](code/erroranotherworkoutsessionstarted.md): Another app started a workout session.
- [HKError.Code.errorUserExitedWorkoutSession](code/erroruserexitedworkoutsession.md): The user exited your application while a workout session was running.
- [HKError.Code.errorNoData](code/errornodata.md): Data is unavailable for the requested query and predicate.

### Enumeration Cases

- [HKError.Code.errorBackgroundWorkoutSessionNotAllowed](code/errorbackgroundworkoutsessionnotallowed.md)
- [HKError.Code.errorDataSizeExceeded](code/errordatasizeexceeded.md)
- [HKError.Code.errorNotPermissibleForGuestUserMode](code/errornotpermissibleforguestusermode.md): The app attempted to write HealthKit data while in a Guest User session in visionOS.
- [HKError.Code.errorWorkoutActivityNotAllowed](code/errorworkoutactivitynotallowed.md)
- [HKError.Code.unknownError](code/unknownerror.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

### Type Properties

- [noError](code/noerror.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [HKError](../hkerror.md): An error returned from a HealthKit method.
- [HKErrorDomain](../hkerrordomain.md): The domain for all HealthKit errors.

# HKErrorCode (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Error codes returned by HealthKit.

## Declaration

```objectivec
enum HKErrorCode : NSInteger;
```

## Mentioned In

- [Executing Statistics Collection Queries](../executing-statistics-collection-queries.md)

## Topics

### Errors

- [HKErrorHealthDataUnavailable](code/errorhealthdataunavailable.md): HealthKit accessed on an unsupported device, such as an iPad.
- [HKErrorHealthDataRestricted](code/errorhealthdatarestricted.md): A Mobile Device Management (MDM) profile restricts the use of HealthKit on this device.
- [HKErrorInvalidArgument](code/errorinvalidargument.md): The app passed an invalid argument to the HealthKit API.
- [HKErrorAuthorizationDenied](code/errorauthorizationdenied.md): The user hasn’t given the app permission to save data.
- [HKErrorAuthorizationNotDetermined](code/errorauthorizationnotdetermined.md): The app hasn’t yet asked the user for the authorization required to complete the task.
- [HKErrorRequiredAuthorizationDenied](code/errorrequiredauthorizationdenied.md): The user hasn’t granted the application authorization to access all the required clinical record types.
- [HKErrorDatabaseInaccessible](code/errordatabaseinaccessible.md): The HealthKit data is unavailable because it’s protected and the device is locked.
- [HKErrorUserCanceled](code/errorusercanceled.md): The user canceled the operation.
- [HKErrorAnotherWorkoutSessionStarted](code/erroranotherworkoutsessionstarted.md): Another app started a workout session.
- [HKErrorUserExitedWorkoutSession](code/erroruserexitedworkoutsession.md): The user exited your application while a workout session was running.
- [HKErrorNoData](code/errornodata.md): Data is unavailable for the requested query and predicate.

### Enumeration Cases

- [HKErrorBackgroundWorkoutSessionNotAllowed](code/errorbackgroundworkoutsessionnotallowed.md)
- [HKErrorDataSizeExceeded](code/errordatasizeexceeded.md)
- [HKErrorNotPermissibleForGuestUserMode](code/errornotpermissibleforguestusermode.md): The app attempted to write HealthKit data while in a Guest User session in visionOS.
- [HKErrorWorkoutActivityNotAllowed](code/errorworkoutactivitynotallowed.md)
- [HKUnknownError](code/unknownerror.md)
- [HKNoError](../hkerrorcode/hknoerror.md): Deprecated.

## See Also

### Errors

- [HKErrorDomain](../hkerrordomain.md): The domain for all HealthKit errors.
