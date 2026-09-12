> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textviewdidchangeselection(_:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textviewdidchangeselection(_:))

# textViewDidChangeSelection(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Sent when the selection changes in the text view.

## Declaration

```swift
@MainActor optional func textViewDidChangeSelection(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didChangeSelectionNotification](../nstextview/didchangeselectionnotification.md).

## See Also

### Managing the Selection

- [textView(\_:willChangeSelectionFromCharacterRange:toCharacterRange:)](textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md): Returns the actual range to select.
- [textView(\_:willChangeSelectionFromCharacterRanges:toCharacterRanges:)](textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md): Returns the actual character ranges to select.
- [textView(\_:candidates:forSelectedRange:)](textview%28__candidates_forselectedrange_%29.md): Returns an array of text objects to include in a text selection.
- [textView(\_:candidatesForSelectedRange:)](textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView(\_:shouldSelectCandidateAt:)](textview%28__shouldselectcandidateat_%29.md): Returns a Boolean value that indicates whether to select the text object at the index.
- [textView(\_:shouldUpdateTouchBarItemIdentifiers:)](textview%28__shouldupdatetouchbaritemidentifiers_%29.md): Returns and array of touch bar elements for the framework to update.

# textViewDidChangeSelection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when the selection changes in the text view.

## Declaration

```objectivec
- (void) textViewDidChangeSelection:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSTextViewDidChangeSelectionNotification](../nstextview/didchangeselectionnotification.md).

## See Also

### Managing the Selection

- [textView:willChangeSelectionFromCharacterRange:toCharacterRange:](textview%28__willchangeselectionfromcharacterrange_tocharacterrange_%29.md): Returns the actual range to select.
- [textView:willChangeSelectionFromCharacterRanges:toCharacterRanges:](textview%28__willchangeselectionfromcharacterranges_tocharacterranges_%29.md): Returns the actual character ranges to select.
- [textView:candidates:forSelectedRange:](textview%28__candidates_forselectedrange_%29.md): Returns an array of text objects to include in a text selection.
- [textView:candidatesForSelectedRange:](textview%28__candidatesforselectedrange_%29.md): Returns an array of objects that represent the elements of a selection.
- [textView:shouldSelectCandidateAtIndex:](textview%28__shouldselectcandidateat_%29.md): Returns a Boolean value that indicates whether to select the text object at the index.
- [textView:shouldUpdateTouchBarItemIdentifiers:](textview%28__shouldupdatetouchbaritemidentifiers_%29.md): Returns and array of touch bar elements for the framework to update.
