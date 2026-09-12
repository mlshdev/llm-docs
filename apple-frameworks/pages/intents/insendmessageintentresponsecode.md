> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintentresponsecode](https://developer.apple.com/documentation/intents/insendmessageintentresponsecode)

# INSendMessageIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```swift
enum INSendMessageIntentResponseCode
```

## Topics

### Response State

- [INSendMessageIntentResponseCode.unspecified](insendmessageintentresponsecode/unspecified.md): The response code isn’t specified.
- [INSendMessageIntentResponseCode.ready](insendmessageintentresponsecode/ready.md): You are ready to handle the intent.
- [INSendMessageIntentResponseCode.inProgress](insendmessageintentresponsecode/inprogress.md): You are in the process of sending the message but have not yet done so.
- [INSendMessageIntentResponseCode.success](insendmessageintentresponsecode/success.md): You successfully handled the intent.
- [INSendMessageIntentResponseCode.failure](insendmessageintentresponsecode/failure.md): You are unable to send the message.
- [INSendMessageIntentResponseCode.failureRequiringAppLaunch](insendmessageintentresponsecode/failurerequiringapplaunch.md): The user must launch your app before they can send the message.
- [INSendMessageIntentResponseCode.failureMessageServiceNotAvailable](insendmessageintentresponsecode/failuremessageservicenotavailable.md): You were unable to send the message because your message service is currently unavailable.

### Enumeration Cases

- [INSendMessageIntentResponseCode.failureRequiringInAppAuthentication](insendmessageintentresponsecode/failurerequiringinappauthentication.md)

### Initializers

- [init(rawValue:)](insendmessageintentresponsecode/init%28rawvalue_%29.md)

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

- [code](insendmessageintentresponse/code.md): The code indicating whether you successfully handled the intent.

# INSendMessageIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```objectivec
enum INSendMessageIntentResponseCode : NSInteger;
```

## Topics

### Response State

- [INSendMessageIntentResponseCodeUnspecified](insendmessageintentresponsecode/unspecified.md): The response code isn’t specified.
- [INSendMessageIntentResponseCodeReady](insendmessageintentresponsecode/ready.md): You are ready to handle the intent.
- [INSendMessageIntentResponseCodeInProgress](insendmessageintentresponsecode/inprogress.md): You are in the process of sending the message but have not yet done so.
- [INSendMessageIntentResponseCodeSuccess](insendmessageintentresponsecode/success.md): You successfully handled the intent.
- [INSendMessageIntentResponseCodeFailure](insendmessageintentresponsecode/failure.md): You are unable to send the message.
- [INSendMessageIntentResponseCodeFailureRequiringAppLaunch](insendmessageintentresponsecode/failurerequiringapplaunch.md): The user must launch your app before they can send the message.
- [INSendMessageIntentResponseCodeFailureMessageServiceNotAvailable](insendmessageintentresponsecode/failuremessageservicenotavailable.md): You were unable to send the message because your message service is currently unavailable.

### Enumeration Cases

- [INSendMessageIntentResponseCodeFailureRequiringInAppAuthentication](insendmessageintentresponsecode/failurerequiringinappauthentication.md)

## See Also

### Getting the Response Code

- [code](insendmessageintentresponse/code.md): The code indicating whether you successfully handled the intent.
