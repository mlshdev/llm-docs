> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintentresponsecode/failure](https://developer.apple.com/documentation/intents/insearchformessagesintentresponsecode/failure)

# INSearchForMessagesIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You are unable to perform the search.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from searching the user’s messages.

## See Also

### Response State

- [INSearchForMessagesIntentResponseCode.unspecified](unspecified.md): The response code is unknown.
- [INSearchForMessagesIntentResponseCode.ready](ready.md): A response code indicating app readiness.
- [INSearchForMessagesIntentResponseCode.inProgress](inprogress.md): You are performing the search but do not yet have the results.
- [INSearchForMessagesIntentResponseCode.success](success.md): You successfully handled the intent.
- [INSearchForMessagesIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to search their messages.
- [INSearchForMessagesIntentResponseCode.failureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to perform the search because your message service is currently unavailable.
- [INSearchForMessagesIntentResponseCode.failureMessageTooManyResults](failuremessagetoomanyresults.md): Too many messages matched the specified search criteria.

# INSearchForMessagesIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You are unable to perform the search.

## Declaration

```objectivec
INSearchForMessagesIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from searching the user’s messages.

## See Also

### Response State

- [INSearchForMessagesIntentResponseCodeUnspecified](unspecified.md): The response code is unknown.
- [INSearchForMessagesIntentResponseCodeReady](ready.md): A response code indicating app readiness.
- [INSearchForMessagesIntentResponseCodeInProgress](inprogress.md): You are performing the search but do not yet have the results.
- [INSearchForMessagesIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INSearchForMessagesIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to search their messages.
- [INSearchForMessagesIntentResponseCodeFailureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to perform the search because your message service is currently unavailable.
- [INSearchForMessagesIntentResponseCodeFailureMessageTooManyResults](failuremessagetoomanyresults.md): Too many messages matched the specified search criteria.
