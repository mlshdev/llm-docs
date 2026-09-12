> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistrideoptionsintentresponsecode/failurepreviousrideneedsfeedback](https://developer.apple.com/documentation/intents/inlistrideoptionsintentresponsecode/failurepreviousrideneedsfeedback)

# INListRideOptionsIntentResponseCode.failurePreviousRideNeedsFeedback (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

You can’t book a new ride because an existing ride is currently in progress.

## Declaration

```swift
case failurePreviousRideNeedsFeedback
```

<a id="Discussion"></a>

## Discussion

Use this code when the user must provide feedback for the previous ride before getting a new ride. Specifying this code causes SiriKit to send an [INSendRideFeedbackIntent](../insendridefeedbackintent.md) object to your Intents extension. If your Intents extension does not support that intent, SiriKit launches your app as if you had specified the [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchPreviousRideNeedsCompletion](failurerequiringapplaunchpreviousrideneedscompletion.md) response code.

If there is a previous ride that is not yet complete, but you still want to allow the user to book another ride, return [INListRideOptionsIntentResponseCode.success](success.md).

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
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
- [INListRideOptionsIntentResponseCode.failureRequiringAppLaunchPreviousRideNeedsCompletion](failurerequiringapplaunchpreviousrideneedscompletion.md): You can’t book a new ride because an existing ride is currently in progress.

# INListRideOptionsIntentResponseCodeFailurePreviousRideNeedsFeedback (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

You can’t book a new ride because an existing ride is currently in progress.

## Declaration

```objectivec
INListRideOptionsIntentResponseCodeFailurePreviousRideNeedsFeedback
```

<a id="Discussion"></a>

## Discussion

Use this code when the user must provide feedback for the previous ride before getting a new ride. Specifying this code causes SiriKit to send an [INSendRideFeedbackIntent](../insendridefeedbackintent.md) object to your Intents extension. If your Intents extension does not support that intent, SiriKit launches your app as if you had specified the [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchPreviousRideNeedsCompletion](failurerequiringapplaunchpreviousrideneedscompletion.md) response code.

If there is a previous ride that is not yet complete, but you still want to allow the user to book another ride, return [INListRideOptionsIntentResponseCodeSuccess](success.md).

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
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
- [INListRideOptionsIntentResponseCodeFailureRequiringAppLaunchPreviousRideNeedsCompletion](failurerequiringapplaunchpreviousrideneedscompletion.md): You can’t book a new ride because an existing ride is currently in progress.
