> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:shouldupdatetouchbaritemidentifiers:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:shouldupdatetouchbaritemidentifiers:))

# textView(\_:shouldUpdateTouchBarItemIdentifiers:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Returns and array of touch bar elements for the framework to update.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, shouldUpdateTouchBarItemIdentifiers identifiers: [NSTouchBarItem.Identifier]) -> [NSTouchBarItem.Identifier]
```

## Parameters

- `textView`: The text view that sent the message.
- `identifiers`: An array of touch bar identifiers to evaluate.

<a id="return-value"></a>

## Return Value

Returns an array of [NSTouchBarItem.Identifier](../nstouchbaritem/identifier-swift.struct.md) elements for framework to update.

## See Also

### Managing the Selection

- [textView(\_:willChangeSelectionFromCharacterRange:toCharacterRange:)](textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md): Returns the actual range to select.
- [textView(\_:willChangeSelectionFromCharacterRanges:toCharacterRanges:)](textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md): Returns the actual character ranges to select.
- [textViewDidChangeSelection(\_:)](textviewdidchangeselection%28__%29.md): Sent when the selection changes in the text view.
- [textView(\_:candidates:forSelectedRange:)](textview%28__candidates_forselectedrange_%29.md): Returns an array of text objects to include in a text selection.
- [textView(\_:candidatesForSelectedRange:)](textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView(\_:shouldSelectCandidateAt:)](textview%28__shouldselectcandidateat_%29.md): Returns a Boolean value that indicates whether to select the text object at the index.

# textView:shouldUpdateTouchBarItemIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Returns and array of touch bar elements for the framework to update.

## Declaration

```objectivec
- (NSArray<NSString *> *) textView:(NSTextView *) textView shouldUpdateTouchBarItemIdentifiers:(NSArray<NSString *> *) identifiers;
```

## Parameters

- `textView`: The text view that sent the message.
- `identifiers`: An array of touch bar identifiers to evaluate.

<a id="return-value"></a>

## Return Value

Returns an array of [NSTouchBarItemIdentifier](../nstouchbaritem/identifier-swift.struct.md) elements for framework to update.

## See Also

### Managing the Selection

- [textView:willChangeSelectionFromCharacterRange:toCharacterRange:](textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md): Returns the actual range to select.
- [textView:willChangeSelectionFromCharacterRanges:toCharacterRanges:](textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md): Returns the actual character ranges to select.
- [textViewDidChangeSelection:](textviewdidchangeselection%28__%29.md): Sent when the selection changes in the text view.
- [textView:candidates:forSelectedRange:](textview%28__candidates_forselectedrange_%29.md): Returns an array of text objects to include in a text selection.
- [textView:candidatesForSelectedRange:](textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView:shouldSelectCandidateAtIndex:](textview%28__shouldselectcandidateat_%29.md): Returns a Boolean value that indicates whether to select the text object at the index.
