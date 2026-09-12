> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:willchangeselectionfromcharacterrange:tocharacterrange:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:willchangeselectionfromcharacterrange:tocharacterrange:))

# textView(\_:willChangeSelectionFromCharacterRange:toCharacterRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the actual range to select.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, willChangeSelectionFromCharacterRange oldSelectedCharRange: NSRange, toCharacterRange newSelectedCharRange: NSRange) -> NSRange
```

## Parameters

- `textView`: The text view sending the message. This is the first text view in a series shared by a layout manager, not necessarily the text view displaying the selected text.
- `oldSelectedCharRange`: The original range of the selection.
- `newSelectedCharRange`: The proposed character range for the new selection.

<a id="return-value"></a>

## Return Value

The actual character range for the new selection.

<a id="Discussion"></a>

## Discussion

This method is invoked before a text view finishes changing the selection—that is, when the last argument to a [setSelectedRange(\_:affinity:stillSelecting:)](../nstextview/setselectedrange%28__affinity_stillselecting_%29.md) message is [false](https://developer.apple.com/documentation/swift/false).

Non-selectable text views do not process any mouse events. If for some reason it is necessary to disallow user selection change in a text view that handles mouse events, this can be achieved by making the text view selectable but implementing this delegate method to disallow selection changes.

<a id="Special-Considerations"></a>

### Special Considerations

In macOS 10.4 and later, if a delegate implements this delegate method and not its multiple-selection replacement, [textView(\_:willChangeSelectionFromCharacterRanges:toCharacterRanges:)](textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md), then multiple selection is effectively disallowed; attempts to set the selected ranges call the old delegate method with the first subrange, and afterwards only a single selected range is set.

## See Also

### Managing the Selection

- [textView(\_:willChangeSelectionFromCharacterRanges:toCharacterRanges:)](textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md): Returns the actual character ranges to select.
- [textViewDidChangeSelection(\_:)](textviewdidchangeselection%28__%29.md): Sent when the selection changes in the text view.
- [textView(\_:candidates:forSelectedRange:)](textview%28__candidates_forselectedrange_%29.md): Returns an array of text objects to include in a text selection.
- [textView(\_:candidatesForSelectedRange:)](textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView(\_:shouldSelectCandidateAt:)](textview%28__shouldselectcandidateat_%29.md): Returns a Boolean value that indicates whether to select the text object at the index.
- [textView(\_:shouldUpdateTouchBarItemIdentifiers:)](textview%28__shouldupdatetouchbaritemidentifiers_%29.md): Returns and array of touch bar elements for the framework to update.

# textView:willChangeSelectionFromCharacterRange:toCharacterRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the actual range to select.

## Declaration

```objectivec
- (NSRange) textView:(NSTextView *) textView willChangeSelectionFromCharacterRange:(NSRange) oldSelectedCharRange toCharacterRange:(NSRange) newSelectedCharRange;
```

## Parameters

- `textView`: The text view sending the message. This is the first text view in a series shared by a layout manager, not necessarily the text view displaying the selected text.
- `oldSelectedCharRange`: The original range of the selection.
- `newSelectedCharRange`: The proposed character range for the new selection.

<a id="return-value"></a>

## Return Value

The actual character range for the new selection.

<a id="Discussion"></a>

## Discussion

This method is invoked before a text view finishes changing the selection—that is, when the last argument to a [setSelectedRange:affinity:stillSelecting:](../nstextview/setselectedrange%28__affinity_stillselecting_%29.md) message is [false](https://developer.apple.com/documentation/swift/false).

Non-selectable text views do not process any mouse events. If for some reason it is necessary to disallow user selection change in a text view that handles mouse events, this can be achieved by making the text view selectable but implementing this delegate method to disallow selection changes.

<a id="Special-Considerations"></a>

### Special Considerations

In macOS 10.4 and later, if a delegate implements this delegate method and not its multiple-selection replacement, [textView:willChangeSelectionFromCharacterRanges:toCharacterRanges:](textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md), then multiple selection is effectively disallowed; attempts to set the selected ranges call the old delegate method with the first subrange, and afterwards only a single selected range is set.

## See Also

### Managing the Selection

- [textView:willChangeSelectionFromCharacterRanges:toCharacterRanges:](textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md): Returns the actual character ranges to select.
- [textViewDidChangeSelection:](textviewdidchangeselection%28__%29.md): Sent when the selection changes in the text view.
- [textView:candidates:forSelectedRange:](textview%28__candidates_forselectedrange_%29.md): Returns an array of text objects to include in a text selection.
- [textView:candidatesForSelectedRange:](textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView:shouldSelectCandidateAtIndex:](textview%28__shouldselectcandidateat_%29.md): Returns a Boolean value that indicates whether to select the text object at the index.
- [textView:shouldUpdateTouchBarItemIdentifiers:](textview%28__shouldupdatetouchbaritemidentifiers_%29.md): Returns and array of touch bar elements for the framework to update.
