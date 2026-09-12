> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/convertbasetoscreen:](https://developer.apple.com/documentation/appkit/nswindow/convertbasetoscreen:)

# convertBaseToScreen:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Converts a given point from the window’s base coordinate system to the screen coordinate system.

> Use [convertRectToScreen:](converttoscreen%28__%29.md) instead.

## Declaration

```objectivec
- (NSPoint) convertBaseToScreen:(NSPoint) point;
```

## Parameters

- `point`: The point expressed in the window’s base coordinate system.

<a id="return-value"></a>

## Return Value

`point` expressed in screen coordinates.

## See Also

### Methods

- [gState](gstate%28%29.md): Deprecated. Returns the window’s graphics state object.
- [canStoreColor](canstorecolor%28%29.md): Deprecated. Indicates whether the window has a depth limit that allows it to store color values.
- [enableFlushWindow](enableflushing%28%29.md): Deprecated. Reenables the [flushWindow](flush%28%29.md) method for the window after it was disabled through a previous [disableFlushWindow](disableflushing%28%29.md) message.
- [disableFlushWindow](disableflushing%28%29.md): Deprecated. Disables the [flushWindow](flush%28%29.md) method for the window.
- [flushWindow](flush%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if the window is buffered and flushing is enabled.
- [flushWindowIfNeeded](flushifneeded%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if flushing is enabled and if the last [flushWindow](flush%28%29.md) message had no effect because flushing was disabled.
- [menuChanged:](menuchanged%28__%29.md): Deprecated. This method does nothing; it is here for backward compatibility.
- [cacheImageInRect:](cacheimage%28in_%29.md): Deprecated. Stores the window’s raster image from a given rectangle expressed in the window’s base coordinate system.
- [restoreCachedImage](restorecachedimage%28%29.md): Deprecated. Splices the window’s cached image rectangles, if any, back into its raster image (and buffer if it has one), undoing the effect of any drawing performed within those areas since they were established using [cacheImageInRect:](cacheimage%28in_%29.md).
- [discardCachedImage](discardcachedimage%28%29.md): Deprecated. Discards all of the window’s cached image rectangles.
- [useOptimizedDrawing:](useoptimizeddrawing%28__%29.md): Deprecated. Specifies whether the window is to optimize focusing and drawing when displaying its views.
- [convertScreenToBase:](convertscreentobase_.md): Deprecated. Converts a given point from the screen coordinate system to the window’s base coordinate system.
- [userSpaceScaleFactor](userspacescalefactor.md): Deprecated. Returns the scale factor applied to the window.
- [initWithWindowRef:](init%28windowref_%29.md): Deprecated. Returns a Cocoa window created from a Carbon window.
