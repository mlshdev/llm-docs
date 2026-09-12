> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkerror/errorrequiredauthorizationdenied](https://developer.apple.com/documentation/healthkit/hkerror/errorrequiredauthorizationdenied)

# errorRequiredAuthorizationDenied

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

The user hasn’t granted the application authorization to access all the required clinical record types.

## Declaration

```swift
static var errorRequiredAuthorizationDenied: HKError.Code { get }
```

<a id="Discussion"></a>

## Discussion

You can specify required clinical record types using the [NSHealthRequiredReadAuthorizationTypeIdentifiers](../../bundleresources/information-property-list/nshealthrequiredreadauthorizationtypeidentifiers.md) `Info.plist` key.

## See Also

### Accessing errors

- [HKError.Code](code.md): Error codes returned by HealthKit.
- [noError](noerror.md): Deprecated. No error occurred.
- [errorHealthDataUnavailable](errorhealthdataunavailable.md): The user accessed HealthKit on an unsupported device.
- [errorHealthDataRestricted](errorhealthdatarestricted.md): A Mobile Device Management (MDM) profile restricts the use of HealthKit on this device.
- [errorInvalidArgument](errorinvalidargument.md): The app passed an invalid argument to the HealthKit API.
- [errorAuthorizationDenied](errorauthorizationdenied.md): The user hasn’t given the app permission to save data.
- [errorAuthorizationNotDetermined](errorauthorizationnotdetermined.md): The app hasn’t yet asked the user for the authorization required to complete the task.
- [errorDatabaseInaccessible](errordatabaseinaccessible.md): The HealthKit data is unavailable because it’s protected and the device is locked.
- [errorUserCanceled](errorusercanceled.md): The user canceled the operation.
- [errorAnotherWorkoutSessionStarted](erroranotherworkoutsessionstarted.md): Another app started a workout session.
- [errorUserExitedWorkoutSession](erroruserexitedworkoutsession.md): The user exited your application while a workout session was running.
- [errorNoData](errornodata.md): Data is unavailable for the requested query and predicate.
