> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/contentrect(forframerect:stylemask:)](https://developer.apple.com/documentation/appkit/nswindow/contentrect(forframerect:stylemask:))

# contentRect(forFrameRect:styleMask:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the content rectangle used by a window with a given frame rectangle and window style.

## Declaration

```swift
class func contentRect(forFrameRect fRect: NSRect, styleMask style: NSWindow.StyleMask) -> NSRect
```

## Parameters

- `fRect`: The frame rectangle for the window expressed in screen coordinates.
- `style`: The window style for the window. See [NSWindow.StyleMask](stylemask-swift.struct.md) for a list of style mask values.

<a id="return-value"></a>

## Return Value

The content rectangle, expressed in screen coordinates, used by the window with `fRect` and `style`.

<a id="Discussion"></a>

## Discussion

When a `NSWindow` instance is available, you should use [contentRect(forFrameRect:)](contentrect%28forframerect_%29.md) instead of this method.

## See Also

### Getting Layout Information

- [frameRect(forContentRect:styleMask:)](framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.
- [minFrameWidth(withTitle:styleMask:)](minframewidth%28withtitle_stylemask_%29.md): Returns the minimum width a window’s frame rectangle must have for it to display a title, with a given window style.
- [contentRect(forFrameRect:)](contentrect%28forframerect_%29.md): Returns the window’s content rectangle with a given frame rectangle.
- [frameRect(forContentRect:)](framerect%28forcontentrect_%29.md): Returns the window’s frame rectangle with a given content rectangle.

# contentRectForFrameRect:styleMask: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the content rectangle used by a window with a given frame rectangle and window style.

## Declaration

```objectivec
+ (NSRect) contentRectForFrameRect:(NSRect) fRect styleMask:(NSWindowStyleMask) style;
```

## Parameters

- `fRect`: The frame rectangle for the window expressed in screen coordinates.
- `style`: The window style for the window. See [NSWindowStyleMask](stylemask-swift.struct.md) for a list of style mask values.

<a id="return-value"></a>

## Return Value

The content rectangle, expressed in screen coordinates, used by the window with `fRect` and `style`.

<a id="Discussion"></a>

## Discussion

When a `NSWindow` instance is available, you should use [contentRectForFrameRect:](contentrect%28forframerect_%29.md) instead of this method.

## See Also

### Getting Layout Information

- [frameRectForContentRect:styleMask:](framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.
- [minFrameWidthWithTitle:styleMask:](minframewidth%28withtitle_stylemask_%29.md): Returns the minimum width a window’s frame rectangle must have for it to display a title, with a given window style.
- [contentRectForFrameRect:](contentrect%28forframerect_%29.md): Returns the window’s content rectangle with a given frame rectangle.
- [frameRectForContentRect:](framerect%28forcontentrect_%29.md): Returns the window’s frame rectangle with a given content rectangle.
