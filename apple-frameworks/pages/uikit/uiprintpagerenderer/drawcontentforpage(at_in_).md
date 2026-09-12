> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpagerenderer/drawcontentforpage(at:in:)](https://developer.apple.com/documentation/uikit/uiprintpagerenderer/drawcontentforpage(at:in:))

# drawContentForPage(at:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Draws the content of a page.

## Declaration

```swift
func drawContentForPage(at pageIndex: Int, in contentRect: CGRect)
```

## Parameters

- `pageIndex`: The index of the page on which to draw content.
- `contentRect`: The area in which to draw content, in the coordinate system of the printable rectangle. This area is equal to [printableRect](printablerect.md) minus [headerHeight](headerheight.md) and [footerHeight](footerheight.md).

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Override this method to draw the content of the specified page.

The system configures this method for drawing to the current graphics context according to [UIGraphicsGetCurrentContext()](../uigraphicsgetcurrentcontext%28%29.md).

## See Also

### Drawing a page

- [drawPage(at:in:)](drawpage%28at_in_%29.md): Draws a page of content for the printer.
- [drawHeaderForPage(at:in:)](drawheaderforpage%28at_in_%29.md): Draws the header of a page.
- [drawPrintFormatter(\_:forPageAt:)](drawprintformatter%28__forpageat_%29.md): Performs custom drawing in addition to the specified print formatter’s drawing for a page.
- [drawFooterForPage(at:in:)](drawfooterforpage%28at_in_%29.md): Draws the footer of a page.

# drawContentForPageAtIndex:inRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Draws the content of a page.

## Declaration

```objectivec
- (void) drawContentForPageAtIndex:(NSInteger) pageIndex inRect:(CGRect) contentRect;
```

## Parameters

- `pageIndex`: The index of the page on which to draw content.
- `contentRect`: The area in which to draw content, in the coordinate system of the printable rectangle. This area is equal to [printableRect](printablerect.md) minus [headerHeight](headerheight.md) and [footerHeight](footerheight.md).

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Override this method to draw the content of the specified page.

The system configures this method for drawing to the current graphics context according to [UIGraphicsGetCurrentContext](../uigraphicsgetcurrentcontext%28%29.md).

## See Also

### Drawing a page

- [drawPageAtIndex:inRect:](drawpage%28at_in_%29.md): Draws a page of content for the printer.
- [drawHeaderForPageAtIndex:inRect:](drawheaderforpage%28at_in_%29.md): Draws the header of a page.
- [drawPrintFormatter:forPageAtIndex:](drawprintformatter%28__forpageat_%29.md): Performs custom drawing in addition to the specified print formatter’s drawing for a page.
- [drawFooterForPageAtIndex:inRect:](drawfooterforpage%28at_in_%29.md): Draws the footer of a page.
