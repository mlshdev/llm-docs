> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/cacheimage(in:)](https://developer.apple.com/documentation/appkit/nswindow/cacheimage(in:))

# cacheImage(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Stores the window’s raster image from a given rectangle expressed in the window’s base coordinate system.

> This method shouldn’t be used as it doesn’t work in all drawing situations; instead, a subview should be used that implements the desired drawing behavior

## Declaration

```swift
func cacheImage(in rect: NSRect)
```

## Parameters

- `rect`: The rectangle representing the image to cache.

<a id="Discussion"></a>

## Discussion

This method allows the window to perform temporary drawing, such as a band around the selection as the user drags the mouse, and to quickly restore the previous image by invoking [restoreCachedImage()](restorecachedimage%28%29.md) and [flushIfNeeded()](flushifneeded%28%29.md). The next time the window displays, it discards its cached image rectangles. You can also explicitly use [discardCachedImage()](discardcachedimage%28%29.md) to free the memory occupied by cached image rectangles. `rect` is made integral before caching the image to avoid antialiasing artifacts.

Only the last cached rectangle is remembered and can be restored.

## See Also

### Related Documentation

- [display()](display%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views within the window.

### Methods

- [gState()](gstate%28%29.md): Deprecated. Returns the window’s graphics state object.
- [canStoreColor()](canstorecolor%28%29.md): Deprecated. Indicates whether the window has a depth limit that allows it to store color values.
- [enableFlushing()](enableflushing%28%29.md): Deprecated. Reenables the [flush()](flush%28%29.md) method for the window after it was disabled through a previous [disableFlushing()](disableflushing%28%29.md) message.
- [disableFlushing()](disableflushing%28%29.md): Deprecated. Disables the [flush()](flush%28%29.md) method for the window.
- [flush()](flush%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if the window is buffered and flushing is enabled.
- [flushIfNeeded()](flushifneeded%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if flushing is enabled and if the last [flush()](flush%28%29.md) message had no effect because flushing was disabled.
- [menuChanged(\_:)](menuchanged%28__%29.md): Deprecated. This method does nothing; it is here for backward compatibility.
- [restoreCachedImage()](restorecachedimage%28%29.md): Deprecated. Splices the window’s cached image rectangles, if any, back into its raster image (and buffer if it has one), undoing the effect of any drawing performed within those areas since they were established using [cacheImage(in:)](cacheimage%28in_%29.md).
- [discardCachedImage()](discardcachedimage%28%29.md): Deprecated. Discards all of the window’s cached image rectangles.
- [useOptimizedDrawing(\_:)](useoptimizeddrawing%28__%29.md): Deprecated. Specifies whether the window is to optimize focusing and drawing when displaying its views.
- [init(windowRef:)](init%28windowref_%29.md): Deprecated. Returns a Cocoa window created from a Carbon window.

# cacheImageInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Stores the window’s raster image from a given rectangle expressed in the window’s base coordinate system.

> This method shouldn’t be used as it doesn’t work in all drawing situations; instead, a subview should be used that implements the desired drawing behavior

## Declaration

```objectivec
- (void) cacheImageInRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle representing the image to cache.

<a id="Discussion"></a>

## Discussion

This method allows the window to perform temporary drawing, such as a band around the selection as the user drags the mouse, and to quickly restore the previous image by invoking [restoreCachedImage](restorecachedimage%28%29.md) and [flushWindowIfNeeded](flushifneeded%28%29.md). The next time the window displays, it discards its cached image rectangles. You can also explicitly use [discardCachedImage](discardcachedimage%28%29.md) to free the memory occupied by cached image rectangles. `rect` is made integral before caching the image to avoid antialiasing artifacts.

Only the last cached rectangle is remembered and can be restored.

## See Also

### Related Documentation

- [display](display%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views within the window.

### Methods

- [gState](gstate%28%29.md): Deprecated. Returns the window’s graphics state object.
- [canStoreColor](canstorecolor%28%29.md): Deprecated. Indicates whether the window has a depth limit that allows it to store color values.
- [enableFlushWindow](enableflushing%28%29.md): Deprecated. Reenables the [flushWindow](flush%28%29.md) method for the window after it was disabled through a previous [disableFlushWindow](disableflushing%28%29.md) message.
- [disableFlushWindow](disableflushing%28%29.md): Deprecated. Disables the [flushWindow](flush%28%29.md) method for the window.
- [flushWindow](flush%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if the window is buffered and flushing is enabled.
- [flushWindowIfNeeded](flushifneeded%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if flushing is enabled and if the last [flushWindow](flush%28%29.md) message had no effect because flushing was disabled.
- [menuChanged:](menuchanged%28__%29.md): Deprecated. This method does nothing; it is here for backward compatibility.
- [restoreCachedImage](restorecachedimage%28%29.md): Deprecated. Splices the window’s cached image rectangles, if any, back into its raster image (and buffer if it has one), undoing the effect of any drawing performed within those areas since they were established using [cacheImageInRect:](cacheimage%28in_%29.md).
- [discardCachedImage](discardcachedimage%28%29.md): Deprecated. Discards all of the window’s cached image rectangles.
- [useOptimizedDrawing:](useoptimizeddrawing%28__%29.md): Deprecated. Specifies whether the window is to optimize focusing and drawing when displaying its views.
- [convertBaseToScreen:](convertbasetoscreen_.md): Deprecated. Converts a given point from the window’s base coordinate system to the screen coordinate system.
- [convertScreenToBase:](convertscreentobase_.md): Deprecated. Converts a given point from the screen coordinate system to the window’s base coordinate system.
- [userSpaceScaleFactor](userspacescalefactor.md): Deprecated. Returns the scale factor applied to the window.
- [initWithWindowRef:](init%28windowref_%29.md): Deprecated. Returns a Cocoa window created from a Carbon window.
