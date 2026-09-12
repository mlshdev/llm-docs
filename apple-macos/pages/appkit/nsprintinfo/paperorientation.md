> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/paperorientation](https://developer.apple.com/documentation/appkit/nsprintinfo/paperorientation)

# NSPrintInfo.PaperOrientation (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

Constants that describe the orientation of printing on a page.

## Declaration

```swift
enum PaperOrientation
```

## Topics

### Orientations

- [NSPrintInfo.PaperOrientation.portrait](paperorientation/portrait.md): Pages are printed in portrait orientation.
- [NSPrintInfo.PaperOrientation.landscape](paperorientation/landscape.md): Pages are printed in landscape orientation.

### Initializers

- [init(rawValue:)](paperorientation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the Printing Rectangle

- [paperSize](papersize.md): The size of the paper.
- [topMargin](topmargin.md): The top margin to the specified size.
- [bottomMargin](bottommargin.md): The height of the bottom margin.
- [leftMargin](leftmargin.md): The width of the left margin.
- [rightMargin](rightmargin.md): The width of the right margin.
- [imageablePageBounds](imageablepagebounds.md): The imageable area of a sheet of paper specified by the print info.
- [orientation](orientation-swift.property.md): The orientation attribute.
- [paperName](papername.md): The name of the currently selected paper size.
- [NSPrinter.PaperName](../nsprinter/papername.md): The type you use to specify the name of a type of paper.
- [localizedPaperName](localizedpapername.md): The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.

# NSPaperOrientation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

Constants that describe the orientation of printing on a page.

## Declaration

```objectivec
enum NSPaperOrientation : NSInteger;
```

## Topics

### Orientations

- [NSPaperOrientationPortrait](paperorientation/portrait.md): Pages are printed in portrait orientation.
- [NSPaperOrientationLandscape](paperorientation/landscape.md): Pages are printed in landscape orientation.

## See Also

### Managing the Printing Rectangle

- [paperSize](papersize.md): The size of the paper.
- [topMargin](topmargin.md): The top margin to the specified size.
- [bottomMargin](bottommargin.md): The height of the bottom margin.
- [leftMargin](leftmargin.md): The width of the left margin.
- [rightMargin](rightmargin.md): The width of the right margin.
- [imageablePageBounds](imageablepagebounds.md): The imageable area of a sheet of paper specified by the print info.
- [orientation](orientation-swift.property.md): The orientation attribute.
- [paperName](papername.md): The name of the currently selected paper size.
- [NSPrinterPaperName](../nsprinter/papername.md): The type you use to specify the name of a type of paper.
- [localizedPaperName](localizedpapername.md): The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.
