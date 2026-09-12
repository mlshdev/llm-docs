> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:shouldchangetextin:replacementstring:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:shouldchangetextin:replacementstring:))

# textView(\_:shouldChangeTextIn:replacementString:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when a text view needs to determine if text in a specified range should be changed.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, shouldChangeTextIn affectedCharRange: NSRange, replacementString: String?) -> Bool
```

## Parameters

- `textView`: The text view sending the message. This is the first text view in a series shared by a layout manager, not necessarily the text view displaying the selected text.
- `affectedCharRange`: The range of characters to be replaced.
- `replacementString`: The characters that will replace the characters in `affectedCharRange`; `nil` if only text attributes are being changed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the replacement, or [false](https://developer.apple.com/documentation/swift/false) to reject the change.

<a id="Discussion"></a>

## Discussion

If a delegate implements this method and not its multiple-selection replacement, [textView(\_:shouldChangeTextInRanges:replacementStrings:)](textview%28__shouldchangetextinranges_replacementstrings_%29.md), it is called with an appropriate range and string. If a delegate implements the new method, then this one is ignored.

## See Also

### Setting Text Attributes

- [textView(\_:shouldChangeTextInRanges:replacementStrings:)](textview%28__shouldchangetextinranges_replacementstrings_%29.md): Sent when a text view needs to determine if text in an array of specified ranges should be changed.
- [textView(\_:shouldChangeTypingAttributes:toAttributes:)](textview%28__shouldchangetypingattributes_toattributes_%29.md): Sent when the typing attributes are changed.
- [textViewDidChangeTypingAttributes(\_:)](textviewdidchangetypingattributes%28__%29.md): Sent when a text view’s typing attributes change.

# textView:shouldChangeTextInRange:replacementString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when a text view needs to determine if text in a specified range should be changed.

## Declaration

```objectivec
- (BOOL) textView:(NSTextView *) textView shouldChangeTextInRange:(NSRange) affectedCharRange replacementString:(NSString *) replacementString;
```

## Parameters

- `textView`: The text view sending the message. This is the first text view in a series shared by a layout manager, not necessarily the text view displaying the selected text.
- `affectedCharRange`: The range of characters to be replaced.
- `replacementString`: The characters that will replace the characters in `affectedCharRange`; `nil` if only text attributes are being changed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the replacement, or [false](https://developer.apple.com/documentation/swift/false) to reject the change.

<a id="Discussion"></a>

## Discussion

If a delegate implements this method and not its multiple-selection replacement, [textView:shouldChangeTextInRanges:replacementStrings:](textview%28__shouldchangetextinranges_replacementstrings_%29.md), it is called with an appropriate range and string. If a delegate implements the new method, then this one is ignored.

## See Also

### Setting Text Attributes

- [textView:shouldChangeTextInRanges:replacementStrings:](textview%28__shouldchangetextinranges_replacementstrings_%29.md): Sent when a text view needs to determine if text in an array of specified ranges should be changed.
- [textView:shouldChangeTypingAttributes:toAttributes:](textview%28__shouldchangetypingattributes_toattributes_%29.md): Sent when the typing attributes are changed.
- [textViewDidChangeTypingAttributes:](textviewdidchangetypingattributes%28__%29.md): Sent when a text view’s typing attributes change.
