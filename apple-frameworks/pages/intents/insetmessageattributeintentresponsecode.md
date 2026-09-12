> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetmessageattributeintentresponsecode](https://developer.apple.com/documentation/intents/insetmessageattributeintentresponsecode)

# INSetMessageAttributeIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that indicate the response state.

## Declaration

```swift
enum INSetMessageAttributeIntentResponseCode
```

## Topics

### Response State

- [INSetMessageAttributeIntentResponseCode.unspecified](insetmessageattributeintentresponsecode/unspecified.md): An unknown response code.
- [INSetMessageAttributeIntentResponseCode.ready](insetmessageattributeintentresponsecode/ready.md): The app is ready to handle the intent.
- [INSetMessageAttributeIntentResponseCode.inProgress](insetmessageattributeintentresponsecode/inprogress.md): You are ready to handle the intent.
- [INSetMessageAttributeIntentResponseCode.success](insetmessageattributeintentresponsecode/success.md): You successfully handled the intent.
- [INSetMessageAttributeIntentResponseCode.failure](insetmessageattributeintentresponsecode/failure.md): You are unable to modify the messages.
- [INSetMessageAttributeIntentResponseCode.failureRequiringAppLaunch](insetmessageattributeintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to modify the messages.
- [INSetMessageAttributeIntentResponseCode.failureMessageNotFound](insetmessageattributeintentresponsecode/failuremessagenotfound.md): One or more of the specified messages were not found.
- [INSetMessageAttributeIntentResponseCode.failureMessageAttributeNotSet](insetmessageattributeintentresponsecode/failuremessageattributenotset.md): The message attributes couldn’t be modified.

### Initializers

- [init(rawValue:)](insetmessageattributeintentresponsecode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Response Code

- [code](insetmessageattributeintentresponse/code.md): The code indicating whether you successfully handled the intent.

# INSetMessageAttributeIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that indicate the response state.

## Declaration

```objectivec
enum INSetMessageAttributeIntentResponseCode : NSInteger;
```

## Topics

### Response State

- [INSetMessageAttributeIntentResponseCodeUnspecified](insetmessageattributeintentresponsecode/unspecified.md): An unknown response code.
- [INSetMessageAttributeIntentResponseCodeReady](insetmessageattributeintentresponsecode/ready.md): The app is ready to handle the intent.
- [INSetMessageAttributeIntentResponseCodeInProgress](insetmessageattributeintentresponsecode/inprogress.md): You are ready to handle the intent.
- [INSetMessageAttributeIntentResponseCodeSuccess](insetmessageattributeintentresponsecode/success.md): You successfully handled the intent.
- [INSetMessageAttributeIntentResponseCodeFailure](insetmessageattributeintentresponsecode/failure.md): You are unable to modify the messages.
- [INSetMessageAttributeIntentResponseCodeFailureRequiringAppLaunch](insetmessageattributeintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to modify the messages.
- [INSetMessageAttributeIntentResponseCodeFailureMessageNotFound](insetmessageattributeintentresponsecode/failuremessagenotfound.md): One or more of the specified messages were not found.
- [INSetMessageAttributeIntentResponseCodeFailureMessageAttributeNotSet](insetmessageattributeintentresponsecode/failuremessageattributenotset.md): The message attributes couldn’t be modified.

## See Also

### Getting the Response Code

- [code](insetmessageattributeintentresponse/code.md): The code indicating whether you successfully handled the intent.
