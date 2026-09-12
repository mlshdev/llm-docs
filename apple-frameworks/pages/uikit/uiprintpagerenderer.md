> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpagerenderer](https://developer.apple.com/documentation/uikit/uiprintpagerenderer)

# UIPrintPageRenderer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that draws pages of content to print, with or without the assistance of print formatters.

## Declaration

```swift
class UIPrintPageRenderer
```

<a id="overview"></a>

## Overview

A page renderer is an instance of a custom subclass of [UIPrintPageRenderer](uiprintpagerenderer.md). When you compose a print job using the shared instance of [UIPrintInteractionController](uiprintinteractioncontroller.md), you assign the page renderer to the [printPageRenderer](uiprintinteractioncontroller/printpagerenderer.md) property of that instance. The subclass typically overrides one or more of the five `draw...` methods.

The [drawPage(at:in:)](uiprintpagerenderer/drawpage%28at_in_%29.md) by default calls each of the other draw methods, in the order listed below. Your app can override it if you want to have complete control over what to draw for printing.

- Override [drawHeaderForPage(at:in:)](uiprintpagerenderer/drawheaderforpage%28at_in_%29.md) to draw content in the header.
- Override [drawContentForPage(at:in:)](uiprintpagerenderer/drawcontentforpage%28at_in_%29.md) to draw the main content of the print job in the area between the header and the footer.
- Override [drawPrintFormatter(\_:forPageAt:)](uiprintpagerenderer/drawprintformatter%28__forpageat_%29.md) to intermix custom drawing with the drawing that an associated print formatter performs. The system calls this method for each print formatter associated with a particular page.
- Override [drawFooterForPage(at:in:)](uiprintpagerenderer/drawfooterforpage%28at_in_%29.md) to draw content in the footer.

[UIPrintPageRenderer](uiprintpagerenderer.md) usually requires you to specify the number of pages of printable content by overriding [numberOfPages](uiprintpagerenderer/numberofpages.md). It also allows you to specify the heights of page headers and footers.

You may assign one or more print formatters — [UIPrintFormatter](uiprintformatter.md) objects that can lay out printable content of a certain kind — to specific page ranges of the content. For example, if your printable content is partially HTML, you may assign an instance of the [UIMarkupTextPrintFormatter](uimarkuptextprintformatter.md) object to the starting page of HTML content. You assign a print formatter using the [addPrintFormatter(\_:startingAtPageAt:)](uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md) method and you can get the print formatters for a particular page by calling [printFormattersForPage(at:)](uiprintpagerenderer/printformattersforpage%28at_%29.md).

## Topics

### Accessing information about the print job

- [numberOfPages](uiprintpagerenderer/numberofpages.md): The number of pages to render.
- [paperRect](uiprintpagerenderer/paperrect.md): The size of the paper for printing.
- [printableRect](uiprintpagerenderer/printablerect.md): The area in which printing can occur.

### Specifying header and footer heights

- [headerHeight](uiprintpagerenderer/headerheight.md): The height of the page header.
- [footerHeight](uiprintpagerenderer/footerheight.md): The height of the page footer.

### Managing print formatters

- [addPrintFormatter(\_:startingAtPageAt:)](uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md): Adds a print formatter to the page renderer starting at the specified page.
- [printFormattersForPage(at:)](uiprintpagerenderer/printformattersforpage%28at_%29.md): Returns the print formatters for a specified page.
- [printFormatters](uiprintpagerenderer/printformatters.md): The print formatters for the page renderer.

### Preparing for drawing

- [prepare(forDrawingPages:)](uiprintpagerenderer/prepare%28fordrawingpages_%29.md): Prepares the renderer for drawing a range of pages.

### Drawing a page

- [drawPage(at:in:)](uiprintpagerenderer/drawpage%28at_in_%29.md): Draws a page of content for the printer.
- [drawHeaderForPage(at:in:)](uiprintpagerenderer/drawheaderforpage%28at_in_%29.md): Draws the header of a page.
- [drawContentForPage(at:in:)](uiprintpagerenderer/drawcontentforpage%28at_in_%29.md): Draws the content of a page.
- [drawPrintFormatter(\_:forPageAt:)](uiprintpagerenderer/drawprintformatter%28__forpageat_%29.md): Performs custom drawing in addition to the specified print formatter’s drawing for a page.
- [drawFooterForPage(at:in:)](uiprintpagerenderer/drawfooterforpage%28at_in_%29.md): Draws the footer of a page.

### Managing the rendering quality

- [currentRenderingQuality(forRequested:)](uiprintpagerenderer/currentrenderingquality%28forrequested_%29.md): Determines the actual print-rendering quality according to the requested rendering quality.
- [UIPrintRenderingQuality](uiprintrenderingquality.md): Constants that represent the rendering quality for a print operation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Renderer

- [Building and improving your app with Mac Catalyst](building-and-improving-your-app-with-mac-catalyst.md): Improve your iPadOS app with Mac Catalyst by supporting native controls, multiple windows, sharing, printing, menus and keyboard shortcuts.

# UIPrintPageRenderer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that draws pages of content to print, with or without the assistance of print formatters.

## Declaration

```objectivec
@interface UIPrintPageRenderer : NSObject
```

<a id="overview"></a>

## Overview

A page renderer is an instance of a custom subclass of [UIPrintPageRenderer](uiprintpagerenderer.md). When you compose a print job using the shared instance of [UIPrintInteractionController](uiprintinteractioncontroller.md), you assign the page renderer to the [printPageRenderer](uiprintinteractioncontroller/printpagerenderer.md) property of that instance. The subclass typically overrides one or more of the five `draw...` methods.

The [drawPageAtIndex:inRect:](uiprintpagerenderer/drawpage%28at_in_%29.md) by default calls each of the other draw methods, in the order listed below. Your app can override it if you want to have complete control over what to draw for printing.

- Override [drawHeaderForPageAtIndex:inRect:](uiprintpagerenderer/drawheaderforpage%28at_in_%29.md) to draw content in the header.
- Override [drawContentForPageAtIndex:inRect:](uiprintpagerenderer/drawcontentforpage%28at_in_%29.md) to draw the main content of the print job in the area between the header and the footer.
- Override [drawPrintFormatter:forPageAtIndex:](uiprintpagerenderer/drawprintformatter%28__forpageat_%29.md) to intermix custom drawing with the drawing that an associated print formatter performs. The system calls this method for each print formatter associated with a particular page.
- Override [drawFooterForPageAtIndex:inRect:](uiprintpagerenderer/drawfooterforpage%28at_in_%29.md) to draw content in the footer.

[UIPrintPageRenderer](uiprintpagerenderer.md) usually requires you to specify the number of pages of printable content by overriding [numberOfPages](uiprintpagerenderer/numberofpages.md). It also allows you to specify the heights of page headers and footers.

You may assign one or more print formatters — [UIPrintFormatter](uiprintformatter.md) objects that can lay out printable content of a certain kind — to specific page ranges of the content. For example, if your printable content is partially HTML, you may assign an instance of the [UIMarkupTextPrintFormatter](uimarkuptextprintformatter.md) object to the starting page of HTML content. You assign a print formatter using the [addPrintFormatter:startingAtPageAtIndex:](uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md) method and you can get the print formatters for a particular page by calling [printFormattersForPageAtIndex:](uiprintpagerenderer/printformattersforpage%28at_%29.md).

## Topics

### Accessing information about the print job

- [numberOfPages](uiprintpagerenderer/numberofpages.md): The number of pages to render.
- [paperRect](uiprintpagerenderer/paperrect.md): The size of the paper for printing.
- [printableRect](uiprintpagerenderer/printablerect.md): The area in which printing can occur.

### Specifying header and footer heights

- [headerHeight](uiprintpagerenderer/headerheight.md): The height of the page header.
- [footerHeight](uiprintpagerenderer/footerheight.md): The height of the page footer.

### Managing print formatters

- [addPrintFormatter:startingAtPageAtIndex:](uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md): Adds a print formatter to the page renderer starting at the specified page.
- [printFormattersForPageAtIndex:](uiprintpagerenderer/printformattersforpage%28at_%29.md): Returns the print formatters for a specified page.
- [printFormatters](uiprintpagerenderer/printformatters.md): The print formatters for the page renderer.

### Preparing for drawing

- [prepareForDrawingPages:](uiprintpagerenderer/prepare%28fordrawingpages_%29.md): Prepares the renderer for drawing a range of pages.

### Drawing a page

- [drawPageAtIndex:inRect:](uiprintpagerenderer/drawpage%28at_in_%29.md): Draws a page of content for the printer.
- [drawHeaderForPageAtIndex:inRect:](uiprintpagerenderer/drawheaderforpage%28at_in_%29.md): Draws the header of a page.
- [drawContentForPageAtIndex:inRect:](uiprintpagerenderer/drawcontentforpage%28at_in_%29.md): Draws the content of a page.
- [drawPrintFormatter:forPageAtIndex:](uiprintpagerenderer/drawprintformatter%28__forpageat_%29.md): Performs custom drawing in addition to the specified print formatter’s drawing for a page.
- [drawFooterForPageAtIndex:inRect:](uiprintpagerenderer/drawfooterforpage%28at_in_%29.md): Draws the footer of a page.

### Managing the rendering quality

- [currentRenderingQualityForRequestedRenderingQuality:](uiprintpagerenderer/currentrenderingquality%28forrequested_%29.md): Determines the actual print-rendering quality according to the requested rendering quality.
- [UIPrintRenderingQuality](uiprintrenderingquality.md): Constants that represent the rendering quality for a print operation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Renderer

- [Building and improving your app with Mac Catalyst](building-and-improving-your-app-with-mac-catalyst.md): Improve your iPadOS app with Mac Catalyst by supporting native controls, multiple windows, sharing, printing, menus and keyboard shortcuts.
