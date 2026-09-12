> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textviewdidchangetypingattributes(_:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textviewdidchangetypingattributes(_:))

# textViewDidChangeTypingAttributes(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Sent when a text view’s typing attributes change.

## Declaration

```swift
@MainActor optional func textViewDidChangeTypingAttributes(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didChangeTypingAttributesNotification](../nstextview/didchangetypingattributesnotification.md).

## See Also

### Setting Text Attributes

- [textView(\_:shouldChangeTextIn:replacementString:)](textview%28__shouldchangetextin_replacementstring_%29.md): Sent when a text view needs to determine if text in a specified range should be changed.
- [textView(\_:shouldChangeTextInRanges:replacementStrings:)](textview%28__shouldchangetextinranges_replacementstrings_%29.md): Sent when a text view needs to determine if text in an array of specified ranges should be changed.
- [textView(\_:shouldChangeTypingAttributes:toAttributes:)](textview%28__shouldchangetypingattributes_toattributes_%29.md): Sent when the typing attributes are changed.

# textViewDidChangeTypingAttributes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when a text view’s typing attributes change.

## Declaration

```objectivec
- (void) textViewDidChangeTypingAttributes:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSTextViewDidChangeTypingAttributesNotification](../nstextview/didchangetypingattributesnotification.md).

## See Also

### Setting Text Attributes

- [textView:shouldChangeTextInRange:replacementString:](textview%28__shouldchangetextin_replacementstring_%29.md): Sent when a text view needs to determine if text in a specified range should be changed.
- [textView:shouldChangeTextInRanges:replacementStrings:](textview%28__shouldchangetextinranges_replacementstrings_%29.md): Sent when a text view needs to determine if text in an array of specified ranges should be changed.
- [textView:shouldChangeTypingAttributes:toAttributes:](textview%28__shouldchangetypingattributes_toattributes_%29.md): Sent when the typing attributes are changed.
