> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpagerenderer/drawfooterforpage(at:in:)](https://developer.apple.com/documentation/uikit/uiprintpagerenderer/drawfooterforpage(at:in:))

# drawFooterForPage(at:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Draws the footer of a page.

## Declaration

```swift
func drawFooterForPage(at pageIndex: Int, in footerRect: CGRect)
```

## Parameters

- `pageIndex`: The index of the page on which to draw the footer content.
- `footerRect`: The rectangle in which to draw the footer content. This rectangle uses the coordinate system of the paper rectangle ([paperRect](paperrect.md)), with the origin of the coordinates at the top-left corner of the sheet.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. The system doesn’t call this method if [footerHeight](footerheight.md) isn’t a positive value. Override this method to draw the footer of the specified page.

The system configures this method for drawing to the current graphics context according to [UIGraphicsGetCurrentContext()](../uigraphicsgetcurrentcontext%28%29.md).

## See Also

### Drawing a page

- [drawPage(at:in:)](drawpage%28at_in_%29.md): Draws a page of content for the printer.
- [drawHeaderForPage(at:in:)](drawheaderforpage%28at_in_%29.md): Draws the header of a page.
- [drawContentForPage(at:in:)](drawcontentforpage%28at_in_%29.md): Draws the content of a page.
- [drawPrintFormatter(\_:forPageAt:)](drawprintformatter%28__forpageat_%29.md): Performs custom drawing in addition to the specified print formatter’s drawing for a page.

# drawFooterForPageAtIndex:inRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Draws the footer of a page.

## Declaration

```objectivec
- (void) drawFooterForPageAtIndex:(NSInteger) pageIndex inRect:(CGRect) footerRect;
```

## Parameters

- `pageIndex`: The index of the page on which to draw the footer content.
- `footerRect`: The rectangle in which to draw the footer content. This rectangle uses the coordinate system of the paper rectangle ([paperRect](paperrect.md)), with the origin of the coordinates at the top-left corner of the sheet.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. The system doesn’t call this method if [footerHeight](footerheight.md) isn’t a positive value. Override this method to draw the footer of the specified page.

The system configures this method for drawing to the current graphics context according to [UIGraphicsGetCurrentContext](../uigraphicsgetcurrentcontext%28%29.md).

## See Also

### Drawing a page

- [drawPageAtIndex:inRect:](drawpage%28at_in_%29.md): Draws a page of content for the printer.
- [drawHeaderForPageAtIndex:inRect:](drawheaderforpage%28at_in_%29.md): Draws the header of a page.
- [drawContentForPageAtIndex:inRect:](drawcontentforpage%28at_in_%29.md): Draws the content of a page.
- [drawPrintFormatter:forPageAtIndex:](drawprintformatter%28__forpageat_%29.md): Performs custom drawing in addition to the specified print formatter’s drawing for a page.
