> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textview(_:shouldinteractwith:in:)-97zx6](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:shouldinteractwith:in:)-97zx6)

# textView(\_:shouldInteractWith:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 10.0)

Asks the delegate whether the specified text view allows user interaction with the provided text attachment in the specified range of text.

> Use [textView(\_:shouldInteractWith:in:interaction:)](textview%28__shouldinteractwith_in_interaction_%29-5qha9.md) instead.

## Declaration

```swift
optional func textView(_ textView: UITextView, shouldInteractWith textAttachment: NSTextAttachment, in characterRange: NSRange) -> Bool
```

## Parameters

- `textView`: The text view containing the text attachment.
- `textAttachment`: The text attachment.
- `characterRange`: The character range containing the text attachment.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if interaction with the text attachment should be allowed; [false](https://developer.apple.com/documentation/swift/false) if interaction should not be allowed.

<a id="Discussion"></a>

## Discussion

A text view calls this method if the user taps or long-presses the text attachment and its [image](../nstextattachment/image.md) property is not `nil`. Implementation of this method is optional. You can use this method to trigger an action in addition to displaying the text attachment inline with the text.

## See Also

### Deprecated

- [textView(\_:shouldInteractWith:in:interaction:)](textview%28__shouldinteractwith_in_interaction_%29-5qha9.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the provided text attachment in the specified range of text.
- [textView(\_:shouldInteractWith:in:interaction:)](textview%28__shouldinteractwith_in_interaction_%29-622ub.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the specified URL in the specified range of text.
- [textView(\_:shouldInteractWith:in:)](textview%28__shouldinteractwith_in_%29-98tho.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the specified URL in the specified range of text.
- [UITextItemInteraction](../uitextiteminteraction.md): Deprecated. Constants that indicate the type of interaction the user expects to have with a URL or text attachment.

# textView:shouldInteractWithTextAttachment:inRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 10.0)

Asks the delegate whether the specified text view allows user interaction with the provided text attachment in the specified range of text.

> Use [textView:shouldInteractWithTextAttachment:inRange:interaction:](textview%28__shouldinteractwith_in_interaction_%29-5qha9.md) instead.

## Declaration

```objectivec
- (BOOL) textView:(UITextView *) textView shouldInteractWithTextAttachment:(NSTextAttachment *) textAttachment inRange:(NSRange) characterRange;
```

## Parameters

- `textView`: The text view containing the text attachment.
- `textAttachment`: The text attachment.
- `characterRange`: The character range containing the text attachment.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if interaction with the text attachment should be allowed; [false](https://developer.apple.com/documentation/swift/false) if interaction should not be allowed.

<a id="Discussion"></a>

## Discussion

A text view calls this method if the user taps or long-presses the text attachment and its [image](../nstextattachment/image.md) property is not `nil`. Implementation of this method is optional. You can use this method to trigger an action in addition to displaying the text attachment inline with the text.

## See Also

### Deprecated

- [textView:shouldInteractWithTextAttachment:inRange:interaction:](textview%28__shouldinteractwith_in_interaction_%29-5qha9.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the provided text attachment in the specified range of text.
- [textView:shouldInteractWithURL:inRange:interaction:](textview%28__shouldinteractwith_in_interaction_%29-622ub.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the specified URL in the specified range of text.
- [textView:shouldInteractWithURL:inRange:](textview%28__shouldinteractwith_in_%29-98tho.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the specified URL in the specified range of text.
- [UITextItemInteraction](../uitextiteminteraction.md): Deprecated. Constants that indicate the type of interaction the user expects to have with a URL or text attachment.
