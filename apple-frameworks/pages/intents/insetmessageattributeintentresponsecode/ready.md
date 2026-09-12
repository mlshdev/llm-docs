> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetmessageattributeintentresponsecode/ready](https://developer.apple.com/documentation/intents/insetmessageattributeintentresponsecode/ready)

# INSetMessageAttributeIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The app is ready to handle the intent.

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

Use this code during the confirmation phase to indicate that you have access to your message service and are able to modify the specified messages.

## See Also

### Response State

- [INSetMessageAttributeIntentResponseCode.unspecified](unspecified.md): An unknown response code.
- [INSetMessageAttributeIntentResponseCode.inProgress](inprogress.md): You are ready to handle the intent.
- [INSetMessageAttributeIntentResponseCode.success](success.md): You successfully handled the intent.
- [INSetMessageAttributeIntentResponseCode.failure](failure.md): You are unable to modify the messages.
- [INSetMessageAttributeIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to modify the messages.
- [INSetMessageAttributeIntentResponseCode.failureMessageNotFound](failuremessagenotfound.md): One or more of the specified messages were not found.
- [INSetMessageAttributeIntentResponseCode.failureMessageAttributeNotSet](failuremessageattributenotset.md): The message attributes couldn’t be modified.

# INSetMessageAttributeIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The app is ready to handle the intent.

## Declaration

```objectivec
INSetMessageAttributeIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

Use this code during the confirmation phase to indicate that you have access to your message service and are able to modify the specified messages.

## See Also

### Response State

- [INSetMessageAttributeIntentResponseCodeUnspecified](unspecified.md): An unknown response code.
- [INSetMessageAttributeIntentResponseCodeInProgress](inprogress.md): You are ready to handle the intent.
- [INSetMessageAttributeIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INSetMessageAttributeIntentResponseCodeFailure](failure.md): You are unable to modify the messages.
- [INSetMessageAttributeIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to modify the messages.
- [INSetMessageAttributeIntentResponseCodeFailureMessageNotFound](failuremessagenotfound.md): One or more of the specified messages were not found.
- [INSetMessageAttributeIntentResponseCodeFailureMessageAttributeNotSet](failuremessageattributenotset.md): The message attributes couldn’t be modified.
