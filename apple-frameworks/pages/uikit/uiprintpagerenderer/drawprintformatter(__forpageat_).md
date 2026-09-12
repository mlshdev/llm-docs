> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpagerenderer/drawprintformatter(_:forpageat:)](https://developer.apple.com/documentation/uikit/uiprintpagerenderer/drawprintformatter(_:forpageat:))

# drawPrintFormatter(\_:forPageAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Performs custom drawing in addition to the specified print formatter’s drawing for a page.

## Declaration

```swift
func drawPrintFormatter(_ printFormatter: UIPrintFormatter, forPageAt pageIndex: Int)
```

## Parameters

- `printFormatter`: A [UIPrintFormatter](../uiprintformatter.md) object associated with the page at `pageIndex`.
- `pageIndex`: The index of the page for `printFormatter` to draw on.

<a id="Discussion"></a>

## Discussion

The system invokes this method for each print formatter associated with the specified page. The default implementation invokes the [draw(in:forPageAt:)](../uiprintformatter/draw%28in_forpageat_%29.md) method of each [UIPrintFormatter](../uiprintformatter.md) object.

Override this method to intermix custom drawing with the formatter drawing — for example, by adding an overlay or underlay graphic. Call [draw(in:forPageAt:)](../uiprintformatter/draw%28in_forpageat_%29.md) to have the print formatter draw its portion of the page.

The system configures this method for drawing to the current graphics context according to [UIGraphicsGetCurrentContext()](../uigraphicsgetcurrentcontext%28%29.md).

## See Also

### Drawing a page

- [drawPage(at:in:)](drawpage%28at_in_%29.md): Draws a page of content for the printer.
- [drawHeaderForPage(at:in:)](drawheaderforpage%28at_in_%29.md): Draws the header of a page.
- [drawContentForPage(at:in:)](drawcontentforpage%28at_in_%29.md): Draws the content of a page.
- [drawFooterForPage(at:in:)](drawfooterforpage%28at_in_%29.md): Draws the footer of a page.

# drawPrintFormatter:forPageAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Performs custom drawing in addition to the specified print formatter’s drawing for a page.

## Declaration

```objectivec
- (void) drawPrintFormatter:(UIPrintFormatter *) printFormatter forPageAtIndex:(NSInteger) pageIndex;
```

## Parameters

- `printFormatter`: A [UIPrintFormatter](../uiprintformatter.md) object associated with the page at `pageIndex`.
- `pageIndex`: The index of the page for `printFormatter` to draw on.

<a id="Discussion"></a>

## Discussion

The system invokes this method for each print formatter associated with the specified page. The default implementation invokes the [drawInRect:forPageAtIndex:](../uiprintformatter/draw%28in_forpageat_%29.md) method of each [UIPrintFormatter](../uiprintformatter.md) object.

Override this method to intermix custom drawing with the formatter drawing — for example, by adding an overlay or underlay graphic. Call [drawInRect:forPageAtIndex:](../uiprintformatter/draw%28in_forpageat_%29.md) to have the print formatter draw its portion of the page.

The system configures this method for drawing to the current graphics context according to [UIGraphicsGetCurrentContext](../uigraphicsgetcurrentcontext%28%29.md).

## See Also

### Drawing a page

- [drawPageAtIndex:inRect:](drawpage%28at_in_%29.md): Draws a page of content for the printer.
- [drawHeaderForPageAtIndex:inRect:](drawheaderforpage%28at_in_%29.md): Draws the header of a page.
- [drawContentForPageAtIndex:inRect:](drawcontentforpage%28at_in_%29.md): Draws the content of a page.
- [drawFooterForPageAtIndex:inRect:](drawfooterforpage%28at_in_%29.md): Draws the footer of a page.
