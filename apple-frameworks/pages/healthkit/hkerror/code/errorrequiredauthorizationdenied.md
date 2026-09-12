> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkerror/code/errorrequiredauthorizationdenied](https://developer.apple.com/documentation/healthkit/hkerror/code/errorrequiredauthorizationdenied)

# HKError.Code.errorRequiredAuthorizationDenied (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

The user hasn’t granted the application authorization to access all the required clinical record types.

## Declaration

```swift
case errorRequiredAuthorizationDenied
```

## Mentioned In

- [Authorizing access to health data](../../authorizing-access-to-health-data.md)

<a id="Discussion"></a>

## Discussion

You can specify required clinical record types using the [NSHealthRequiredReadAuthorizationTypeIdentifiers](../../../bundleresources/information-property-list/nshealthrequiredreadauthorizationtypeidentifiers.md) `Info.plist` key.

## See Also

### Errors

- [HKError.Code.errorHealthDataUnavailable](errorhealthdataunavailable.md): HealthKit accessed on an unsupported device, such as an iPad.
- [HKError.Code.errorHealthDataRestricted](errorhealthdatarestricted.md): A Mobile Device Management (MDM) profile restricts the use of HealthKit on this device.
- [HKError.Code.errorInvalidArgument](errorinvalidargument.md): The app passed an invalid argument to the HealthKit API.
- [HKError.Code.errorAuthorizationDenied](errorauthorizationdenied.md): The user hasn’t given the app permission to save data.
- [HKError.Code.errorAuthorizationNotDetermined](errorauthorizationnotdetermined.md): The app hasn’t yet asked the user for the authorization required to complete the task.
- [HKError.Code.errorDatabaseInaccessible](errordatabaseinaccessible.md): The HealthKit data is unavailable because it’s protected and the device is locked.
- [HKError.Code.errorUserCanceled](errorusercanceled.md): The user canceled the operation.
- [HKError.Code.errorAnotherWorkoutSessionStarted](erroranotherworkoutsessionstarted.md): Another app started a workout session.
- [HKError.Code.errorUserExitedWorkoutSession](erroruserexitedworkoutsession.md): The user exited your application while a workout session was running.
- [HKError.Code.errorNoData](errornodata.md): Data is unavailable for the requested query and predicate.

# HKErrorRequiredAuthorizationDenied (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

The user hasn’t granted the application authorization to access all the required clinical record types.

## Declaration

```objectivec
HKErrorRequiredAuthorizationDenied
```

## Mentioned In

- [Authorizing access to health data](../../authorizing-access-to-health-data.md)

<a id="Discussion"></a>

## Discussion

You can specify required clinical record types using the [NSHealthRequiredReadAuthorizationTypeIdentifiers](../../../bundleresources/information-property-list/nshealthrequiredreadauthorizationtypeidentifiers.md) `Info.plist` key.

## See Also

### Errors

- [HKErrorHealthDataUnavailable](errorhealthdataunavailable.md): HealthKit accessed on an unsupported device, such as an iPad.
- [HKErrorHealthDataRestricted](errorhealthdatarestricted.md): A Mobile Device Management (MDM) profile restricts the use of HealthKit on this device.
- [HKErrorInvalidArgument](errorinvalidargument.md): The app passed an invalid argument to the HealthKit API.
- [HKErrorAuthorizationDenied](errorauthorizationdenied.md): The user hasn’t given the app permission to save data.
- [HKErrorAuthorizationNotDetermined](errorauthorizationnotdetermined.md): The app hasn’t yet asked the user for the authorization required to complete the task.
- [HKErrorDatabaseInaccessible](errordatabaseinaccessible.md): The HealthKit data is unavailable because it’s protected and the device is locked.
- [HKErrorUserCanceled](errorusercanceled.md): The user canceled the operation.
- [HKErrorAnotherWorkoutSessionStarted](erroranotherworkoutsessionstarted.md): Another app started a workout session.
- [HKErrorUserExitedWorkoutSession](erroruserexitedworkoutsession.md): The user exited your application while a workout session was running.
- [HKErrorNoData](errornodata.md): Data is unavailable for the requested query and predicate.
