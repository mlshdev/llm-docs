> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisimpletextprintformatter](https://developer.apple.com/documentation/uikit/uisimpletextprintformatter)

# UISimpleTextPrintFormatter (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that lays out plain text for printing, possibly over multiple pages.

## Declaration

```swift
class UISimpleTextPrintFormatter
```

<a id="overview"></a>

## Overview

The [UISimpleTextPrintFormatter](uisimpletextprintformatter.md) class allows you to specify global font, color, and text alignment properties for the printed text. To use this print formatter for a print job, create an instance of [UISimpleTextPrintFormatter](uisimpletextprintformatter.md) initialized with the text, set the text properties and the inherited layout properties, and add the object to the print job in one of two ways:

- If a single print formatter is being used for the print job (with no additional drawing), assign it to the [printFormatter](uiprintinteractioncontroller/printformatter.md) property of the [UIPrintInteractionController](uiprintinteractioncontroller.md) shared instance. The inherited [startPage](uiprintformatter/startpage.md) property identifies the beginning page of content with which the formatter is associated.
- If you are using multiple formatters along with a page renderer, associate each print formatter with a starting page of the printed content. You often take this approach when you want to add content such as headers and footers to what the formatters provide. You have two ways of associating a print formatter with a  [UIPrintPageRenderer](uiprintpagerenderer.md) object:
- You can add print formatters to the [printFormatters](uiprintpagerenderer/printformatters.md) property of the [UIPrintPageRenderer](uiprintpagerenderer.md) object; the [startPage](uiprintformatter/startpage.md) property of the print formatter specifies the starting page.
- You can add print formatters by calling [addPrintFormatter(\_:startingAtPageAt:)](uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md) for each print formatter; the second parameter of this method specifies the starting page (and overrides any [startPage](uiprintformatter/startpage.md) value).

You can change the text at any time before drawing of the printable content begins. You cannot change the text after drawing begins.

## Topics

### Creating a simple-text print formatter

- [init(attributedText:)](uisimpletextprintformatter/init%28attributedtext_%29.md): Returns a simple-text print formatter initialized with attributed text.
- [init(text:)](uisimpletextprintformatter/init%28text_%29.md): Returns a simple-text print formatter initialized with plain text.

### Getting and setting the text

- [attributedText](uisimpletextprintformatter/attributedtext.md): A string of attributed text.
- [text](uisimpletextprintformatter/text.md): A string of plain text.

### Text attributes for printed content

- [font](uisimpletextprintformatter/font.md): The font of the printed text.
- [color](uisimpletextprintformatter/color.md): The color of the printed text.
- [textAlignment](uisimpletextprintformatter/textalignment.md): The alignment of the printed text.

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
- [UIViewPrintFormatter](uiviewprintformatter.md): An object that lays out the drawn content of a view for printing.
- [UIMarkupTextPrintFormatter](uimarkuptextprintformatter.md): An object that lays out HTML text for a multipage print job.

# UISimpleTextPrintFormatter (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that lays out plain text for printing, possibly over multiple pages.

## Declaration

```objectivec
@interface UISimpleTextPrintFormatter : UIPrintFormatter
```

<a id="overview"></a>

## Overview

The [UISimpleTextPrintFormatter](uisimpletextprintformatter.md) class allows you to specify global font, color, and text alignment properties for the printed text. To use this print formatter for a print job, create an instance of [UISimpleTextPrintFormatter](uisimpletextprintformatter.md) initialized with the text, set the text properties and the inherited layout properties, and add the object to the print job in one of two ways:

- If a single print formatter is being used for the print job (with no additional drawing), assign it to the [printFormatter](uiprintinteractioncontroller/printformatter.md) property of the [UIPrintInteractionController](uiprintinteractioncontroller.md) shared instance. The inherited [startPage](uiprintformatter/startpage.md) property identifies the beginning page of content with which the formatter is associated.
- If you are using multiple formatters along with a page renderer, associate each print formatter with a starting page of the printed content. You often take this approach when you want to add content such as headers and footers to what the formatters provide. You have two ways of associating a print formatter with a  [UIPrintPageRenderer](uiprintpagerenderer.md) object:
- You can add print formatters to the [printFormatters](uiprintpagerenderer/printformatters.md) property of the [UIPrintPageRenderer](uiprintpagerenderer.md) object; the [startPage](uiprintformatter/startpage.md) property of the print formatter specifies the starting page.
- You can add print formatters by calling [addPrintFormatter:startingAtPageAtIndex:](uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md) for each print formatter; the second parameter of this method specifies the starting page (and overrides any [startPage](uiprintformatter/startpage.md) value).

You can change the text at any time before drawing of the printable content begins. You cannot change the text after drawing begins.

## Topics

### Creating a simple-text print formatter

- [initWithAttributedText:](uisimpletextprintformatter/init%28attributedtext_%29.md): Returns a simple-text print formatter initialized with attributed text.
- [initWithText:](uisimpletextprintformatter/init%28text_%29.md): Returns a simple-text print formatter initialized with plain text.

### Getting and setting the text

- [attributedText](uisimpletextprintformatter/attributedtext.md): A string of attributed text.
- [text](uisimpletextprintformatter/text.md): A string of plain text.

### Text attributes for printed content

- [font](uisimpletextprintformatter/font.md): The font of the printed text.
- [color](uisimpletextprintformatter/color.md): The color of the printed text.
- [textAlignment](uisimpletextprintformatter/textalignment.md): The alignment of the printed text.

## Relationships

### Inherits From

- [UIPrintFormatter](uiprintformatter.md)

## See Also

### Formatters

- [UIPrintFormatter](uiprintformatter.md): An abstract base class for print formatters, which are objects that lay out custom printable content that can cross page boundaries.
- [UIViewPrintFormatter](uiviewprintformatter.md): An object that lays out the drawn content of a view for printing.
- [UIMarkupTextPrintFormatter](uimarkuptextprintformatter.md): An object that lays out HTML text for a multipage print job.
