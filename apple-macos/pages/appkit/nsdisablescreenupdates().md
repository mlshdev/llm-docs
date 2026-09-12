> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdisablescreenupdates()](https://developer.apple.com/documentation/appkit/nsdisablescreenupdates())

# NSDisableScreenUpdates() (Swift)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Disables screen updates.

> As of 10.11 it is not generally necessary to take explicit action to achieve visual atomicity. +\[NSAnimationContext runAnimationGroup:\] and other similar methods can be used when a stronger than normal need for visual atomicity is required. The NSAnimationContext methods do not suffer from the same performance problems as NSDisableScreenUpdates.

## Declaration

```swift
func NSDisableScreenUpdates()
```

<a id="Discussion"></a>

## Discussion

Prevents drawing operations from being flushed to the screen for all windows belonging to the calling process. When you re-enable screen updates (with [NSEnableScreenUpdates()](nsenablescreenupdates%28%29.md)) screen flushing for all windows belonging to the calling process appears to be simultaneous. You typically call this function so that operations on multiple windows appear atomic to the user. This is a technique particularly useful for synchronizing parent and child windows. Make sure that the period after calling this function and before reenabling updates is short; the system only allow updating to be disabled for a limited time (currently one second) before automatically reenabling updates. Successive calls to this function are placed on a stack and must be popped off that stack by matching [NSEnableScreenUpdates()](nsenablescreenupdates%28%29.md) calls.

## See Also

### Functions

- [NSConvertGlyphsToPackedGlyphs(\_:\_:\_:\_:)](nsconvertglyphstopackedglyphs%28________%29.md): Deprecated. Prepares a set of glyphs for processing by character-based routines.
- [raiseBadArgumentException(\_:\_:\_:)](nsaccessibility-swift.struct/raisebadargumentexception%28______%29.md): Deprecated. Raises an error if the parameter is the wrong type or has an illegal value
- [NSReleaseAlertPanel(\_:)](nsreleasealertpanel%28__%29.md): Deprecated. Disposes of an alert panel.
- [NSEnableScreenUpdates()](nsenablescreenupdates%28%29.md): Deprecated. Enables screen updates.
- [NSDrawColorTiledRects(\_:\_:\_:\_:\_:)](nsdrawcolortiledrects%28__________%29.md): Draws a single-color, bordered rectangle.
- [NSSetShowsServicesMenuItem(\_:\_:)](nssetshowsservicesmenuitem%28____%29.md): Specifies whether an item should be included in Services menus.
- [NSCopyBits(\_:\_:\_:)](nscopybits%28______%29.md): Deprecated. Copies a bitmap image to the location specified by a destination point.
- [NSShowsServicesMenuItem(\_:)](nsshowsservicesmenuitem%28__%29.md): Specifies whether a Services menu item is currently enabled.
- [NSDottedFrameRect(\_:)](nsdottedframerect%28__%29.md): Draws a bordered rectangle.
- [NSReadPixel(\_:)](nsreadpixel%28__%29.md): Deprecated. Reads the color of the pixel at the specified location.
- [NSGetWindowServerMemory(\_:\_:\_:\_:)](nsgetwindowservermemory%28________%29.md): Deprecated. Returns the amount of memory being used by a context.
- [fileContentsType(forPathExtension:)](nspasteboard/pasteboardtype/filecontentstype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [fileNameType(forPathExtension:)](nspasteboard/pasteboardtype/filenametype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [representedPathExtension](nspasteboard/pasteboardtype/representedpathextension.md): Deprecated. A file type based on the passed pasteboard type.
- [representedPathExtensions(from:)](nspasteboard/pasteboardtype/representedpathextensions%28from_%29.md): Deprecated. Returns an array of file types based on the passed pasteboard types.

# NSDisableScreenUpdates (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Disables screen updates.

> As of 10.11 it is not generally necessary to take explicit action to achieve visual atomicity. +\[NSAnimationContext runAnimationGroup:\] and other similar methods can be used when a stronger than normal need for visual atomicity is required. The NSAnimationContext methods do not suffer from the same performance problems as NSDisableScreenUpdates.

## Declaration

```objectivec
extern void NSDisableScreenUpdates();
```

<a id="Discussion"></a>

## Discussion

Prevents drawing operations from being flushed to the screen for all windows belonging to the calling process. When you re-enable screen updates (with [NSEnableScreenUpdates](nsenablescreenupdates%28%29.md)) screen flushing for all windows belonging to the calling process appears to be simultaneous. You typically call this function so that operations on multiple windows appear atomic to the user. This is a technique particularly useful for synchronizing parent and child windows. Make sure that the period after calling this function and before reenabling updates is short; the system only allow updating to be disabled for a limited time (currently one second) before automatically reenabling updates. Successive calls to this function are placed on a stack and must be popped off that stack by matching [NSEnableScreenUpdates](nsenablescreenupdates%28%29.md) calls.

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
