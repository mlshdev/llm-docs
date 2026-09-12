> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/init(windowref:)](https://developer.apple.com/documentation/appkit/nswindow/init(windowref:))

# init(windowRef:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 15.0)

Returns a Cocoa window created from a Carbon window.

> This method should not be used.

## Declaration

```swift
convenience init?(windowRef: UnsafeMutableRawPointer)
```

## Parameters

- `windowRef`: The Carbon `WindowRef` object to use to create the Cocoa window.

<a id="return-value"></a>

## Return Value

A Cocoa window created from `windowRef`.

<a id="Discussion"></a>

## Discussion

For more information on Carbon-Cocoa integration, see Using a Carbon User Interface in a Cocoa Application in Carbon-Cocoa Integration Guide.

<a id="Special-Considerations"></a>

### Special Considerations

For historical reasons, contrary to normal memory management policy `initWithWindowRef:` does *not* retain `windowRef`. It is therefore recommended that you make sure you retain `windowRef` before calling this method. If `windowRef` is still valid when the Cocoa window is deallocated, the Cocoa window will release it.

## See Also

### Related Documentation

- [NSWindow](../nswindow.md): A window that an app displays on the screen.

### Methods

- [gState()](gstate%28%29.md): Deprecated. Returns the window’s graphics state object.
- [canStoreColor()](canstorecolor%28%29.md): Deprecated. Indicates whether the window has a depth limit that allows it to store color values.
- [enableFlushing()](enableflushing%28%29.md): Deprecated. Reenables the [flush()](flush%28%29.md) method for the window after it was disabled through a previous [disableFlushing()](disableflushing%28%29.md) message.
- [disableFlushing()](disableflushing%28%29.md): Deprecated. Disables the [flush()](flush%28%29.md) method for the window.
- [flush()](flush%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if the window is buffered and flushing is enabled.
- [flushIfNeeded()](flushifneeded%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if flushing is enabled and if the last [flush()](flush%28%29.md) message had no effect because flushing was disabled.
- [menuChanged(\_:)](menuchanged%28__%29.md): Deprecated. This method does nothing; it is here for backward compatibility.
- [cacheImage(in:)](cacheimage%28in_%29.md): Deprecated. Stores the window’s raster image from a given rectangle expressed in the window’s base coordinate system.
- [restoreCachedImage()](restorecachedimage%28%29.md): Deprecated. Splices the window’s cached image rectangles, if any, back into its raster image (and buffer if it has one), undoing the effect of any drawing performed within those areas since they were established using [cacheImage(in:)](cacheimage%28in_%29.md).
- [discardCachedImage()](discardcachedimage%28%29.md): Deprecated. Discards all of the window’s cached image rectangles.
- [useOptimizedDrawing(\_:)](useoptimizeddrawing%28__%29.md): Deprecated. Specifies whether the window is to optimize focusing and drawing when displaying its views.

# initWithWindowRef: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 15.0)

Returns a Cocoa window created from a Carbon window.

> This method should not be used.

## Declaration

```objectivec
- (NSWindow *) initWithWindowRef:(void *) windowRef;
```

## Parameters

- `windowRef`: The Carbon `WindowRef` object to use to create the Cocoa window.

<a id="return-value"></a>

## Return Value

A Cocoa window created from `windowRef`.

<a id="Discussion"></a>

## Discussion

For more information on Carbon-Cocoa integration, see Using a Carbon User Interface in a Cocoa Application in Carbon-Cocoa Integration Guide.

<a id="Special-Considerations"></a>

### Special Considerations

For historical reasons, contrary to normal memory management policy `initWithWindowRef:` does *not* retain `windowRef`. It is therefore recommended that you make sure you retain `windowRef` before calling this method. If `windowRef` is still valid when the Cocoa window is deallocated, the Cocoa window will release it.

## See Also

### Related Documentation

- [NSWindow](../nswindow.md): A window that an app displays on the screen.

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
- [convertBaseToScreen:](convertbasetoscreen_.md): Deprecated. Converts a given point from the window’s base coordinate system to the screen coordinate system.
- [convertScreenToBase:](convertscreentobase_.md): Deprecated. Converts a given point from the screen coordinate system to the window’s base coordinate system.
- [userSpaceScaleFactor](userspacescalefactor.md): Deprecated. Returns the scale factor applied to the window.
