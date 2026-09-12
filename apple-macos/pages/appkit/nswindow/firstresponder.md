> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/firstresponder](https://developer.apple.com/documentation/appkit/nswindow/firstresponder)

# firstResponder (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window’s first responder.

## Declaration

```swift
weak var firstResponder: NSResponder? { get }
```

<a id="Discussion"></a>

## Discussion

The first responder is usually the first object in a responder chain to receive an event or action message. In most cases, the first responder is a view object that the user selects or activates with the mouse or keyboard.

You can use the [firstResponder](firstresponder.md) property in custom subclasses of responder classes ([NSWindow](../nswindow.md), [NSApplication](../nsapplication.md), [NSView](../nsview.md), and subclasses) to determine if an instance of the subclass is currently the first responder. You can also use it to help locate a text field that currently has first-responder status. For more information, see [Mouse, Keyboard, and Trackpad](../mouse-keyboard-and-trackpad.md). This property is key-value observing compliant.

## See Also

### Related Documentation

- [acceptsFirstResponder](../nsresponder/acceptsfirstresponder.md): A Boolean value that indicates whether the responder accepts first responder status.

### Managing Responders

- [initialFirstResponder](initialfirstresponder.md): The view that’s made first responder (also called the key view) the first time the window is placed onscreen.
- [makeFirstResponder(\_:)](makefirstresponder%28__%29.md): Attempts to make a given responder the first responder for the window.

# firstResponder (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window’s first responder.

## Declaration

```objectivec
@property (weak, readonly) NSResponder * firstResponder;
```

<a id="Discussion"></a>

## Discussion

The first responder is usually the first object in a responder chain to receive an event or action message. In most cases, the first responder is a view object that the user selects or activates with the mouse or keyboard.

You can use the [firstResponder](firstresponder.md) property in custom subclasses of responder classes ([NSWindow](../nswindow.md), [NSApplication](../nsapplication.md), [NSView](../nsview.md), and subclasses) to determine if an instance of the subclass is currently the first responder. You can also use it to help locate a text field that currently has first-responder status. For more information, see [Mouse, Keyboard, and Trackpad](../mouse-keyboard-and-trackpad.md). This property is key-value observing compliant.

## See Also

### Related Documentation

- [acceptsFirstResponder](../nsresponder/acceptsfirstresponder.md): A Boolean value that indicates whether the responder accepts first responder status.

### Managing Responders

- [initialFirstResponder](initialfirstresponder.md): The view that’s made first responder (also called the key view) the first time the window is placed onscreen.
- [makeFirstResponder:](makefirstresponder%28__%29.md): Attempts to make a given responder the first responder for the window.
