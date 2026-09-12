> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/runmodalfordirectory:file:](https://developer.apple.com/documentation/appkit/nssavepanel/runmodalfordirectory:file:)

# runModalForDirectory:file:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Initializes the panel to the directory and file specified, if any, then displays it and begins its modal event loop.

> Use [runModal](runmodal%28%29.md) instead.

## Declaration

```objectivec
- (NSInteger) runModalForDirectory:(NSString *) path file:(NSString *) name;
```

## Parameters

- `path`: Directory whose files the panel displays. When `nil`, the directory is the same directory used in the previous invocation of the panel; this is probably the best choice for most situations.
- `name`: Specifies a particular file in `path` that is selected when the Save panel is presented to a user. When `nil`, no file is initially selected.

<a id="return-value"></a>

## Return Value

`NSFileHandlingPanelOKButton` (if the user clicks the OK button) or `NSFileHandlingPanelCancelButton` (if the user clicks the Cancel button).

<a id="Discussion"></a>

## Discussion

This method invokes `NSApplication`’s [runModalForWindow:](../nsapplication/runmodal%28for_%29.md) method with `self` as the argument.

## See Also

### Related Documentation

- [runModalForWindow:](../nsapplication/runmodal%28for_%29.md): Starts a modal event loop for the specified window.
- [runModal](runmodal%28%29.md): Displays the panel and begins its event loop with the current working (or last-selected) directory as the default starting point.

### Methods

- [allowedFileTypes](allowedfiletypes.md): Deprecated. An array of filename extensions or UTIs that represent the allowed file types for the panel.
- [requiredFileType](requiredfiletype.md): Deprecated. Returns the required file type (if any).
- [setRequiredFileType:](setrequiredfiletype_.md): Deprecated. Specifies the file type (as an extension) or a UTI.
- [setDirectory:](setdirectory_.md): Deprecated. Sets the current pathname in the panel’s browser.
- [beginSheetForDirectory:file:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheetfordirectory_file_modalforwindow_modaldelegate_didendselector_contextinfo_.md): Deprecated. Presents a Save panel as a sheet with a specified path and, optionally, a specified file in that path.
- [panel:compareFilename:with:caseSensitive:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:comparefilename:with:casesensitive:): Deprecated. Controls the ordering of files presented by the `NSSavePanel` object specified.
- [panel:isValidFilename:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:isvalidfilename:): Deprecated. Gives the delegate the opportunity to validate selected items.
- [panel:shouldShowFilename:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:shouldshowfilename:): Deprecated. Gives the delegate the opportunity to filter items that it doesn’t want the user to choose.
- [panel:directoryDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:directorydidchange:): Deprecated. Tells the delegate that the user has changed the selected directory in the `NSSavePanel` object specified.
- [directory](directory.md): Deprecated. Returns the absolute pathname of the directory currently shown in the panel.
- [filename](filename.md): Deprecated. Returns the absolute pathname of the file currently shown in the panel.
- [selectText:](selecttext_.md): Deprecated. This method has been deprecated.
