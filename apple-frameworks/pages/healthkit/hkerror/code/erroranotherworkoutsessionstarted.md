> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkerror/code/erroranotherworkoutsessionstarted](https://developer.apple.com/documentation/healthkit/hkerror/code/erroranotherworkoutsessionstarted)

# HKError.Code.errorAnotherWorkoutSessionStarted (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Another app started a workout session.

## Declaration

```swift
case errorAnotherWorkoutSessionStarted
```

<a id="Discussion"></a>

## Discussion

This error occurs whenever a second workout session is started. Apple Watch only runs one workout session at a time. If the user begins a second workout session in a different app, the original session receives this error message and then ends. The second session then starts.

## See Also

### Errors

- [HKError.Code.errorHealthDataUnavailable](errorhealthdataunavailable.md): HealthKit accessed on an unsupported device, such as an iPad.
- [HKError.Code.errorHealthDataRestricted](errorhealthdatarestricted.md): A Mobile Device Management (MDM) profile restricts the use of HealthKit on this device.
- [HKError.Code.errorInvalidArgument](errorinvalidargument.md): The app passed an invalid argument to the HealthKit API.
- [HKError.Code.errorAuthorizationDenied](errorauthorizationdenied.md): The user hasn’t given the app permission to save data.
- [HKError.Code.errorAuthorizationNotDetermined](errorauthorizationnotdetermined.md): The app hasn’t yet asked the user for the authorization required to complete the task.
- [HKError.Code.errorRequiredAuthorizationDenied](errorrequiredauthorizationdenied.md): The user hasn’t granted the application authorization to access all the required clinical record types.
- [HKError.Code.errorDatabaseInaccessible](errordatabaseinaccessible.md): The HealthKit data is unavailable because it’s protected and the device is locked.
- [HKError.Code.errorUserCanceled](errorusercanceled.md): The user canceled the operation.
- [HKError.Code.errorUserExitedWorkoutSession](erroruserexitedworkoutsession.md): The user exited your application while a workout session was running.
- [HKError.Code.errorNoData](errornodata.md): Data is unavailable for the requested query and predicate.

# HKErrorAnotherWorkoutSessionStarted (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Another app started a workout session.

## Declaration

```objectivec
HKErrorAnotherWorkoutSessionStarted
```

<a id="Discussion"></a>

## Discussion

This error occurs whenever a second workout session is started. Apple Watch only runs one workout session at a time. If the user begins a second workout session in a different app, the original session receives this error message and then ends. The second session then starts.

## See Also

### Errors

- [HKErrorHealthDataUnavailable](errorhealthdataunavailable.md): HealthKit accessed on an unsupported device, such as an iPad.
- [HKErrorHealthDataRestricted](errorhealthdatarestricted.md): A Mobile Device Management (MDM) profile restricts the use of HealthKit on this device.
- [HKErrorInvalidArgument](errorinvalidargument.md): The app passed an invalid argument to the HealthKit API.
- [HKErrorAuthorizationDenied](errorauthorizationdenied.md): The user hasn’t given the app permission to save data.
- [HKErrorAuthorizationNotDetermined](errorauthorizationnotdetermined.md): The app hasn’t yet asked the user for the authorization required to complete the task.
- [HKErrorRequiredAuthorizationDenied](errorrequiredauthorizationdenied.md): The user hasn’t granted the application authorization to access all the required clinical record types.
- [HKErrorDatabaseInaccessible](errordatabaseinaccessible.md): The HealthKit data is unavailable because it’s protected and the device is locked.
- [HKErrorUserCanceled](errorusercanceled.md): The user canceled the operation.
- [HKErrorUserExitedWorkoutSession](erroruserexitedworkoutsession.md): The user exited your application while a workout session was running.
- [HKErrorNoData](errornodata.md): Data is unavailable for the requested query and predicate.
