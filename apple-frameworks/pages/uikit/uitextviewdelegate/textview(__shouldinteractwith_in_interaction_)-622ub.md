> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textview(_:shouldinteractwith:in:interaction:)-622ub](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:shouldinteractwith:in:interaction:)-622ub)

# textView(\_:shouldInteractWith:in:interaction:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Asks the delegate whether the specified text view allows the specified type of user interaction with the specified URL in the specified range of text.

> Use text item methods in [UITextViewDelegate](../uitextviewdelegate.md) instead.

## Declaration

```swift
optional func textView(_ textView: UITextView, shouldInteractWith URL: URL, in characterRange: NSRange, interaction: UITextItemInteraction) -> Bool
```

## Parameters

- `textView`: The text view containing the text attachment.
- `URL`: The URL to be processed.
- `characterRange`: The character range containing the URL.
- `interaction`: The type of interaction that is occurring (for possible values, see [UITextItemInteraction](../uitextiteminteraction.md)).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if interaction with the URL should be allowed; [false](https://developer.apple.com/documentation/swift/false) if interaction should not be allowed.

<a id="Discussion"></a>

## Discussion

This method is called on only the first interaction with the URL link. For example, this method is called when the user wants their first interaction with a URL to display a list of actions they can take; if the user chooses an open action from the list, this method is not called, because “open” represents the second interaction with the same URL.

> **Important**

>  Links in text views are interactive only if the text view is selectable but noneditable. That is, if the value of the [UITextView](../uitextview.md) [isSelectable](../uitextview/isselectable.md) property is [true](https://developer.apple.com/documentation/swift/true) and the [isEditable](../uitextview/iseditable.md) property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [textView(\_:shouldInteractWith:in:interaction:)](textview%28__shouldinteractwith_in_interaction_%29-5qha9.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the provided text attachment in the specified range of text.
- [textView(\_:shouldInteractWith:in:)](textview%28__shouldinteractwith_in_%29-97zx6.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the provided text attachment in the specified range of text.
- [textView(\_:shouldInteractWith:in:)](textview%28__shouldinteractwith_in_%29-98tho.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the specified URL in the specified range of text.
- [UITextItemInteraction](../uitextiteminteraction.md): Deprecated. Constants that indicate the type of interaction the user expects to have with a URL or text attachment.

# textView:shouldInteractWithURL:inRange:interaction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Asks the delegate whether the specified text view allows the specified type of user interaction with the specified URL in the specified range of text.

> Use text item methods in [UITextViewDelegate](../uitextviewdelegate.md) instead.

## Declaration

```objectivec
- (BOOL) textView:(UITextView *) textView shouldInteractWithURL:(NSURL *) URL inRange:(NSRange) characterRange interaction:(UITextItemInteraction) interaction;
```

## Parameters

- `textView`: The text view containing the text attachment.
- `URL`: The URL to be processed.
- `characterRange`: The character range containing the URL.
- `interaction`: The type of interaction that is occurring (for possible values, see [UITextItemInteraction](../uitextiteminteraction.md)).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if interaction with the URL should be allowed; [false](https://developer.apple.com/documentation/swift/false) if interaction should not be allowed.

<a id="Discussion"></a>

## Discussion

This method is called on only the first interaction with the URL link. For example, this method is called when the user wants their first interaction with a URL to display a list of actions they can take; if the user chooses an open action from the list, this method is not called, because “open” represents the second interaction with the same URL.

> **Important**

>  Links in text views are interactive only if the text view is selectable but noneditable. That is, if the value of the [UITextView](../uitextview.md) [selectable](../uitextview/isselectable.md) property is [true](https://developer.apple.com/documentation/swift/true) and the [editable](../uitextview/iseditable.md) property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [textView:shouldInteractWithTextAttachment:inRange:interaction:](textview%28__shouldinteractwith_in_interaction_%29-5qha9.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the provided text attachment in the specified range of text.
- [textView:shouldInteractWithTextAttachment:inRange:](textview%28__shouldinteractwith_in_%29-97zx6.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the provided text attachment in the specified range of text.
- [textView:shouldInteractWithURL:inRange:](textview%28__shouldinteractwith_in_%29-98tho.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the specified URL in the specified range of text.
- [UITextItemInteraction](../uitextiteminteraction.md): Deprecated. Constants that indicate the type of interaction the user expects to have with a URL or text attachment.
