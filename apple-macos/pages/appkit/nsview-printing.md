> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview-printing](https://developer.apple.com/documentation/appkit/nsview-printing)

# Printing (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Create a printable version of your view’s content and handle pagination and printer-related behaviors.

## Topics

### Printing the View’s Content

- [printView(\_:)](nsview/printview%28__%29.md): This action method opens the Print panel, and if the user chooses an option other than canceling, prints the view and all its subviews to the device specified in the Print panel.
- [beginPage(in:atPlacement:)](nsview/beginpage%28in_atplacement_%29.md): Called at the beginning of each page, this method sets up the coordinate system so that a region inside the view’s bounds is translated to a specified location.
- [dataWithEPS(inside:)](nsview/datawitheps%28inside_%29.md): Returns EPS data that draws the region of the view within a specified rectangle.
- [dataWithPDF(inside:)](nsview/datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the view within a specified rectangle.
- [printJobTitle](nsview/printjobtitle.md): The view’s print job title.
- [pageHeader](nsview/pageheader.md): A default header string that includes the print job title and date.
- [pageFooter](nsview/pagefooter.md): A default footer string that includes the current page number and page count.
- [writeEPS(inside:to:)](nsview/writeeps%28inside_to_%29.md): Writes EPS data that draws the region of the view within a specified rectangle onto a pasteboard.
- [writePDF(inside:to:)](nsview/writepdf%28inside_to_%29.md): Writes PDF data that draws the region of the view within a specified rectangle onto a pasteboard.
- [drawPageBorder(with:)](nsview/drawpageborder%28with_%29.md): Allows applications that use the AppKit pagination facility to draw additional marks on each logical page.
- [drawSheetBorder(with:)](nsview/drawsheetborder%28with_%29.md): Deprecated. Allows applications that use the AppKit pagination facility to draw additional marks on each printed sheet.

### Handling Pagination

- [heightAdjustLimit](nsview/heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [widthAdjustLimit](nsview/widthadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.
- [adjustPageWidthNew(\_:left:right:limit:)](nsview/adjustpagewidthnew%28__left_right_limit_%29.md): Overridden by subclasses to adjust page width during automatic pagination.
- [adjustPageHeightNew(\_:top:bottom:limit:)](nsview/adjustpageheightnew%28__top_bottom_limit_%29.md): Overridden by subclasses to adjust page height during automatic pagination.
- [knowsPageRange(\_:)](nsview/knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.
- [rectForPage(\_:)](nsview/rectforpage%28__%29.md): Implemented by subclasses to determine the portion of the view to be printed for the specified page number.
- [locationOfPrintRect(\_:)](nsview/locationofprintrect%28__%29.md): Invoked by [printView(\_:)](nsview/printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.

### Writing Conforming Rendering Instructions

- [beginDocument()](nsview/begindocument%28%29.md): Invoked at the beginning of the printing session, this method sets up the current graphics context.
- [endDocument()](nsview/enddocument%28%29.md): This method is invoked at the end of the printing session.
- [endPage()](nsview/endpage%28%29.md): Writes the end of a conforming page.

## See Also

### Managing the view’s content

- [Layout](layout.md): Specify the size and position your view relative to other nearby views using rules that update your view hierarchy automatically.
- [Drawing](nsview-drawing.md): Draw the content of custom views and update that content when the view’s size or appearance changes.
- [NSViewContentSelectionInfo](nsviewcontentselectioninfo.md)

# Printing (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Create a printable version of your view’s content and handle pagination and printer-related behaviors.

## Topics

### Printing the View’s Content

- [print:](nsview/printview%28__%29.md): This action method opens the Print panel, and if the user chooses an option other than canceling, prints the view and all its subviews to the device specified in the Print panel.
- [beginPageInRect:atPlacement:](nsview/beginpage%28in_atplacement_%29.md): Called at the beginning of each page, this method sets up the coordinate system so that a region inside the view’s bounds is translated to a specified location.
- [dataWithEPSInsideRect:](nsview/datawitheps%28inside_%29.md): Returns EPS data that draws the region of the view within a specified rectangle.
- [dataWithPDFInsideRect:](nsview/datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the view within a specified rectangle.
- [printJobTitle](nsview/printjobtitle.md): The view’s print job title.
- [pageHeader](nsview/pageheader.md): A default header string that includes the print job title and date.
- [pageFooter](nsview/pagefooter.md): A default footer string that includes the current page number and page count.
- [writeEPSInsideRect:toPasteboard:](nsview/writeeps%28inside_to_%29.md): Writes EPS data that draws the region of the view within a specified rectangle onto a pasteboard.
- [writePDFInsideRect:toPasteboard:](nsview/writepdf%28inside_to_%29.md): Writes PDF data that draws the region of the view within a specified rectangle onto a pasteboard.
- [drawPageBorderWithSize:](nsview/drawpageborder%28with_%29.md): Allows applications that use the AppKit pagination facility to draw additional marks on each logical page.
- [drawSheetBorderWithSize:](nsview/drawsheetborder%28with_%29.md): Deprecated. Allows applications that use the AppKit pagination facility to draw additional marks on each printed sheet.

### Handling Pagination

- [heightAdjustLimit](nsview/heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [widthAdjustLimit](nsview/widthadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.
- [adjustPageWidthNew:left:right:limit:](nsview/adjustpagewidthnew%28__left_right_limit_%29.md): Overridden by subclasses to adjust page width during automatic pagination.
- [adjustPageHeightNew:top:bottom:limit:](nsview/adjustpageheightnew%28__top_bottom_limit_%29.md): Overridden by subclasses to adjust page height during automatic pagination.
- [knowsPageRange:](nsview/knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.
- [rectForPage:](nsview/rectforpage%28__%29.md): Implemented by subclasses to determine the portion of the view to be printed for the specified page number.
- [locationOfPrintRect:](nsview/locationofprintrect%28__%29.md): Invoked by [print:](nsview/printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.

### Writing Conforming Rendering Instructions

- [beginDocument](nsview/begindocument%28%29.md): Invoked at the beginning of the printing session, this method sets up the current graphics context.
- [endDocument](nsview/enddocument%28%29.md): This method is invoked at the end of the printing session.
- [endPage](nsview/endpage%28%29.md): Writes the end of a conforming page.

## See Also

### Managing the view’s content

- [Layout](layout.md): Specify the size and position your view relative to other nearby views using rules that update your view hierarchy automatically.
- [Drawing](nsview-drawing.md): Draw the content of custom views and update that content when the view’s size or appearance changes.
- [NSViewContentSelectionInfo](nsviewcontentselectioninfo.md)
