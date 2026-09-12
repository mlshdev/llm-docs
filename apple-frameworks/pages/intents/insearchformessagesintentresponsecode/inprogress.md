> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insearchformessagesintentresponsecode/inprogress)

# INSearchForMessagesIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You are performing the search but do not yet have the results.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if your search may take longer than a few seconds to complete.

## See Also

### Response State

- [INSearchForMessagesIntentResponseCode.unspecified](unspecified.md): The response code is unknown.
- [INSearchForMessagesIntentResponseCode.ready](ready.md): A response code indicating app readiness.
- [INSearchForMessagesIntentResponseCode.success](success.md): You successfully handled the intent.
- [INSearchForMessagesIntentResponseCode.failure](failure.md): You are unable to perform the search.
- [INSearchForMessagesIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to search their messages.
- [INSearchForMessagesIntentResponseCode.failureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to perform the search because your message service is currently unavailable.
- [INSearchForMessagesIntentResponseCode.failureMessageTooManyResults](failuremessagetoomanyresults.md): Too many messages matched the specified search criteria.

# INSearchForMessagesIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You are performing the search but do not yet have the results.

## Declaration

```objectivec
INSearchForMessagesIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if your search may take longer than a few seconds to complete.

## See Also

### Response State

- [INSearchForMessagesIntentResponseCodeUnspecified](unspecified.md): The response code is unknown.
- [INSearchForMessagesIntentResponseCodeReady](ready.md): A response code indicating app readiness.
- [INSearchForMessagesIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INSearchForMessagesIntentResponseCodeFailure](failure.md): You are unable to perform the search.
- [INSearchForMessagesIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to search their messages.
- [INSearchForMessagesIntentResponseCodeFailureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to perform the search because your message service is currently unavailable.
- [INSearchForMessagesIntentResponseCodeFailureMessageTooManyResults](failuremessagetoomanyresults.md): Too many messages matched the specified search criteria.
