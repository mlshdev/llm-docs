> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenpanel/filenames](https://developer.apple.com/documentation/appkit/nsopenpanel/filenames)

# filenames

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns an array containing the absolute paths (as NSString objects) of the selected files and directories.

> Use [URLs](urls.md) instead.

## Declaration

```objectivec
- (NSArray *) filenames;
```

<a id="return-value"></a>

## Return Value

The array of filenames.

<a id="Discussion"></a>

## Discussion

If multiple selections aren’t allowed, the array contains a single name. The [filenames](filenames.md) method is preferable over NSSavePanel’s [filename](../nssavepanel/filename.md) to get the name or names of files and directories that the user has selected.

## See Also

### Related Documentation

- [URLs](urls.md): An array of URLs, each of which contains the fully specified location of a selected file or directory.

### Methods

- [beginForDirectory:file:types:modelessDelegate:didEndSelector:contextInfo:](beginfordirectory_file_types_modelessdelegate_didendselector_contextinfo_.md): Deprecated. Presents a modeless Open panel.
- [beginSheetForDirectory:file:types:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheetfordirectory_file_types_modalforwindow_modaldelegate_didendselector_contextinfo_.md): Deprecated. Presents an Open panel as a sheet with the directory specified by `absoluteDirectoryPath` and optionally the file specified by `filename` selected.
- [runModalForDirectory:file:types:](runmodalfordirectory_file_types_.md): Deprecated. Displays the panel and begins a modal event loop that is terminated when the user clicks either OK or Cancel.
- [runModalForTypes:](runmodalfortypes_.md): Deprecated. Displays the panel and begins a modal event loop that is terminated when the user clicks either OK or Cancel.
