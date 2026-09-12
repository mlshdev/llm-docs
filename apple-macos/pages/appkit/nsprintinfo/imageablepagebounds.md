> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/imageablepagebounds](https://developer.apple.com/documentation/appkit/nsprintinfo/imageablepagebounds)

# imageablePageBounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The imageable area of a sheet of paper specified by the print info.

## Declaration

```swift
var imageablePageBounds: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

This property takes into account the current printer, paper size, and orientation settings, but not scaling factors. “Imageable area” is the maximum area that can possibly be marked on by the printer hardware, not the area defined by the current margin settings.

The origin (0, 0) of the rectangle is in the lower-left corner of the oriented sheet. The imageable bounds may extend past the edges of the sheet when, for example, a printer driver specifies it so that borderless printing can be done reliably.

## See Also

### Managing the Printing Rectangle

- [paperSize](papersize.md): The size of the paper.
- [topMargin](topmargin.md): The top margin to the specified size.
- [bottomMargin](bottommargin.md): The height of the bottom margin.
- [leftMargin](leftmargin.md): The width of the left margin.
- [rightMargin](rightmargin.md): The width of the right margin.
- [orientation](orientation-swift.property.md): The orientation attribute.
- [NSPrintInfo.PaperOrientation](paperorientation.md): Constants that describe the orientation of printing on a page.
- [paperName](papername.md): The name of the currently selected paper size.
- [NSPrinter.PaperName](../nsprinter/papername.md): The type you use to specify the name of a type of paper.
- [localizedPaperName](localizedpapername.md): The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.

# imageablePageBounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The imageable area of a sheet of paper specified by the print info.

## Declaration

```objectivec
@property (readonly) NSRect imageablePageBounds;
```

<a id="Discussion"></a>

## Discussion

This property takes into account the current printer, paper size, and orientation settings, but not scaling factors. “Imageable area” is the maximum area that can possibly be marked on by the printer hardware, not the area defined by the current margin settings.

The origin (0, 0) of the rectangle is in the lower-left corner of the oriented sheet. The imageable bounds may extend past the edges of the sheet when, for example, a printer driver specifies it so that borderless printing can be done reliably.

## See Also

### Managing the Printing Rectangle

- [paperSize](papersize.md): The size of the paper.
- [topMargin](topmargin.md): The top margin to the specified size.
- [bottomMargin](bottommargin.md): The height of the bottom margin.
- [leftMargin](leftmargin.md): The width of the left margin.
- [rightMargin](rightmargin.md): The width of the right margin.
- [orientation](orientation-swift.property.md): The orientation attribute.
- [NSPaperOrientation](paperorientation.md): Constants that describe the orientation of printing on a page.
- [paperName](papername.md): The name of the currently selected paper size.
- [NSPrinterPaperName](../nsprinter/papername.md): The type you use to specify the name of a type of paper.
- [localizedPaperName](localizedpapername.md): The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.
