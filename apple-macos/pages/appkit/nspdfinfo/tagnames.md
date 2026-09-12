> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfinfo/tagnames](https://developer.apple.com/documentation/appkit/nspdfinfo/tagnames)

# tagNames (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An array of tag names that should be applied to the PDF file after it’s created.

## Declaration

```swift
var tagNames: [String] { get set }
```

## See Also

### Specifying PDF Information

- [url](url.md): The URL identifying the location at which the PDF file will be created.
- [isFileExtensionHidden](isfileextensionhidden.md): A Boolean value that indicates whether the file extension should appear after the filename.
- [orientation](orientation.md): The paper orientation to use when exporting content as a PDF file.
- [paperSize](papersize.md): The paper size to use when exporting content as a PDF file.
- [attributes](attributes.md): A dictionary of additional attributes that describe how to export content as a PDF file.

# tagNames (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An array of tag names that should be applied to the PDF file after it’s created.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * tagNames;
```

## See Also

### Specifying PDF Information

- [URL](url.md): The URL identifying the location at which the PDF file will be created.
- [fileExtensionHidden](isfileextensionhidden.md): A Boolean value that indicates whether the file extension should appear after the filename.
- [orientation](orientation.md): The paper orientation to use when exporting content as a PDF file.
- [paperSize](papersize.md): The paper size to use when exporting content as a PDF file.
- [attributes](attributes.md): A dictionary of additional attributes that describe how to export content as a PDF file.
