> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/messagecomposeresult](https://developer.apple.com/documentation/messageui/messagecomposeresult)

# MessageComposeResult (Swift)

**Framework:** Message UI  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

These constants describe the result of the message-composition interface.

## Declaration

```swift
enum MessageComposeResult
```

## Topics

### Constants

- [MessageComposeResult.cancelled](messagecomposeresult/cancelled.md): The user canceled the composition.
- [MessageComposeResult.sent](messagecomposeresult/sent.md): The user successfully queued or sent the message.
- [MessageComposeResult.failed](messagecomposeresult/failed.md): The user’s attempt to save or send the message was unsuccessful.

### Initializers

- [init(rawValue:)](messagecomposeresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to the Message Completion

- [messageComposeViewController(\_:didFinishWith:)](mfmessagecomposeviewcontrollerdelegate/messagecomposeviewcontroller%28__didfinishwith_%29.md): Tells the delegate that the user finished composing the message.

# MessageComposeResult (Objective-C)

**Framework:** Message UI  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

These constants describe the result of the message-composition interface.

## Declaration

```objectivec
enum MessageComposeResult : NSInteger;
```

## Topics

### Constants

- [MessageComposeResultCancelled](messagecomposeresult/cancelled.md): The user canceled the composition.
- [MessageComposeResultSent](messagecomposeresult/sent.md): The user successfully queued or sent the message.
- [MessageComposeResultFailed](messagecomposeresult/failed.md): The user’s attempt to save or send the message was unsuccessful.

## See Also

### Responding to the Message Completion

- [messageComposeViewController:didFinishWithResult:](mfmessagecomposeviewcontrollerdelegate/messagecomposeviewcontroller%28__didfinishwith_%29.md): Tells the delegate that the user finished composing the message.
