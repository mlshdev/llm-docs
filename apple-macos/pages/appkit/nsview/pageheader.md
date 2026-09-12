> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/pageheader](https://developer.apple.com/documentation/appkit/nsview/pageheader)

# pageHeader (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A default header string that includes the print job title and date.

## Declaration

```swift
@NSCopying var pageHeader: NSAttributedString { get }
```

<a id="Discussion"></a>

## Discussion

Typically, the print job title is the same as the window title. A printable view class can override this property to provide its own content in place of the default value. You should not need to access this property directly. The printing system accesses it once per page during printing.

Headers are generated only if the user defaults contain the key `NSPrintHeaderAndFooter` with the value [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Printing the View’s Content

- [printView(\_:)](printview%28__%29.md): This action method opens the Print panel, and if the user chooses an option other than canceling, prints the view and all its subviews to the device specified in the Print panel.
- [beginPage(in:atPlacement:)](beginpage%28in_atplacement_%29.md): Called at the beginning of each page, this method sets up the coordinate system so that a region inside the view’s bounds is translated to a specified location.
- [dataWithEPS(inside:)](datawitheps%28inside_%29.md): Returns EPS data that draws the region of the view within a specified rectangle.
- [dataWithPDF(inside:)](datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the view within a specified rectangle.
- [printJobTitle](printjobtitle.md): The view’s print job title.
- [pageFooter](pagefooter.md): A default footer string that includes the current page number and page count.
- [writeEPS(inside:to:)](writeeps%28inside_to_%29.md): Writes EPS data that draws the region of the view within a specified rectangle onto a pasteboard.
- [writePDF(inside:to:)](writepdf%28inside_to_%29.md): Writes PDF data that draws the region of the view within a specified rectangle onto a pasteboard.
- [drawPageBorder(with:)](drawpageborder%28with_%29.md): Allows applications that use the AppKit pagination facility to draw additional marks on each logical page.
- [drawSheetBorder(with:)](drawsheetborder%28with_%29.md): Deprecated. Allows applications that use the AppKit pagination facility to draw additional marks on each printed sheet.

# pageHeader (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A default header string that includes the print job title and date.

## Declaration

```objectivec
@property (copy, readonly) NSAttributedString * pageHeader;
```

<a id="Discussion"></a>

## Discussion

Typically, the print job title is the same as the window title. A printable view class can override this property to provide its own content in place of the default value. You should not need to access this property directly. The printing system accesses it once per page during printing.

Headers are generated only if the user defaults contain the key `NSPrintHeaderAndFooter` with the value [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Printing the View’s Content

- [print:](printview%28__%29.md): This action method opens the Print panel, and if the user chooses an option other than canceling, prints the view and all its subviews to the device specified in the Print panel.
- [beginPageInRect:atPlacement:](beginpage%28in_atplacement_%29.md): Called at the beginning of each page, this method sets up the coordinate system so that a region inside the view’s bounds is translated to a specified location.
- [dataWithEPSInsideRect:](datawitheps%28inside_%29.md): Returns EPS data that draws the region of the view within a specified rectangle.
- [dataWithPDFInsideRect:](datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the view within a specified rectangle.
- [printJobTitle](printjobtitle.md): The view’s print job title.
- [pageFooter](pagefooter.md): A default footer string that includes the current page number and page count.
- [writeEPSInsideRect:toPasteboard:](writeeps%28inside_to_%29.md): Writes EPS data that draws the region of the view within a specified rectangle onto a pasteboard.
- [writePDFInsideRect:toPasteboard:](writepdf%28inside_to_%29.md): Writes PDF data that draws the region of the view within a specified rectangle onto a pasteboard.
- [drawPageBorderWithSize:](drawpageborder%28with_%29.md): Allows applications that use the AppKit pagination facility to draw additional marks on each logical page.
- [drawSheetBorderWithSize:](drawsheetborder%28with_%29.md): Deprecated. Allows applications that use the AppKit pagination facility to draw additional marks on each printed sheet.
