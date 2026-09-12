> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendridefeedbackintentresponsecode](https://developer.apple.com/documentation/intents/insendridefeedbackintentresponsecode)

# INSendRideFeedbackIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating the state of the response.

## Declaration

```swift
enum INSendRideFeedbackIntentResponseCode
```

## Topics

### Constants

- [INSendRideFeedbackIntentResponseCode.unspecified](insendridefeedbackintentresponsecode/unspecified.md): There is no specified response code.
- [INSendRideFeedbackIntentResponseCode.ready](insendridefeedbackintentresponsecode/ready.md): You are ready to handle the intent.
- [INSendRideFeedbackIntentResponseCode.success](insendridefeedbackintentresponsecode/success.md): You successfully recorded the feedback for the ride.
- [INSendRideFeedbackIntentResponseCode.failure](insendridefeedbackintentresponsecode/failure.md): You were unable to record the feedback for the ride.

### Initializers

- [init(rawValue:)](insendridefeedbackintentresponsecode/init%28rawvalue_%29.md)

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

- [code](insendridefeedbackintentresponse/code.md): The code indicating whether your app successfully handled the intent.

# INSendRideFeedbackIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating the state of the response.

## Declaration

```objectivec
enum INSendRideFeedbackIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSendRideFeedbackIntentResponseCodeUnspecified](insendridefeedbackintentresponsecode/unspecified.md): There is no specified response code.
- [INSendRideFeedbackIntentResponseCodeReady](insendridefeedbackintentresponsecode/ready.md): You are ready to handle the intent.
- [INSendRideFeedbackIntentResponseCodeSuccess](insendridefeedbackintentresponsecode/success.md): You successfully recorded the feedback for the ride.
- [INSendRideFeedbackIntentResponseCodeFailure](insendridefeedbackintentresponsecode/failure.md): You were unable to record the feedback for the ride.

## See Also

### Getting the Response Code

- [code](insendridefeedbackintentresponse/code.md): The code indicating whether your app successfully handled the intent.
