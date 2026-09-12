> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkerror/code/errornodata](https://developer.apple.com/documentation/healthkit/hkerror/code/errornodata)

# HKError.Code.errorNoData (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Data is unavailable for the requested query and predicate.

## Declaration

```swift
case errorNoData
```

<a id="Discussion"></a>

## Discussion

This error indicates that no data exists that corresponds to a particular query, so the system can’t calculate the query’s result. [HKStatisticsQuery](../../hkstatisticsquery.md) queries return this error when HealthKit can’t return the data needed to calculate the statistics.

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
- [HKError.Code.errorAnotherWorkoutSessionStarted](erroranotherworkoutsessionstarted.md): Another app started a workout session.
- [HKError.Code.errorUserExitedWorkoutSession](erroruserexitedworkoutsession.md): The user exited your application while a workout session was running.

# HKErrorNoData (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Data is unavailable for the requested query and predicate.

## Declaration

```objectivec
HKErrorNoData
```

<a id="Discussion"></a>

## Discussion

This error indicates that no data exists that corresponds to a particular query, so the system can’t calculate the query’s result. [HKStatisticsQuery](../../hkstatisticsquery.md) queries return this error when HealthKit can’t return the data needed to calculate the statistics.

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
- [HKErrorAnotherWorkoutSessionStarted](erroranotherworkoutsessionstarted.md): Another app started a workout session.
- [HKErrorUserExitedWorkoutSession](erroruserexitedworkoutsession.md): The user exited your application while a workout session was running.
