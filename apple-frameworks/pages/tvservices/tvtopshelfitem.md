> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfitem](https://developer.apple.com/documentation/tvservices/tvtopshelfitem)

# TVTopShelfItem (Swift)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

An item that uses an image to represent a movie, show, or other content in the top shelf.

## Declaration

```swift
class TVTopShelfItem
```

<a id="overview"></a>

## Overview

A [TVTopShelfItem](tvtopshelfitem.md) object manages basic traits for all items, including the images they display and the actions they trigger. Typically, you create [TVTopShelfCarouselItem](tvtopshelfcarouselitem.md) or [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md) objects for your interface. For inset interfaces, you can also create [TVTopShelfItem](tvtopshelfitem.md) objects directly.

After creating an item object, assign an image and one or more actions to it, and update any other relevant properties. Return the item object as part of the content for your interface.

Each unique item in your app must have a correspondingly unique identifier, and the identifier for each item must remain stable throughout the life of your app. Do not assign a different unique identifier for the same underlying item each time you create a [TVTopShelfItem](tvtopshelfitem.md) object for it.

## Topics

### Creating a Top Shelf Item

- [init(identifier:)](tvtopshelfitem/init%28identifier_%29.md): Creates a top shelf item with the specified identifier.

### Assigning Actions to the Item

- [playAction](tvtopshelfitem/playaction.md): The action to perform when the user wants to play the current item.
- [displayAction](tvtopshelfitem/displayaction.md): The action to perform when the user wants to see more information for the current item.

### Providing an Image for the Item

- [imageURL(for:)](tvtopshelfitem/imageurl%28for_%29.md): Returns an image associated with the current item.
- [setImageURL(\_:for:)](tvtopshelfitem/setimageurl%28__for_%29.md): Associates an image with the current item.
- [TVTopShelfItem.ImageTraits](tvtopshelfitem/imagetraits.md): Constants describing the image format.

### Getting the Item Attributes

- [identifier](tvtopshelfitem/identifier.md): The unique identifier for the item.
- [expirationDate](tvtopshelfitem/expirationdate.md): The date on which the item becomes unavailable.

## Relationships

### Inherits From

- [TVTopShelfObject](tvtopshelfobject.md)

### Inherited By

- [TVTopShelfCarouselItem](tvtopshelfcarouselitem.md)
- [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Common types

- [TVTopShelfAction](tvtopshelfaction.md): An action to perform in response to user interactions with an item in the top shelf.
- [TVTopShelfContent](tvtopshelfcontent.md): The protocol that objects adopt to provide content for the top shelf.
- [TVTopShelfObject](tvtopshelfobject.md): An abstract base class for describing top shelf items and item collections.

# TVTopShelfItem (Objective-C)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

An item that uses an image to represent a movie, show, or other content in the top shelf.

## Declaration

```objectivec
@interface TVTopShelfItem : TVTopShelfObject
```

<a id="overview"></a>

## Overview

A [TVTopShelfItem](tvtopshelfitem.md) object manages basic traits for all items, including the images they display and the actions they trigger. Typically, you create [TVTopShelfCarouselItem](tvtopshelfcarouselitem.md) or [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md) objects for your interface. For inset interfaces, you can also create [TVTopShelfItem](tvtopshelfitem.md) objects directly.

After creating an item object, assign an image and one or more actions to it, and update any other relevant properties. Return the item object as part of the content for your interface.

Each unique item in your app must have a correspondingly unique identifier, and the identifier for each item must remain stable throughout the life of your app. Do not assign a different unique identifier for the same underlying item each time you create a [TVTopShelfItem](tvtopshelfitem.md) object for it.

## Topics

### Creating a Top Shelf Item

- [initWithIdentifier:](tvtopshelfitem/init%28identifier_%29.md): Creates a top shelf item with the specified identifier.

### Assigning Actions to the Item

- [playAction](tvtopshelfitem/playaction.md): The action to perform when the user wants to play the current item.
- [displayAction](tvtopshelfitem/displayaction.md): The action to perform when the user wants to see more information for the current item.

### Providing an Image for the Item

- [imageURLForTraits:](tvtopshelfitem/imageurl%28for_%29.md): Returns an image associated with the current item.
- [setImageURL:forTraits:](tvtopshelfitem/setimageurl%28__for_%29.md): Associates an image with the current item.
- [TVTopShelfItemImageTraits](tvtopshelfitem/imagetraits.md): Constants describing the image format.

### Getting the Item Attributes

- [identifier](tvtopshelfitem/identifier.md): The unique identifier for the item.
- [expirationDate](tvtopshelfitem/expirationdate.md): The date on which the item becomes unavailable.

## Relationships

### Inherits From

- [TVTopShelfObject](tvtopshelfobject.md)

### Inherited By

- [TVTopShelfCarouselItem](tvtopshelfcarouselitem.md)
- [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md)

## See Also

### Common types

- [TVTopShelfAction](tvtopshelfaction.md): An action to perform in response to user interactions with an item in the top shelf.
- [TVTopShelfContent](tvtopshelfcontent.md): The protocol that objects adopt to provide content for the top shelf.
- [TVTopShelfObject](tvtopshelfobject.md): An abstract base class for describing top shelf items and item collections.
