> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nslayoutmanager/firsttextview

# firstTextView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The first text view in the layout manager’s series of text views.

## Declaration

```swift
unowned(unsafe) var firstTextView: NSTextView? { get }
```

<a id="Discussion"></a>

## Discussion

This `NSTextView` object is the recipient of various `NSText` and `NSTextView` notifications.

## See Also

### Managing the responder chain

- [layoutManagerOwnsFirstResponder(in:)](layoutmanagerownsfirstresponder%28in_%29.md): Indicates whether the first responder in the specified window is a text view for the layout manager.
- [textViewForBeginningOfSelection](textviewforbeginningofselection.md): The text view that contains the first glyph in the selection.

# firstTextView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The first text view in the layout manager’s series of text views.

## Declaration

```objectivec
@property (assign, readonly, nullable) NSTextView * firstTextView;
```

<a id="Discussion"></a>

## Discussion

This `NSTextView` object is the recipient of various `NSText` and `NSTextView` notifications.

## See Also

### Managing the responder chain

- [layoutManagerOwnsFirstResponderInWindow:](layoutmanagerownsfirstresponder%28in_%29.md): Indicates whether the first responder in the specified window is a text view for the layout manager.
- [textViewForBeginningOfSelection](textviewforbeginningofselection.md): The text view that contains the first glyph in the selection.
