> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfitemcollection](https://developer.apple.com/documentation/tvservices/tvtopshelfitemcollection)

# TVTopShelfItemCollection (Swift)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

A group of items that you display together in a sectioned interface in the top shelf.

## Declaration

```swift
class TVTopShelfItemCollection<Item> where Item : TVTopShelfItem
```

<a id="overview"></a>

## Overview

Use a [TVTopShelfItemCollection](tvtopshelfitemcollection.md) object to organize related groups of items in a sectioned interface. The system presents the items in your collection together, displaying the [title](tvtopshelfobject/title.md) of the collection above those items. For example, you might create different collections for new movies, the user’s favorites, and recently watched movies.

## Topics

### Creating an Item Collection

- [init(items:)](tvtopshelfitemcollection/init%28items_%29.md): Creates an item collection object from the specified set of top shelf items.

### Getting the Items

- [items](tvtopshelfitemcollection/items.md): The items in the collection.

## Relationships

### Inherits From

- [TVTopShelfObject](tvtopshelfobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Sectioned and inset content

- [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md): An item to display in a section-based interface.
- [TVTopShelfSectionedContent](tvtopshelfsectionedcontent.md): The set of items you want to present using a section-based interface in the top shelf.
- [TVTopShelfInsetContent](tvtopshelfinsetcontent.md): A set of items to present using an inset-style interface in the top shelf.

# TVTopShelfItemCollection (Objective-C)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

A group of items that you display together in a sectioned interface in the top shelf.

## Declaration

```objectivec
@interface TVTopShelfItemCollection : TVTopShelfObject
```

<a id="overview"></a>

## Overview

Use a [TVTopShelfItemCollection](tvtopshelfitemcollection.md) object to organize related groups of items in a sectioned interface. The system presents the items in your collection together, displaying the [title](tvtopshelfobject/title.md) of the collection above those items. For example, you might create different collections for new movies, the user’s favorites, and recently watched movies.

## Topics

### Creating an Item Collection

- [initWithItems:](tvtopshelfitemcollection/init%28items_%29.md): Creates an item collection object from the specified set of top shelf items.

### Getting the Items

- [items](tvtopshelfitemcollection/items.md): The items in the collection.

## Relationships

### Inherits From

- [TVTopShelfObject](tvtopshelfobject.md)

## See Also

### Sectioned and inset content

- [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md): An item to display in a section-based interface.
- [TVTopShelfSectionedContent](tvtopshelfsectionedcontent.md): The set of items you want to present using a section-based interface in the top shelf.
- [TVTopShelfInsetContent](tvtopshelfinsetcontent.md): A set of items to present using an inset-style interface in the top shelf.
