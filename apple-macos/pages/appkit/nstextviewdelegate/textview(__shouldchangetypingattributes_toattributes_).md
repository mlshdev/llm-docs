> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:shouldchangetypingattributes:toattributes:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:shouldchangetypingattributes:toattributes:))

# textView(\_:shouldChangeTypingAttributes:toAttributes:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Sent when the typing attributes are changed.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, shouldChangeTypingAttributes oldTypingAttributes: [String : Any] = [:], toAttributes newTypingAttributes: [NSAttributedString.Key : Any] = [:]) -> [NSAttributedString.Key : Any]
```

## Parameters

- `textView`: The text view sending the message.
- `oldTypingAttributes`: The old typing attributes.
- `newTypingAttributes`: The proposed typing attributes.

<a id="return-value"></a>

## Return Value

The actual new typing attributes.

## See Also

### Setting Text Attributes

- [textView(\_:shouldChangeTextIn:replacementString:)](textview%28__shouldchangetextin_replacementstring_%29.md): Sent when a text view needs to determine if text in a specified range should be changed.
- [textView(\_:shouldChangeTextInRanges:replacementStrings:)](textview%28__shouldchangetextinranges_replacementstrings_%29.md): Sent when a text view needs to determine if text in an array of specified ranges should be changed.
- [textViewDidChangeTypingAttributes(\_:)](textviewdidchangetypingattributes%28__%29.md): Sent when a text view’s typing attributes change.

# textView:shouldChangeTypingAttributes:toAttributes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when the typing attributes are changed.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) textView:(NSTextView *) textView shouldChangeTypingAttributes:(NSDictionary<NSString *,id> *) oldTypingAttributes toAttributes:(NSDictionary<NSString *,id> *) newTypingAttributes;
```

## Parameters

- `textView`: The text view sending the message.
- `oldTypingAttributes`: The old typing attributes.
- `newTypingAttributes`: The proposed typing attributes.

<a id="return-value"></a>

## Return Value

The actual new typing attributes.

## See Also

### Setting Text Attributes

- [textView:shouldChangeTextInRange:replacementString:](textview%28__shouldchangetextin_replacementstring_%29.md): Sent when a text view needs to determine if text in a specified range should be changed.
- [textView:shouldChangeTextInRanges:replacementStrings:](textview%28__shouldchangetextinranges_replacementstrings_%29.md): Sent when a text view needs to determine if text in an array of specified ranges should be changed.
- [textViewDidChangeTypingAttributes:](textviewdidchangetypingattributes%28__%29.md): Sent when a text view’s typing attributes change.
