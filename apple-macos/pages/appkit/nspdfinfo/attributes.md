> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfinfo/attributes](https://developer.apple.com/documentation/appkit/nspdfinfo/attributes)

# attributes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A dictionary of additional attributes that describe how to export content as a PDF file.

## Declaration

```swift
var attributes: NSMutableDictionary { get }
```

<a id="Discussion"></a>

## Discussion

Although `attributes` is a read-only property, you can modify the mutable dictionary associated with it. Typically, this dictionary contains custom attributes or parameters that are set by a custom accessory view in the PDF panel.

## See Also

### Specifying PDF Information

- [url](url.md): The URL identifying the location at which the PDF file will be created.
- [isFileExtensionHidden](isfileextensionhidden.md): A Boolean value that indicates whether the file extension should appear after the filename.
- [tagNames](tagnames.md): An array of tag names that should be applied to the PDF file after it’s created.
- [orientation](orientation.md): The paper orientation to use when exporting content as a PDF file.
- [paperSize](papersize.md): The paper size to use when exporting content as a PDF file.

# attributes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A dictionary of additional attributes that describe how to export content as a PDF file.

## Declaration

```objectivec
@property (readonly) NSMutableDictionary<NSString *,id> * attributes;
```

<a id="Discussion"></a>

## Discussion

Although `attributes` is a read-only property, you can modify the mutable dictionary associated with it. Typically, this dictionary contains custom attributes or parameters that are set by a custom accessory view in the PDF panel.

## See Also

### Specifying PDF Information

- [URL](url.md): The URL identifying the location at which the PDF file will be created.
- [fileExtensionHidden](isfileextensionhidden.md): A Boolean value that indicates whether the file extension should appear after the filename.
- [tagNames](tagnames.md): An array of tag names that should be applied to the PDF file after it’s created.
- [orientation](orientation.md): The paper orientation to use when exporting content as a PDF file.
- [paperSize](papersize.md): The paper size to use when exporting content as a PDF file.
