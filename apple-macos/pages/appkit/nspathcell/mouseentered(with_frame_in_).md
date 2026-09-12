> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcell/mouseentered(with:frame:in:)](https://developer.apple.com/documentation/appkit/nspathcell/mouseentered(with:frame:in:))

# mouseEntered(with:frame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Displays the cell component over which the mouse is hovering.

## Declaration

```swift
func mouseEntered(with event: NSEvent, frame: NSRect, in view: NSView)
```

## Parameters

- `event`: The mouse-entered event.
- `frame`: The frame in which the cell is located.
- `view`: The view in which the cell is located.

<a id="Discussion"></a>

## Discussion

The `NSPathCell` object dynamically animates to display the component that the mouse is hovering over using mouse-entered and mouse-exited events. The control should call these methods to correctly display the hovered component to the user. The control can acquire rectangles to track using [rect(of:withFrame:in:)](rect%28of_withframe_in_%29.md).

## See Also

### Displaying Hidden Components

- [mouseExited(with:frame:in:)](mouseexited%28with_frame_in_%29.md): Hides the cell component over which the mouse is hovering.

# mouseEntered:withFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Displays the cell component over which the mouse is hovering.

## Declaration

```objectivec
- (void) mouseEntered:(NSEvent *) event withFrame:(NSRect) frame inView:(NSView *) view;
```

## Parameters

- `event`: The mouse-entered event.
- `frame`: The frame in which the cell is located.
- `view`: The view in which the cell is located.

<a id="Discussion"></a>

## Discussion

The `NSPathCell` object dynamically animates to display the component that the mouse is hovering over using mouse-entered and mouse-exited events. The control should call these methods to correctly display the hovered component to the user. The control can acquire rectangles to track using [rectOfPathComponentCell:withFrame:inView:](rect%28of_withframe_in_%29.md).

## See Also

### Displaying Hidden Components

- [mouseExited:withFrame:inView:](mouseexited%28with_frame_in_%29.md): Hides the cell component over which the mouse is hovering.
