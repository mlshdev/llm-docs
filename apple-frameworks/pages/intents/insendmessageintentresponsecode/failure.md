> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintentresponsecode/failure](https://developer.apple.com/documentation/intents/insendmessageintentresponsecode/failure)

# INSendMessageIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

You are unable to send the message.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent you from sending the message.

## See Also

### Response State

- [INSendMessageIntentResponseCode.unspecified](unspecified.md): The response code isn’t specified.
- [INSendMessageIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INSendMessageIntentResponseCode.inProgress](inprogress.md): You are in the process of sending the message but have not yet done so.
- [INSendMessageIntentResponseCode.success](success.md): You successfully handled the intent.
- [INSendMessageIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app before they can send the message.
- [INSendMessageIntentResponseCode.failureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to send the message because your message service is currently unavailable.

# INSendMessageIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

You are unable to send the message.

## Declaration

```objectivec
INSendMessageIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent you from sending the message.

## See Also

### Response State

- [INSendMessageIntentResponseCodeUnspecified](unspecified.md): The response code isn’t specified.
- [INSendMessageIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INSendMessageIntentResponseCodeInProgress](inprogress.md): You are in the process of sending the message but have not yet done so.
- [INSendMessageIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INSendMessageIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app before they can send the message.
- [INSendMessageIntentResponseCodeFailureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to send the message because your message service is currently unavailable.
