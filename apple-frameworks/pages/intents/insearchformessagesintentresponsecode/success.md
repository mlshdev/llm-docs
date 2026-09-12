> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintentresponsecode/success](https://developer.apple.com/documentation/intents/insearchformessagesintentresponsecode/success)

# INSearchForMessagesIntentResponseCode.success (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You successfully handled the intent.

## Declaration

```swift
case success
```

<a id="Discussion"></a>

## Discussion

Use this code when your app completed the search successfully, regardless of the number of found messags. If the search yielded one or more messages, provide the details of those messages in the [messages](../insearchformessagesintentresponse/messages.md) property.

## See Also

### Response State

- [INSearchForMessagesIntentResponseCode.unspecified](unspecified.md): The response code is unknown.
- [INSearchForMessagesIntentResponseCode.ready](ready.md): A response code indicating app readiness.
- [INSearchForMessagesIntentResponseCode.inProgress](inprogress.md): You are performing the search but do not yet have the results.
- [INSearchForMessagesIntentResponseCode.failure](failure.md): You are unable to perform the search.
- [INSearchForMessagesIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to search their messages.
- [INSearchForMessagesIntentResponseCode.failureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to perform the search because your message service is currently unavailable.
- [INSearchForMessagesIntentResponseCode.failureMessageTooManyResults](failuremessagetoomanyresults.md): Too many messages matched the specified search criteria.

# INSearchForMessagesIntentResponseCodeSuccess (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You successfully handled the intent.

## Declaration

```objectivec
INSearchForMessagesIntentResponseCodeSuccess
```

<a id="Discussion"></a>

## Discussion

Use this code when your app completed the search successfully, regardless of the number of found messags. If the search yielded one or more messages, provide the details of those messages in the [messages](../insearchformessagesintentresponse/messages.md) property.

## See Also

### Response State

- [INSearchForMessagesIntentResponseCodeUnspecified](unspecified.md): The response code is unknown.
- [INSearchForMessagesIntentResponseCodeReady](ready.md): A response code indicating app readiness.
- [INSearchForMessagesIntentResponseCodeInProgress](inprogress.md): You are performing the search but do not yet have the results.
- [INSearchForMessagesIntentResponseCodeFailure](failure.md): You are unable to perform the search.
- [INSearchForMessagesIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to search their messages.
- [INSearchForMessagesIntentResponseCodeFailureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to perform the search because your message service is currently unavailable.
- [INSearchForMessagesIntentResponseCodeFailureMessageTooManyResults](failuremessagetoomanyresults.md): Too many messages matched the specified search criteria.
