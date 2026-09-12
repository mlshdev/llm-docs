> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetridestatusintentresponsecode/failurerequiringapplaunchmustverifycredentials](https://developer.apple.com/documentation/intents/ingetridestatusintentresponsecode/failurerequiringapplaunchmustverifycredentials)

# INGetRideStatusIntentResponseCode.failureRequiringAppLaunchMustVerifyCredentials (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user must launch your app and verify their credentials to continue.

## Declaration

```swift
case failureRequiringAppLaunchMustVerifyCredentials
```

<a id="Discussion"></a>

## Discussion

Use this code when you require authentication to retrieve information and the user is not currently authenticated. Don’t use this response code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INGetRideStatusIntentResponseCode.unspecified](unspecified.md): There is no specified response code.
- [INGetRideStatusIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INGetRideStatusIntentResponseCode.inProgress](inprogress.md): Deprecated. You are in the process of handling the intent.
- [INGetRideStatusIntentResponseCode.success](success.md): You successfully handled the intent.
- [INGetRideStatusIntentResponseCode.failure](failure.md): You were unable to retrieve information about the current ride.
- [INGetRideStatusIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to get information about the current ride.
- [INGetRideStatusIntentResponseCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.

# INGetRideStatusIntentResponseCodeFailureRequiringAppLaunchMustVerifyCredentials (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user must launch your app and verify their credentials to continue.

## Declaration

```objectivec
INGetRideStatusIntentResponseCodeFailureRequiringAppLaunchMustVerifyCredentials
```

<a id="Discussion"></a>

## Discussion

Use this code when you require authentication to retrieve information and the user is not currently authenticated. Don’t use this response code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INGetRideStatusIntentResponseCodeUnspecified](unspecified.md): There is no specified response code.
- [INGetRideStatusIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INGetRideStatusIntentResponseCodeInProgress](inprogress.md): Deprecated. You are in the process of handling the intent.
- [INGetRideStatusIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INGetRideStatusIntentResponseCodeFailure](failure.md): You were unable to retrieve information about the current ride.
- [INGetRideStatusIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to get information about the current ride.
- [INGetRideStatusIntentResponseCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
