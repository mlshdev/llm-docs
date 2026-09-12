> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/insearchformessagesintentresponsecode/failurerequiringapplaunch)

# INSearchForMessagesIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user must launch your app to search their messages.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot handle the request through Siri for a reason not covered by any other response code. For example, you might use this code if the user has not set up an account with your app. Do not use it for general errors or to force the user to launch your app.

## See Also

### Response State

- [INSearchForMessagesIntentResponseCode.unspecified](unspecified.md): The response code is unknown.
- [INSearchForMessagesIntentResponseCode.ready](ready.md): A response code indicating app readiness.
- [INSearchForMessagesIntentResponseCode.inProgress](inprogress.md): You are performing the search but do not yet have the results.
- [INSearchForMessagesIntentResponseCode.success](success.md): You successfully handled the intent.
- [INSearchForMessagesIntentResponseCode.failure](failure.md): You are unable to perform the search.
- [INSearchForMessagesIntentResponseCode.failureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to perform the search because your message service is currently unavailable.
- [INSearchForMessagesIntentResponseCode.failureMessageTooManyResults](failuremessagetoomanyresults.md): Too many messages matched the specified search criteria.

# INSearchForMessagesIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user must launch your app to search their messages.

## Declaration

```objectivec
INSearchForMessagesIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot handle the request through Siri for a reason not covered by any other response code. For example, you might use this code if the user has not set up an account with your app. Do not use it for general errors or to force the user to launch your app.

## See Also

### Response State

- [INSearchForMessagesIntentResponseCodeUnspecified](unspecified.md): The response code is unknown.
- [INSearchForMessagesIntentResponseCodeReady](ready.md): A response code indicating app readiness.
- [INSearchForMessagesIntentResponseCodeInProgress](inprogress.md): You are performing the search but do not yet have the results.
- [INSearchForMessagesIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INSearchForMessagesIntentResponseCodeFailure](failure.md): You are unable to perform the search.
- [INSearchForMessagesIntentResponseCodeFailureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to perform the search because your message service is currently unavailable.
- [INSearchForMessagesIntentResponseCodeFailureMessageTooManyResults](failuremessagetoomanyresults.md): Too many messages matched the specified search criteria.
