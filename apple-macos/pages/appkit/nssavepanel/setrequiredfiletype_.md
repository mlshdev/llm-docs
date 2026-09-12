> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/setrequiredfiletype:](https://developer.apple.com/documentation/appkit/nssavepanel/setrequiredfiletype:)

# setRequiredFileType:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Specifies the file type (as an extension) or a UTI.

> Use [allowedFileTypes](allowedfiletypes.md) instead.

## Declaration

```objectivec
- (void) setRequiredFileType:(NSString *) type;
```

## Parameters

- `type`: String to set as the extension to be appended to any selected files that don’t already have that extension.

<a id="Discussion"></a>

## Discussion

If `type` is an extension, it should not include the period that begins the extension. Pass `nil` to indicate any type. File type strings encoding HFS file types are not valid values for this attribute. You need to invoke this method each time the Save panel is used for another file type within the application.

This method is equivalent to using [allowedFileTypes](allowedfiletypes.md) with an array containing only `type` (unless `type` is nil, and then it’s equivalent to setting the property to `nil`).

## See Also

### Methods

- [allowedFileTypes](allowedfiletypes.md): Deprecated. An array of filename extensions or UTIs that represent the allowed file types for the panel.
- [requiredFileType](requiredfiletype.md): Deprecated. Returns the required file type (if any).
- [setDirectory:](setdirectory_.md): Deprecated. Sets the current pathname in the panel’s browser.
- [beginSheetForDirectory:file:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheetfordirectory_file_modalforwindow_modaldelegate_didendselector_contextinfo_.md): Deprecated. Presents a Save panel as a sheet with a specified path and, optionally, a specified file in that path.
- [runModalForDirectory:file:](runmodalfordirectory_file_.md): Deprecated. Initializes the panel to the directory and file specified, if any, then displays it and begins its modal event loop.
- [panel:compareFilename:with:caseSensitive:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:comparefilename:with:casesensitive:): Deprecated. Controls the ordering of files presented by the `NSSavePanel` object specified.
- [panel:isValidFilename:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:isvalidfilename:): Deprecated. Gives the delegate the opportunity to validate selected items.
- [panel:shouldShowFilename:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:shouldshowfilename:): Deprecated. Gives the delegate the opportunity to filter items that it doesn’t want the user to choose.
- [panel:directoryDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:directorydidchange:): Deprecated. Tells the delegate that the user has changed the selected directory in the `NSSavePanel` object specified.
- [directory](directory.md): Deprecated. Returns the absolute pathname of the directory currently shown in the panel.
- [filename](filename.md): Deprecated. Returns the absolute pathname of the file currently shown in the panel.
- [selectText:](selecttext_.md): Deprecated. This method has been deprecated.
