> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfpanel/options-swift.struct](https://developer.apple.com/documentation/appkit/nspdfpanel/options-swift.struct)

# NSPDFPanel.Options (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.9+

Constants used to configure the contents of a PDF panel.

## Declaration

```swift
struct Options
```

## Topics

### Constants

- [showsPaperSize](options-swift.struct/showspapersize.md): The PDF panel shows a menu of paper sizes.
- [showsOrientation](options-swift.struct/showsorientation.md): The PDF panel shows the current orientation of the PDF contents, such as landscape or portrait.
- [requestsParentDirectory](options-swift.struct/requestsparentdirectory.md): The PDF panel doesn’t show a name field; instead, it allows the user to identify a directory in which to save multiple PDF files. If you set this flag, you’re responsible for appending a filename and the “pdf” extension to the resulting URL value in the [NSPDFInfo](../nspdfinfo.md) object before proceeding with the creation of the PDF file (or calling the `takeSettingsFromPDFInfo` method of [NSPrintInfo](../nsprintinfo.md)).

### Initializers

- [init(rawValue:)](options-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# NSPDFPanelOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

Constants used to configure the contents of a PDF panel.

## Declaration

```objectivec
enum NSPDFPanelOptions : NSInteger;
```

## Topics

### Constants

- [NSPDFPanelShowsPaperSize](options-swift.struct/showspapersize.md): The PDF panel shows a menu of paper sizes.
- [NSPDFPanelShowsOrientation](options-swift.struct/showsorientation.md): The PDF panel shows the current orientation of the PDF contents, such as landscape or portrait.
- [NSPDFPanelRequestsParentDirectory](options-swift.struct/requestsparentdirectory.md): The PDF panel doesn’t show a name field; instead, it allows the user to identify a directory in which to save multiple PDF files. If you set this flag, you’re responsible for appending a filename and the “pdf” extension to the resulting URL value in the [NSPDFInfo](../nspdfinfo.md) object before proceeding with the creation of the PDF file (or calling the `takeSettingsFromPDFInfo` method of [NSPrintInfo](../nsprintinfo.md)).
