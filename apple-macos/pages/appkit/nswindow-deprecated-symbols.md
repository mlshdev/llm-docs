> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow-deprecated-symbols](https://developer.apple.com/documentation/appkit/nswindow-deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Methods

- [gState()](nswindow/gstate%28%29.md): Deprecated. Returns the window’s graphics state object.
- [canStoreColor()](nswindow/canstorecolor%28%29.md): Deprecated. Indicates whether the window has a depth limit that allows it to store color values.
- [enableFlushing()](nswindow/enableflushing%28%29.md): Deprecated. Reenables the [flush()](nswindow/flush%28%29.md) method for the window after it was disabled through a previous [disableFlushing()](nswindow/disableflushing%28%29.md) message.
- [disableFlushing()](nswindow/disableflushing%28%29.md): Deprecated. Disables the [flush()](nswindow/flush%28%29.md) method for the window.
- [flush()](nswindow/flush%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if the window is buffered and flushing is enabled.
- [flushIfNeeded()](nswindow/flushifneeded%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if flushing is enabled and if the last [flush()](nswindow/flush%28%29.md) message had no effect because flushing was disabled.
- [menuChanged(\_:)](nswindow/menuchanged%28__%29.md): Deprecated. This method does nothing; it is here for backward compatibility.
- [cacheImage(in:)](nswindow/cacheimage%28in_%29.md): Deprecated. Stores the window’s raster image from a given rectangle expressed in the window’s base coordinate system.
- [restoreCachedImage()](nswindow/restorecachedimage%28%29.md): Deprecated. Splices the window’s cached image rectangles, if any, back into its raster image (and buffer if it has one), undoing the effect of any drawing performed within those areas since they were established using [cacheImage(in:)](nswindow/cacheimage%28in_%29.md).
- [discardCachedImage()](nswindow/discardcachedimage%28%29.md): Deprecated. Discards all of the window’s cached image rectangles.
- [useOptimizedDrawing(\_:)](nswindow/useoptimizeddrawing%28__%29.md): Deprecated. Specifies whether the window is to optimize focusing and drawing when displaying its views.
- [init(windowRef:)](nswindow/init%28windowref_%29.md): Deprecated. Returns a Cocoa window created from a Carbon window.

### Properties

- [backingLocation](nswindow/backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [preferredBackingLocation](nswindow/preferredbackinglocation.md): Deprecated. A Boolean value that indicates the preferred location for the window’s backing store.
- [isOneShot](nswindow/isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [drawers](nswindow/drawers.md): Deprecated. The collection of drawers associated with the window.
- [showsResizeIndicator](nswindow/showsresizeindicator.md): Deprecated. A Boolean value that indicates whether the window’s resize indicator is visible.
- [isFlushWindowDisabled](nswindow/isflushwindowdisabled.md): Deprecated. A Boolean value that indicates whether the window’s flushing ability is disabled.
- [isAutodisplay](nswindow/isautodisplay.md): Deprecated. A Boolean value that indicates whether the window automatically displays views that need to be displayed.
- [graphicsContext](nswindow/graphicscontext.md): Deprecated. The graphics context associated with the window for the current thread.
- [windowRef](nswindow/windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.

### Constants

- [NSWindow.BackingLocation](nswindow/backinglocation-swift.enum.md): Deprecated. The following constants and the related data type represent a window’s possible backing locations.

# Deprecated Symbols (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Methods

- [gState](nswindow/gstate%28%29.md): Deprecated. Returns the window’s graphics state object.
- [canStoreColor](nswindow/canstorecolor%28%29.md): Deprecated. Indicates whether the window has a depth limit that allows it to store color values.
- [enableFlushWindow](nswindow/enableflushing%28%29.md): Deprecated. Reenables the [flushWindow](nswindow/flush%28%29.md) method for the window after it was disabled through a previous [disableFlushWindow](nswindow/disableflushing%28%29.md) message.
- [disableFlushWindow](nswindow/disableflushing%28%29.md): Deprecated. Disables the [flushWindow](nswindow/flush%28%29.md) method for the window.
- [flushWindow](nswindow/flush%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if the window is buffered and flushing is enabled.
- [flushWindowIfNeeded](nswindow/flushifneeded%28%29.md): Deprecated. Flushes the window’s offscreen buffer to the screen if flushing is enabled and if the last [flushWindow](nswindow/flush%28%29.md) message had no effect because flushing was disabled.
- [menuChanged:](nswindow/menuchanged%28__%29.md): Deprecated. This method does nothing; it is here for backward compatibility.
- [cacheImageInRect:](nswindow/cacheimage%28in_%29.md): Deprecated. Stores the window’s raster image from a given rectangle expressed in the window’s base coordinate system.
- [restoreCachedImage](nswindow/restorecachedimage%28%29.md): Deprecated. Splices the window’s cached image rectangles, if any, back into its raster image (and buffer if it has one), undoing the effect of any drawing performed within those areas since they were established using [cacheImageInRect:](nswindow/cacheimage%28in_%29.md).
- [discardCachedImage](nswindow/discardcachedimage%28%29.md): Deprecated. Discards all of the window’s cached image rectangles.
- [useOptimizedDrawing:](nswindow/useoptimizeddrawing%28__%29.md): Deprecated. Specifies whether the window is to optimize focusing and drawing when displaying its views.
- [convertBaseToScreen:](nswindow/convertbasetoscreen_.md): Deprecated. Converts a given point from the window’s base coordinate system to the screen coordinate system.
- [convertScreenToBase:](nswindow/convertscreentobase_.md): Deprecated. Converts a given point from the screen coordinate system to the window’s base coordinate system.
- [userSpaceScaleFactor](nswindow/userspacescalefactor.md): Deprecated. Returns the scale factor applied to the window.
- [initWithWindowRef:](nswindow/init%28windowref_%29.md): Deprecated. Returns a Cocoa window created from a Carbon window.

### Properties

- [backingLocation](nswindow/backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [preferredBackingLocation](nswindow/preferredbackinglocation.md): Deprecated. A Boolean value that indicates the preferred location for the window’s backing store.
- [oneShot](nswindow/isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [drawers](nswindow/drawers.md): Deprecated. The collection of drawers associated with the window.
- [showsResizeIndicator](nswindow/showsresizeindicator.md): Deprecated. A Boolean value that indicates whether the window’s resize indicator is visible.
- [flushWindowDisabled](nswindow/isflushwindowdisabled.md): Deprecated. A Boolean value that indicates whether the window’s flushing ability is disabled.
- [autodisplay](nswindow/isautodisplay.md): Deprecated. A Boolean value that indicates whether the window automatically displays views that need to be displayed.
- [graphicsContext](nswindow/graphicscontext.md): Deprecated. The graphics context associated with the window for the current thread.
- [windowRef](nswindow/windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.

### Constants

- [NSWindowBackingLocation](nswindow/backinglocation-swift.enum.md): Deprecated. The following constants and the related data type represent a window’s possible backing locations.
