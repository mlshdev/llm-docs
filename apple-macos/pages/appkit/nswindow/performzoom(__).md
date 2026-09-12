> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/performzoom(_:)](https://developer.apple.com/documentation/appkit/nswindow/performzoom(_:))

# performZoom(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method simulates the user clicking the zoom box by momentarily highlighting the button and then zooming the window.

## Declaration

```swift
func performZoom(_ sender: Any?)
```

## Parameters

- `sender`: The object sending the message.

<a id="Discussion"></a>

## Discussion

If the window doesn’t have a zoom box or can’t be zoomed for some reason, the computer beeps.

## See Also

### Related Documentation

- [styleMask](stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.

### Sizing Windows

- [frame](frame.md): The window’s frame rectangle in screen coordinates, including the title bar.
- [setFrameOrigin(\_:)](setframeorigin%28__%29.md): Positions the bottom-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [setFrameTopLeftPoint(\_:)](setframetopleftpoint%28__%29.md): Positions the top-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [constrainFrameRect(\_:to:)](constrainframerect%28__to_%29.md): Modifies and returns a frame rectangle so that its top edge lies on a specific screen.
- [cascadeTopLeft(from:)](cascadetopleft%28from_%29.md): Positions the window’s top-left to a given point.
- [setFrame(\_:display:)](setframe%28__display_%29.md): Sets the origin and size of the window’s frame rectangle according to a given frame rectangle, thereby setting its position and size onscreen.
- [setFrame(\_:display:animate:)](setframe%28__display_animate_%29.md): Sets the origin and size of the window’s frame rectangle, with optional animation, according to a given frame rectangle, thereby setting its position and size onscreen.
- [animationResizeTime(\_:)](animationresizetime%28__%29.md): Specifies the duration of a smooth frame-size change.
- [aspectRatio](aspectratio.md): The window’s aspect ratio, which constrains the size of its frame rectangle to integral multiples of this ratio when the user resizes it.
- [minSize](minsize.md): The minimum size to which the window’s frame (including its title bar) can be sized.
- [maxSize](maxsize.md): The maximum size to which the window’s frame (including its title bar) can be sized.
- [isZoomed](iszoomed.md): A Boolean value that indicates whether the window is in a zoomed state.
- [zoom(\_:)](zoom%28__%29.md): Toggles the size and location of the window between its standard state (which the application provides as the best size to display the window’s data) and its user state (a new size and location the user may have set by moving or resizing the window).
- [resizeFlags](resizeflags.md): The flags field of the event record for the mouse-down event that initiated the resizing session.
- [resizeIncrements](resizeincrements.md): The window’s resizing increments.

# performZoom: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method simulates the user clicking the zoom box by momentarily highlighting the button and then zooming the window.

## Declaration

```objectivec
- (void) performZoom:(id) sender;
```

## Parameters

- `sender`: The object sending the message.

<a id="Discussion"></a>

## Discussion

If the window doesn’t have a zoom box or can’t be zoomed for some reason, the computer beeps.

## See Also

### Related Documentation

- [styleMask](stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.

### Sizing Windows

- [frame](frame.md): The window’s frame rectangle in screen coordinates, including the title bar.
- [setFrameOrigin:](setframeorigin%28__%29.md): Positions the bottom-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [setFrameTopLeftPoint:](setframetopleftpoint%28__%29.md): Positions the top-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [constrainFrameRect:toScreen:](constrainframerect%28__to_%29.md): Modifies and returns a frame rectangle so that its top edge lies on a specific screen.
- [cascadeTopLeftFromPoint:](cascadetopleft%28from_%29.md): Positions the window’s top-left to a given point.
- [setFrame:display:](setframe%28__display_%29.md): Sets the origin and size of the window’s frame rectangle according to a given frame rectangle, thereby setting its position and size onscreen.
- [setFrame:display:animate:](setframe%28__display_animate_%29.md): Sets the origin and size of the window’s frame rectangle, with optional animation, according to a given frame rectangle, thereby setting its position and size onscreen.
- [animationResizeTime:](animationresizetime%28__%29.md): Specifies the duration of a smooth frame-size change.
- [aspectRatio](aspectratio.md): The window’s aspect ratio, which constrains the size of its frame rectangle to integral multiples of this ratio when the user resizes it.
- [minSize](minsize.md): The minimum size to which the window’s frame (including its title bar) can be sized.
- [maxSize](maxsize.md): The maximum size to which the window’s frame (including its title bar) can be sized.
- [zoomed](iszoomed.md): A Boolean value that indicates whether the window is in a zoomed state.
- [zoom:](zoom%28__%29.md): Toggles the size and location of the window between its standard state (which the application provides as the best size to display the window’s data) and its user state (a new size and location the user may have set by moving or resizing the window).
- [resizeFlags](resizeflags.md): The flags field of the event record for the mouse-down event that initiated the resizing session.
- [resizeIncrements](resizeincrements.md): The window’s resizing increments.
