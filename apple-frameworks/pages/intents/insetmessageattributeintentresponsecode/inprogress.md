> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetmessageattributeintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insetmessageattributeintentresponsecode/inprogress)

# INSetMessageAttributeIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

You are ready to handle the intent.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Response State

- [INSetMessageAttributeIntentResponseCode.unspecified](unspecified.md): An unknown response code.
- [INSetMessageAttributeIntentResponseCode.ready](ready.md): The app is ready to handle the intent.
- [INSetMessageAttributeIntentResponseCode.success](success.md): You successfully handled the intent.
- [INSetMessageAttributeIntentResponseCode.failure](failure.md): You are unable to modify the messages.
- [INSetMessageAttributeIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to modify the messages.
- [INSetMessageAttributeIntentResponseCode.failureMessageNotFound](failuremessagenotfound.md): One or more of the specified messages were not found.
- [INSetMessageAttributeIntentResponseCode.failureMessageAttributeNotSet](failuremessageattributenotset.md): The message attributes couldn’t be modified.

# INSetMessageAttributeIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

You are ready to handle the intent.

## Declaration

```objectivec
INSetMessageAttributeIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Response State

- [INSetMessageAttributeIntentResponseCodeUnspecified](unspecified.md): An unknown response code.
- [INSetMessageAttributeIntentResponseCodeReady](ready.md): The app is ready to handle the intent.
- [INSetMessageAttributeIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INSetMessageAttributeIntentResponseCodeFailure](failure.md): You are unable to modify the messages.
- [INSetMessageAttributeIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to modify the messages.
- [INSetMessageAttributeIntentResponseCodeFailureMessageNotFound](failuremessagenotfound.md): One or more of the specified messages were not found.
- [INSetMessageAttributeIntentResponseCodeFailureMessageAttributeNotSet](failuremessageattributenotset.md): The message attributes couldn’t be modified.
