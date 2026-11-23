> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemrowelement

# CPListImageRowItemRowElement (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A row element that displays an image, title, and subtitle.

## Declaration

```swift
@MainActor class CPListImageRowItemRowElement
```

<a id="overview"></a>

## Overview

The `CPListImageRowItemRowElement` class defines an element you add to a row in a list template. Use this class in conjunction with the [CPListImageRowItem](cplistimagerowitem.md) type to include more content in each row of your list. This element type displays a required image and an optional title and subtitle on top of the standard background. Provide the text values when possible to add meaningful information. For example, an element displaying the artwork for an album might display the album’s name and band information in the text fields.

When building a list interface, create instances of this class and use them to populate your [CPListImageRowItem](cplistimagerowitem.md) type. To handle row-related interactions with elements in a row, configure the [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md) property of the row itself.

## Topics

### Creating a row element

- [init(image:title:subtitle:)](cplistimagerowitemrowelement/init%28image_title_subtitle_%29.md): Creates a row element with the specified image and optional text.

### Getting the element’s content

- [title](cplistimagerowitemrowelement/title.md): The primary text for the element.
- [subtitle](cplistimagerowitemrowelement/subtitle.md): The secondary text for the element.

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

- [CPListImageRowItemCardElement](cplistimagerowitemcardelement.md): A row element that displays an image and text on a card-style background.
- [CPListImageRowItemCondensedElement](cplistimagerowitemcondensedelement.md): A row element that displays an image and text in a vertically condensed style.
- [CPListImageRowItemGridElement](cplistimagerowitemgridelement.md): A row element that displays an image.
- [CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md): A row element that displays an image with a custom cutout shape and a title.

# CPListImageRowItemRowElement (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A row element that displays an image, title, and subtitle.

## Declaration

```objectivec
@interface CPListImageRowItemRowElement : CPListImageRowItemElement
```

<a id="overview"></a>

## Overview

The `CPListImageRowItemRowElement` class defines an element you add to a row in a list template. Use this class in conjunction with the [CPListImageRowItem](cplistimagerowitem.md) type to include more content in each row of your list. This element type displays a required image and an optional title and subtitle on top of the standard background. Provide the text values when possible to add meaningful information. For example, an element displaying the artwork for an album might display the album’s name and band information in the text fields.

When building a list interface, create instances of this class and use them to populate your [CPListImageRowItem](cplistimagerowitem.md) type. To handle row-related interactions with elements in a row, configure the [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md) property of the row itself.

## Topics

### Creating a row element

- [initWithImage:title:subtitle:](cplistimagerowitemrowelement/init%28image_title_subtitle_%29.md): Creates a row element with the specified image and optional text.

### Getting the element’s content

- [title](cplistimagerowitemrowelement/title.md): The primary text for the element.
- [subtitle](cplistimagerowitemrowelement/subtitle.md): The secondary text for the element.

## Relationships

### Inherits From

- [CPListImageRowItemElement](cplistimagerowitemelement.md)

## See Also

### Row elements

- [CPListImageRowItemCardElement](cplistimagerowitemcardelement.md): A row element that displays an image and text on a card-style background.
- [CPListImageRowItemCondensedElement](cplistimagerowitemcondensedelement.md): A row element that displays an image and text in a vertically condensed style.
- [CPListImageRowItemGridElement](cplistimagerowitemgridelement.md): A row element that displays an image.
- [CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md): A row element that displays an image with a custom cutout shape and a title.
