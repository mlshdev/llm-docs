> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintentresponsecode/failuremessageservicenotavailable](https://developer.apple.com/documentation/intents/insendmessageintentresponsecode/failuremessageservicenotavailable)

# INSendMessageIntentResponseCode.failureMessageServiceNotAvailable (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

You were unable to send the message because your message service is currently unavailable.

## Declaration

```swift
case failureMessageServiceNotAvailable
```

<a id="Discussion"></a>

## Discussion

You might use this code if sending the message requires communicating with a remote server and the network is unavailable.

## See Also

### Response State

- [INSendMessageIntentResponseCode.unspecified](unspecified.md): The response code isn’t specified.
- [INSendMessageIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INSendMessageIntentResponseCode.inProgress](inprogress.md): You are in the process of sending the message but have not yet done so.
- [INSendMessageIntentResponseCode.success](success.md): You successfully handled the intent.
- [INSendMessageIntentResponseCode.failure](failure.md): You are unable to send the message.
- [INSendMessageIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app before they can send the message.

# INSendMessageIntentResponseCodeFailureMessageServiceNotAvailable (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

You were unable to send the message because your message service is currently unavailable.

## Declaration

```objectivec
INSendMessageIntentResponseCodeFailureMessageServiceNotAvailable
```

<a id="Discussion"></a>

## Discussion

You might use this code if sending the message requires communicating with a remote server and the network is unavailable.

## See Also

### Response State

- [INSendMessageIntentResponseCodeUnspecified](unspecified.md): The response code isn’t specified.
- [INSendMessageIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INSendMessageIntentResponseCodeInProgress](inprogress.md): You are in the process of sending the message but have not yet done so.
- [INSendMessageIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INSendMessageIntentResponseCodeFailure](failure.md): You are unable to send the message.
- [INSendMessageIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app before they can send the message.
