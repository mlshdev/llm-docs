> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintformatter](https://developer.apple.com/documentation/uikit/uiprintformatter)

# UIPrintFormatter (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An abstract base class for print formatters, which are objects that lay out custom printable content that can cross page boundaries.

## Declaration

```swift
class UIPrintFormatter
```

<a id="overview"></a>

## Overview

Given a print formatter, the printing system can automate the printing of the type of content associated with the print formatter. Examples of such content could be a web view, a mix of images and text, or a long text document. The UIKit framework provides several concrete subclasses of [UIPrintFormatter](uiprintformatter.md): [UISimpleTextPrintFormatter](uisimpletextprintformatter.md), [UIMarkupTextPrintFormatter](uimarkuptextprintformatter.md), and [UIViewPrintFormatter](uiviewprintformatter.md).

You can assign a single print formatter for a print job using the [printFormatter](uiprintinteractioncontroller/printformatter.md) property of the [UIPrintInteractionController](uiprintinteractioncontroller.md) shared instance; or you can specify one or more print formatters that are associated with specific pages of a page renderer through the [addPrintFormatter(\_:startingAtPageAt:)](uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md)method of [UIPrintPageRenderer](uiprintpagerenderer.md). A page renderer is an instance of a custom subclass of [UIPrintPageRenderer](uiprintpagerenderer.md) that draws content for printing.

[UIPrintFormatter](uiprintformatter.md) publishes an interface that allows you to specify the starting page for a print job and the margins around the printed content; given that information plus the content, a print formatter computes the number of pages for the print job. The following image depicts the print-formatter properties, along with certain [UIPrintPaper](uiprintpaper.md) and [UIPrintPageRenderer](uiprintpagerenderer.md) properties, that define the layout of a multipage print job.

![Diagram that shows the layout of printed content.](https://developer.apple.com/images/com.apple.uikit/media-1965769.jpg)

Third-party subclasses of [UIPrintFormatter](uiprintformatter.md) aren’t recommended. If you have custom content to print, use a custom [UIPrintPageRenderer](uiprintpagerenderer.md) object.

## Topics

### Laying out the content

- [perPageContentInsets](uiprintformatter/perpagecontentinsets.md): The margins for each printed page.
- [maximumContentHeight](uiprintformatter/maximumcontentheight.md): The maximum height of the content area.
- [maximumContentWidth](uiprintformatter/maximumcontentwidth.md): The maximum width of the content area.
- [contentInsets](uiprintformatter/contentinsets.md): Deprecated. The distances the edges of content are inset from the printing rectangle.

### Managing pagination

- [startPage](uiprintformatter/startpage.md): The index of the first page that the print formatter lays out.
- [pageCount](uiprintformatter/pagecount.md): The number of pages to print.

### Drawing the content

- [draw(in:forPageAt:)](uiprintformatter/draw%28in_forpageat_%29.md): Draws the portion of a print formatter’s content for the specified area of the specified page.
- [rectForPage(at:)](uiprintformatter/rectforpage%28at_%29.md): Returns the area that encloses a specified page of content.

### Communicating with the page renderer

- [removeFromPrintPageRenderer()](uiprintformatter/removefromprintpagerenderer%28%29.md): Removes the print formatter from the page renderer.
- [printPageRenderer](uiprintformatter/printpagerenderer.md): Returns the page renderer for the print formatter.

### Requiring operations to take place on the main thread

- [requiresMainThread](uiprintformatter/requiresmainthread.md): A Boolean value that determines whether the system executes the print formatter’s rendering operations on the main thread.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIMarkupTextPrintFormatter](uimarkuptextprintformatter.md)
- [UISimpleTextPrintFormatter](uisimpletextprintformatter.md)
- [UIViewPrintFormatter](uiviewprintformatter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Formatters

- [UIViewPrintFormatter](uiviewprintformatter.md): An object that lays out the drawn content of a view for printing.
- [UISimpleTextPrintFormatter](uisimpletextprintformatter.md): An object that lays out plain text for printing, possibly over multiple pages.
- [UIMarkupTextPrintFormatter](uimarkuptextprintformatter.md): An object that lays out HTML text for a multipage print job.

# UIPrintFormatter (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An abstract base class for print formatters, which are objects that lay out custom printable content that can cross page boundaries.

## Declaration

```objectivec
@interface UIPrintFormatter : NSObject
```

<a id="overview"></a>

## Overview

Given a print formatter, the printing system can automate the printing of the type of content associated with the print formatter. Examples of such content could be a web view, a mix of images and text, or a long text document. The UIKit framework provides several concrete subclasses of [UIPrintFormatter](uiprintformatter.md): [UISimpleTextPrintFormatter](uisimpletextprintformatter.md), [UIMarkupTextPrintFormatter](uimarkuptextprintformatter.md), and [UIViewPrintFormatter](uiviewprintformatter.md).

You can assign a single print formatter for a print job using the [printFormatter](uiprintinteractioncontroller/printformatter.md) property of the [UIPrintInteractionController](uiprintinteractioncontroller.md) shared instance; or you can specify one or more print formatters that are associated with specific pages of a page renderer through the [addPrintFormatter:startingAtPageAtIndex:](uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md)method of [UIPrintPageRenderer](uiprintpagerenderer.md). A page renderer is an instance of a custom subclass of [UIPrintPageRenderer](uiprintpagerenderer.md) that draws content for printing.

[UIPrintFormatter](uiprintformatter.md) publishes an interface that allows you to specify the starting page for a print job and the margins around the printed content; given that information plus the content, a print formatter computes the number of pages for the print job. The following image depicts the print-formatter properties, along with certain [UIPrintPaper](uiprintpaper.md) and [UIPrintPageRenderer](uiprintpagerenderer.md) properties, that define the layout of a multipage print job.

![Diagram that shows the layout of printed content.](https://developer.apple.com/images/com.apple.uikit/media-1965769.jpg)

Third-party subclasses of [UIPrintFormatter](uiprintformatter.md) aren’t recommended. If you have custom content to print, use a custom [UIPrintPageRenderer](uiprintpagerenderer.md) object.

## Topics

### Laying out the content

- [perPageContentInsets](uiprintformatter/perpagecontentinsets.md): The margins for each printed page.
- [maximumContentHeight](uiprintformatter/maximumcontentheight.md): The maximum height of the content area.
- [maximumContentWidth](uiprintformatter/maximumcontentwidth.md): The maximum width of the content area.
- [contentInsets](uiprintformatter/contentinsets.md): Deprecated. The distances the edges of content are inset from the printing rectangle.

### Managing pagination

- [startPage](uiprintformatter/startpage.md): The index of the first page that the print formatter lays out.
- [pageCount](uiprintformatter/pagecount.md): The number of pages to print.

### Drawing the content

- [drawInRect:forPageAtIndex:](uiprintformatter/draw%28in_forpageat_%29.md): Draws the portion of a print formatter’s content for the specified area of the specified page.
- [rectForPageAtIndex:](uiprintformatter/rectforpage%28at_%29.md): Returns the area that encloses a specified page of content.

### Communicating with the page renderer

- [removeFromPrintPageRenderer](uiprintformatter/removefromprintpagerenderer%28%29.md): Removes the print formatter from the page renderer.
- [printPageRenderer](uiprintformatter/printpagerenderer.md): Returns the page renderer for the print formatter.

### Requiring operations to take place on the main thread

- [requiresMainThread](uiprintformatter/requiresmainthread.md): A Boolean value that determines whether the system executes the print formatter’s rendering operations on the main thread.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIMarkupTextPrintFormatter](uimarkuptextprintformatter.md)
- [UISimpleTextPrintFormatter](uisimpletextprintformatter.md)
- [UIViewPrintFormatter](uiviewprintformatter.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Formatters

- [UIViewPrintFormatter](uiviewprintformatter.md): An object that lays out the drawn content of a view for printing.
- [UISimpleTextPrintFormatter](uisimpletextprintformatter.md): An object that lays out plain text for printing, possibly over multiple pages.
- [UIMarkupTextPrintFormatter](uimarkuptextprintformatter.md): An object that lays out HTML text for a multipage print job.
