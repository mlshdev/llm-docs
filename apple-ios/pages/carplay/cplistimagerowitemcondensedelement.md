> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemcondensedelement

# CPListImageRowItemCondensedElement (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A row element that displays an image and text in a vertically condensed style.

## Declaration

```swift
@MainActor class CPListImageRowItemCondensedElement
```

<a id="overview"></a>

## Overview

The `CPListImageRowItemCondensedElement ` class defines an element you add to a row in a list template. Use this class in conjunction with the [CPListImageRowItem](cplistimagerowitem.md) type to include more content in each row of your list. This element type displays a required image, a title string, and an optional subtitle in a vertically compressed layout on a system-provided background.

When building a list interface, create instances of this class and use them to populate your [CPListImageRowItem](cplistimagerowitem.md) type. To handle row-related interactions with elements in a row, configure the [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md) property of the row itself.

## Topics

### Creating a condensed element

- [init(image:imageShape:title:subtitle:accessorySymbolName:)](cplistimagerowitemcondensedelement/init%28image_imageshape_title_subtitle_accessorysymbolname_%29.md): Creates a condensed row element with the specified image, text, and attributes.

### Getting the element’s content

- [title](cplistimagerowitemcondensedelement/title.md): The primary text for the element.
- [subtitle](cplistimagerowitemcondensedelement/subtitle.md): The secondary text for the element.
- [accessorySymbolName](cplistimagerowitemcondensedelement/accessorysymbolname.md): The name of an image to display at the trailing edge of the element.

### Getting the element’s shape

- [imageShape](cplistimagerowitemcondensedelement/imageshape.md): The shape to apply to the current element’s image.
- [CPListImageRowItemCondensedElement.Shape](cplistimagerowitemcondensedelement/shape.md): Shapes you can apply to an element’s image.

## Relationships

### Inherits From

- [CPListImageRowItemElement](cplistimagerowitemelement.md)

### Conforms To

- [CPPlayableItem](cpplayableitem.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Row elements

- [CPListImageRowItemRowElement](cplistimagerowitemrowelement.md): A row element that displays an image, title, and subtitle.
- [CPListImageRowItemCardElement](cplistimagerowitemcardelement.md): A row element that displays an image and text on a card-style background.
- [CPListImageRowItemGridElement](cplistimagerowitemgridelement.md): A row element that displays an image.
- [CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md): A row element that displays an image with a custom cutout shape and a title.

# CPListImageRowItemCondensedElement (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A row element that displays an image and text in a vertically condensed style.

## Declaration

```objectivec
@interface CPListImageRowItemCondensedElement : CPListImageRowItemElement
```

<a id="overview"></a>

## Overview

The `CPListImageRowItemCondensedElement ` class defines an element you add to a row in a list template. Use this class in conjunction with the [CPListImageRowItem](cplistimagerowitem.md) type to include more content in each row of your list. This element type displays a required image, a title string, and an optional subtitle in a vertically compressed layout on a system-provided background.

When building a list interface, create instances of this class and use them to populate your [CPListImageRowItem](cplistimagerowitem.md) type. To handle row-related interactions with elements in a row, configure the [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md) property of the row itself.

## Topics

### Creating a condensed element

- [initWithImage:imageShape:title:subtitle:accessorySymbolName:](cplistimagerowitemcondensedelement/init%28image_imageshape_title_subtitle_accessorysymbolname_%29.md): Creates a condensed row element with the specified image, text, and attributes.

### Getting the element’s content

- [title](cplistimagerowitemcondensedelement/title.md): The primary text for the element.
- [subtitle](cplistimagerowitemcondensedelement/subtitle.md): The secondary text for the element.
- [accessorySymbolName](cplistimagerowitemcondensedelement/accessorysymbolname.md): The name of an image to display at the trailing edge of the element.

### Getting the element’s shape

- [imageShape](cplistimagerowitemcondensedelement/imageshape.md): The shape to apply to the current element’s image.
- [CPListImageRowItemCondensedElementShape](cplistimagerowitemcondensedelement/shape.md): Shapes you can apply to an element’s image.

## Relationships

### Inherits From

- [CPListImageRowItemElement](cplistimagerowitemelement.md)

## See Also

### Row elements

- [CPListImageRowItemRowElement](cplistimagerowitemrowelement.md): A row element that displays an image, title, and subtitle.
- [CPListImageRowItemCardElement](cplistimagerowitemcardelement.md): A row element that displays an image and text on a card-style background.
- [CPListImageRowItemGridElement](cplistimagerowitemgridelement.md): A row element that displays an image.
- [CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md): A row element that displays an image with a custom cutout shape and a title.
