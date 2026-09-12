> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/pasteboardtype/filecontentstype(forpathextension:)](https://developer.apple.com/documentation/appkit/nspasteboard/pasteboardtype/filecontentstype(forpathextension:))

# fileContentsType(forPathExtension:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a pasteboard type based on the passed file type.

> The file contents pboard type allowed you to synthesize a pboard type for a file’s contents based on the file’s extension. Using the UTI of a file to represent its contents now replaces this functionality.

## Declaration

```swift
static func fileContentsType(forPathExtension fileType: String) -> NSPasteboard.PasteboardType!
```

<a id="Discussion"></a>

## Discussion

Returns an [NSString](https://developer.apple.com/documentation/foundation/nsstring) to a pasteboard type representing a file’s contents based on the supplied string `fileType`. `fileType` should generally be the extension part of a filename. The conversion from a named file type to a pasteboard type is simple; no mapping to standard pasteboard types is attempted.

## See Also

### Functions

- [NSConvertGlyphsToPackedGlyphs(\_:\_:\_:\_:)](../../nsconvertglyphstopackedglyphs%28________%29.md): Deprecated. Prepares a set of glyphs for processing by character-based routines.
- [raiseBadArgumentException(\_:\_:\_:)](../../nsaccessibility-swift.struct/raisebadargumentexception%28______%29.md): Deprecated. Raises an error if the parameter is the wrong type or has an illegal value
- [NSReleaseAlertPanel(\_:)](../../nsreleasealertpanel%28__%29.md): Deprecated. Disposes of an alert panel.
- [NSDisableScreenUpdates()](../../nsdisablescreenupdates%28%29.md): Deprecated. Disables screen updates.
- [NSEnableScreenUpdates()](../../nsenablescreenupdates%28%29.md): Deprecated. Enables screen updates.
- [NSDrawColorTiledRects(\_:\_:\_:\_:\_:)](../../nsdrawcolortiledrects%28__________%29.md): Draws a single-color, bordered rectangle.
- [NSSetShowsServicesMenuItem(\_:\_:)](../../nssetshowsservicesmenuitem%28____%29.md): Specifies whether an item should be included in Services menus.
- [NSCopyBits(\_:\_:\_:)](../../nscopybits%28______%29.md): Deprecated. Copies a bitmap image to the location specified by a destination point.
- [NSShowsServicesMenuItem(\_:)](../../nsshowsservicesmenuitem%28__%29.md): Specifies whether a Services menu item is currently enabled.
- [NSDottedFrameRect(\_:)](../../nsdottedframerect%28__%29.md): Draws a bordered rectangle.
- [NSReadPixel(\_:)](../../nsreadpixel%28__%29.md): Deprecated. Reads the color of the pixel at the specified location.
- [NSGetWindowServerMemory(\_:\_:\_:\_:)](../../nsgetwindowservermemory%28________%29.md): Deprecated. Returns the amount of memory being used by a context.
- [fileNameType(forPathExtension:)](filenametype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [representedPathExtension](representedpathextension.md): Deprecated. A file type based on the passed pasteboard type.
- [representedPathExtensions(from:)](representedpathextensions%28from_%29.md): Deprecated. Returns an array of file types based on the passed pasteboard types.

# NSCreateFileContentsPboardType (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Returns a pasteboard type based on the passed file type.

> The file contents pboard type allowed you to synthesize a pboard type for a file’s contents based on the file’s extension. Using the UTI of a file to represent its contents now replaces this functionality.

## Declaration

```objectivec
extern NSPasteboardTypeNSCreateFileContentsPboardType(NSString *fileType);
```

<a id="Discussion"></a>

## Discussion

Returns an [NSString](https://developer.apple.com/documentation/foundation/nsstring) to a pasteboard type representing a file’s contents based on the supplied string `fileType`. `fileType` should generally be the extension part of a filename. The conversion from a named file type to a pasteboard type is simple; no mapping to standard pasteboard types is attempted.

## See Also

### Functions

- [NSConvertGlyphsToPackedGlyphs](../../nsconvertglyphstopackedglyphs%28________%29.md): Deprecated. Prepares a set of glyphs for processing by character-based routines.
- [NSOpenGLGetOption](../../nsopenglgetoption.md): Deprecated. Returns global OpenGL options.
- [NSOpenGLGetVersion](../../nsopenglgetversion.md): Deprecated. Returns the NSOpenGL version numbers.
- [NSOpenGLSetOption](../../nsopenglsetoption.md): Deprecated. Sets global OpenGL options.
- [NSAccessibilityRaiseBadArgumentException](../../nsaccessibility-swift.struct/raisebadargumentexception%28______%29.md): Deprecated. Raises an error if the parameter is the wrong type or has an illegal value
- [NSBeginAlertSheet](../../nsbeginalertsheet.md): Deprecated. Creates and runs an alert sheet.
- [NSBeginCriticalAlertSheet](../../nsbegincriticalalertsheet.md): Deprecated. Creates and runs a critical alert sheet.
- [NSBeginInformationalAlertSheet](../../nsbegininformationalalertsheet.md): Deprecated. Creates and runs an informational alert sheet.
- [NSGetAlertPanel](../../nsgetalertpanel.md): Deprecated. Returns an alert panel.
- [NSGetCriticalAlertPanel](../../nsgetcriticalalertpanel.md): Deprecated. Returns an alert panel to display a critical message.
- [NSGetInformationalAlertPanel](../../nsgetinformationalalertpanel.md): Deprecated. Returns an alert panel to display an informational message.
- [NSReleaseAlertPanel](../../nsreleasealertpanel%28__%29.md): Deprecated. Disposes of an alert panel.
- [NSRunAlertPanel](../../nsrunalertpanel.md): Deprecated. Creates an alert panel.
- [NSRunCriticalAlertPanel](../../nsruncriticalalertpanel.md): Deprecated. Creates and runs a critical alert panel.
- [NSRunInformationalAlertPanel](../../nsruninformationalalertpanel.md): Deprecated. Creates and runs an informational alert panel.
