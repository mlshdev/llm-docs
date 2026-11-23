> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemcardelement

# CPListImageRowItemCardElement (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A row element that displays an image and text on a card-style background.

## Declaration

```swift
@MainActor class CPListImageRowItemCardElement
```

<a id="overview"></a>

## Overview

The `CPListImageRowItemCardElement ` class defines an element you add to a row in a list template. Use this class with the [CPListImageRowItem](cplistimagerowitem.md) type to place multiple items in each row of your list. This element type displays a required image and an optional title and subtitle on top of a tinted background with a card shape. When possible, provide text values with meaningful information. For example, an element displaying the artwork for an album might display the album’s name and band information in the text fields.

When building a list interface, create instances of this class and use them to populate your [CPListImageRowItem](cplistimagerowitem.md) type. When configuring elements using a thumbnail image, the aspect ratio of the first image defines the layout of the remaining elements. To handle row-related interactions with elements in a row, configure the [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md) property of the row itself.

## Topics

### Creating a card element

- [init(image:showsImageFullHeight:title:subtitle:tintColor:)](cplistimagerowitemcardelement/init%28image_showsimagefullheight_title_subtitle_tintcolor_%29.md): Creates a card row element with the specified image, text, and card background color.
- [init(thumbnail:title:subtitle:tintColor:)](cplistimagerowitemcardelement/init%28thumbnail_title_subtitle_tintcolor_%29.md): Creates a card row element with a thumbnail image, text, and background color.
- [init(coder:)](cplistimagerowitemcardelement/init%28coder_%29.md)

### Getting the element’s content

- [title](cplistimagerowitemcardelement/title.md): The primary text for the element.
- [subtitle](cplistimagerowitemcardelement/subtitle.md): The secondary text for the element.
- [tintColor](cplistimagerowitemcardelement/tintcolor.md): The color to use for the card’s background.

### Getting the image behavior

- [thumbnail](cplistimagerowitemcardelement/thumbnail.md): The thumbnail object that provides the image content.
- [showsImageFullHeight](cplistimagerowitemcardelement/showsimagefullheight.md): A Boolean value that indicates whether to use a full-height image for the card.

### Getting the expected image dimensions

- [maximumFullHeightImageSize](cplistimagerowitemcardelement/maximumfullheightimagesize.md): The maximum dimensions for full-height images.
- [maximumImageSize](cplistimagerowitemcardelement/maximumimagesize.md): The maximum dimensions for normal-height images.

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
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Row elements

- [CPListImageRowItemRowElement](cplistimagerowitemrowelement.md): A row element that displays an image, title, and subtitle.
- [CPListImageRowItemCondensedElement](cplistimagerowitemcondensedelement.md): A row element that displays an image and text in a vertically condensed style.
- [CPListImageRowItemGridElement](cplistimagerowitemgridelement.md): A row element that displays an image.
- [CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md): A row element that displays an image with a custom cutout shape and a title.

# CPListImageRowItemCardElement (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A row element that displays an image and text on a card-style background.

## Declaration

```objectivec
@interface CPListImageRowItemCardElement : CPListImageRowItemElement
```

<a id="overview"></a>

## Overview

The `CPListImageRowItemCardElement ` class defines an element you add to a row in a list template. Use this class with the [CPListImageRowItem](cplistimagerowitem.md) type to place multiple items in each row of your list. This element type displays a required image and an optional title and subtitle on top of a tinted background with a card shape. When possible, provide text values with meaningful information. For example, an element displaying the artwork for an album might display the album’s name and band information in the text fields.

When building a list interface, create instances of this class and use them to populate your [CPListImageRowItem](cplistimagerowitem.md) type. When configuring elements using a thumbnail image, the aspect ratio of the first image defines the layout of the remaining elements. To handle row-related interactions with elements in a row, configure the [listImageRowHandler](cplistimagerowitem/listimagerowhandler.md) property of the row itself.

## Topics

### Creating a card element

- [initWithImage:showsImageFullHeight:title:subtitle:tintColor:](cplistimagerowitemcardelement/init%28image_showsimagefullheight_title_subtitle_tintcolor_%29.md): Creates a card row element with the specified image, text, and card background color.
- [initWithThumbnail:title:subtitle:tintColor:](cplistimagerowitemcardelement/init%28thumbnail_title_subtitle_tintcolor_%29.md): Creates a card row element with a thumbnail image, text, and background color.

### Getting the element’s content

- [title](cplistimagerowitemcardelement/title.md): The primary text for the element.
- [subtitle](cplistimagerowitemcardelement/subtitle.md): The secondary text for the element.
- [tintColor](cplistimagerowitemcardelement/tintcolor.md): The color to use for the card’s background.

### Getting the image behavior

- [thumbnail](cplistimagerowitemcardelement/thumbnail.md): The thumbnail object that provides the image content.
- [showsImageFullHeight](cplistimagerowitemcardelement/showsimagefullheight.md): A Boolean value that indicates whether to use a full-height image for the card.

### Getting the expected image dimensions

- [maximumFullHeightImageSize](cplistimagerowitemcardelement/maximumfullheightimagesize.md): The maximum dimensions for full-height images.
- [maximumImageSize](cplistimagerowitemcardelement/maximumimagesize.md): The maximum dimensions for normal-height images.

## Relationships

### Inherits From

- [CPListImageRowItemElement](cplistimagerowitemelement.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Row elements

- [CPListImageRowItemRowElement](cplistimagerowitemrowelement.md): A row element that displays an image, title, and subtitle.
- [CPListImageRowItemCondensedElement](cplistimagerowitemcondensedelement.md): A row element that displays an image and text in a vertically condensed style.
- [CPListImageRowItemGridElement](cplistimagerowitemgridelement.md): A row element that displays an image.
- [CPListImageRowItemImageGridElement](cplistimagerowitemimagegridelement.md): A row element that displays an image with a custom cutout shape and a title.
