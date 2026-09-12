> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfsectionedcontent](https://developer.apple.com/documentation/tvservices/tvtopshelfsectionedcontent)

# TVTopShelfSectionedContent (Swift)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

The set of items you want to present using a section-based interface in the top shelf.

## Declaration

```swift
class TVTopShelfSectionedContent
```

<a id="overview"></a>

## Overview

Create a [TVTopShelfSectionedContent](tvtopshelfsectionedcontent.md) object when you want to display your top shelf content using a sectioned interface. A sectioned interface displays a single labled row of items. Items are organized by section. As the row scrolls horizontally through the items, the system updates the label above the items to indicate the current section. You specify the title of each section and its items using [TVTopShelfItemCollection](tvtopshelfitemcollection.md) objects.

For more information about how to configure images for a sectioned interface, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/tvos/icons-and-images/top-shelf-images/).

## Topics

### Creating a Sectioned Content Object

- [init(sections:)](tvtopshelfsectionedcontent/init%28sections_%29.md): Creates a sectioned content object and populates it with the specified sections.

### Getting the Sections

- [sections](tvtopshelfsectionedcontent/sections.md): The sections to display in the interface.

### Getting the Image Size Information

- [imageSize(for:)](tvtopshelfsectionedcontent/imagesize%28for_%29.md): Returns the dimensions to use for images of the specified shape.
- [TVTopShelfSectionedItem.ImageShape](tvtopshelfsectioneditem/imageshape-swift.enum.md): Constants indicating the aspect ratio of an image.

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
- [TVTopShelfInsetContent](tvtopshelfinsetcontent.md): A set of items to present using an inset-style interface in the top shelf.

# TVTopShelfSectionedContent (Objective-C)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

The set of items you want to present using a section-based interface in the top shelf.

## Declaration

```objectivec
@interface TVTopShelfSectionedContent : NSObject
```

<a id="overview"></a>

## Overview

Create a [TVTopShelfSectionedContent](tvtopshelfsectionedcontent.md) object when you want to display your top shelf content using a sectioned interface. A sectioned interface displays a single labled row of items. Items are organized by section. As the row scrolls horizontally through the items, the system updates the label above the items to indicate the current section. You specify the title of each section and its items using [TVTopShelfItemCollection](tvtopshelfitemcollection.md) objects.

For more information about how to configure images for a sectioned interface, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/tvos/icons-and-images/top-shelf-images/).

## Topics

### Creating a Sectioned Content Object

- [initWithSections:](tvtopshelfsectionedcontent/init%28sections_%29.md): Creates a sectioned content object and populates it with the specified sections.

### Getting the Sections

- [sections](tvtopshelfsectionedcontent/sections.md): The sections to display in the interface.

### Getting the Image Size Information

- [imageSizeForImageShape:](tvtopshelfsectionedcontent/imagesize%28for_%29.md): Returns the dimensions to use for images of the specified shape.
- [TVTopShelfSectionedItemImageShape](tvtopshelfsectioneditem/imageshape-swift.enum.md): Constants indicating the aspect ratio of an image.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [TVTopShelfContent](tvtopshelfcontent.md)

## See Also

### Sectioned and inset content

- [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md): An item to display in a section-based interface.
- [TVTopShelfItemCollection](tvtopshelfitemcollection.md): A group of items that you display together in a sectioned interface in the top shelf.
- [TVTopShelfInsetContent](tvtopshelfinsetcontent.md): A set of items to present using an inset-style interface in the top shelf.
