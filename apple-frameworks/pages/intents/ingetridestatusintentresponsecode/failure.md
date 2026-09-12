> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetridestatusintentresponsecode/failure](https://developer.apple.com/documentation/intents/ingetridestatusintentresponsecode/failure)

# INGetRideStatusIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You were unable to retrieve information about the current ride.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that prevented you from retrieving the information.

## See Also

### Constants

- [INGetRideStatusIntentResponseCode.unspecified](unspecified.md): There is no specified response code.
- [INGetRideStatusIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INGetRideStatusIntentResponseCode.inProgress](inprogress.md): Deprecated. You are in the process of handling the intent.
- [INGetRideStatusIntentResponseCode.success](success.md): You successfully handled the intent.
- [INGetRideStatusIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to get information about the current ride.
- [INGetRideStatusIntentResponseCode.failureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INGetRideStatusIntentResponseCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.

# INGetRideStatusIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You were unable to retrieve information about the current ride.

## Declaration

```objectivec
INGetRideStatusIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that prevented you from retrieving the information.

## See Also

### Constants

- [INGetRideStatusIntentResponseCodeUnspecified](unspecified.md): There is no specified response code.
- [INGetRideStatusIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INGetRideStatusIntentResponseCodeInProgress](inprogress.md): Deprecated. You are in the process of handling the intent.
- [INGetRideStatusIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INGetRideStatusIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to get information about the current ride.
- [INGetRideStatusIntentResponseCodeFailureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INGetRideStatusIntentResponseCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
