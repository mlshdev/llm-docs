> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nslayoutmanager/textviewforbeginningofselection

# textViewForBeginningOfSelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The text view that contains the first glyph in the selection.

## Declaration

```swift
unowned(unsafe) var textViewForBeginningOfSelection: NSTextView? { get }
```

<a id="Discussion"></a>

## Discussion

This property does not cause layout if the beginning of the selected range is not yet laid out.

## See Also

### Managing the responder chain

- [layoutManagerOwnsFirstResponder(in:)](layoutmanagerownsfirstresponder%28in_%29.md): Indicates whether the first responder in the specified window is a text view for the layout manager.
- [firstTextView](firsttextview.md): The first text view in the layout manager’s series of text views.

# textViewForBeginningOfSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The text view that contains the first glyph in the selection.

## Declaration

```objectivec
@property (assign, readonly, nullable) NSTextView * textViewForBeginningOfSelection;
```

<a id="Discussion"></a>

## Discussion

This property does not cause layout if the beginning of the selected range is not yet laid out.

## See Also

### Managing the responder chain

- [layoutManagerOwnsFirstResponderInWindow:](layoutmanagerownsfirstresponder%28in_%29.md): Indicates whether the first responder in the specified window is a text view for the layout manager.
- [firstTextView](firsttextview.md): The first text view in the layout manager’s series of text views.
