> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextiteminteraction](https://developer.apple.com/documentation/uikit/uitextiteminteraction)

# UITextItemInteraction (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Constants that indicate the type of interaction the user expects to have with a URL or text attachment.

> Use text item methods in [UITextViewDelegate](uitextviewdelegate.md) instead.

## Declaration

```swift
enum UITextItemInteraction
```

## Topics

### Constants

- [UITextItemInteraction.invokeDefaultAction](uitextiteminteraction/invokedefaultaction.md): Deprecated. The user wants to perform the default action on the text item; for example, opening a URL.
- [UITextItemInteraction.presentActions](uitextiteminteraction/presentactions.md): Deprecated. The user wants to be presented with a list of actions that can be taken on the text item, such as opening the link in a different way or downloading content from the link.
- [UITextItemInteraction.preview](uitextiteminteraction/preview.md): Deprecated. The user wants to get a preview of the content represented by the text item, such as by initiating a peek and pop on a link.

### Initializers

- [init(rawValue:)](uitextiteminteraction/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [textView(\_:shouldInteractWith:in:interaction:)](uitextviewdelegate/textview%28__shouldinteractwith_in_interaction_%29-5qha9.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the provided text attachment in the specified range of text.
- [textView(\_:shouldInteractWith:in:interaction:)](uitextviewdelegate/textview%28__shouldinteractwith_in_interaction_%29-622ub.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the specified URL in the specified range of text.
- [textView(\_:shouldInteractWith:in:)](uitextviewdelegate/textview%28__shouldinteractwith_in_%29-97zx6.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the provided text attachment in the specified range of text.
- [textView(\_:shouldInteractWith:in:)](uitextviewdelegate/textview%28__shouldinteractwith_in_%29-98tho.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the specified URL in the specified range of text.

# UITextItemInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Constants that indicate the type of interaction the user expects to have with a URL or text attachment.

> Use text item methods in [UITextViewDelegate](uitextviewdelegate.md) instead.

## Declaration

```objectivec
enum UITextItemInteraction : NSInteger;
```

## Topics

### Constants

- [UITextItemInteractionInvokeDefaultAction](uitextiteminteraction/invokedefaultaction.md): Deprecated. The user wants to perform the default action on the text item; for example, opening a URL.
- [UITextItemInteractionPresentActions](uitextiteminteraction/presentactions.md): Deprecated. The user wants to be presented with a list of actions that can be taken on the text item, such as opening the link in a different way or downloading content from the link.
- [UITextItemInteractionPreview](uitextiteminteraction/preview.md): Deprecated. The user wants to get a preview of the content represented by the text item, such as by initiating a peek and pop on a link.

## See Also

### Deprecated

- [textView:shouldInteractWithTextAttachment:inRange:interaction:](uitextviewdelegate/textview%28__shouldinteractwith_in_interaction_%29-5qha9.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the provided text attachment in the specified range of text.
- [textView:shouldInteractWithURL:inRange:interaction:](uitextviewdelegate/textview%28__shouldinteractwith_in_interaction_%29-622ub.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the specified URL in the specified range of text.
- [textView:shouldInteractWithTextAttachment:inRange:](uitextviewdelegate/textview%28__shouldinteractwith_in_%29-97zx6.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the provided text attachment in the specified range of text.
- [textView:shouldInteractWithURL:inRange:](uitextviewdelegate/textview%28__shouldinteractwith_in_%29-98tho.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the specified URL in the specified range of text.
