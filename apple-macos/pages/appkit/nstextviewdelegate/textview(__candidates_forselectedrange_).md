> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:candidates:forselectedrange:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:candidates:forselectedrange:))

# textView(\_:candidates:forSelectedRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Returns an array of text objects to include in a text selection.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, candidates: [NSTextCheckingResult], forSelectedRange selectedRange: NSRange) -> [NSTextCheckingResult]
```

<a id="return-value"></a>

## Return Value

An array of [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) objects.

## See Also

### Managing the Selection

- [textView(\_:willChangeSelectionFromCharacterRange:toCharacterRange:)](textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md): Returns the actual range to select.
- [textView(\_:willChangeSelectionFromCharacterRanges:toCharacterRanges:)](textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md): Returns the actual character ranges to select.
- [textViewDidChangeSelection(\_:)](textviewdidchangeselection%28__%29.md): Sent when the selection changes in the text view.
- [textView(\_:candidatesForSelectedRange:)](textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView(\_:shouldSelectCandidateAt:)](textview%28__shouldselectcandidateat_%29.md): Returns a Boolean value that indicates whether to select the text object at the index.
- [textView(\_:shouldUpdateTouchBarItemIdentifiers:)](textview%28__shouldupdatetouchbaritemidentifiers_%29.md): Returns and array of touch bar elements for the framework to update.

# textView:candidates:forSelectedRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Returns an array of text objects to include in a text selection.

## Declaration

```objectivec
- (NSArray<NSTextCheckingResult *> *) textView:(NSTextView *) textView candidates:(NSArray<NSTextCheckingResult *> *) candidates forSelectedRange:(NSRange) selectedRange;
```

<a id="return-value"></a>

## Return Value

An array of [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) objects.

## See Also

### Managing the Selection

- [textView:willChangeSelectionFromCharacterRange:toCharacterRange:](textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md): Returns the actual range to select.
- [textView:willChangeSelectionFromCharacterRanges:toCharacterRanges:](textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md): Returns the actual character ranges to select.
- [textViewDidChangeSelection:](textviewdidchangeselection%28__%29.md): Sent when the selection changes in the text view.
- [textView:candidatesForSelectedRange:](textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView:shouldSelectCandidateAtIndex:](textview%28__shouldselectcandidateat_%29.md): Returns a Boolean value that indicates whether to select the text object at the index.
- [textView:shouldUpdateTouchBarItemIdentifiers:](textview%28__shouldupdatetouchbaritemidentifiers_%29.md): Returns and array of touch bar elements for the framework to update.
