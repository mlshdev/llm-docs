> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/minsize](https://developer.apple.com/documentation/appkit/nswindow/minsize)

# minSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The minimum size to which the window’s frame (including its title bar) can be sized.

## Declaration

```swift
var minSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

The minimum size constraint is enforced for resizing by the user as well as for the `setFrame...` methods other than [setFrame(\_:display:)](setframe%28__display_%29.md) and [setFrame(\_:display:animate:)](setframe%28__display_animate_%29.md).

The [NSWindow](../nswindow.md) method takes precedence over this property.

## See Also

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
- [maxSize](maxsize.md): The maximum size to which the window’s frame (including its title bar) can be sized.
- [isZoomed](iszoomed.md): A Boolean value that indicates whether the window is in a zoomed state.
- [performZoom(\_:)](performzoom%28__%29.md): This action method simulates the user clicking the zoom box by momentarily highlighting the button and then zooming the window.
- [zoom(\_:)](zoom%28__%29.md): Toggles the size and location of the window between its standard state (which the application provides as the best size to display the window’s data) and its user state (a new size and location the user may have set by moving or resizing the window).
- [resizeFlags](resizeflags.md): The flags field of the event record for the mouse-down event that initiated the resizing session.
- [resizeIncrements](resizeincrements.md): The window’s resizing increments.

# minSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The minimum size to which the window’s frame (including its title bar) can be sized.

## Declaration

```objectivec
@property NSSize minSize;
```

<a id="Discussion"></a>

## Discussion

The minimum size constraint is enforced for resizing by the user as well as for the `setFrame...` methods other than [setFrame:display:](setframe%28__display_%29.md) and [setFrame:display:animate:](setframe%28__display_animate_%29.md).

The [NSWindow](../nswindow.md) method takes precedence over this property.

## See Also

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
- [maxSize](maxsize.md): The maximum size to which the window’s frame (including its title bar) can be sized.
- [zoomed](iszoomed.md): A Boolean value that indicates whether the window is in a zoomed state.
- [performZoom:](performzoom%28__%29.md): This action method simulates the user clicking the zoom box by momentarily highlighting the button and then zooming the window.
- [zoom:](zoom%28__%29.md): Toggles the size and location of the window between its standard state (which the application provides as the best size to display the window’s data) and its user state (a new size and location the user may have set by moving or resizing the window).
- [resizeFlags](resizeflags.md): The flags field of the event record for the mouse-down event that initiated the resizing session.
- [resizeIncrements](resizeincrements.md): The window’s resizing increments.
