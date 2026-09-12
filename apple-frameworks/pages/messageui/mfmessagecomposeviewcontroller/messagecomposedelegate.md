> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/messagecomposedelegate](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/messagecomposedelegate)

# messageComposeDelegate (Swift)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate to which message-related notifications should be sent.

## Declaration

```swift
weak var messageComposeDelegate: (any MFMessageComposeViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

When the user taps a button to send or cancel the message, your delegate is notified and should respond by dismissing the message composition interface. For more information about implementing the methods of your delegate object, see [MFMessageComposeViewControllerDelegate](../mfmessagecomposeviewcontrollerdelegate.md).

## See Also

### Responding to the view controller dismissal

- [MFMessageComposeViewControllerDelegate](../mfmessagecomposeviewcontrollerdelegate.md): An interface for responding to user interactions with a message compose view controller.

# messageComposeDelegate (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate to which message-related notifications should be sent.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MFMessageComposeViewControllerDelegate> messageComposeDelegate;
```

<a id="Discussion"></a>

## Discussion

When the user taps a button to send or cancel the message, your delegate is notified and should respond by dismissing the message composition interface. For more information about implementing the methods of your delegate object, see [MFMessageComposeViewControllerDelegate](../mfmessagecomposeviewcontrollerdelegate.md).

## See Also

### Responding to the view controller dismissal

- [MFMessageComposeViewControllerDelegate](../mfmessagecomposeviewcontrollerdelegate.md): An interface for responding to user interactions with a message compose view controller.
