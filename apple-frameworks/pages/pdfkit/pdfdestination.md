> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdestination](https://developer.apple.com/documentation/pdfkit/pdfdestination)

# PDFDestination (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A `PDFDestination` object describes a point on a PDF page.

## Declaration

```swift
class PDFDestination
```

<a id="overview"></a>

## Overview

In typical usage, you do not initialize `PDFDestination` objects but rather get them as either attributes of [PDFAnnotationLink](pdfannotationlink.md) or [PDFOutline](pdfoutline.md) objects, or in response to the `PDFView` method [currentDestination](pdfview/currentdestination.md).

## Topics

### Initializing a Destination

- [init(page:at:)](pdfdestination/init%28page_at_%29.md): Initializes the destination.

### Getting Pages and Points

- [page](pdfdestination/page.md): Returns the page that the destination refers to.
- [point](pdfdestination/point.md): Returns the point, in page space, that the destination refers to.
- [kPDFDestinationUnspecifiedValue](kpdfdestinationunspecifiedvalue.md)

### Getting a Relative Location

- [compare(\_:)](pdfdestination/compare%28__%29.md): Returns a comparison result that indicates the location of the destination in the document, relative to the current position.

### Instance Properties

- [zoom](pdfdestination/zoom.md)

### Initializers

- [init(page:atPoint:)](pdfdestination/init%28page_atpoint_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing Information About an Annotation

- [page](pdfannotation/page.md): Returns the page that the annotation is associated with.
- [modificationDate](pdfannotation/modificationdate.md): Returns the modification date of the annotation.
- [userName](pdfannotation/username.md): Returns the name of the user who created the annotation.
- [type](pdfannotation/type.md): Returns the type of the annotation.
- [action](pdfannotation/action.md): An object that represents an action for a PDF element, such as a link annotation.
- [PDFAction](pdfaction.md): An action that is performed when, for example, a PDF annotation is activated or an outline item is clicked.

# PDFDestination (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A `PDFDestination` object describes a point on a PDF page.

## Declaration

```objectivec
@interface PDFDestination : NSObject
```

<a id="overview"></a>

## Overview

In typical usage, you do not initialize `PDFDestination` objects but rather get them as either attributes of [PDFAnnotationLink](pdfannotationlink.md) or [PDFOutline](pdfoutline.md) objects, or in response to the `PDFView` method [currentDestination](pdfview/currentdestination.md).

## Topics

### Initializing a Destination

- [initWithPage:atPoint:](pdfdestination/init%28page_at_%29.md): Initializes the destination.

### Getting Pages and Points

- [page](pdfdestination/page.md): Returns the page that the destination refers to.
- [point](pdfdestination/point.md): Returns the point, in page space, that the destination refers to.
- [kPDFDestinationUnspecifiedValue](kpdfdestinationunspecifiedvalue.md)

### Getting a Relative Location

- [compare:](pdfdestination/compare%28__%29.md): Returns a comparison result that indicates the location of the destination in the document, relative to the current position.

### Instance Properties

- [zoom](pdfdestination/zoom.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Accessing Information About an Annotation

- [page](pdfannotation/page.md): Returns the page that the annotation is associated with.
- [modificationDate](pdfannotation/modificationdate.md): Returns the modification date of the annotation.
- [userName](pdfannotation/username.md): Returns the name of the user who created the annotation.
- [type](pdfannotation/type.md): Returns the type of the annotation.
- [action](pdfannotation/action.md): An object that represents an action for a PDF element, such as a link annotation.
- [PDFAction](pdfaction.md): An action that is performed when, for example, a PDF annotation is activated or an outline item is clicked.
