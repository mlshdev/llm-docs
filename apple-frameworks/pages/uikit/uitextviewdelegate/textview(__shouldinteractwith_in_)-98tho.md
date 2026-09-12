> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textview(_:shouldinteractwith:in:)-98tho](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:shouldinteractwith:in:)-98tho)

# textView(\_:shouldInteractWith:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 10.0)

Asks the delegate whether the specified text view allows user interaction with the specified URL in the specified range of text.

> Use [textView(\_:shouldInteractWith:in:interaction:)](textview%28__shouldinteractwith_in_interaction_%29-622ub.md) instead.

## Declaration

```swift
optional func textView(_ textView: UITextView, shouldInteractWith URL: URL, in characterRange: NSRange) -> Bool
```

## Parameters

- `textView`: The text view containing the text attachment.
- `URL`: The URL to be processed.
- `characterRange`: The character range containing the URL.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if interaction with the URL should be allowed; [false](https://developer.apple.com/documentation/swift/false) if interaction should not be allowed.

<a id="Discussion"></a>

## Discussion

The text view calls this method if the user taps or long-presses the URL link. Implementation of this method is optional. By default, the text view opens the application responsible for handling the URL type and passes it the URL. You can use this method to trigger an alternative action, such as displaying the web content at the URL in a web view within the current application.

> **Important**

>  Links in text views are interactive only if the text view is selectable but noneditable. That is, if the value of the `UITextView` [isSelectable](../uitextview/isselectable.md) property is [true](https://developer.apple.com/documentation/swift/true) and the [isEditable](../uitextview/iseditable.md) property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [textView(\_:shouldInteractWith:in:interaction:)](textview%28__shouldinteractwith_in_interaction_%29-5qha9.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the provided text attachment in the specified range of text.
- [textView(\_:shouldInteractWith:in:interaction:)](textview%28__shouldinteractwith_in_interaction_%29-622ub.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the specified URL in the specified range of text.
- [textView(\_:shouldInteractWith:in:)](textview%28__shouldinteractwith_in_%29-97zx6.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the provided text attachment in the specified range of text.
- [UITextItemInteraction](../uitextiteminteraction.md): Deprecated. Constants that indicate the type of interaction the user expects to have with a URL or text attachment.

# textView:shouldInteractWithURL:inRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 10.0)

Asks the delegate whether the specified text view allows user interaction with the specified URL in the specified range of text.

> Use [textView:shouldInteractWithURL:inRange:interaction:](textview%28__shouldinteractwith_in_interaction_%29-622ub.md) instead.

## Declaration

```objectivec
- (BOOL) textView:(UITextView *) textView shouldInteractWithURL:(NSURL *) URL inRange:(NSRange) characterRange;
```

## Parameters

- `textView`: The text view containing the text attachment.
- `URL`: The URL to be processed.
- `characterRange`: The character range containing the URL.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if interaction with the URL should be allowed; [false](https://developer.apple.com/documentation/swift/false) if interaction should not be allowed.

<a id="Discussion"></a>

## Discussion

The text view calls this method if the user taps or long-presses the URL link. Implementation of this method is optional. By default, the text view opens the application responsible for handling the URL type and passes it the URL. You can use this method to trigger an alternative action, such as displaying the web content at the URL in a web view within the current application.

> **Important**

>  Links in text views are interactive only if the text view is selectable but noneditable. That is, if the value of the `UITextView` [selectable](../uitextview/isselectable.md) property is [true](https://developer.apple.com/documentation/swift/true) and the [editable](../uitextview/iseditable.md) property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [textView:shouldInteractWithTextAttachment:inRange:interaction:](textview%28__shouldinteractwith_in_interaction_%29-5qha9.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the provided text attachment in the specified range of text.
- [textView:shouldInteractWithURL:inRange:interaction:](textview%28__shouldinteractwith_in_interaction_%29-622ub.md): Deprecated. Asks the delegate whether the specified text view allows the specified type of user interaction with the specified URL in the specified range of text.
- [textView:shouldInteractWithTextAttachment:inRange:](textview%28__shouldinteractwith_in_%29-97zx6.md): Deprecated. Asks the delegate whether the specified text view allows user interaction with the provided text attachment in the specified range of text.
- [UITextItemInteraction](../uitextiteminteraction.md): Deprecated. Constants that indicate the type of interaction the user expects to have with a URL or text attachment.
