> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetmessageattributeintentresponsecode/failure](https://developer.apple.com/documentation/intents/insetmessageattributeintentresponsecode/failure)

# INSetMessageAttributeIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

You are unable to modify the messages.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from modifying the messages.

## See Also

### Response State

- [INSetMessageAttributeIntentResponseCode.unspecified](unspecified.md): An unknown response code.
- [INSetMessageAttributeIntentResponseCode.ready](ready.md): The app is ready to handle the intent.
- [INSetMessageAttributeIntentResponseCode.inProgress](inprogress.md): You are ready to handle the intent.
- [INSetMessageAttributeIntentResponseCode.success](success.md): You successfully handled the intent.
- [INSetMessageAttributeIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to modify the messages.
- [INSetMessageAttributeIntentResponseCode.failureMessageNotFound](failuremessagenotfound.md): One or more of the specified messages were not found.
- [INSetMessageAttributeIntentResponseCode.failureMessageAttributeNotSet](failuremessageattributenotset.md): The message attributes couldn’t be modified.

# INSetMessageAttributeIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

You are unable to modify the messages.

## Declaration

```objectivec
INSetMessageAttributeIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from modifying the messages.

## See Also

### Response State

- [INSetMessageAttributeIntentResponseCodeUnspecified](unspecified.md): An unknown response code.
- [INSetMessageAttributeIntentResponseCodeReady](ready.md): The app is ready to handle the intent.
- [INSetMessageAttributeIntentResponseCodeInProgress](inprogress.md): You are ready to handle the intent.
- [INSetMessageAttributeIntentResponseCodeSuccess](success.md): You successfully handled the intent.
- [INSetMessageAttributeIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to modify the messages.
- [INSetMessageAttributeIntentResponseCodeFailureMessageNotFound](failuremessagenotfound.md): One or more of the specified messages were not found.
- [INSetMessageAttributeIntentResponseCodeFailureMessageAttributeNotSet](failuremessageattributenotset.md): The message attributes couldn’t be modified.
