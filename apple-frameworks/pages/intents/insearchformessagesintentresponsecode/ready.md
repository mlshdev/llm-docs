> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintentresponsecode/ready](https://developer.apple.com/documentation/intents/insearchformessagesintentresponsecode/ready)

# INSearchForMessagesIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code indicating app readiness.

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Response State

- [INSearchForMessagesIntentResponseCode.unspecified](unspecified.md): The response code is unknown.
- [INSearchForMessagesIntentResponseCode.inProgress](inprogress.md): You are performing the search but do not yet have the results.
- [INSearchForMessagesIntentResponseCode.success](success.md): You successfully handled the intent.
- [INSearchForMessagesIntentResponseCode.failure](failure.md): You are unable to perform the search.
- [INSearchForMessagesIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to search their messages.
- [INSearchForMessagesIntentResponseCode.failureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to perform the search because your message service is currently unavailable.
- [INSearchForMessagesIntentResponseCode.failureMessageTooManyResults](failuremessagetoomanyresults.md): Too many messages matched the specified search criteria.

# INSearchForMessagesIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code indicating app readiness.

## Declaration

```objectivec
INSearchForMessagesIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Response State

- [INSearchForMessagesIntentResponseCodeUnspecified](unspecified.md): The response code is unknown.
- [INSearchForMessagesIntentResponseCodeInProgress](inprogress.md): You are performing the search but do not yet have the results.
- [INSearchForMessagesIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INSearchForMessagesIntentResponseCodeFailure](failure.md): You are unable to perform the search.
- [INSearchForMessagesIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to search their messages.
- [INSearchForMessagesIntentResponseCodeFailureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to perform the search because your message service is currently unavailable.
- [INSearchForMessagesIntentResponseCodeFailureMessageTooManyResults](failuremessagetoomanyresults.md): Too many messages matched the specified search criteria.
