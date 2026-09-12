> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:shouldselectcandidateat:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:shouldselectcandidateat:))

# textView(\_:shouldSelectCandidateAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Returns a Boolean value that indicates whether to select the text object at the index.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, shouldSelectCandidateAt index: Int) -> Bool
```

## Parameters

- `textView`: The text view that sent the message.
- `index`: The index that represents the start of the candidate text to evaluate.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the framework selects the text.

## See Also

### Managing the Selection

- [textView(\_:willChangeSelectionFromCharacterRange:toCharacterRange:)](textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md): Returns the actual range to select.
- [textView(\_:willChangeSelectionFromCharacterRanges:toCharacterRanges:)](textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md): Returns the actual character ranges to select.
- [textViewDidChangeSelection(\_:)](textviewdidchangeselection%28__%29.md): Sent when the selection changes in the text view.
- [textView(\_:candidates:forSelectedRange:)](textview%28__candidates_forselectedrange_%29.md): Returns an array of text objects to include in a text selection.
- [textView(\_:candidatesForSelectedRange:)](textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView(\_:shouldUpdateTouchBarItemIdentifiers:)](textview%28__shouldupdatetouchbaritemidentifiers_%29.md): Returns and array of touch bar elements for the framework to update.

# textView:shouldSelectCandidateAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Returns a Boolean value that indicates whether to select the text object at the index.

## Declaration

```objectivec
- (BOOL) textView:(NSTextView *) textView shouldSelectCandidateAtIndex:(NSUInteger) index;
```

## Parameters

- `textView`: The text view that sent the message.
- `index`: The index that represents the start of the candidate text to evaluate.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the framework selects the text.

## See Also

### Managing the Selection

- [textView:willChangeSelectionFromCharacterRange:toCharacterRange:](textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md): Returns the actual range to select.
- [textView:willChangeSelectionFromCharacterRanges:toCharacterRanges:](textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md): Returns the actual character ranges to select.
- [textViewDidChangeSelection:](textviewdidchangeselection%28__%29.md): Sent when the selection changes in the text view.
- [textView:candidates:forSelectedRange:](textview%28__candidates_forselectedrange_%29.md): Returns an array of text objects to include in a text selection.
- [textView:candidatesForSelectedRange:](textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView:shouldUpdateTouchBarItemIdentifiers:](textview%28__shouldupdatetouchbaritemidentifiers_%29.md): Returns and array of touch bar elements for the framework to update.
