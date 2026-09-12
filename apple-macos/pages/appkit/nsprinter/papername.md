> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprinter/papername](https://developer.apple.com/documentation/appkit/nsprinter/papername)

# NSPrinter.PaperName (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The type you use to specify the name of a type of paper.

## Declaration

```swift
struct PaperName
```

## Topics

### Initializers

- [init(\_:)](papername/init%28__%29.md): Creates a paper name.
- [init(rawValue:)](papername/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the Printing Rectangle

- [paperSize](../nsprintinfo/papersize.md): The size of the paper.
- [topMargin](../nsprintinfo/topmargin.md): The top margin to the specified size.
- [bottomMargin](../nsprintinfo/bottommargin.md): The height of the bottom margin.
- [leftMargin](../nsprintinfo/leftmargin.md): The width of the left margin.
- [rightMargin](../nsprintinfo/rightmargin.md): The width of the right margin.
- [imageablePageBounds](../nsprintinfo/imageablepagebounds.md): The imageable area of a sheet of paper specified by the print info.
- [orientation](../nsprintinfo/orientation-swift.property.md): The orientation attribute.
- [NSPrintInfo.PaperOrientation](../nsprintinfo/paperorientation.md): Constants that describe the orientation of printing on a page.
- [paperName](../nsprintinfo/papername.md): The name of the currently selected paper size.
- [localizedPaperName](../nsprintinfo/localizedpapername.md): The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.

# NSPrinterPaperName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The type you use to specify the name of a type of paper.

## Declaration

```objectivec
typedef NSString * NSPrinterPaperName;
```

## See Also

### Managing the Printing Rectangle

- [paperSize](../nsprintinfo/papersize.md): The size of the paper.
- [topMargin](../nsprintinfo/topmargin.md): The top margin to the specified size.
- [bottomMargin](../nsprintinfo/bottommargin.md): The height of the bottom margin.
- [leftMargin](../nsprintinfo/leftmargin.md): The width of the left margin.
- [rightMargin](../nsprintinfo/rightmargin.md): The width of the right margin.
- [imageablePageBounds](../nsprintinfo/imageablepagebounds.md): The imageable area of a sheet of paper specified by the print info.
- [orientation](../nsprintinfo/orientation-swift.property.md): The orientation attribute.
- [NSPaperOrientation](../nsprintinfo/paperorientation.md): Constants that describe the orientation of printing on a page.
- [paperName](../nsprintinfo/papername.md): The name of the currently selected paper size.
- [localizedPaperName](../nsprintinfo/localizedpapername.md): The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.
