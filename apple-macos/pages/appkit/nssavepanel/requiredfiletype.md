> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/requiredfiletype](https://developer.apple.com/documentation/appkit/nssavepanel/requiredfiletype)

# requiredFileType

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns the required file type (if any).

> Use [allowedFileTypes](allowedfiletypes.md) instead.

## Declaration

```objectivec
- (NSString *) requiredFileType;
```

<a id="return-value"></a>

## Return Value

The required file type (if any).

<a id="Discussion"></a>

## Discussion

A file specified in the Save panel is saved with the designated filename and this file type as an extension. Examples of common file types are “rtf”, “tiff”, and “ps”. File type strings encoding HFS file types are not valid values for this attribute. An `nil` return value indicates that the user can save to any ASCII file.

This method is equivalent to using [allowedFileTypes](allowedfiletypes.md) and returning the first element of the list of allowed types, or `nil` if there are none.

## See Also

### Methods

- [allowedFileTypes](allowedfiletypes.md): Deprecated. An array of filename extensions or UTIs that represent the allowed file types for the panel.
- [setRequiredFileType:](setrequiredfiletype_.md): Deprecated. Specifies the file type (as an extension) or a UTI.
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
