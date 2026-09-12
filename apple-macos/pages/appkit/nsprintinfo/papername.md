> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/papername](https://developer.apple.com/documentation/appkit/nsprintinfo/papername)

# paperName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the currently selected paper size.

## Declaration

```swift
var paperName: NSPrinter.PaperName? { get set }
```

<a id="Discussion"></a>

## Discussion

The string contains a value such as Letter or Legal. Paper names are implementation specific.

## See Also

### Related Documentation

- [dictionary()](dictionary%28%29.md): Returns the print info’s dictionary that contains the printing attributes.
- [init(dictionary:)](init%28dictionary_%29.md): Returns a printing information object initialized with the parameters in the specified dictionary.

### Managing the Printing Rectangle

- [paperSize](papersize.md): The size of the paper.
- [topMargin](topmargin.md): The top margin to the specified size.
- [bottomMargin](bottommargin.md): The height of the bottom margin.
- [leftMargin](leftmargin.md): The width of the left margin.
- [rightMargin](rightmargin.md): The width of the right margin.
- [imageablePageBounds](imageablepagebounds.md): The imageable area of a sheet of paper specified by the print info.
- [orientation](orientation-swift.property.md): The orientation attribute.
- [NSPrintInfo.PaperOrientation](paperorientation.md): Constants that describe the orientation of printing on a page.
- [NSPrinter.PaperName](../nsprinter/papername.md): The type you use to specify the name of a type of paper.
- [localizedPaperName](localizedpapername.md): The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.

# paperName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the currently selected paper size.

## Declaration

```objectivec
@property (copy, nullable) NSPrinterPaperName paperName;
```

<a id="Discussion"></a>

## Discussion

The string contains a value such as Letter or Legal. Paper names are implementation specific.

## See Also

### Related Documentation

- [dictionary](dictionary%28%29.md): Returns the print info’s dictionary that contains the printing attributes.
- [initWithDictionary:](init%28dictionary_%29.md): Returns a printing information object initialized with the parameters in the specified dictionary.

### Managing the Printing Rectangle

- [paperSize](papersize.md): The size of the paper.
- [topMargin](topmargin.md): The top margin to the specified size.
- [bottomMargin](bottommargin.md): The height of the bottom margin.
- [leftMargin](leftmargin.md): The width of the left margin.
- [rightMargin](rightmargin.md): The width of the right margin.
- [imageablePageBounds](imageablepagebounds.md): The imageable area of a sheet of paper specified by the print info.
- [orientation](orientation-swift.property.md): The orientation attribute.
- [NSPaperOrientation](paperorientation.md): Constants that describe the orientation of printing on a page.
- [NSPrinterPaperName](../nsprinter/papername.md): The type you use to specify the name of a type of paper.
- [localizedPaperName](localizedpapername.md): The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.
