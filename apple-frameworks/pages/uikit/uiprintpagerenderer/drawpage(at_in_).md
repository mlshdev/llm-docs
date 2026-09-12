> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpagerenderer/drawpage(at:in:)](https://developer.apple.com/documentation/uikit/uiprintpagerenderer/drawpage(at:in:))

# drawPage(at:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Draws a page of content for the printer.

## Declaration

```swift
func drawPage(at pageIndex: Int, in printableRect: CGRect)
```

## Parameters

- `pageIndex`: The index of the page to draw.
- `printableRect`: The rectangle in which to draw printable content.

<a id="Discussion"></a>

## Discussion

The default implementation of this method calls, in sequence, [drawHeaderForPage(at:in:)](drawheaderforpage%28at_in_%29.md), [drawContentForPage(at:in:)](drawcontentforpage%28at_in_%29.md), [drawPrintFormatter(\_:forPageAt:)](drawprintformatter%28__forpageat_%29.md), and [drawFooterForPage(at:in:)](drawfooterforpage%28at_in_%29.md). Override this method to draw the specified page of content for the printer.

The system configures this method for drawing to the current graphics context according to [UIGraphicsGetCurrentContext()](../uigraphicsgetcurrentcontext%28%29.md).

## See Also

### Drawing a page

- [drawHeaderForPage(at:in:)](drawheaderforpage%28at_in_%29.md): Draws the header of a page.
- [drawContentForPage(at:in:)](drawcontentforpage%28at_in_%29.md): Draws the content of a page.
- [drawPrintFormatter(\_:forPageAt:)](drawprintformatter%28__forpageat_%29.md): Performs custom drawing in addition to the specified print formatter’s drawing for a page.
- [drawFooterForPage(at:in:)](drawfooterforpage%28at_in_%29.md): Draws the footer of a page.

# drawPageAtIndex:inRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Draws a page of content for the printer.

## Declaration

```objectivec
- (void) drawPageAtIndex:(NSInteger) pageIndex inRect:(CGRect) printableRect;
```

## Parameters

- `pageIndex`: The index of the page to draw.
- `printableRect`: The rectangle in which to draw printable content.

<a id="Discussion"></a>

## Discussion

The default implementation of this method calls, in sequence, [drawHeaderForPageAtIndex:inRect:](drawheaderforpage%28at_in_%29.md), [drawContentForPageAtIndex:inRect:](drawcontentforpage%28at_in_%29.md), [drawPrintFormatter:forPageAtIndex:](drawprintformatter%28__forpageat_%29.md), and [drawFooterForPageAtIndex:inRect:](drawfooterforpage%28at_in_%29.md). Override this method to draw the specified page of content for the printer.

The system configures this method for drawing to the current graphics context according to [UIGraphicsGetCurrentContext](../uigraphicsgetcurrentcontext%28%29.md).

## See Also

### Drawing a page

- [drawHeaderForPageAtIndex:inRect:](drawheaderforpage%28at_in_%29.md): Draws the header of a page.
- [drawContentForPageAtIndex:inRect:](drawcontentforpage%28at_in_%29.md): Draws the content of a page.
- [drawPrintFormatter:forPageAtIndex:](drawprintformatter%28__forpageat_%29.md): Performs custom drawing in addition to the specified print formatter’s drawing for a page.
- [drawFooterForPageAtIndex:inRect:](drawfooterforpage%28at_in_%29.md): Draws the footer of a page.
