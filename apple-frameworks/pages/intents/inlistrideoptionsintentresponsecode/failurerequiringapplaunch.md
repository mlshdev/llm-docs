> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistrideoptionsintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/inlistrideoptionsintentresponsecode/failurerequiringapplaunch)

# INListRideOptionsIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user must launch your app to get information about the ride options.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when there is a failure that your parent app can resolve. Specify this code to redirect the user to your app. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INListRideOptionsIntentResponseCode.unspecified](unspecified.md): No response didn’t specify a response code.
- [INListRideOptionsIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INListRideOptionsIntentResponseCode.inProgress](inprogress.md): Deprecated. You failed to handle the intent in a timely manner.
- [INListRideOptionsIntentResponseCode.success](success.md): You successfully handled the intent.
- [INListRideOptionsIntentResponseCode.failure](failure.md): You were unable to retrieve the list of ride options.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchNoServiceInArea](failurerequiringapplaunchnoserviceinarea.md): You do not provide service in the area requested by the user.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchPreviousRideNeedsCompletion](failurerequiringapplaunchpreviousrideneedscompletion.md): You can’t book a new ride because an existing ride is currently in progress.
- [INListRideOptionsIntentResponseCode.failurePreviousRideNeedsFeedback](failurepreviousrideneedsfeedback.md): You can’t book a new ride because an existing ride is currently in progress.

# INListRideOptionsIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user must launch your app to get information about the ride options.

## Declaration

```objectivec
INListRideOptionsIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when there is a failure that your parent app can resolve. Specify this code to redirect the user to your app. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INListRideOptionsIntentResponseCodeUnspecified](unspecified.md): No response didn’t specify a response code.
- [INListRideOptionsIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INListRideOptionsIntentResponseCodeInProgress](inprogress.md): Deprecated. You failed to handle the intent in a timely manner.
- [INListRideOptionsIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INListRideOptionsIntentResponseCodeFailure](failure.md): You were unable to retrieve the list of ride options.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): The user must launch your app and verify their credentials to continue.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchNoServiceInArea](failurerequiringapplaunchnoserviceinarea.md): You do not provide service in the area requested by the user.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchPreviousRideNeedsCompletion](failurerequiringapplaunchpreviousrideneedscompletion.md): You can’t book a new ride because an existing ride is currently in progress.
- [INListRideOptionsIntentResponseCodeFailurePreviousRideNeedsFeedback](failurepreviousrideneedsfeedback.md): You can’t book a new ride because an existing ride is currently in progress.
