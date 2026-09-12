> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowwillusestandardframe(_:defaultframe:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowwillusestandardframe(_:defaultframe:))

# windowWillUseStandardFrame(\_:defaultFrame:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called by `NSWindow`’s [zoom(\_:)](../nswindow/zoom%28__%29.md) method while determining the frame a window may be zoomed to.

## Declaration

```swift
@MainActor optional func windowWillUseStandardFrame(_ window: NSWindow, defaultFrame newFrame: NSRect) -> NSRect
```

## Parameters

- `window`: The window whose frame size is being determined.
- `newFrame`: The size of the current screen, which is the screen containing the largest part of the window’s current frame, possibly reduced on the top, bottom, left, or right, depending on the current interface style. The frame is reduced on the top to leave room for the menu bar.

<a id="return-value"></a>

## Return Value

The specified window’s standard frame.

<a id="Discussion"></a>

## Discussion

The standard frame for a window should supply the size and location that are “best” for the type of information shown in the window, taking into account the available display or displays. For example, the best width for a window that displays a word-processing document is the width of a page or the width of the display, whichever is smaller. The best height can be determined similarly. On return from this method, the [zoom(\_:)](../nswindow/zoom%28__%29.md) method modifies the returned standard frame, if necessary, to fit on the current screen.

## See Also

### Zooming Window

- [windowShouldZoom(\_:toFrame:)](windowshouldzoom%28__toframe_%29.md): Asks the delegate whether the specified window should zoom to the specified frame.

# windowWillUseStandardFrame:defaultFrame: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called by `NSWindow`’s [zoom:](../nswindow/zoom%28__%29.md) method while determining the frame a window may be zoomed to.

## Declaration

```objectivec
- (NSRect) windowWillUseStandardFrame:(NSWindow *) window defaultFrame:(NSRect) newFrame;
```

## Parameters

- `window`: The window whose frame size is being determined.
- `newFrame`: The size of the current screen, which is the screen containing the largest part of the window’s current frame, possibly reduced on the top, bottom, left, or right, depending on the current interface style. The frame is reduced on the top to leave room for the menu bar.

<a id="return-value"></a>

## Return Value

The specified window’s standard frame.

<a id="Discussion"></a>

## Discussion

The standard frame for a window should supply the size and location that are “best” for the type of information shown in the window, taking into account the available display or displays. For example, the best width for a window that displays a word-processing document is the width of a page or the width of the display, whichever is smaller. The best height can be determined similarly. On return from this method, the [zoom:](../nswindow/zoom%28__%29.md) method modifies the returned standard frame, if necessary, to fit on the current screen.

## See Also

### Zooming Window

- [windowShouldZoom:toFrame:](windowshouldzoom%28__toframe_%29.md): Asks the delegate whether the specified window should zoom to the specified frame.
