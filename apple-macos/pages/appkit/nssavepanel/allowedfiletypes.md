> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/allowedfiletypes](https://developer.apple.com/documentation/appkit/nssavepanel/allowedfiletypes)

# allowedFileTypes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 12.0)

An array of filename extensions or UTIs that represent the allowed file types for the panel.

> Use -allowedContentTypes instead

## Declaration

```swift
var allowedFileTypes: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the file types for the user to select from. A file type can be a common filename extension, or a UTI. The default value of this property is `nil`, which indicates that any file type can be used. If you specify an empty array for this parameter, the Save panel raises an exception.

If the user doesn’t select a type, the panel uses the first item in the `allowedFileTypes` array. If [allowsOtherFileTypes](allowsotherfiletypes.md) is [true](https://developer.apple.com/documentation/swift/true), and the user enters a filename extension that doesn’t match one of the types in the array, AppKit prompts the user to confirm the choice.

[NSOpenPanel](../nsopenpanel.md): In versions of macOS earlier than v10.6, this property is ignored. For applications that link against v10.6 and higher, this property determines which files the open panel enables. Don’t use the deprecated methods to show the open panel (that is, the methods that take a `types:` parameter) because they will overwrite this value. The allowed file types can be changed while the panel is running (for example, from an accessory view). This is also known as the “enabled file types.” A `nil` value indicates that all files should be enabled.

# allowedFileTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 12.0)

An array of filename extensions or UTIs that represent the allowed file types for the panel.

> Use -allowedContentTypes instead

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * allowedFileTypes;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the file types for the user to select from. A file type can be a common filename extension, or a UTI. The default value of this property is `nil`, which indicates that any file type can be used. If you specify an empty array for this parameter, the Save panel raises an exception.

If the user doesn’t select a type, the panel uses the first item in the `allowedFileTypes` array. If [allowsOtherFileTypes](allowsotherfiletypes.md) is [true](https://developer.apple.com/documentation/swift/true), and the user enters a filename extension that doesn’t match one of the types in the array, AppKit prompts the user to confirm the choice.

[NSOpenPanel](../nsopenpanel.md): In versions of macOS earlier than v10.6, this property is ignored. For applications that link against v10.6 and higher, this property determines which files the open panel enables. Don’t use the deprecated methods to show the open panel (that is, the methods that take a `types:` parameter) because they will overwrite this value. The allowed file types can be changed while the panel is running (for example, from an accessory view). This is also known as the “enabled file types.” A `nil` value indicates that all files should be enabled.

## See Also

### Methods

- [requiredFileType](requiredfiletype.md): Deprecated. Returns the required file type (if any).
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
