> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/cascadetopleft(from:)](https://developer.apple.com/documentation/appkit/nswindow/cascadetopleft(from:))

# cascadeTopLeft(from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Positions the window’s top-left to a given point.

## Declaration

```swift
func cascadeTopLeft(from topLeftPoint: NSPoint) -> NSPoint
```

## Parameters

- `topLeftPoint`: The new top-left point, in screen coordinates, for the window. When [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint), the window is not moved, except as needed to constrain to the visible screen

<a id="return-value"></a>

## Return Value

The point shifted from top left of the window in screen coordinates.

<a id="Discussion"></a>

## Discussion

The returned point can be passed to a subsequent invocation of [cascadeTopLeft(from:)](cascadetopleft%28from_%29.md) to position the next window so the title bars of both windows are fully visible.

## See Also

### Sizing Windows

- [frame](frame.md): The window’s frame rectangle in screen coordinates, including the title bar.
- [setFrameOrigin(\_:)](setframeorigin%28__%29.md): Positions the bottom-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [setFrameTopLeftPoint(\_:)](setframetopleftpoint%28__%29.md): Positions the top-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [constrainFrameRect(\_:to:)](constrainframerect%28__to_%29.md): Modifies and returns a frame rectangle so that its top edge lies on a specific screen.
- [setFrame(\_:display:)](setframe%28__display_%29.md): Sets the origin and size of the window’s frame rectangle according to a given frame rectangle, thereby setting its position and size onscreen.
- [setFrame(\_:display:animate:)](setframe%28__display_animate_%29.md): Sets the origin and size of the window’s frame rectangle, with optional animation, according to a given frame rectangle, thereby setting its position and size onscreen.
- [animationResizeTime(\_:)](animationresizetime%28__%29.md): Specifies the duration of a smooth frame-size change.
- [aspectRatio](aspectratio.md): The window’s aspect ratio, which constrains the size of its frame rectangle to integral multiples of this ratio when the user resizes it.
- [minSize](minsize.md): The minimum size to which the window’s frame (including its title bar) can be sized.
- [maxSize](maxsize.md): The maximum size to which the window’s frame (including its title bar) can be sized.
- [isZoomed](iszoomed.md): A Boolean value that indicates whether the window is in a zoomed state.
- [performZoom(\_:)](performzoom%28__%29.md): This action method simulates the user clicking the zoom box by momentarily highlighting the button and then zooming the window.
- [zoom(\_:)](zoom%28__%29.md): Toggles the size and location of the window between its standard state (which the application provides as the best size to display the window’s data) and its user state (a new size and location the user may have set by moving or resizing the window).
- [resizeFlags](resizeflags.md): The flags field of the event record for the mouse-down event that initiated the resizing session.
- [resizeIncrements](resizeincrements.md): The window’s resizing increments.

# cascadeTopLeftFromPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Positions the window’s top-left to a given point.

## Declaration

```objectivec
- (NSPoint) cascadeTopLeftFromPoint:(NSPoint) topLeftPoint;
```

## Parameters

- `topLeftPoint`: The new top-left point, in screen coordinates, for the window. When [NSZeroPoint](https://developer.apple.com/documentation/foundation/nszeropoint), the window is not moved, except as needed to constrain to the visible screen

<a id="return-value"></a>

## Return Value

The point shifted from top left of the window in screen coordinates.

<a id="Discussion"></a>

## Discussion

The returned point can be passed to a subsequent invocation of [cascadeTopLeftFromPoint:](cascadetopleft%28from_%29.md) to position the next window so the title bars of both windows are fully visible.

## See Also

### Sizing Windows

- [frame](frame.md): The window’s frame rectangle in screen coordinates, including the title bar.
- [setFrameOrigin:](setframeorigin%28__%29.md): Positions the bottom-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [setFrameTopLeftPoint:](setframetopleftpoint%28__%29.md): Positions the top-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [constrainFrameRect:toScreen:](constrainframerect%28__to_%29.md): Modifies and returns a frame rectangle so that its top edge lies on a specific screen.
- [setFrame:display:](setframe%28__display_%29.md): Sets the origin and size of the window’s frame rectangle according to a given frame rectangle, thereby setting its position and size onscreen.
- [setFrame:display:animate:](setframe%28__display_animate_%29.md): Sets the origin and size of the window’s frame rectangle, with optional animation, according to a given frame rectangle, thereby setting its position and size onscreen.
- [animationResizeTime:](animationresizetime%28__%29.md): Specifies the duration of a smooth frame-size change.
- [aspectRatio](aspectratio.md): The window’s aspect ratio, which constrains the size of its frame rectangle to integral multiples of this ratio when the user resizes it.
- [minSize](minsize.md): The minimum size to which the window’s frame (including its title bar) can be sized.
- [maxSize](maxsize.md): The maximum size to which the window’s frame (including its title bar) can be sized.
- [zoomed](iszoomed.md): A Boolean value that indicates whether the window is in a zoomed state.
- [performZoom:](performzoom%28__%29.md): This action method simulates the user clicking the zoom box by momentarily highlighting the button and then zooming the window.
- [zoom:](zoom%28__%29.md): Toggles the size and location of the window between its standard state (which the application provides as the best size to display the window’s data) and its user state (a new size and location the user may have set by moving or resizing the window).
- [resizeFlags](resizeflags.md): The flags field of the event record for the mouse-down event that initiated the resizing session.
- [resizeIncrements](resizeincrements.md): The window’s resizing increments.
