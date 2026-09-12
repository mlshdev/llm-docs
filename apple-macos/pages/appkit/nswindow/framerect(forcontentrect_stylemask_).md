> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/framerect(forcontentrect:stylemask:)](https://developer.apple.com/documentation/appkit/nswindow/framerect(forcontentrect:stylemask:))

# frameRect(forContentRect:styleMask:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the frame rectangle used by a window with a given content rectangle and window style.

## Declaration

```swift
class func frameRect(forContentRect cRect: NSRect, styleMask style: NSWindow.StyleMask) -> NSRect
```

## Parameters

- `cRect`: The content rectangle for a window expressed in screen coordinates.
- `style`: The window style for the window. See [NSWindow.StyleMask](stylemask-swift.struct.md) for a list of style mask values.

<a id="return-value"></a>

## Return Value

The frame rectangle, expressed in screen coordinates, used by the window with `cRect` and `style`.

<a id="Discussion"></a>

## Discussion

When a `NSWindow` instance is available, you should use [frameRect(forContentRect:)](framerect%28forcontentrect_%29.md) instead of this method.

## See Also

### Getting Layout Information

- [contentRect(forFrameRect:styleMask:)](contentrect%28forframerect_stylemask_%29.md): Returns the content rectangle used by a window with a given frame rectangle and window style.
- [minFrameWidth(withTitle:styleMask:)](minframewidth%28withtitle_stylemask_%29.md): Returns the minimum width a window’s frame rectangle must have for it to display a title, with a given window style.
- [contentRect(forFrameRect:)](contentrect%28forframerect_%29.md): Returns the window’s content rectangle with a given frame rectangle.
- [frameRect(forContentRect:)](framerect%28forcontentrect_%29.md): Returns the window’s frame rectangle with a given content rectangle.

# frameRectForContentRect:styleMask: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the frame rectangle used by a window with a given content rectangle and window style.

## Declaration

```objectivec
+ (NSRect) frameRectForContentRect:(NSRect) cRect styleMask:(NSWindowStyleMask) style;
```

## Parameters

- `cRect`: The content rectangle for a window expressed in screen coordinates.
- `style`: The window style for the window. See [NSWindowStyleMask](stylemask-swift.struct.md) for a list of style mask values.

<a id="return-value"></a>

## Return Value

The frame rectangle, expressed in screen coordinates, used by the window with `cRect` and `style`.

<a id="Discussion"></a>

## Discussion

When a `NSWindow` instance is available, you should use [frameRectForContentRect:](framerect%28forcontentrect_%29.md) instead of this method.

## See Also

### Getting Layout Information

- [contentRectForFrameRect:styleMask:](contentrect%28forframerect_stylemask_%29.md): Returns the content rectangle used by a window with a given frame rectangle and window style.
- [minFrameWidthWithTitle:styleMask:](minframewidth%28withtitle_stylemask_%29.md): Returns the minimum width a window’s frame rectangle must have for it to display a title, with a given window style.
- [contentRectForFrameRect:](contentrect%28forframerect_%29.md): Returns the window’s content rectangle with a given frame rectangle.
- [frameRectForContentRect:](framerect%28forcontentrect_%29.md): Returns the window’s frame rectangle with a given content rectangle.
