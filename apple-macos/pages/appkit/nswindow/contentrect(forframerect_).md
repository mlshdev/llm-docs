> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/contentrect(forframerect:)](https://developer.apple.com/documentation/appkit/nswindow/contentrect(forframerect:))

# contentRect(forFrameRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window’s content rectangle with a given frame rectangle.

## Declaration

```swift
func contentRect(forFrameRect frameRect: NSRect) -> NSRect
```

## Parameters

- `frameRect`: The frame rectangle for the window expressed in screen coordinates.

<a id="return-value"></a>

## Return Value

The window’s content rectangle, expressed in screen coordinates, with f`rameRect`.

<a id="Discussion"></a>

## Discussion

The window uses its current style mask in computing the content rectangle. See [NSWindow.StyleMask](stylemask-swift.struct.md) for a list of style mask values. The main advantage of this instance-method counterpart to [contentRect(forFrameRect:styleMask:)](contentrect%28forframerect_stylemask_%29.md) is that it allows you to take toolbars into account when converting between content and frame rectangles. (The toolbar is not included in the content rectangle.)

## See Also

### Getting Layout Information

- [contentRect(forFrameRect:styleMask:)](contentrect%28forframerect_stylemask_%29.md): Returns the content rectangle used by a window with a given frame rectangle and window style.
- [frameRect(forContentRect:styleMask:)](framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.
- [minFrameWidth(withTitle:styleMask:)](minframewidth%28withtitle_stylemask_%29.md): Returns the minimum width a window’s frame rectangle must have for it to display a title, with a given window style.
- [frameRect(forContentRect:)](framerect%28forcontentrect_%29.md): Returns the window’s frame rectangle with a given content rectangle.

# contentRectForFrameRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window’s content rectangle with a given frame rectangle.

## Declaration

```objectivec
- (NSRect) contentRectForFrameRect:(NSRect) frameRect;
```

## Parameters

- `frameRect`: The frame rectangle for the window expressed in screen coordinates.

<a id="return-value"></a>

## Return Value

The window’s content rectangle, expressed in screen coordinates, with f`rameRect`.

<a id="Discussion"></a>

## Discussion

The window uses its current style mask in computing the content rectangle. See [NSWindowStyleMask](stylemask-swift.struct.md) for a list of style mask values. The main advantage of this instance-method counterpart to [contentRectForFrameRect:styleMask:](contentrect%28forframerect_stylemask_%29.md) is that it allows you to take toolbars into account when converting between content and frame rectangles. (The toolbar is not included in the content rectangle.)

## See Also

### Getting Layout Information

- [contentRectForFrameRect:styleMask:](contentrect%28forframerect_stylemask_%29.md): Returns the content rectangle used by a window with a given frame rectangle and window style.
- [frameRectForContentRect:styleMask:](framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.
- [minFrameWidthWithTitle:styleMask:](minframewidth%28withtitle_stylemask_%29.md): Returns the minimum width a window’s frame rectangle must have for it to display a title, with a given window style.
- [frameRectForContentRect:](framerect%28forcontentrect_%29.md): Returns the window’s frame rectangle with a given content rectangle.
