> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:willchangeselectionfromcharacterranges:tocharacterranges:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:willchangeselectionfromcharacterranges:tocharacterranges:))

# textView(\_:willChangeSelectionFromCharacterRanges:toCharacterRanges:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the actual character ranges to select.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, willChangeSelectionFromCharacterRanges oldSelectedCharRanges: [NSValue], toCharacterRanges newSelectedCharRanges: [NSValue]) -> [NSValue]
```

## Parameters

- `textView`: The text view sending the message. This is the first text view in a series shared by a layout manager, not necessarily the text view displaying the selected text.
- `oldSelectedCharRanges`: An array containing the original ranges of the selection. This must be a non-`nil`, non-empty array of objects responding to the `NSValue` method `rangeValue`, and in addition its elements must be sorted, non-overlapping, non-contiguous, and (except for the case of a single range) have non-zero-length.
- `newSelectedCharRanges`: An array containing the proposed character ranges for the new selection. This must be a non-`nil`, non-empty array of objects responding to the `NSValue` method `rangeValue`, and in addition its elements must be sorted, non-overlapping, non-contiguous, and (except for the case of a single range) have non-zero-length.

<a id="return-value"></a>

## Return Value

An array containing the actual character ranges for the new selection.

<a id="Discussion"></a>

## Discussion

Invoked before an `NSTextView` object finishes changing the selection—that is, when the last argument to a [setSelectedRange(\_:affinity:stillSelecting:)](../nstextview/setselectedrange%28__affinity_stillselecting_%29.md) or [setSelectedRanges(\_:affinity:stillSelecting:)](../nstextview/setselectedranges%28__affinity_stillselecting_%29.md) message is [false](https://developer.apple.com/documentation/swift/false).

Non-selectable text views do not process any mouse events. If for some reason it is necessary to disallow user selection change in a text view that handles mouse events, this can be achieved by making the text view selectable but implementing this delegate method to disallow selection changes.

If a delegate implements both this method and [textView(\_:willChangeSelectionFromCharacterRange:toCharacterRange:)](textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md), then the latter is ignored.

## See Also

### Managing the Selection

- [textView(\_:willChangeSelectionFromCharacterRange:toCharacterRange:)](textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md): Returns the actual range to select.
- [textViewDidChangeSelection(\_:)](textviewdidchangeselection%28__%29.md): Sent when the selection changes in the text view.
- [textView(\_:candidates:forSelectedRange:)](textview%28__candidates_forselectedrange_%29.md): Returns an array of text objects to include in a text selection.
- [textView(\_:candidatesForSelectedRange:)](textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView(\_:shouldSelectCandidateAt:)](textview%28__shouldselectcandidateat_%29.md): Returns a Boolean value that indicates whether to select the text object at the index.
- [textView(\_:shouldUpdateTouchBarItemIdentifiers:)](textview%28__shouldupdatetouchbaritemidentifiers_%29.md): Returns and array of touch bar elements for the framework to update.

# textView:willChangeSelectionFromCharacterRanges:toCharacterRanges: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the actual character ranges to select.

## Declaration

```objectivec
- (NSArray<NSValue *> *) textView:(NSTextView *) textView willChangeSelectionFromCharacterRanges:(NSArray<NSValue *> *) oldSelectedCharRanges toCharacterRanges:(NSArray<NSValue *> *) newSelectedCharRanges;
```

## Parameters

- `textView`: The text view sending the message. This is the first text view in a series shared by a layout manager, not necessarily the text view displaying the selected text.
- `oldSelectedCharRanges`: An array containing the original ranges of the selection. This must be a non-`nil`, non-empty array of objects responding to the `NSValue` method `rangeValue`, and in addition its elements must be sorted, non-overlapping, non-contiguous, and (except for the case of a single range) have non-zero-length.
- `newSelectedCharRanges`: An array containing the proposed character ranges for the new selection. This must be a non-`nil`, non-empty array of objects responding to the `NSValue` method `rangeValue`, and in addition its elements must be sorted, non-overlapping, non-contiguous, and (except for the case of a single range) have non-zero-length.

<a id="return-value"></a>

## Return Value

An array containing the actual character ranges for the new selection.

<a id="Discussion"></a>

## Discussion

Invoked before an `NSTextView` object finishes changing the selection—that is, when the last argument to a [setSelectedRange:affinity:stillSelecting:](../nstextview/setselectedrange%28__affinity_stillselecting_%29.md) or [setSelectedRanges:affinity:stillSelecting:](../nstextview/setselectedranges%28__affinity_stillselecting_%29.md) message is [false](https://developer.apple.com/documentation/swift/false).

Non-selectable text views do not process any mouse events. If for some reason it is necessary to disallow user selection change in a text view that handles mouse events, this can be achieved by making the text view selectable but implementing this delegate method to disallow selection changes.

If a delegate implements both this method and [textView:willChangeSelectionFromCharacterRange:toCharacterRange:](textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md), then the latter is ignored.

## See Also

### Managing the Selection

- [textView:willChangeSelectionFromCharacterRange:toCharacterRange:](textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md): Returns the actual range to select.
- [textViewDidChangeSelection:](textviewdidchangeselection%28__%29.md): Sent when the selection changes in the text view.
- [textView:candidates:forSelectedRange:](textview%28__candidates_forselectedrange_%29.md): Returns an array of text objects to include in a text selection.
- [textView:candidatesForSelectedRange:](textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView:shouldSelectCandidateAtIndex:](textview%28__shouldselectcandidateat_%29.md): Returns a Boolean value that indicates whether to select the text object at the index.
- [textView:shouldUpdateTouchBarItemIdentifiers:](textview%28__shouldupdatetouchbaritemidentifiers_%29.md): Returns and array of touch bar elements for the framework to update.
