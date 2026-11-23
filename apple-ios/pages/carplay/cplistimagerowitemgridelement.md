> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemgridelement

# CPListImageRowItemGridElement (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A row element that displays an image.

## Declaration

```swift
@MainActor class CPListImageRowItemGridElement
```

<a id="overview"></a>

## Overview

The `CPListImageRowItemGridElement ` class defines an element you add to a row in a list template. Use this class with the [CPListImageRowItem](cplistimagerowitem.md) type to include more content in each row of your list. This element type displays an image for the specified item without any additional text.

When building a list interface, create instances of this class and use them to populate your [CPListImageRowItem](cplistimagerowitem.md) type. To handle row-related interactions with elements in a row, configure the [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md) property of the row itself.

## Topics

### Creating a grid element

- [init(image:)](cplistimagerowitemgridelement/init%28image_%29.md): Creates a grid row element with the specified image.

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
- [CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md): A row element that displays an image with a custom cutout shape and a title.

# CPListImageRowItemGridElement (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A row element that displays an image.

## Declaration

```objectivec
@interface CPListImageRowItemGridElement : CPListImageRowItemElement
```

<a id="overview"></a>

## Overview

The `CPListImageRowItemGridElement ` class defines an element you add to a row in a list template. Use this class with the [CPListImageRowItem](cplistimagerowitem.md) type to include more content in each row of your list. This element type displays an image for the specified item without any additional text.

When building a list interface, create instances of this class and use them to populate your [CPListImageRowItem](cplistimagerowitem.md) type. To handle row-related interactions with elements in a row, configure the [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md) property of the row itself.

## Topics

### Creating a grid element

- [initWithImage:](cplistimagerowitemgridelement/init%28image_%29.md): Creates a grid row element with the specified image.

## Relationships

### Inherits From

- [CPListImageRowItemElement](cplistimagerowitemelement.md)

## See Also

### Row elements

- [CPListImageRowItemRowElement](cplistimagerowitemrowelement.md): A row element that displays an image, title, and subtitle.
- [CPListImageRowItemCardElement](cplistimagerowitemcardelement.md): A row element that displays an image and text on a card-style background.
- [CPListImageRowItemCondensedElement](cplistimagerowitemcondensedelement.md): A row element that displays an image and text in a vertically condensed style.
- [CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md): A row element that displays an image with a custom cutout shape and a title.
