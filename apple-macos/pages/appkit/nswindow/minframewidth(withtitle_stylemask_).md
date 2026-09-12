> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/minframewidth(withtitle:stylemask:)](https://developer.apple.com/documentation/appkit/nswindow/minframewidth(withtitle:stylemask:))

# minFrameWidth(withTitle:styleMask:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the minimum width a window’s frame rectangle must have for it to display a title, with a given window style.

## Declaration

```swift
class func minFrameWidth(withTitle title: String, styleMask style: NSWindow.StyleMask) -> CGFloat
```

## Parameters

- `title`: The title for the window.
- `style`: The window style for the window. See [NSWindow.StyleMask](stylemask-swift.struct.md) for a list of style mask values.

<a id="return-value"></a>

## Return Value

The minimum width of the window’s frame, using `style`, in order to display `title`.

## See Also

### Getting Layout Information

- [contentRect(forFrameRect:styleMask:)](contentrect%28forframerect_stylemask_%29.md): Returns the content rectangle used by a window with a given frame rectangle and window style.
- [frameRect(forContentRect:styleMask:)](framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.
- [contentRect(forFrameRect:)](contentrect%28forframerect_%29.md): Returns the window’s content rectangle with a given frame rectangle.
- [frameRect(forContentRect:)](framerect%28forcontentrect_%29.md): Returns the window’s frame rectangle with a given content rectangle.

# minFrameWidthWithTitle:styleMask: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the minimum width a window’s frame rectangle must have for it to display a title, with a given window style.

## Declaration

```objectivec
+ (CGFloat) minFrameWidthWithTitle:(NSString *) title styleMask:(NSWindowStyleMask) style;
```

## Parameters

- `title`: The title for the window.
- `style`: The window style for the window. See [NSWindowStyleMask](stylemask-swift.struct.md) for a list of style mask values.

<a id="return-value"></a>

## Return Value

The minimum width of the window’s frame, using `style`, in order to display `title`.

## See Also

### Getting Layout Information

- [contentRectForFrameRect:styleMask:](contentrect%28forframerect_stylemask_%29.md): Returns the content rectangle used by a window with a given frame rectangle and window style.
- [frameRectForContentRect:styleMask:](framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.
- [contentRectForFrameRect:](contentrect%28forframerect_%29.md): Returns the window’s content rectangle with a given frame rectangle.
- [frameRectForContentRect:](framerect%28forcontentrect_%29.md): Returns the window’s frame rectangle with a given content rectangle.
