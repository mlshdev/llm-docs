> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/deprecated-symbols](https://developer.apple.com/documentation/appkit/deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Review symbols that are no longer supported, and find the replacements to use instead.

## Topics

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.

### Protocols

- [NSAccessibility](nsaccessibility.md): A legacy, informal protocol that Apple doesn’t recommend for active use.
- [NSEditorRegistration](nseditorregistration.md): A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.
- [NSInputServiceProvider](nsinputserviceprovider.md)
- [NSInputServerMouseTracker](nsinputservermousetracker.md)
- [NSDrawerDelegate](nsdrawerdelegate.md): Deprecated. A set of methods that drawer delegates implement to open, close, and resize the drawer.

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
- [NSReadPixel(\_:)](nsreadpixel%28__%29.md): Deprecated. Reads the color of the pixel at the specified location.
- [NSGetWindowServerMemory(\_:\_:\_:\_:)](nsgetwindowservermemory%28________%29.md): Deprecated. Returns the amount of memory being used by a context.
- [fileContentsType(forPathExtension:)](nspasteboard/pasteboardtype/filecontentstype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [fileNameType(forPathExtension:)](nspasteboard/pasteboardtype/filenametype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [representedPathExtension](nspasteboard/pasteboardtype/representedpathextension.md): Deprecated. A file type based on the passed pasteboard type.
- [representedPathExtensions(from:)](nspasteboard/pasteboardtype/representedpathextensions%28from_%29.md): Deprecated. Returns an array of file types based on the passed pasteboard types.

### Enumerations

- [NSMultibyteGlyphPacking](nsmultibyteglyphpacking.md): Deprecated. A constant for glyph packing.
- [Glyph Attributes](glyph-attributes.md): Attributes that are used only inside the glyph generation machinery, but must also be shared between components.
- [NSOpenGLGlobalOption](nsopenglglobaloption.md): Deprecated. Constants that specify OpenGL options.
- [Data Entry Types](data-entry-types.md): These constants specify how a cell formats numeric data.
- [Anonymous](nsbuttontypes-anonymous.md)
- [Additional Writing Directions](additional-writing-directions.md): Constants that specify additional options when setting the writing direction of attributed strings.
- [Return values for modal operations](return-values-for-modal-operations.md): Historical return values for [runModal(for:)](nsapplication/runmodal%28for_%29.md) and [runModalSession(\_:)](nsapplication/runmodalsession%28__%29.md).
- [Tags of Views in the FontPanel](tags-of-views-in-the-fontpanel.md): These constants are obsolete and should not be used.

# Deprecated Symbols (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Review symbols that are no longer supported, and find the replacements to use instead.

## Topics

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelBuffer](nsopenglpixelbuffer.md): Deprecated. An object that provides access to accelerated offscreen rendering.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSCachedImageRep](nscachedimagerep.md): Deprecated. An object that stores image data in a form that can be readily transferred to the screen.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.
- [NSInputManager](nsinputmanager.md): Deprecated.
- [NSInputServer](nsinputserver.md): Deprecated.
- [NSMovie](nsmovie.md): Deprecated.

### Protocols

- [NSAccessibility](nsaccessibility.md): A legacy, informal protocol that Apple doesn’t recommend for active use.
- [NSEditor](nseditor-deprecated-symbols.md): A set of methods that controllers and UI elements can implement to manage editing.
- [NSEditorRegistration](nseditorregistration.md): A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.
- [NSInputServiceProvider](nsinputserviceprovider.md)
- [NSInputServerMouseTracker](nsinputservermousetracker.md)
- [NSDrawerDelegate](nsdrawerdelegate.md): Deprecated. A set of methods that drawer delegates implement to open, close, and resize the drawer.

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
- [NSRunAlertPanelRelativeToWindow](nsrunalertpanelrelativetowindow.md): Deprecated.
- [NSRunCriticalAlertPanelRelativeToWindow](nsruncriticalalertpanelrelativetowindow.md): Deprecated.
- [NSRunInformationalAlertPanelRelativeToWindow](nsruninformationalalertpanelrelativetowindow.md): Deprecated.
- [NSDisableScreenUpdates](nsdisablescreenupdates%28%29.md): Deprecated. Disables screen updates.
- [NSEnableScreenUpdates](nsenablescreenupdates%28%29.md): Deprecated. Enables screen updates.
- [NSDrawColorTiledRects](nsdrawcolortiledrects%28__________%29.md): Draws a single-color, bordered rectangle.
- [NSInterfaceStyleForKey](nsinterfacestyleforkey.md): Deprecated. Returns an interface style value for the specified key and responder.
- [NSSetShowsServicesMenuItem](nssetshowsservicesmenuitem%28____%29.md): Specifies whether an item should be included in Services menus.
- [NSCopyBits](nscopybits%28______%29.md): Deprecated. Copies a bitmap image to the location specified by a destination point.
- [NSCountWindows](nscountwindows.md): Deprecated. Counts the number of onscreen windows.
- [NSCountWindowsForContext](nscountwindowsforcontext.md): Deprecated. Counts the number of onscreen windows belonging to a particular application.
- [NSShowsServicesMenuItem](nsshowsservicesmenuitem%28__%29.md): Specifies whether a Services menu item is currently enabled.
- [NSDottedFrameRect](nsdottedframerect%28__%29.md): Draws a bordered rectangle.
- [NSWindowList](nswindowlist.md): Deprecated. Gets information about onscreen windows.
- [NSWindowListForContext](nswindowlistforcontext.md): Deprecated. Gets information about an application’s onscreen windows.
- [NSReadPixel](nsreadpixel%28__%29.md): Deprecated. Reads the color of the pixel at the specified location.
- [NSGetWindowServerMemory](nsgetwindowservermemory%28________%29.md): Deprecated. Returns the amount of memory being used by a context.
- [NSCreateFileContentsPboardType](nspasteboard/pasteboardtype/filecontentstype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [NSCreateFilenamePboardType](nspasteboard/pasteboardtype/filenametype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [NSGetFileType](nspasteboard/pasteboardtype/representedpathextension.md): Deprecated. A file type based on the passed pasteboard type.
- [NSGetFileTypes](nspasteboard/pasteboardtype/representedpathextensions%28from_%29.md): Deprecated. Returns an array of file types based on the passed pasteboard types.

### Enumerations

- [NSMultibyteGlyphPacking](nsmultibyteglyphpacking.md): Deprecated. A constant for glyph packing.
- [Glyph Attributes](glyph-attributes.md): Attributes that are used only inside the glyph generation machinery, but must also be shared between components.
- [NSOpenGLGlobalOption](nsopenglglobaloption.md): Deprecated. Constants that specify OpenGL options.
- [NSInterfaceStyle](nsinterfacestyle.md): Deprecated. These constants are used in `NSResponder`’s [interfaceStyle](nsresponder/interfacestyle.md) method.
- [NSNoUnderlineStyle](nsnounderlinestyle.md): Deprecated.
- [NSSingleUnderlineStyle](nssingleunderlinestyle.md): Deprecated.
- [Data Entry Types](data-entry-types.md): These constants specify how a cell formats numeric data.
- [Anonymous](nsbuttontypes-anonymous.md)
- [Additional Writing Directions](additional-writing-directions.md): Constants that specify additional options when setting the writing direction of attributed strings.
- [Return values for modal operations](return-values-for-modal-operations.md): Historical return values for [runModalForWindow:](nsapplication/runmodal%28for_%29.md) and [runModalSession:](nsapplication/runmodalsession%28__%29.md).
- [Tags of Views in the FontPanel](tags-of-views-in-the-fontpanel.md): These constants are obsolete and should not be used.

### Constants

- [NSAccessibilitySortButtonRole](nsaccessibilitysortbuttonrole.md): Deprecated. The sort button role.
- [NSUnderlineStrikethroughMask](nsunderlinestrikethroughmask.md): Deprecated.
- [NSCalibratedBlackColorSpace](nscalibratedblackcolorspace.md): Deprecated. Calibrated color space with black and alpha components (pure black is 1.0)
- [NSDeviceBlackColorSpace](nsdeviceblackcolorspace.md): Deprecated. Device-dependent color space with black and alpha components (pure black is 1.0)
- [NSPrintSavePath](nsprintsavepath.md): Deprecated. An `NSString` object that specifies the pathname to which the job file will be saved when the [jobDisposition](nsprintinfo/jobdisposition-swift.property.md) is [NSPrintSaveJob](nsprintinfo/jobdisposition-swift.struct/save.md)..
