> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/insendmessageintentresponsecode/failurerequiringapplaunch)

# INSendMessageIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The user must launch your app before they can send the message.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot handle the request through Siri for a reason not covered by any other response code. For example, you might use this code if the user has not set up an account with your app. Do not use it for general errors or to force the user to launch your app.

## See Also

### Response State

- [INSendMessageIntentResponseCode.unspecified](unspecified.md): The response code isn’t specified.
- [INSendMessageIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INSendMessageIntentResponseCode.inProgress](inprogress.md): You are in the process of sending the message but have not yet done so.
- [INSendMessageIntentResponseCode.success](success.md): You successfully handled the intent.
- [INSendMessageIntentResponseCode.failure](failure.md): You are unable to send the message.
- [INSendMessageIntentResponseCode.failureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to send the message because your message service is currently unavailable.

# INSendMessageIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The user must launch your app before they can send the message.

## Declaration

```objectivec
INSendMessageIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot handle the request through Siri for a reason not covered by any other response code. For example, you might use this code if the user has not set up an account with your app. Do not use it for general errors or to force the user to launch your app.

## See Also

### Response State

- [INSendMessageIntentResponseCodeUnspecified](unspecified.md): The response code isn’t specified.
- [INSendMessageIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INSendMessageIntentResponseCodeInProgress](inprogress.md): You are in the process of sending the message but have not yet done so.
- [INSendMessageIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INSendMessageIntentResponseCodeFailure](failure.md): You are unable to send the message.
- [INSendMessageIntentResponseCodeFailureMessageServiceNotAvailable](failuremessageservicenotavailable.md): You were unable to send the message because your message service is currently unavailable.
