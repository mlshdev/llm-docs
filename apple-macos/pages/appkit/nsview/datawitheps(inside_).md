> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/datawitheps(inside:)](https://developer.apple.com/documentation/appkit/nsview/datawitheps(inside:))

# dataWithEPS(inside:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns EPS data that draws the region of the view within a specified rectangle.

## Declaration

```swift
func dataWithEPS(inside rect: NSRect) -> Data
```

## Parameters

- `rect`: A rectangle defining the region.

<a id="Discussion"></a>

## Discussion

This data can be placed on an [NSPasteboard](../nspasteboard.md) object, written to a file, or used to create an [NSImage](../nsimage.md) object.

## See Also

### Printing the View’s Content

- [printView(\_:)](printview%28__%29.md): This action method opens the Print panel, and if the user chooses an option other than canceling, prints the view and all its subviews to the device specified in the Print panel.
- [beginPage(in:atPlacement:)](beginpage%28in_atplacement_%29.md): Called at the beginning of each page, this method sets up the coordinate system so that a region inside the view’s bounds is translated to a specified location.
- [dataWithPDF(inside:)](datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the view within a specified rectangle.
- [printJobTitle](printjobtitle.md): The view’s print job title.
- [pageHeader](pageheader.md): A default header string that includes the print job title and date.
- [pageFooter](pagefooter.md): A default footer string that includes the current page number and page count.
- [writeEPS(inside:to:)](writeeps%28inside_to_%29.md): Writes EPS data that draws the region of the view within a specified rectangle onto a pasteboard.
- [writePDF(inside:to:)](writepdf%28inside_to_%29.md): Writes PDF data that draws the region of the view within a specified rectangle onto a pasteboard.
- [drawPageBorder(with:)](drawpageborder%28with_%29.md): Allows applications that use the AppKit pagination facility to draw additional marks on each logical page.
- [drawSheetBorder(with:)](drawsheetborder%28with_%29.md): Deprecated. Allows applications that use the AppKit pagination facility to draw additional marks on each printed sheet.

# dataWithEPSInsideRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns EPS data that draws the region of the view within a specified rectangle.

## Declaration

```objectivec
- (NSData *) dataWithEPSInsideRect:(NSRect) rect;
```

## Parameters

- `rect`: A rectangle defining the region.

<a id="Discussion"></a>

## Discussion

This data can be placed on an [NSPasteboard](../nspasteboard.md) object, written to a file, or used to create an [NSImage](../nsimage.md) object.

## See Also

### Printing the View’s Content

- [print:](printview%28__%29.md): This action method opens the Print panel, and if the user chooses an option other than canceling, prints the view and all its subviews to the device specified in the Print panel.
- [beginPageInRect:atPlacement:](beginpage%28in_atplacement_%29.md): Called at the beginning of each page, this method sets up the coordinate system so that a region inside the view’s bounds is translated to a specified location.
- [dataWithPDFInsideRect:](datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the view within a specified rectangle.
- [printJobTitle](printjobtitle.md): The view’s print job title.
- [pageHeader](pageheader.md): A default header string that includes the print job title and date.
- [pageFooter](pagefooter.md): A default footer string that includes the current page number and page count.
- [writeEPSInsideRect:toPasteboard:](writeeps%28inside_to_%29.md): Writes EPS data that draws the region of the view within a specified rectangle onto a pasteboard.
- [writePDFInsideRect:toPasteboard:](writepdf%28inside_to_%29.md): Writes PDF data that draws the region of the view within a specified rectangle onto a pasteboard.
- [drawPageBorderWithSize:](drawpageborder%28with_%29.md): Allows applications that use the AppKit pagination facility to draw additional marks on each logical page.
- [drawSheetBorderWithSize:](drawsheetborder%28with_%29.md): Deprecated. Allows applications that use the AppKit pagination facility to draw additional marks on each printed sheet.
