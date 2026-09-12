> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistrideoptionsintentresponsecode/failurerequiringapplaunchservicetemporarilyunavailable](https://developer.apple.com/documentation/intents/inlistrideoptionsintentresponsecode/failurerequiringapplaunchservicetemporarilyunavailable)

# INListRideOptionsIntentResponseCode.failureRequiringAppLaunchServiceTemporarilyUnavailable (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your service is temporarily unavailable.

## Declaration

```swift
case failureRequiringAppLaunchServiceTemporarilyUnavailable
```

<a id="Discussion"></a>

## Discussion

Use this code when you cannot offer service to the specified area right now. You might return this code if no vehicles are available in the user’s area or your service is temporarily unavailable. Specify this code to redirect the user to your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INListRideOptionsIntentResponseCode.unspecified](unspecified.md): No response didn’t specify a response code.
- [INListRideOptionsIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INListRideOptionsIntentResponseCode.inProgress](inprogress.md): Deprecated. You failed to handle the intent in a timely manner.
- [INListRideOptionsIntentResponseCode.success](success.md): You successfully handled the intent.
- [INListRideOptionsIntentResponseCode.failure](failure.md): You were unable to retrieve the list of ride options.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to get information about the ride options.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchNoServiceInArea](failurerequiringapplaunchnoserviceinarea.md): You do not provide service in the area requested by the user.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchPreviousRideNeedsCompletion](failurerequiringapplaunchpreviousrideneedscompletion.md): You can’t book a new ride because an existing ride is currently in progress.
- [INListRideOptionsIntentResponseCode.failurePreviousRideNeedsFeedback](failurepreviousrideneedsfeedback.md): You can’t book a new ride because an existing ride is currently in progress.

# INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your service is temporarily unavailable.

## Declaration

```objectivec
INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable
```

<a id="Discussion"></a>

## Discussion

Use this code when you cannot offer service to the specified area right now. You might return this code if no vehicles are available in the user’s area or your service is temporarily unavailable. Specify this code to redirect the user to your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INListRideOptionsIntentResponseCodeUnspecified](unspecified.md): No response didn’t specify a response code.
- [INListRideOptionsIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INListRideOptionsIntentResponseCodeInProgress](inprogress.md): Deprecated. You failed to handle the intent in a timely manner.
- [INListRideOptionsIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INListRideOptionsIntentResponseCodeFailure](failure.md): You were unable to retrieve the list of ride options.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to get information about the ride options.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchNoServiceInArea](failurerequiringapplaunchnoserviceinarea.md): You do not provide service in the area requested by the user.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchPreviousRideNeedsCompletion](failurerequiringapplaunchpreviousrideneedscompletion.md): You can’t book a new ride because an existing ride is currently in progress.
- [INListRideOptionsIntentResponseCodeFailurePreviousRideNeedsFeedback](failurepreviousrideneedsfeedback.md): You can’t book a new ride because an existing ride is currently in progress.
