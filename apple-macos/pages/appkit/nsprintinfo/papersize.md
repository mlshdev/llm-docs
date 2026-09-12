> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/papersize](https://developer.apple.com/documentation/appkit/nsprintinfo/papersize)

# paperSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The size of the paper.

## Declaration

```swift
var paperSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

The size is measured in points in the user coordinate space.

## See Also

### Related Documentation

- [dictionary()](dictionary%28%29.md): Returns the print info’s dictionary that contains the printing attributes.
- [init(dictionary:)](init%28dictionary_%29.md): Returns a printing information object initialized with the parameters in the specified dictionary.

### Managing the Printing Rectangle

- [topMargin](topmargin.md): The top margin to the specified size.
- [bottomMargin](bottommargin.md): The height of the bottom margin.
- [leftMargin](leftmargin.md): The width of the left margin.
- [rightMargin](rightmargin.md): The width of the right margin.
- [imageablePageBounds](imageablepagebounds.md): The imageable area of a sheet of paper specified by the print info.
- [orientation](orientation-swift.property.md): The orientation attribute.
- [NSPrintInfo.PaperOrientation](paperorientation.md): Constants that describe the orientation of printing on a page.
- [paperName](papername.md): The name of the currently selected paper size.
- [NSPrinter.PaperName](../nsprinter/papername.md): The type you use to specify the name of a type of paper.
- [localizedPaperName](localizedpapername.md): The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.

# paperSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The size of the paper.

## Declaration

```objectivec
@property NSSize paperSize;
```

<a id="Discussion"></a>

## Discussion

The size is measured in points in the user coordinate space.

## See Also

### Related Documentation

- [dictionary](dictionary%28%29.md): Returns the print info’s dictionary that contains the printing attributes.
- [initWithDictionary:](init%28dictionary_%29.md): Returns a printing information object initialized with the parameters in the specified dictionary.

### Managing the Printing Rectangle

- [topMargin](topmargin.md): The top margin to the specified size.
- [bottomMargin](bottommargin.md): The height of the bottom margin.
- [leftMargin](leftmargin.md): The width of the left margin.
- [rightMargin](rightmargin.md): The width of the right margin.
- [imageablePageBounds](imageablepagebounds.md): The imageable area of a sheet of paper specified by the print info.
- [orientation](orientation-swift.property.md): The orientation attribute.
- [NSPaperOrientation](paperorientation.md): Constants that describe the orientation of printing on a page.
- [paperName](papername.md): The name of the currently selected paper size.
- [NSPrinterPaperName](../nsprinter/papername.md): The type you use to specify the name of a type of paper.
- [localizedPaperName](localizedpapername.md): The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.
