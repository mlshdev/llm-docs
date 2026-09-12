> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:shouldchangetextinranges:replacementstrings:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:shouldchangetextinranges:replacementstrings:))

# textView(\_:shouldChangeTextInRanges:replacementStrings:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when a text view needs to determine if text in an array of specified ranges should be changed.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, shouldChangeTextInRanges affectedRanges: [NSValue], replacementStrings: [String]?) -> Bool
```

## Parameters

- `textView`: The text view sending the message. This is the first text view in a series shared by a layout manager, not necessarily the text view displaying the selected text.
- `affectedRanges`: The array of ranges of characters to be replaced. This array must be a non-nil, non-empty array of objects responding to the NSValue `rangeValue` method, and in addition its elements must be sorted, non-overlapping, non-contiguous, and (except for the case of a single range) have non-zero-length.
- `replacementStrings`: The array of strings that will replace the characters in `affectedRanges`, one string for each range; `nil` if only text attributes are being changed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the replacement, or [false](https://developer.apple.com/documentation/swift/false) to reject the change.

## See Also

### Setting Text Attributes

- [textView(\_:shouldChangeTextIn:replacementString:)](textview%28__shouldchangetextin_replacementstring_%29.md): Sent when a text view needs to determine if text in a specified range should be changed.
- [textView(\_:shouldChangeTypingAttributes:toAttributes:)](textview%28__shouldchangetypingattributes_toattributes_%29.md): Sent when the typing attributes are changed.
- [textViewDidChangeTypingAttributes(\_:)](textviewdidchangetypingattributes%28__%29.md): Sent when a text view’s typing attributes change.

# textView:shouldChangeTextInRanges:replacementStrings: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when a text view needs to determine if text in an array of specified ranges should be changed.

## Declaration

```objectivec
- (BOOL) textView:(NSTextView *) textView shouldChangeTextInRanges:(NSArray<NSValue *> *) affectedRanges replacementStrings:(NSArray<NSString *> *) replacementStrings;
```

## Parameters

- `textView`: The text view sending the message. This is the first text view in a series shared by a layout manager, not necessarily the text view displaying the selected text.
- `affectedRanges`: The array of ranges of characters to be replaced. This array must be a non-nil, non-empty array of objects responding to the NSValue `rangeValue` method, and in addition its elements must be sorted, non-overlapping, non-contiguous, and (except for the case of a single range) have non-zero-length.
- `replacementStrings`: The array of strings that will replace the characters in `affectedRanges`, one string for each range; `nil` if only text attributes are being changed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the replacement, or [false](https://developer.apple.com/documentation/swift/false) to reject the change.

## See Also

### Setting Text Attributes

- [textView:shouldChangeTextInRange:replacementString:](textview%28__shouldchangetextin_replacementstring_%29.md): Sent when a text view needs to determine if text in a specified range should be changed.
- [textView:shouldChangeTypingAttributes:toAttributes:](textview%28__shouldchangetypingattributes_toattributes_%29.md): Sent when the typing attributes are changed.
- [textViewDidChangeTypingAttributes:](textviewdidchangetypingattributes%28__%29.md): Sent when a text view’s typing attributes change.
