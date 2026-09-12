> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfareaofinterest](https://developer.apple.com/documentation/pdfkit/pdfareaofinterest)

# PDFAreaOfInterest (Swift)

**Framework:** PDFKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The mouse position over PDF view areas.

## Declaration

```swift
struct PDFAreaOfInterest
```

<a id="overview"></a>

## Overview

These constants are components of a bit field and may be combined arbitrarily.

## Topics

### Constants

- [pageArea](pdfareaofinterest/pagearea.md): The mouse is over a page.
- [textArea](pdfareaofinterest/textarea.md): The mouse is over text.
- [annotationArea](pdfareaofinterest/annotationarea.md): The mouse is over an annotation.
- [linkArea](pdfareaofinterest/linkarea.md): The mouse is over a link.
- [controlArea](pdfareaofinterest/controlarea.md): The mouse is over a control.
- [textFieldArea](pdfareaofinterest/textfieldarea.md): The mouse is over a text field.
- [iconArea](pdfareaofinterest/iconarea.md): The mouse is over an icon.
- [popupArea](pdfareaofinterest/popuparea.md): The mouse is over a popup menu.
- [imageArea](pdfareaofinterest/imagearea.md): The mouse is over an image.

### Initializers

- [init(rawValue:)](pdfareaofinterest/init%28rawvalue_%29.md)

### Type Properties

- [anyArea](pdfareaofinterest/anyarea.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Working with Mouse Position and Events

- [areaOfInterest(forMouse:)](pdfview/areaofinterest%28formouse_%29.md): Returns the type of area the mouse cursor is over.
- [areaOfInterest(for:)](pdfview/areaofinterest%28for_%29.md): Returns the type of area for a specific cursor location point.
- [setCursorFor(\_:)](pdfview/setcursorfor%28__%29.md): Sets the type of mouse cursor according to the type of area the mouse cursor is over.
- [perform(\_:)](pdfview/perform%28__%29.md): Performs the specified action.
- [Drag Operations](drag-operations.md): Define drag operations allowed for a view.

# PDFAreaOfInterest (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The mouse position over PDF view areas.

## Declaration

```objectivec
enum PDFAreaOfInterest : NSInteger;
```

<a id="overview"></a>

## Overview

These constants are components of a bit field and may be combined arbitrarily.

## Topics

### Constants

- [kPDFNoArea](pdfareaofinterest/kpdfnoarea.md): The mouse is over an undefined area.
- [kPDFPageArea](pdfareaofinterest/pagearea.md): The mouse is over a page.
- [kPDFTextArea](pdfareaofinterest/textarea.md): The mouse is over text.
- [kPDFAnnotationArea](pdfareaofinterest/annotationarea.md): The mouse is over an annotation.
- [kPDFLinkArea](pdfareaofinterest/linkarea.md): The mouse is over a link.
- [kPDFControlArea](pdfareaofinterest/controlarea.md): The mouse is over a control.
- [kPDFTextFieldArea](pdfareaofinterest/textfieldarea.md): The mouse is over a text field.
- [kPDFIconArea](pdfareaofinterest/iconarea.md): The mouse is over an icon.
- [kPDFPopupArea](pdfareaofinterest/popuparea.md): The mouse is over a popup menu.
- [kPDFImageArea](pdfareaofinterest/imagearea.md): The mouse is over an image.

### Type Properties

- [kPDFAnyArea](pdfareaofinterest/anyarea.md)

## See Also

### Working with Mouse Position and Events

- [areaOfInterestForMouse:](pdfview/areaofinterest%28formouse_%29.md): Returns the type of area the mouse cursor is over.
- [areaOfInterestForPoint:](pdfview/areaofinterest%28for_%29.md): Returns the type of area for a specific cursor location point.
- [setCursorForAreaOfInterest:](pdfview/setcursorfor%28__%29.md): Sets the type of mouse cursor according to the type of area the mouse cursor is over.
- [performAction:](pdfview/perform%28__%29.md): Performs the specified action.
- [Drag Operations](drag-operations.md): Define drag operations allowed for a view.
