> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintentresponsecode/success](https://developer.apple.com/documentation/intents/insendmessageintentresponsecode/success)

# INSendMessageIntentResponseCode.success (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

You successfully handled the intent.

## Declaration

```swift
case success
```

<a id="Discussion"></a>

## Discussion

Use this code if your app successfully sent the message.

## See Also

### Response State

- [INSendMessageIntentResponseCode.unspecified](unspecified.md): The response code isn’t specified.
- [INSendMessageIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INSendMessageIntentResponseCode.inProgress](inprogress.md): You are in the process of sending the message but have not yet done so.
- [INSendMessageIntentResponseCode.failure](failure.md): You are unable to send the message.
- [INSendMessageIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app before they can send the message.
- [INSendMessageIntentResponseCode.failureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to send the message because your message service is currently unavailable.

# INSendMessageIntentResponseCodeSuccess (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

You successfully handled the intent.

## Declaration

```objectivec
INSendMessageIntentResponseCodeSuccess
```

<a id="Discussion"></a>

## Discussion

Use this code if your app successfully sent the message.

## See Also

### Response State

- [INSendMessageIntentResponseCodeUnspecified](unspecified.md): The response code isn’t specified.
- [INSendMessageIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INSendMessageIntentResponseCodeInProgress](inprogress.md): You are in the process of sending the message but have not yet done so.
- [INSendMessageIntentResponseCodeFailure](failure.md): You are unable to send the message.
- [INSendMessageIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app before they can send the message.
- [INSendMessageIntentResponseCodeFailureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to send the message because your message service is currently unavailable.
