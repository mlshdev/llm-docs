> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/disableflushing()](https://developer.apple.com/documentation/appkit/nswindow/disableflushing())

# disableFlushing() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Disables the [flush()](flush%28%29.md) method for the window.

> Use +\[NSAnimationContext runAnimationGroup:completionHandler:\] to perform atomic updates across runloop invocations.

## Declaration

```swift
func disableFlushing()
```

<a id="Discussion"></a>

## Discussion

If the window is buffered, disabling [flush()](flush%28%29.md) prevents drawing from being automatically flushed by the `NSView` `display...` methods from the window’s backing store to the screen. This method permits several views to be drawn before the results are shown to the user.

Flushing should be disabled only temporarily, while the window’s display is being updated. Each `disableFlushWindow` message must be paired with a subsequent [enableFlushing()](enableflushing%28%29.md) message. Invocations of these methods can be nested; flushing isn’t reenabled until the last [enableFlushing()](enableflushing%28%29.md) message is sent.

## See Also

### Methods

- [gState()](gstate%28%29.md): Deprecated. Returns the window’s graphics state object.
- [canStoreColor()](canstorecolor%28%29.md): Deprecated. Indicates whether the window has a depth limit that allows it to store color values.
- [enableFlushing()](enableflushing%28%29.md): Deprecated. Reenables the [flush()](flush%28%29.md) method for the window after it was disabled through a previous [disableFlushing()](disableflushing%28%29.md) message.
- [flush()](flush%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if the window is buffered and flushing is enabled.
- [flushIfNeeded()](flushifneeded%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if flushing is enabled and if the last [flush()](flush%28%29.md) message had no effect because flushing was disabled.
- [menuChanged(\_:)](menuchanged%28__%29.md): Deprecated. This method does nothing; it is here for backward compatibility.
- [cacheImage(in:)](cacheimage%28in_%29.md): Deprecated. Stores the window’s raster image from a given rectangle expressed in the window’s base coordinate system.
- [restoreCachedImage()](restorecachedimage%28%29.md): Deprecated. Splices the window’s cached image rectangles, if any, back into its raster image (and buffer if it has one), undoing the effect of any drawing performed within those areas since they were established using [cacheImage(in:)](cacheimage%28in_%29.md).
- [discardCachedImage()](discardcachedimage%28%29.md): Deprecated. Discards all of the window’s cached image rectangles.
- [useOptimizedDrawing(\_:)](useoptimizeddrawing%28__%29.md): Deprecated. Specifies whether the window is to optimize focusing and drawing when displaying its views.
- [init(windowRef:)](init%28windowref_%29.md): Deprecated. Returns a Cocoa window created from a Carbon window.

# disableFlushWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Disables the [flushWindow](flush%28%29.md) method for the window.

> Use +\[NSAnimationContext runAnimationGroup:completionHandler:\] to perform atomic updates across runloop invocations.

## Declaration

```objectivec
- (void) disableFlushWindow;
```

<a id="Discussion"></a>

## Discussion

If the window is buffered, disabling [flushWindow](flush%28%29.md) prevents drawing from being automatically flushed by the `NSView` `display...` methods from the window’s backing store to the screen. This method permits several views to be drawn before the results are shown to the user.

Flushing should be disabled only temporarily, while the window’s display is being updated. Each `disableFlushWindow` message must be paired with a subsequent [enableFlushWindow](enableflushing%28%29.md) message. Invocations of these methods can be nested; flushing isn’t reenabled until the last [enableFlushWindow](enableflushing%28%29.md) message is sent.

## See Also

### Methods

- [gState](gstate%28%29.md): Deprecated. Returns the window’s graphics state object.
- [canStoreColor](canstorecolor%28%29.md): Deprecated. Indicates whether the window has a depth limit that allows it to store color values.
- [enableFlushWindow](enableflushing%28%29.md): Deprecated. Reenables the [flushWindow](flush%28%29.md) method for the window after it was disabled through a previous [disableFlushWindow](disableflushing%28%29.md) message.
- [flushWindow](flush%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if the window is buffered and flushing is enabled.
- [flushWindowIfNeeded](flushifneeded%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if flushing is enabled and if the last [flushWindow](flush%28%29.md) message had no effect because flushing was disabled.
- [menuChanged:](menuchanged%28__%29.md): Deprecated. This method does nothing; it is here for backward compatibility.
- [cacheImageInRect:](cacheimage%28in_%29.md): Deprecated. Stores the window’s raster image from a given rectangle expressed in the window’s base coordinate system.
- [restoreCachedImage](restorecachedimage%28%29.md): Deprecated. Splices the window’s cached image rectangles, if any, back into its raster image (and buffer if it has one), undoing the effect of any drawing performed within those areas since they were established using [cacheImageInRect:](cacheimage%28in_%29.md).
- [discardCachedImage](discardcachedimage%28%29.md): Deprecated. Discards all of the window’s cached image rectangles.
- [useOptimizedDrawing:](useoptimizeddrawing%28__%29.md): Deprecated. Specifies whether the window is to optimize focusing and drawing when displaying its views.
- [convertBaseToScreen:](convertbasetoscreen_.md): Deprecated. Converts a given point from the window’s base coordinate system to the screen coordinate system.
- [convertScreenToBase:](convertscreentobase_.md): Deprecated. Converts a given point from the screen coordinate system to the window’s base coordinate system.
- [userSpaceScaleFactor](userspacescalefactor.md): Deprecated. Returns the scale factor applied to the window.
- [initWithWindowRef:](init%28windowref_%29.md): Deprecated. Returns a Cocoa window created from a Carbon window.
