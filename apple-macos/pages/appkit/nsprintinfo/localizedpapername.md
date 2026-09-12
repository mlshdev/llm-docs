> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/localizedpapername](https://developer.apple.com/documentation/appkit/nsprintinfo/localizedpapername)

# localizedPaperName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.

## Declaration

```swift
var localizedPaperName: String? { get }
```

<a id="Discussion"></a>

## Discussion

This is typically different from the value of [paperName](papername.md), which is almost never suitable for presentation to the user.

## See Also

### Managing the Printing Rectangle

- [paperSize](papersize.md): The size of the paper.
- [topMargin](topmargin.md): The top margin to the specified size.
- [bottomMargin](bottommargin.md): The height of the bottom margin.
- [leftMargin](leftmargin.md): The width of the left margin.
- [rightMargin](rightmargin.md): The width of the right margin.
- [imageablePageBounds](imageablepagebounds.md): The imageable area of a sheet of paper specified by the print info.
- [orientation](orientation-swift.property.md): The orientation attribute.
- [NSPrintInfo.PaperOrientation](paperorientation.md): Constants that describe the orientation of printing on a page.
- [paperName](papername.md): The name of the currently selected paper size.
- [NSPrinter.PaperName](../nsprinter/papername.md): The type you use to specify the name of a type of paper.

# localizedPaperName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * localizedPaperName;
```

<a id="Discussion"></a>

## Discussion

This is typically different from the value of [paperName](papername.md), which is almost never suitable for presentation to the user.

## See Also

### Managing the Printing Rectangle

- [paperSize](papersize.md): The size of the paper.
- [topMargin](topmargin.md): The top margin to the specified size.
- [bottomMargin](bottommargin.md): The height of the bottom margin.
- [leftMargin](leftmargin.md): The width of the left margin.
- [rightMargin](rightmargin.md): The width of the right margin.
- [imageablePageBounds](imageablepagebounds.md): The imageable area of a sheet of paper specified by the print info.
- [orientation](orientation-swift.property.md): The orientation attribute.
- [NSPaperOrientation](paperorientation.md): Constants that describe the orientation of printing on a page.
- [paperName](papername.md): The name of the currently selected paper size.
- [NSPrinterPaperName](../nsprinter/papername.md): The type you use to specify the name of a type of paper.
