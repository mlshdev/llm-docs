> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemimagegridelement

# CPListImageRowItemImageGridElement (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A row element that displays an image with a custom cutout shape and a title.

## Declaration

```swift
@MainActor class CPListImageRowItemImageGridElement
```

<a id="overview"></a>

## Overview

The `CPListImageRowItemImageGridElement ` class defines an element you add to a row in a list template. Use this class in conjunction with the [CPListImageRowItem](cplistimagerowitem.md) type to include more content in each row of your list. This element type displays an image for the specified item with a title string below the image. You can also include an SF Symbol or other image to display next to the title. For example, you might display the “heart.fill” SF Symbol next to someone’s favorite items.

When building a list interface, create instances of this class and use them to populate your [CPListImageRowItem](cplistimagerowitem.md) type. To handle row-related interactions with elements in a row, configure the [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md) property of the row itself.

## Topics

### Creating a grid element

- [init(image:imageShape:title:accessorySymbolName:)](cplistimagerowitemimagegridelement/init%28image_imageshape_title_accessorysymbolname_%29.md): Creates a row element with the specified image, text, and attributes.

### Getting the element’s content

- [title](cplistimagerowitemimagegridelement/title.md): The primary text for the element.
- [accessorySymbolName](cplistimagerowitemimagegridelement/accessorysymbolname.md): The name of an image to display next to the element’s title.

### Getting the element’s shape

- [imageShape](cplistimagerowitemimagegridelement/imageshape.md): The shape to apply to the current element’s image.
- [CPListImageRowItemImageGridElement.Shape](cplistimagerowitemimagegridelement/shape.md): Shapes you can apply to an element’s image.

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
- [CPListImageRowItemCondensedElement](cplistimagerowitemcondensedelement.md): A row element that displays an image and text in a vertically condensed style.
- [CPListImageRowItemGridElement](cplistimagerowitemgridelement.md): A row element that displays an image.

# CPListImageRowItemImageGridElement (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A row element that displays an image with a custom cutout shape and a title.

## Declaration

```objectivec
@interface CPListImageRowItemImageGridElement : CPListImageRowItemElement
```

<a id="overview"></a>

## Overview

The `CPListImageRowItemImageGridElement ` class defines an element you add to a row in a list template. Use this class in conjunction with the [CPListImageRowItem](cplistimagerowitem.md) type to include more content in each row of your list. This element type displays an image for the specified item with a title string below the image. You can also include an SF Symbol or other image to display next to the title. For example, you might display the “heart.fill” SF Symbol next to someone’s favorite items.

When building a list interface, create instances of this class and use them to populate your [CPListImageRowItem](cplistimagerowitem.md) type. To handle row-related interactions with elements in a row, configure the [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md) property of the row itself.

## Topics

### Creating a grid element

- [initWithImage:imageShape:title:accessorySymbolName:](cplistimagerowitemimagegridelement/init%28image_imageshape_title_accessorysymbolname_%29.md): Creates a row element with the specified image, text, and attributes.

### Getting the element’s content

- [title](cplistimagerowitemimagegridelement/title.md): The primary text for the element.
- [accessorySymbolName](cplistimagerowitemimagegridelement/accessorysymbolname.md): The name of an image to display next to the element’s title.

### Getting the element’s shape

- [imageShape](cplistimagerowitemimagegridelement/imageshape.md): The shape to apply to the current element’s image.
- [CPListImageRowItemImageGridElementShape](cplistimagerowitemimagegridelement/shape.md): Shapes you can apply to an element’s image.

## Relationships

### Inherits From

- [CPListImageRowItemElement](cplistimagerowitemelement.md)

## See Also

### Row elements

- [CPListImageRowItemRowElement](cplistimagerowitemrowelement.md): A row element that displays an image, title, and subtitle.
- [CPListImageRowItemCardElement](cplistimagerowitemcardelement.md): A row element that displays an image and text on a card-style background.
- [CPListImageRowItemCondensedElement](cplistimagerowitemcondensedelement.md): A row element that displays an image and text in a vertically condensed style.
- [CPListImageRowItemGridElement](cplistimagerowitemgridelement.md): A row element that displays an image.
