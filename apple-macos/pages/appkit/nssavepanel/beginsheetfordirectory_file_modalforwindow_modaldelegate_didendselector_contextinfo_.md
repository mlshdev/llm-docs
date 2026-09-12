> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/beginsheetfordirectory:file:modalforwindow:modaldelegate:didendselector:contextinfo:](https://developer.apple.com/documentation/appkit/nssavepanel/beginsheetfordirectory:file:modalforwindow:modaldelegate:didendselector:contextinfo:)

# beginSheetForDirectory:file:modalForWindow:modalDelegate:didEndSelector:contextInfo:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Presents a Save panel as a sheet with a specified path and, optionally, a specified file in that path.

> Use [beginSheetModalForWindow:completionHandler:](beginsheetmodal%28for_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) beginSheetForDirectory:(NSString *) path file:(NSString *) name modalForWindow:(NSWindow *) docWindow modalDelegate:(id) delegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `path`: Directory whose files the panel displays. When `nil`, the directory is the same directory used in the previous invocation of the panel; this is probably the best choice for most situations.
- `name`: Specifies a particular file in `path` that is selected when the Save panel is presented to a user. When `nil`, no file is initially selected.
- `docWindow`: If not `nil`, the Save panel slides down as a sheet running as a document modal window in `docWindow`. If `nil`, the behavior defaults to a standalone modal window.
- `delegate`: This is not the same as a delegate assigned to the panel. This delegate is temporary and the relationship only lasts until the panel is dismissed. The `NSSavePanel` object has a weak reference to the modal delegate.
- `didEndSelector`: Message sent to `modalDelegate` after the modal session has ended, but before dismissing the Save panel. `didEndSelector` may dismiss the Save panel itself; otherwise, it is dismissed on return from the method. The corresponding method should have the following signature:

  ```objc
  - (void)savePanelDidEnd:(NSSavePanel *)sheet returnCode:(int)returnCode contextInfo:(void *)contextInfo;
  ```

  The value passed as `returnCode` is either `NSCancelButton` or `NSOKButton`.
- `contextInfo`: Context information passed to `modalDelegate` in the `didEndSelector` message.

## See Also

### Related Documentation

- [beginSheetModalForWindow:completionHandler:](beginsheetmodal%28for_completionhandler_%29.md): Presents the panel as a sheet modal to the specified window.

### Methods

- [allowedFileTypes](allowedfiletypes.md): Deprecated. An array of filename extensions or UTIs that represent the allowed file types for the panel.
- [requiredFileType](requiredfiletype.md): Deprecated. Returns the required file type (if any).
- [setRequiredFileType:](setrequiredfiletype_.md): Deprecated. Specifies the file type (as an extension) or a UTI.
- [setDirectory:](setdirectory_.md): Deprecated. Sets the current pathname in the panel’s browser.
- [runModalForDirectory:file:](runmodalfordirectory_file_.md): Deprecated. Initializes the panel to the directory and file specified, if any, then displays it and begins its modal event loop.
- [panel:compareFilename:with:caseSensitive:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:comparefilename:with:casesensitive:): Deprecated. Controls the ordering of files presented by the `NSSavePanel` object specified.
- [panel:isValidFilename:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:isvalidfilename:): Deprecated. Gives the delegate the opportunity to validate selected items.
- [panel:shouldShowFilename:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:shouldshowfilename:): Deprecated. Gives the delegate the opportunity to filter items that it doesn’t want the user to choose.
- [panel:directoryDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/panel:directorydidchange:): Deprecated. Tells the delegate that the user has changed the selected directory in the `NSSavePanel` object specified.
- [directory](directory.md): Deprecated. Returns the absolute pathname of the directory currently shown in the panel.
- [filename](filename.md): Deprecated. Returns the absolute pathname of the file currently shown in the panel.
- [selectText:](selecttext_.md): Deprecated. This method has been deprecated.
