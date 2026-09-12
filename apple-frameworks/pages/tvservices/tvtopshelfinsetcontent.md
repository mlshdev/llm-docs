> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfinsetcontent](https://developer.apple.com/documentation/tvservices/tvtopshelfinsetcontent)

# TVTopShelfInsetContent (Swift)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

A set of items to present using an inset-style interface in the top shelf.

## Declaration

```swift
class TVTopShelfInsetContent
```

<a id="overview"></a>

## Overview

Create a [TVTopShelfInsetContent](tvtopshelfinsetcontent.md) object when you want to display your top shelf content using an inset interface. The layout for an inset interface shows a series of large images, each of which spans almost the entire width of the screen. The focused image appears raised above the background.

For more information about how to configure images for an inset interface, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/tvos/icons-and-images/top-shelf-images/).

## Topics

### Creating an Inset Content Object

- [init(items:)](tvtopshelfinsetcontent/init%28items_%29.md): Creates an inset content object and populates it with the specified set of items.

### Getting the Items

- [items](tvtopshelfinsetcontent/items.md): The items to display from the inset interface.

### Getting the Image Size

- [imageSize](tvtopshelfinsetcontent/imagesize.md): The standard width and height for images in an inset interface.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [TVTopShelfContent](tvtopshelfcontent.md)

## See Also

### Sectioned and inset content

- [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md): An item to display in a section-based interface.
- [TVTopShelfItemCollection](tvtopshelfitemcollection.md): A group of items that you display together in a sectioned interface in the top shelf.
- [TVTopShelfSectionedContent](tvtopshelfsectionedcontent.md): The set of items you want to present using a section-based interface in the top shelf.

# TVTopShelfInsetContent (Objective-C)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

A set of items to present using an inset-style interface in the top shelf.

## Declaration

```objectivec
@interface TVTopShelfInsetContent : NSObject
```

<a id="overview"></a>

## Overview

Create a [TVTopShelfInsetContent](tvtopshelfinsetcontent.md) object when you want to display your top shelf content using an inset interface. The layout for an inset interface shows a series of large images, each of which spans almost the entire width of the screen. The focused image appears raised above the background.

For more information about how to configure images for an inset interface, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/tvos/icons-and-images/top-shelf-images/).

## Topics

### Creating an Inset Content Object

- [initWithItems:](tvtopshelfinsetcontent/init%28items_%29.md): Creates an inset content object and populates it with the specified set of items.

### Getting the Items

- [items](tvtopshelfinsetcontent/items.md): The items to display from the inset interface.

### Getting the Image Size

- [imageSize](tvtopshelfinsetcontent/imagesize.md): The standard width and height for images in an inset interface.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [TVTopShelfContent](tvtopshelfcontent.md)

## See Also

### Sectioned and inset content

- [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md): An item to display in a section-based interface.
- [TVTopShelfItemCollection](tvtopshelfitemcollection.md): A group of items that you display together in a sectioned interface in the top shelf.
- [TVTopShelfSectionedContent](tvtopshelfsectionedcontent.md): The set of items you want to present using a section-based interface in the top shelf.
