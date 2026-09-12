> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/zoom(_:)](https://developer.apple.com/documentation/appkit/nswindow/zoom(_:))

# zoom(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Toggles the size and location of the window between its standard state (which the application provides as the best size to display the window’s data) and its user state (a new size and location the user may have set by moving or resizing the window).

## Declaration

```swift
func zoom(_ sender: Any?)
```

## Parameters

- `sender`: The object sending the message.

<a id="Discussion"></a>

## Discussion

For more information on the standard and user states, see [windowWillUseStandardFrame(\_:defaultFrame:)](../nswindowdelegate/windowwillusestandardframe%28__defaultframe_%29.md).

Typically, the system invokes the [zoom(\_:)](zoom%28__%29.md) method after a user clicks the window’s zoom box, and [performZoom(\_:)](performzoom%28__%29.md) may also invoke [zoom(\_:)](zoom%28__%29.md) programmatically. It performs the following steps:

1. Invokes the [windowWillUseStandardFrame(\_:defaultFrame:)](../nswindowdelegate/windowwillusestandardframe%28__defaultframe_%29.md) method, if the delegate or the window class implements it, to obtain a “best fit” frame for the window. If neither the delegate nor the window class implements the method, [zoom(\_:)](zoom%28__%29.md) uses a default frame. The default frame nearly fills the current screen that contains the largest part of the window’s current frame.
2. Adjusts the resulting frame, if necessary, to fit on the current screen.
3. Compares the resulting frame to the current frame to determine whether the window’s standard frame is currently displayed. If the current frame is within a few pixels of the standard frame in size and location, the system considers it a match.
4. Determines a new frame. If the window is currently in the standard state, the new frame represents the user state, saved during a previous zoom. If the window is currently in the user state, the new frame represents the standard state, computed in step 1 above. If there’s no saved user state because there has been no previous zoom, the size and location of the window don’t change.
5. Determines whether the window currently allows zooming. By default, zooming is allowed. If the window’s delegate implements the [windowShouldZoom(\_:toFrame:)](../nswindowdelegate/windowshouldzoom%28__toframe_%29.md) method, [zoom(\_:)](zoom%28__%29.md) invokes that method. If the delegate doesn’t implement the method but the window does, [zoom(\_:)](zoom%28__%29.md) invokes the window’s version. [windowShouldZoom(\_:toFrame:)](../nswindowdelegate/windowshouldzoom%28__toframe_%29.md) returns [false](https://developer.apple.com/documentation/swift/false) if zooming isn’t currently allowed.
6. If the window currently allows zooming, sets the new frame.

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
- [minSize](minsize.md): The minimum size to which the window’s frame (including its title bar) can be sized.
- [maxSize](maxsize.md): The maximum size to which the window’s frame (including its title bar) can be sized.
- [isZoomed](iszoomed.md): A Boolean value that indicates whether the window is in a zoomed state.
- [performZoom(\_:)](performzoom%28__%29.md): This action method simulates the user clicking the zoom box by momentarily highlighting the button and then zooming the window.
- [resizeFlags](resizeflags.md): The flags field of the event record for the mouse-down event that initiated the resizing session.
- [resizeIncrements](resizeincrements.md): The window’s resizing increments.

# zoom: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Toggles the size and location of the window between its standard state (which the application provides as the best size to display the window’s data) and its user state (a new size and location the user may have set by moving or resizing the window).

## Declaration

```objectivec
- (void) zoom:(id) sender;
```

## Parameters

- `sender`: The object sending the message.

<a id="Discussion"></a>

## Discussion

For more information on the standard and user states, see [windowWillUseStandardFrame:defaultFrame:](../nswindowdelegate/windowwillusestandardframe%28__defaultframe_%29.md).

Typically, the system invokes the [zoom:](zoom%28__%29.md) method after a user clicks the window’s zoom box, and [performZoom:](performzoom%28__%29.md) may also invoke [zoom:](zoom%28__%29.md) programmatically. It performs the following steps:

1. Invokes the [windowWillUseStandardFrame:defaultFrame:](../nswindowdelegate/windowwillusestandardframe%28__defaultframe_%29.md) method, if the delegate or the window class implements it, to obtain a “best fit” frame for the window. If neither the delegate nor the window class implements the method, [zoom:](zoom%28__%29.md) uses a default frame. The default frame nearly fills the current screen that contains the largest part of the window’s current frame.
2. Adjusts the resulting frame, if necessary, to fit on the current screen.
3. Compares the resulting frame to the current frame to determine whether the window’s standard frame is currently displayed. If the current frame is within a few pixels of the standard frame in size and location, the system considers it a match.
4. Determines a new frame. If the window is currently in the standard state, the new frame represents the user state, saved during a previous zoom. If the window is currently in the user state, the new frame represents the standard state, computed in step 1 above. If there’s no saved user state because there has been no previous zoom, the size and location of the window don’t change.
5. Determines whether the window currently allows zooming. By default, zooming is allowed. If the window’s delegate implements the [windowShouldZoom:toFrame:](../nswindowdelegate/windowshouldzoom%28__toframe_%29.md) method, [zoom:](zoom%28__%29.md) invokes that method. If the delegate doesn’t implement the method but the window does, [zoom:](zoom%28__%29.md) invokes the window’s version. [windowShouldZoom:toFrame:](../nswindowdelegate/windowshouldzoom%28__toframe_%29.md) returns [false](https://developer.apple.com/documentation/swift/false) if zooming isn’t currently allowed.
6. If the window currently allows zooming, sets the new frame.

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
- [minSize](minsize.md): The minimum size to which the window’s frame (including its title bar) can be sized.
- [maxSize](maxsize.md): The maximum size to which the window’s frame (including its title bar) can be sized.
- [zoomed](iszoomed.md): A Boolean value that indicates whether the window is in a zoomed state.
- [performZoom:](performzoom%28__%29.md): This action method simulates the user clicking the zoom box by momentarily highlighting the button and then zooming the window.
- [resizeFlags](resizeflags.md): The flags field of the event record for the mouse-down event that initiated the resizing session.
- [resizeIncrements](resizeincrements.md): The window’s resizing increments.
