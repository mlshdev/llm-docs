> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/setframe(_:display:animate:)](https://developer.apple.com/documentation/appkit/nswindow/setframe(_:display:animate:))

# setFrame(\_:display:animate:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the origin and size of the window’s frame rectangle, with optional animation, according to a given frame rectangle, thereby setting its position and size onscreen.

## Declaration

```swift
func setFrame(_ frameRect: NSRect, display displayFlag: Bool, animate animateFlag: Bool)
```

## Parameters

- `frameRect`: The frame rectangle for the window, including the title bar.
- `displayFlag`: Specifies whether the window redraws the views that need to be displayed. When [true](https://developer.apple.com/documentation/swift/true) the window sends a [displayIfNeeded()](displayifneeded%28%29.md) message down its view hierarchy, thus redrawing all views.
- `animateFlag`: Specifies whether the window performs a smooth resize. [true](https://developer.apple.com/documentation/swift/true) to perform the animation, whose duration is specified by [animationResizeTime(\_:)](animationresizetime%28__%29.md).

## See Also

### Related Documentation

- [frameRect(forContentRect:styleMask:)](framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.

### Sizing Windows

- [frame](frame.md): The window’s frame rectangle in screen coordinates, including the title bar.
- [setFrameOrigin(\_:)](setframeorigin%28__%29.md): Positions the bottom-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [setFrameTopLeftPoint(\_:)](setframetopleftpoint%28__%29.md): Positions the top-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [constrainFrameRect(\_:to:)](constrainframerect%28__to_%29.md): Modifies and returns a frame rectangle so that its top edge lies on a specific screen.
- [cascadeTopLeft(from:)](cascadetopleft%28from_%29.md): Positions the window’s top-left to a given point.
- [setFrame(\_:display:)](setframe%28__display_%29.md): Sets the origin and size of the window’s frame rectangle according to a given frame rectangle, thereby setting its position and size onscreen.
- [animationResizeTime(\_:)](animationresizetime%28__%29.md): Specifies the duration of a smooth frame-size change.
- [aspectRatio](aspectratio.md): The window’s aspect ratio, which constrains the size of its frame rectangle to integral multiples of this ratio when the user resizes it.
- [minSize](minsize.md): The minimum size to which the window’s frame (including its title bar) can be sized.
- [maxSize](maxsize.md): The maximum size to which the window’s frame (including its title bar) can be sized.
- [isZoomed](iszoomed.md): A Boolean value that indicates whether the window is in a zoomed state.
- [performZoom(\_:)](performzoom%28__%29.md): This action method simulates the user clicking the zoom box by momentarily highlighting the button and then zooming the window.
- [zoom(\_:)](zoom%28__%29.md): Toggles the size and location of the window between its standard state (which the application provides as the best size to display the window’s data) and its user state (a new size and location the user may have set by moving or resizing the window).
- [resizeFlags](resizeflags.md): The flags field of the event record for the mouse-down event that initiated the resizing session.
- [resizeIncrements](resizeincrements.md): The window’s resizing increments.

# setFrame:display:animate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the origin and size of the window’s frame rectangle, with optional animation, according to a given frame rectangle, thereby setting its position and size onscreen.

## Declaration

```objectivec
- (void) setFrame:(NSRect) frameRect display:(BOOL) displayFlag animate:(BOOL) animateFlag;
```

## Parameters

- `frameRect`: The frame rectangle for the window, including the title bar.
- `displayFlag`: Specifies whether the window redraws the views that need to be displayed. When [true](https://developer.apple.com/documentation/swift/true) the window sends a [displayIfNeeded](displayifneeded%28%29.md) message down its view hierarchy, thus redrawing all views.
- `animateFlag`: Specifies whether the window performs a smooth resize. [true](https://developer.apple.com/documentation/swift/true) to perform the animation, whose duration is specified by [animationResizeTime:](animationresizetime%28__%29.md).

## See Also

### Related Documentation

- [frameRectForContentRect:styleMask:](framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.

### Sizing Windows

- [frame](frame.md): The window’s frame rectangle in screen coordinates, including the title bar.
- [setFrameOrigin:](setframeorigin%28__%29.md): Positions the bottom-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [setFrameTopLeftPoint:](setframetopleftpoint%28__%29.md): Positions the top-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [constrainFrameRect:toScreen:](constrainframerect%28__to_%29.md): Modifies and returns a frame rectangle so that its top edge lies on a specific screen.
- [cascadeTopLeftFromPoint:](cascadetopleft%28from_%29.md): Positions the window’s top-left to a given point.
- [setFrame:display:](setframe%28__display_%29.md): Sets the origin and size of the window’s frame rectangle according to a given frame rectangle, thereby setting its position and size onscreen.
- [animationResizeTime:](animationresizetime%28__%29.md): Specifies the duration of a smooth frame-size change.
- [aspectRatio](aspectratio.md): The window’s aspect ratio, which constrains the size of its frame rectangle to integral multiples of this ratio when the user resizes it.
- [minSize](minsize.md): The minimum size to which the window’s frame (including its title bar) can be sized.
- [maxSize](maxsize.md): The maximum size to which the window’s frame (including its title bar) can be sized.
- [zoomed](iszoomed.md): A Boolean value that indicates whether the window is in a zoomed state.
- [performZoom:](performzoom%28__%29.md): This action method simulates the user clicking the zoom box by momentarily highlighting the button and then zooming the window.
- [zoom:](zoom%28__%29.md): Toggles the size and location of the window between its standard state (which the application provides as the best size to display the window’s data) and its user state (a new size and location the user may have set by moving or resizing the window).
- [resizeFlags](resizeflags.md): The flags field of the event record for the mouse-down event that initiated the resizing session.
- [resizeIncrements](resizeincrements.md): The window’s resizing increments.
