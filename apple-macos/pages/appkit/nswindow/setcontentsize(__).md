> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/setcontentsize(_:)](https://developer.apple.com/documentation/appkit/nswindow/setcontentsize(_:))

# setContentSize(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.

## Declaration

```swift
func setContentSize(_ size: NSSize)
```

## Parameters

- `size`: The new size of the window’s content view in the window’s base coordinate system.

<a id="Discussion"></a>

## Discussion

This size in turn alters the size of the `NSWindow` object itself. Note that the window server limits window sizes to 10,000; if necessary, be sure to limit `aSize` relative to the frame rectangle.

## See Also

### Related Documentation

- [setFrame(\_:display:)](setframe%28__display_%29.md): Sets the origin and size of the window’s frame rectangle according to a given frame rectangle, thereby setting its position and size onscreen.
- [frameRect(forContentRect:styleMask:)](framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.
- [contentRect(forFrameRect:styleMask:)](contentrect%28forframerect_stylemask_%29.md): Returns the content rectangle used by a window with a given frame rectangle and window style.

### Sizing Content

- [contentAspectRatio](contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [contentMaxSize](contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentResizeIncrements](contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutGuide](contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).
- [contentLayoutRect](contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.

# setContentSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.

## Declaration

```objectivec
- (void) setContentSize:(NSSize) size;
```

## Parameters

- `size`: The new size of the window’s content view in the window’s base coordinate system.

<a id="Discussion"></a>

## Discussion

This size in turn alters the size of the `NSWindow` object itself. Note that the window server limits window sizes to 10,000; if necessary, be sure to limit `aSize` relative to the frame rectangle.

## See Also

### Related Documentation

- [setFrame:display:](setframe%28__display_%29.md): Sets the origin and size of the window’s frame rectangle according to a given frame rectangle, thereby setting its position and size onscreen.
- [frameRectForContentRect:styleMask:](framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.
- [contentRectForFrameRect:styleMask:](contentrect%28forframerect_stylemask_%29.md): Returns the content rectangle used by a window with a given frame rectangle and window style.

### Sizing Content

- [contentAspectRatio](contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [contentMaxSize](contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentResizeIncrements](contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutGuide](contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).
- [contentLayoutRect](contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.
