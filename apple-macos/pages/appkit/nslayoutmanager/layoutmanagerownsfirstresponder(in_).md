> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/layoutmanagerownsfirstresponder(in:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/layoutmanagerownsfirstresponder(in:))

# layoutManagerOwnsFirstResponder(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Indicates whether the first responder in the specified window is a text view for the layout manager.

## Declaration

```swift
func layoutManagerOwnsFirstResponder(in window: NSWindow) -> Bool
```

## Parameters

- `window`: The window whose first responder is tested.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the first responder in `window` is a text view associated with the receiver; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the responder chain

- [firstTextView](firsttextview.md): The first text view in the layout manager’s series of text views.
- [textViewForBeginningOfSelection](textviewforbeginningofselection.md): The text view that contains the first glyph in the selection.

# layoutManagerOwnsFirstResponderInWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Indicates whether the first responder in the specified window is a text view for the layout manager.

## Declaration

```objectivec
- (BOOL) layoutManagerOwnsFirstResponderInWindow:(NSWindow *) window;
```

## Parameters

- `window`: The window whose first responder is tested.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the first responder in `window` is a text view associated with the receiver; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the responder chain

- [firstTextView](firsttextview.md): The first text view in the layout manager’s series of text views.
- [textViewForBeginningOfSelection](textviewforbeginningofselection.md): The text view that contains the first glyph in the selection.
