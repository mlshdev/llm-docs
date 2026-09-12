> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/defaultbuttoncell](https://developer.apple.com/documentation/appkit/nswindow/defaultbuttoncell)

# defaultButtonCell (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The button cell that performs as if clicked when the window receives a Return (or Enter) key event.

## Declaration

```swift
var defaultButtonCell: NSButtonCell? { get set }
```

<a id="Discussion"></a>

## Discussion

This cell draws itself as the focal element for keyboard interface control, unless another button cell is focused on, in which case the default button cell temporarily draws itself as normal and disables its key equivalent.

The window receives a Return key event if no responder in its responder chain claims it, or if the user presses the Control key along with the Return key.

## See Also

### Managing Default Buttons

- [enableKeyEquivalentForDefaultButtonCell()](enablekeyequivalentfordefaultbuttoncell%28%29.md): Reenables the default button cell’s key equivalent, so it performs a click when the user presses Return (or Enter).
- [disableKeyEquivalentForDefaultButtonCell()](disablekeyequivalentfordefaultbuttoncell%28%29.md): Disables the default button cell’s key equivalent, so it doesn’t perform a click when the user presses Return (or Enter).

# defaultButtonCell (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The button cell that performs as if clicked when the window receives a Return (or Enter) key event.

## Declaration

```objectivec
@property (retain, nullable) NSButtonCell * defaultButtonCell;
```

<a id="Discussion"></a>

## Discussion

This cell draws itself as the focal element for keyboard interface control, unless another button cell is focused on, in which case the default button cell temporarily draws itself as normal and disables its key equivalent.

The window receives a Return key event if no responder in its responder chain claims it, or if the user presses the Control key along with the Return key.

## See Also

### Managing Default Buttons

- [enableKeyEquivalentForDefaultButtonCell](enablekeyequivalentfordefaultbuttoncell%28%29.md): Reenables the default button cell’s key equivalent, so it performs a click when the user presses Return (or Enter).
- [disableKeyEquivalentForDefaultButtonCell](disablekeyequivalentfordefaultbuttoncell%28%29.md): Disables the default button cell’s key equivalent, so it doesn’t perform a click when the user presses Return (or Enter).
