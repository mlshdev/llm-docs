> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetridestatusintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/ingetridestatusintentresponsecode/inprogress)

# INGetRideStatusIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

You are in the process of handling the intent.

> INGetRideStatusIntentResponseCodeInProgress is deprecated.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Avoid using this response code when possible unless you are actively retrieving the ride status information but are unable to return that information in a timely manner.

## See Also

### Constants

- [INGetRideStatusIntentResponseCode.unspecified](unspecified.md): There is no specified response code.
- [INGetRideStatusIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INGetRideStatusIntentResponseCode.success](success.md): You successfully handled the intent.
- [INGetRideStatusIntentResponseCode.failure](failure.md): You were unable to retrieve information about the current ride.
- [INGetRideStatusIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to get information about the current ride.
- [INGetRideStatusIntentResponseCode.failureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INGetRideStatusIntentResponseCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.

# INGetRideStatusIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

You are in the process of handling the intent.

> INGetRideStatusIntentResponseCodeInProgress is deprecated.

## Declaration

```objectivec
INGetRideStatusIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Avoid using this response code when possible unless you are actively retrieving the ride status information but are unable to return that information in a timely manner.

## See Also

### Constants

- [INGetRideStatusIntentResponseCodeUnspecified](unspecified.md): There is no specified response code.
- [INGetRideStatusIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INGetRideStatusIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INGetRideStatusIntentResponseCodeFailure](failure.md): You were unable to retrieve information about the current ride.
- [INGetRideStatusIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to get information about the current ride.
- [INGetRideStatusIntentResponseCodeFailureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INGetRideStatusIntentResponseCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
