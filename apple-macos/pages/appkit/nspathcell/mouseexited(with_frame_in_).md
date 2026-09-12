> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcell/mouseexited(with:frame:in:)](https://developer.apple.com/documentation/appkit/nspathcell/mouseexited(with:frame:in:))

# mouseExited(with:frame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Hides the cell component over which the mouse is hovering.

## Declaration

```swift
func mouseExited(with event: NSEvent, frame: NSRect, in view: NSView)
```

## Parameters

- `event`: The mouse-exited event.
- `frame`: The frame in which the cell is located.
- `view`: The view in which the cell is located.

## See Also

### Displaying Hidden Components

- [mouseEntered(with:frame:in:)](mouseentered%28with_frame_in_%29.md): Displays the cell component over which the mouse is hovering.

# mouseExited:withFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Hides the cell component over which the mouse is hovering.

## Declaration

```objectivec
- (void) mouseExited:(NSEvent *) event withFrame:(NSRect) frame inView:(NSView *) view;
```

## Parameters

- `event`: The mouse-exited event.
- `frame`: The frame in which the cell is located.
- `view`: The view in which the cell is located.

## See Also

### Displaying Hidden Components

- [mouseEntered:withFrame:inView:](mouseentered%28with_frame_in_%29.md): Displays the cell component over which the mouse is hovering.
