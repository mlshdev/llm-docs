> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenpanel/runmodalfortypes:](https://developer.apple.com/documentation/appkit/nsopenpanel/runmodalfortypes:)

# runModalForTypes:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Displays the panel and begins a modal event loop that is terminated when the user clicks either OK or Cancel.

> Use [runModal](../nssavepanel/runmodal%28%29.md) instead. You can set `fileTypes` using [allowedFileTypes](../nssavepanel/allowedfiletypes.md).

## Declaration

```objectivec
- (NSInteger) runModalForTypes:(NSArray *) fileTypes;
```

## Parameters

- `fileTypes`: An array of file extensions and/or HFS file types. Specifies the files the panel allows the user to select. `nil` makes all files selectable by the user. An array of types passed in here will override one set using [allowedFileTypes](../nssavepanel/allowedfiletypes.md).

<a id="return-value"></a>

## Return Value

The button used to dismiss the dialog: `NSOKButton` for the OK button and `NSCancelButton` for the Cancel button.

<a id="Discussion"></a>

## Discussion

This convenience method sends ```runModalForDirectory:nil file:nil types:``fileTypes``` to the panel. See [runModalForDirectory:file:types:](runmodalfordirectory_file_types_.md) for additional details.

## See Also

### Related Documentation

- [runModal](../nssavepanel/runmodal%28%29.md): Displays the panel and begins its event loop with the current working (or last-selected) directory as the default starting point.

### Methods

- [filenames](filenames.md): Deprecated. Returns an array containing the absolute paths (as NSString objects) of the selected files and directories.
- [beginForDirectory:file:types:modelessDelegate:didEndSelector:contextInfo:](beginfordirectory_file_types_modelessdelegate_didendselector_contextinfo_.md): Deprecated. Presents a modeless Open panel.
- [beginSheetForDirectory:file:types:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheetfordirectory_file_types_modalforwindow_modaldelegate_didendselector_contextinfo_.md): Deprecated. Presents an Open panel as a sheet with the directory specified by `absoluteDirectoryPath` and optionally the file specified by `filename` selected.
- [runModalForDirectory:file:types:](runmodalfordirectory_file_types_.md): Deprecated. Displays the panel and begins a modal event loop that is terminated when the user clicks either OK or Cancel.
