> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeviewcontroller/mailcomposedelegate](https://developer.apple.com/documentation/messageui/mfmailcomposeviewcontroller/mailcomposedelegate)

# mailComposeDelegate (Swift)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The mail composition view controller’s delegate.

## Declaration

```swift
weak var mailComposeDelegate: (any MFMailComposeViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate object is responsible for dismissing the view presented by this view controller at the appropriate time. Therefore, you should always provide a delegate, and that object should implement the methods of the [MFMailComposeViewControllerDelegate](../mfmailcomposeviewcontrollerdelegate.md) protocol.

## See Also

### Responding to the view controller dismissal

- [MFMailComposeViewControllerDelegate](../mfmailcomposeviewcontrollerdelegate.md): An interface for responding to user interactions with a mail compose view controller.

# mailComposeDelegate (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The mail composition view controller’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MFMailComposeViewControllerDelegate> mailComposeDelegate;
```

<a id="Discussion"></a>

## Discussion

The delegate object is responsible for dismissing the view presented by this view controller at the appropriate time. Therefore, you should always provide a delegate, and that object should implement the methods of the [MFMailComposeViewControllerDelegate](../mfmailcomposeviewcontrollerdelegate.md) protocol.

## See Also

### Responding to the view controller dismissal

- [MFMailComposeViewControllerDelegate](../mfmailcomposeviewcontrollerdelegate.md): An interface for responding to user interactions with a mail compose view controller.
