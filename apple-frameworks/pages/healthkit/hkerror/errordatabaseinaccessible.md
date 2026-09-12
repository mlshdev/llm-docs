> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkerror/errordatabaseinaccessible](https://developer.apple.com/documentation/healthkit/hkerror/errordatabaseinaccessible)

# errorDatabaseInaccessible

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The HealthKit data is unavailable because it’s protected and the device is locked.

## Declaration

```swift
static var errorDatabaseInaccessible: HKError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error occurs when your app queries for HealthKit data while the device is locked. You can, however, still save data. This data is saved into a temporary file, which is merged with HealthKit’s data when the user unlocks their device.

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
- [errorUserCanceled](errorusercanceled.md): The user canceled the operation.
- [errorAnotherWorkoutSessionStarted](erroranotherworkoutsessionstarted.md): Another app started a workout session.
- [errorUserExitedWorkoutSession](erroruserexitedworkoutsession.md): The user exited your application while a workout session was running.
- [errorNoData](errornodata.md): Data is unavailable for the requested query and predicate.
