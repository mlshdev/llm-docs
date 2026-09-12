> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfpanel/options-swift.struct/showspapersize](https://developer.apple.com/documentation/appkit/nspdfpanel/options-swift.struct/showspapersize)

# showsPaperSize (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

The PDF panel shows a menu of paper sizes.

## Declaration

```swift
static var showsPaperSize: NSPDFPanel.Options { get }
```

## See Also

### Constants

- [showsOrientation](showsorientation.md): The PDF panel shows the current orientation of the PDF contents, such as landscape or portrait.
- [requestsParentDirectory](requestsparentdirectory.md): The PDF panel doesn’t show a name field; instead, it allows the user to identify a directory in which to save multiple PDF files. If you set this flag, you’re responsible for appending a filename and the “pdf” extension to the resulting URL value in the [NSPDFInfo](../../nspdfinfo.md) object before proceeding with the creation of the PDF file (or calling the `takeSettingsFromPDFInfo` method of [NSPrintInfo](../../nsprintinfo.md)).

# NSPDFPanelShowsPaperSize (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.9+

The PDF panel shows a menu of paper sizes.

## Declaration

```objectivec
NSPDFPanelShowsPaperSize
```

## See Also

### Constants

- [NSPDFPanelShowsOrientation](showsorientation.md): The PDF panel shows the current orientation of the PDF contents, such as landscape or portrait.
- [NSPDFPanelRequestsParentDirectory](requestsparentdirectory.md): The PDF panel doesn’t show a name field; instead, it allows the user to identify a directory in which to save multiple PDF files. If you set this flag, you’re responsible for appending a filename and the “pdf” extension to the resulting URL value in the [NSPDFInfo](../../nspdfinfo.md) object before proceeding with the creation of the PDF file (or calling the `takeSettingsFromPDFInfo` method of [NSPrintInfo](../../nsprintinfo.md)).
