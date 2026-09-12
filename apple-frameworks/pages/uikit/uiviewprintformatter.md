> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewprintformatter](https://developer.apple.com/documentation/uikit/uiviewprintformatter)

# UIViewPrintFormatter (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that lays out the drawn content of a view for printing.

## Declaration

```swift
class UIViewPrintFormatter
```

<a id="overview"></a>

## Overview

Instances of three system classes offer usable view print formatters to applications: [UIWebView](uiwebview.md) and [UITextView](uitextview.md) of the UIKit framework, and [MKMapView](../mapkit/mkmapview.md) of the MapKit framework. To obtain a view print formatter for a print job, call the [UIView](uiview.md) method [viewPrintFormatter()](uiview/viewprintformatter%28%29.md) and initialize the print formatter’s inherited layout properties.

Add the print formatter to the print job in one of two ways:

- If a single print formatter is being used for the print job (with no additional drawing), assign it to the [printFormatter](uiprintinteractioncontroller/printformatter.md) property of the [UIPrintInteractionController](uiprintinteractioncontroller.md) shared instance. The inherited [startPage](uiprintformatter/startpage.md) property identifies the beginning page of content with which the formatter is associated.
- If you are using multiple formatters along with a page renderer, associate each print formatter with a starting page of the printed content. You often take this approach when you want to add content such as headers and footers to what the formatters provide. You have two ways of associating a print formatter with a  [UIPrintPageRenderer](uiprintpagerenderer.md) object:
- You can add print formatters to the [printFormatters](uiprintpagerenderer/printformatters.md)  property of the [UIPrintPageRenderer](uiprintpagerenderer.md) object; the [startPage](uiprintformatter/startpage.md) property of the print formatter specifies the starting page
- You can add print formatters by calling [addPrintFormatter(\_:startingAtPageAt:)](uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md) for each print formatter; the second parameter of this method specifies the starting page (and overrides any [startPage](uiprintformatter/startpage.md) value).

View print formatters typically implement the [UIView](uiview.md) method [draw(\_:for:)](uiview/draw%28__for_%29.md) to draw content in a way that is suitable for printing, If they don’t implement this method, their [draw(\_:)](uiview/draw%28__%29.md) method is called instead.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

Subclassing `UIViewPrintFormatter` to print the contents of a view is not recommended. To print the contents of a custom view, you should instead draw the view’s contents for printing using a custom [UIPrintPageRenderer](uiprintpagerenderer.md) object.

## Topics

### Accessing the view

- [view](uiviewprintformatter/view.md): The view from which the view print formatter was derived.

## Relationships

### Inherits From

- [UIPrintFormatter](uiprintformatter.md)

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

- [UIPrintFormatter](uiprintformatter.md): An abstract base class for print formatters, which are objects that lay out custom printable content that can cross page boundaries.
- [UISimpleTextPrintFormatter](uisimpletextprintformatter.md): An object that lays out plain text for printing, possibly over multiple pages.
- [UIMarkupTextPrintFormatter](uimarkuptextprintformatter.md): An object that lays out HTML text for a multipage print job.

# UIViewPrintFormatter (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that lays out the drawn content of a view for printing.

## Declaration

```objectivec
@interface UIViewPrintFormatter : UIPrintFormatter
```

<a id="overview"></a>

## Overview

Instances of three system classes offer usable view print formatters to applications: [UIWebView](uiwebview.md) and [UITextView](uitextview.md) of the UIKit framework, and [MKMapView](../mapkit/mkmapview.md) of the MapKit framework. To obtain a view print formatter for a print job, call the [UIView](uiview.md) method [viewPrintFormatter](uiview/viewprintformatter%28%29.md) and initialize the print formatter’s inherited layout properties.

Add the print formatter to the print job in one of two ways:

- If a single print formatter is being used for the print job (with no additional drawing), assign it to the [printFormatter](uiprintinteractioncontroller/printformatter.md) property of the [UIPrintInteractionController](uiprintinteractioncontroller.md) shared instance. The inherited [startPage](uiprintformatter/startpage.md) property identifies the beginning page of content with which the formatter is associated.
- If you are using multiple formatters along with a page renderer, associate each print formatter with a starting page of the printed content. You often take this approach when you want to add content such as headers and footers to what the formatters provide. You have two ways of associating a print formatter with a  [UIPrintPageRenderer](uiprintpagerenderer.md) object:
- You can add print formatters to the [printFormatters](uiprintpagerenderer/printformatters.md)  property of the [UIPrintPageRenderer](uiprintpagerenderer.md) object; the [startPage](uiprintformatter/startpage.md) property of the print formatter specifies the starting page
- You can add print formatters by calling [addPrintFormatter:startingAtPageAtIndex:](uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md) for each print formatter; the second parameter of this method specifies the starting page (and overrides any [startPage](uiprintformatter/startpage.md) value).

View print formatters typically implement the [UIView](uiview.md) method [drawRect:forViewPrintFormatter:](uiview/draw%28__for_%29.md) to draw content in a way that is suitable for printing, If they don’t implement this method, their [drawRect:](uiview/draw%28__%29.md) method is called instead.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

Subclassing `UIViewPrintFormatter` to print the contents of a view is not recommended. To print the contents of a custom view, you should instead draw the view’s contents for printing using a custom [UIPrintPageRenderer](uiprintpagerenderer.md) object.

## Topics

### Accessing the view

- [view](uiviewprintformatter/view.md): The view from which the view print formatter was derived.

## Relationships

### Inherits From

- [UIPrintFormatter](uiprintformatter.md)

## See Also

### Formatters

- [UIPrintFormatter](uiprintformatter.md): An abstract base class for print formatters, which are objects that lay out custom printable content that can cross page boundaries.
- [UISimpleTextPrintFormatter](uisimpletextprintformatter.md): An object that lays out plain text for printing, possibly over multiple pages.
- [UIMarkupTextPrintFormatter](uimarkuptextprintformatter.md): An object that lays out HTML text for a multipage print job.
