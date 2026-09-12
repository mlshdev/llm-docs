> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkerror/errornodata](https://developer.apple.com/documentation/healthkit/hkerror/errornodata)

# errorNoData

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Data is unavailable for the requested query and predicate.

## Declaration

```swift
static var errorNoData: HKError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error indicates that no data exists that corresponds to a particular query, so the system can’t calculate the query’s result. [HKStatisticsQuery](../hkstatisticsquery.md) queries return this error when HealthKit can’t return the data needed to calculate the statistics.

## See Also

### Accessing errors

- [HKError.Code](code.md): Error codes returned by HealthKit.
- [noError](noerror.md): Deprecated. No error occurred.
- [errorHealthDataUnavailable](errorhealthdataunavailable.md): The user accessed HealthKit on an unsupported device.
- [errorHealthDataRestricted](errorhealthdatarestricted.md): A Mobile Device Management (MDM) profile restricts the use of HealthKit on this device.
- [errorInvalidArgument](errorinvalidargument.md): The app passed an invalid argument to the HealthKit API.
- [errorAuthorizationDenied](errorauthorizationdenied.md): The user hasn’t given the app permission to save data.
- [errorAuthorizationNotDetermined](errorauthorizationnotdetermined.md): The app hasn’t yet asked the user for the authorization required to complete the task.
- [errorRequiredAuthorizationDenied](errorrequiredauthorizationdenied.md): The user hasn’t granted the application authorization to access all the required clinical record types.
- [errorDatabaseInaccessible](errordatabaseinaccessible.md): The HealthKit data is unavailable because it’s protected and the device is locked.
- [errorUserCanceled](errorusercanceled.md): The user canceled the operation.
- [errorAnotherWorkoutSessionStarted](erroranotherworkoutsessionstarted.md): Another app started a workout session.
- [errorUserExitedWorkoutSession](erroruserexitedworkoutsession.md): The user exited your application while a workout session was running.
