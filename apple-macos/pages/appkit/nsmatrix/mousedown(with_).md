> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/mousedown(with:)](https://developer.apple.com/documentation/appkit/nsmatrix/mousedown(with:))

# mouseDown(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Responds to a mouse-down event.

## Declaration

```swift
func mouseDown(with event: NSEvent)
```

## Parameters

- `event`: The mouse-down event.

<a id="Discussion"></a>

## Discussion

A mouse-down event in a text cell initiates editing mode. A double click in any cell type except a text cell sends the double-click action of the receiver (if there is one) in addition to the single-click action.

Your code should never invoke this method, but you may override it to implement different mouse tracking than [NSMatrix](../nsmatrix.md) does. The response of the receiver depends on its selection mode, as explained in the class description.

## See Also

### Related Documentation

- [sendAction()](sendaction%28%29.md): If the selected cell has both an action and a target, sends its action to its target.
- [sendDoubleAction()](senddoubleaction%28%29.md): Sends the double-click action message to the target of the receiver.

### Handling Event and Action Messages

- [acceptsFirstMouse(for:)](acceptsfirstmouse%28for_%29.md): Returns a Boolean value indicating whether the receiver accepts the first mouse.
- [mouseDownFlags](mousedownflags.md): The flags in effect at the mouse-down event that started the current tracking session.
- [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md): Looks for a cell that has the given key equivalent and, if found, makes that cell respond as if clicked.

# mouseDown: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Responds to a mouse-down event.

## Declaration

```objectivec
- (void) mouseDown:(NSEvent *) event;
```

## Parameters

- `event`: The mouse-down event.

<a id="Discussion"></a>

## Discussion

A mouse-down event in a text cell initiates editing mode. A double click in any cell type except a text cell sends the double-click action of the receiver (if there is one) in addition to the single-click action.

Your code should never invoke this method, but you may override it to implement different mouse tracking than [NSMatrix](../nsmatrix.md) does. The response of the receiver depends on its selection mode, as explained in the class description.

## See Also

### Related Documentation

- [sendAction](sendaction%28%29.md): If the selected cell has both an action and a target, sends its action to its target.
- [sendDoubleAction](senddoubleaction%28%29.md): Sends the double-click action message to the target of the receiver.

### Handling Event and Action Messages

- [acceptsFirstMouse:](acceptsfirstmouse%28for_%29.md): Returns a Boolean value indicating whether the receiver accepts the first mouse.
- [mouseDownFlags](mousedownflags.md): The flags in effect at the mouse-down event that started the current tracking session.
- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Looks for a cell that has the given key equivalent and, if found, makes that cell respond as if clicked.
