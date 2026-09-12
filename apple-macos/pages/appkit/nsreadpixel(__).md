> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsreadpixel(_:)](https://developer.apple.com/documentation/appkit/nsreadpixel(_:))

# NSReadPixel(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Reads the color of the pixel at the specified location.

> Use -\[NSBitmapImageRep colorAtX:y:\] to interrogate pixel values.  If necessary, use -\[NSView cacheDisplayInRect:toBitmapImageRep:\] to snapshot a view hierarchy into an NSBitmapImageRep.

## Declaration

```swift
func NSReadPixel(_ passedPoint: NSPoint) -> NSColor?
```

## Parameters

- `passedPoint`: The pixel location to read, specified in the current coordinate system.

<a id="return-value"></a>

## Return Value

The color of the pixel at the specified location.

<a id="Discussion"></a>

## Discussion

Because the `passedPoint` parameter is relative to the current coordinate system, if you wish to read a pixel from a specific view, you must convert points in the view’s coordinate system to the current coordinate system before calling this function. Alternatively, you can lock focus on the view and then specify the pixel coordinate in the view’s coordinate system.

When mapping the specified point to pixel boundaries, this method rounds to the nearest pixel.

## See Also

### Functions

- [NSConvertGlyphsToPackedGlyphs(\_:\_:\_:\_:)](nsconvertglyphstopackedglyphs%28________%29.md): Deprecated. Prepares a set of glyphs for processing by character-based routines.
- [raiseBadArgumentException(\_:\_:\_:)](nsaccessibility-swift.struct/raisebadargumentexception%28______%29.md): Deprecated. Raises an error if the parameter is the wrong type or has an illegal value
- [NSReleaseAlertPanel(\_:)](nsreleasealertpanel%28__%29.md): Deprecated. Disposes of an alert panel.
- [NSDisableScreenUpdates()](nsdisablescreenupdates%28%29.md): Deprecated. Disables screen updates.
- [NSEnableScreenUpdates()](nsenablescreenupdates%28%29.md): Deprecated. Enables screen updates.
- [NSDrawColorTiledRects(\_:\_:\_:\_:\_:)](nsdrawcolortiledrects%28__________%29.md): Draws a single-color, bordered rectangle.
- [NSSetShowsServicesMenuItem(\_:\_:)](nssetshowsservicesmenuitem%28____%29.md): Specifies whether an item should be included in Services menus.
- [NSCopyBits(\_:\_:\_:)](nscopybits%28______%29.md): Deprecated. Copies a bitmap image to the location specified by a destination point.
- [NSShowsServicesMenuItem(\_:)](nsshowsservicesmenuitem%28__%29.md): Specifies whether a Services menu item is currently enabled.
- [NSDottedFrameRect(\_:)](nsdottedframerect%28__%29.md): Draws a bordered rectangle.
- [NSGetWindowServerMemory(\_:\_:\_:\_:)](nsgetwindowservermemory%28________%29.md): Deprecated. Returns the amount of memory being used by a context.
- [fileContentsType(forPathExtension:)](nspasteboard/pasteboardtype/filecontentstype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [fileNameType(forPathExtension:)](nspasteboard/pasteboardtype/filenametype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [representedPathExtension](nspasteboard/pasteboardtype/representedpathextension.md): Deprecated. A file type based on the passed pasteboard type.
- [representedPathExtensions(from:)](nspasteboard/pasteboardtype/representedpathextensions%28from_%29.md): Deprecated. Returns an array of file types based on the passed pasteboard types.

# NSReadPixel (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Reads the color of the pixel at the specified location.

> Use -\[NSBitmapImageRep colorAtX:y:\] to interrogate pixel values.  If necessary, use -\[NSView cacheDisplayInRect:toBitmapImageRep:\] to snapshot a view hierarchy into an NSBitmapImageRep.

## Declaration

```objectivec
extern NSColor *NSReadPixel(NSPoint passedPoint);
```

## Parameters

- `passedPoint`: The pixel location to read, specified in the current coordinate system.

<a id="return-value"></a>

## Return Value

The color of the pixel at the specified location.

<a id="Discussion"></a>

## Discussion

Because the `passedPoint` parameter is relative to the current coordinate system, if you wish to read a pixel from a specific view, you must convert points in the view’s coordinate system to the current coordinate system before calling this function. Alternatively, you can lock focus on the view and then specify the pixel coordinate in the view’s coordinate system.

When mapping the specified point to pixel boundaries, this method rounds to the nearest pixel.

## See Also

### Functions

- [NSConvertGlyphsToPackedGlyphs](nsconvertglyphstopackedglyphs%28________%29.md): Deprecated. Prepares a set of glyphs for processing by character-based routines.
- [NSOpenGLGetOption](nsopenglgetoption.md): Deprecated. Returns global OpenGL options.
- [NSOpenGLGetVersion](nsopenglgetversion.md): Deprecated. Returns the NSOpenGL version numbers.
- [NSOpenGLSetOption](nsopenglsetoption.md): Deprecated. Sets global OpenGL options.
- [NSAccessibilityRaiseBadArgumentException](nsaccessibility-swift.struct/raisebadargumentexception%28______%29.md): Deprecated. Raises an error if the parameter is the wrong type or has an illegal value
- [NSBeginAlertSheet](nsbeginalertsheet.md): Deprecated. Creates and runs an alert sheet.
- [NSBeginCriticalAlertSheet](nsbegincriticalalertsheet.md): Deprecated. Creates and runs a critical alert sheet.
- [NSBeginInformationalAlertSheet](nsbegininformationalalertsheet.md): Deprecated. Creates and runs an informational alert sheet.
- [NSGetAlertPanel](nsgetalertpanel.md): Deprecated. Returns an alert panel.
- [NSGetCriticalAlertPanel](nsgetcriticalalertpanel.md): Deprecated. Returns an alert panel to display a critical message.
- [NSGetInformationalAlertPanel](nsgetinformationalalertpanel.md): Deprecated. Returns an alert panel to display an informational message.
- [NSReleaseAlertPanel](nsreleasealertpanel%28__%29.md): Deprecated. Disposes of an alert panel.
- [NSRunAlertPanel](nsrunalertpanel.md): Deprecated. Creates an alert panel.
- [NSRunCriticalAlertPanel](nsruncriticalalertpanel.md): Deprecated. Creates and runs a critical alert panel.
- [NSRunInformationalAlertPanel](nsruninformationalalertpanel.md): Deprecated. Creates and runs an informational alert panel.
