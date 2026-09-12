> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/initialfirstresponder](https://developer.apple.com/documentation/appkit/nswindow/initialfirstresponder)

# initialFirstResponder (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view that’s made first responder (also called the key view) the first time the window is placed onscreen.

## Declaration

```swift
weak var initialFirstResponder: NSView? { get set }
```

## See Also

### Related Documentation

- [nextKeyView](../nsview/nextkeyview.md): The view object that follows the current view in the key view loop.

### Managing Responders

- [firstResponder](firstresponder.md): The window’s first responder.
- [makeFirstResponder(\_:)](makefirstresponder%28__%29.md): Attempts to make a given responder the first responder for the window.

# initialFirstResponder (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view that’s made first responder (also called the key view) the first time the window is placed onscreen.

## Declaration

```objectivec
@property (weak, nullable) NSView * initialFirstResponder;
```

## See Also

### Related Documentation

- [nextKeyView](../nsview/nextkeyview.md): The view object that follows the current view in the key view loop.

### Managing Responders

- [firstResponder](firstresponder.md): The window’s first responder.
- [makeFirstResponder:](makefirstresponder%28__%29.md): Attempts to make a given responder the first responder for the window.
