> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/framerect(forcontentrect:)](https://developer.apple.com/documentation/appkit/nswindow/framerect(forcontentrect:))

# frameRect(forContentRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window’s frame rectangle with a given content rectangle.

## Declaration

```swift
func frameRect(forContentRect contentRect: NSRect) -> NSRect
```

## Parameters

- `contentRect`: The content rectangle for the window expressed in screen coordinates.

<a id="return-value"></a>

## Return Value

The window’s frame rectangle, expressed in screen coordinates, with `contentRect`.

<a id="Discussion"></a>

## Discussion

The window uses its current style mask in computing the frame rectangle. See [NSWindow.StyleMask](stylemask-swift.struct.md) for a list of style mask values. The major advantage of this instance-method counterpart to [frameRect(forContentRect:styleMask:)](framerect%28forcontentrect_stylemask_%29.md) is that it allows you to take toolbars into account when converting between content and frame rectangles. (The toolbar is included in the frame rectangle but not the content rectangle.)

## See Also

### Getting Layout Information

- [contentRect(forFrameRect:styleMask:)](contentrect%28forframerect_stylemask_%29.md): Returns the content rectangle used by a window with a given frame rectangle and window style.
- [frameRect(forContentRect:styleMask:)](framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.
- [minFrameWidth(withTitle:styleMask:)](minframewidth%28withtitle_stylemask_%29.md): Returns the minimum width a window’s frame rectangle must have for it to display a title, with a given window style.
- [contentRect(forFrameRect:)](contentrect%28forframerect_%29.md): Returns the window’s content rectangle with a given frame rectangle.

# frameRectForContentRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window’s frame rectangle with a given content rectangle.

## Declaration

```objectivec
- (NSRect) frameRectForContentRect:(NSRect) contentRect;
```

## Parameters

- `contentRect`: The content rectangle for the window expressed in screen coordinates.

<a id="return-value"></a>

## Return Value

The window’s frame rectangle, expressed in screen coordinates, with `contentRect`.

<a id="Discussion"></a>

## Discussion

The window uses its current style mask in computing the frame rectangle. See [NSWindowStyleMask](stylemask-swift.struct.md) for a list of style mask values. The major advantage of this instance-method counterpart to [frameRectForContentRect:styleMask:](framerect%28forcontentrect_stylemask_%29.md) is that it allows you to take toolbars into account when converting between content and frame rectangles. (The toolbar is included in the frame rectangle but not the content rectangle.)

## See Also

### Getting Layout Information

- [contentRectForFrameRect:styleMask:](contentrect%28forframerect_stylemask_%29.md): Returns the content rectangle used by a window with a given frame rectangle and window style.
- [frameRectForContentRect:styleMask:](framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.
- [minFrameWidthWithTitle:styleMask:](minframewidth%28withtitle_stylemask_%29.md): Returns the minimum width a window’s frame rectangle must have for it to display a title, with a given window style.
- [contentRectForFrameRect:](contentrect%28forframerect_%29.md): Returns the window’s content rectangle with a given frame rectangle.
