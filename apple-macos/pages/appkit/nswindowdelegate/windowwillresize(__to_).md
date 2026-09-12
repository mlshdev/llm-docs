> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowwillresize(_:to:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowwillresize(_:to:))

# windowWillResize(\_:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window is being resized (whether by the user or through one of the `setFrame...` methods other than [setFrame(\_:display:)](../nswindow/setframe%28__display_%29.md)).

## Declaration

```swift
@MainActor optional func windowWillResize(_ sender: NSWindow, to frameSize: NSSize) -> NSSize
```

## Parameters

- `sender`: The window being resized.
- `frameSize`: The size to which the specified window is being resized.

<a id="return-value"></a>

## Return Value

A custom size to which the specified window will be resized.

<a id="Discussion"></a>

## Discussion

The  `frameSize` contains the size (in screen coordinates) `sender` will be resized to. To resize to a different size, simply return the desired size from this method; to avoid resizing, return the current size. `sender`’s minimum and maximum size constraints have already been applied when this method is called.

While the user is resizing a window, the delegate is sent a series of [windowWillResize(\_:to:)](windowwillresize%28__to_%29.md) messages as the window’s frame continues to change size.

## See Also

### Sizing Windows

- [windowDidResize(\_:)](windowdidresize%28__%29.md): Tells the delegate that the window has been resized.
- [windowWillStartLiveResize(\_:)](windowwillstartliveresize%28__%29.md): Tells the delegate that the window is about to be live resized.
- [windowDidEndLiveResize(\_:)](windowdidendliveresize%28__%29.md): Tells the delegate that a live resize operation on the window has ended.

# windowWillResize:toSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window is being resized (whether by the user or through one of the `setFrame...` methods other than [setFrame:display:](../nswindow/setframe%28__display_%29.md)).

## Declaration

```objectivec
- (NSSize) windowWillResize:(NSWindow *) sender toSize:(NSSize) frameSize;
```

## Parameters

- `sender`: The window being resized.
- `frameSize`: The size to which the specified window is being resized.

<a id="return-value"></a>

## Return Value

A custom size to which the specified window will be resized.

<a id="Discussion"></a>

## Discussion

The  `frameSize` contains the size (in screen coordinates) `sender` will be resized to. To resize to a different size, simply return the desired size from this method; to avoid resizing, return the current size. `sender`’s minimum and maximum size constraints have already been applied when this method is called.

While the user is resizing a window, the delegate is sent a series of [windowWillResize:toSize:](windowwillresize%28__to_%29.md) messages as the window’s frame continues to change size.

## See Also

### Sizing Windows

- [windowDidResize:](windowdidresize%28__%29.md): Tells the delegate that the window has been resized.
- [windowWillStartLiveResize:](windowwillstartliveresize%28__%29.md): Tells the delegate that the window is about to be live resized.
- [windowDidEndLiveResize:](windowdidendliveresize%28__%29.md): Tells the delegate that a live resize operation on the window has ended.
