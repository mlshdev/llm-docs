> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintentresponsecode/failurerequiringapplaunchmustverifycredentials](https://developer.apple.com/documentation/intents/inrequestrideintentresponsecode/failurerequiringapplaunchmustverifycredentials)

# INRequestRideIntentResponseCode.failureRequiringAppLaunchMustVerifyCredentials (Swift)

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

Use this code when you require authentication to book rides and the user is not currently authenticated. Do not use this response code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INRequestRideIntentResponseCode.unspecified](unspecified.md): There is no specified response code.
- [INRequestRideIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INRequestRideIntentResponseCode.inProgress](inprogress.md): Deprecated. You are in the process of handling the intent.
- [INRequestRideIntentResponseCode.success](success.md): You successfully handled the intent.
- [INRequestRideIntentResponseCode.failure](failure.md): You were unable to book the ride.
- [INRequestRideIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to book the ride.
- [INRequestRideIntentResponseCode.failureRequiringAppLaunchNoServiceInArea](failurerequiringapplaunchnoserviceinarea.md): You do not provide rides in the area requested by the user.
- [INRequestRideIntentResponseCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
- [INRequestRideIntentResponseCode.failureRequiringAppLaunchPreviousRideNeedsCompletion](failurerequiringapplaunchpreviousrideneedscompletion.md): An existing ride is currently in progress and the app can’t book a new ride.
- [INRequestRideIntentResponseCode.failureRequiringAppLaunchRideScheduledTooFar](failurerequiringapplaunchridescheduledtoofar.md): The scheduled ride is out of the ride area and requires the user to open the app to fix the problem.

# INRequestRideIntentResponseCodeFailureRequiringAppLaunchMustVerifyCredentials (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user must launch your app and verify their credentials to continue.

## Declaration

```objectivec
INRequestRideIntentResponseCodeFailureRequiringAppLaunchMustVerifyCredentials
```

<a id="Discussion"></a>

## Discussion

Use this code when you require authentication to book rides and the user is not currently authenticated. Do not use this response code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INRequestRideIntentResponseCodeUnspecified](unspecified.md): There is no specified response code.
- [INRequestRideIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INRequestRideIntentResponseCodeInProgress](inprogress.md): Deprecated. You are in the process of handling the intent.
- [INRequestRideIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INRequestRideIntentResponseCodeFailure](failure.md): You were unable to book the ride.
- [INRequestRideIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to book the ride.
- [INRequestRideIntentResponseCodeFailureRequiringAppLaunchNoServiceInArea](failurerequiringapplaunchnoserviceinarea.md): You do not provide rides in the area requested by the user.
- [INRequestRideIntentResponseCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
- [INRequestRideIntentResponseCodeFailureRequiringAppLaunchPreviousRideNeedsCompletion](failurerequiringapplaunchpreviousrideneedscompletion.md): An existing ride is currently in progress and the app can’t book a new ride.
- [INRequestRideIntentResponseCodeFailureRequiringAppLaunchRideScheduledTooFar](failurerequiringapplaunchridescheduledtoofar.md): The scheduled ride is out of the ride area and requires the user to open the app to fix the problem.
