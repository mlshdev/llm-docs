> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfsectioneditem](https://developer.apple.com/documentation/tvservices/tvtopshelfsectioneditem)

# TVTopShelfSectionedItem (Swift)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

An item to display in a section-based interface.

## Declaration

```swift
class TVTopShelfSectionedItem
```

<a id="overview"></a>

## Overview

Create a [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md) object for each item you want to display in the top shelf. Each sectioned item corresponds to one item of your app’s content. For example, a video playback app uses sectioned items to represent movies or shows. Specify the image for the item using the [setImageURL(\_:for:)](tvtopshelfitem/setimageurl%28__for_%29.md) method. Use the inherited [playAction](tvtopshelfitem/playaction.md) and [displayAction](tvtopshelfitem/displayaction.md) properties to let the system know what to do when the user interacts with the item.

## Topics

### Setting the Image Shape

- [imageShape](tvtopshelfsectioneditem/imageshape-swift.property.md): The aspect ratio of the item’s image.
- [TVTopShelfSectionedItem.ImageShape](tvtopshelfsectioneditem/imageshape-swift.enum.md): Constants indicating the aspect ratio of an image.

### Setting the Playback Progress

- [playbackProgress](tvtopshelfsectioneditem/playbackprogress.md): The percentage of the content that the user has already played, specified as a value between 0.0 and 1.0.

## Relationships

### Inherits From

- [TVTopShelfItem](tvtopshelfitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Sectioned and inset content

- [TVTopShelfItemCollection](tvtopshelfitemcollection.md): A group of items that you display together in a sectioned interface in the top shelf.
- [TVTopShelfSectionedContent](tvtopshelfsectionedcontent.md): The set of items you want to present using a section-based interface in the top shelf.
- [TVTopShelfInsetContent](tvtopshelfinsetcontent.md): A set of items to present using an inset-style interface in the top shelf.

# TVTopShelfSectionedItem (Objective-C)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

An item to display in a section-based interface.

## Declaration

```objectivec
@interface TVTopShelfSectionedItem : TVTopShelfItem
```

<a id="overview"></a>

## Overview

Create a [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md) object for each item you want to display in the top shelf. Each sectioned item corresponds to one item of your app’s content. For example, a video playback app uses sectioned items to represent movies or shows. Specify the image for the item using the [setImageURL:forTraits:](tvtopshelfitem/setimageurl%28__for_%29.md) method. Use the inherited [playAction](tvtopshelfitem/playaction.md) and [displayAction](tvtopshelfitem/displayaction.md) properties to let the system know what to do when the user interacts with the item.

## Topics

### Setting the Image Shape

- [imageShape](tvtopshelfsectioneditem/imageshape-swift.property.md): The aspect ratio of the item’s image.
- [TVTopShelfSectionedItemImageShape](tvtopshelfsectioneditem/imageshape-swift.enum.md): Constants indicating the aspect ratio of an image.

### Setting the Playback Progress

- [playbackProgress](tvtopshelfsectioneditem/playbackprogress.md): The percentage of the content that the user has already played, specified as a value between 0.0 and 1.0.

## Relationships

### Inherits From

- [TVTopShelfItem](tvtopshelfitem.md)

## See Also

### Sectioned and inset content

- [TVTopShelfItemCollection](tvtopshelfitemcollection.md): A group of items that you display together in a sectioned interface in the top shelf.
- [TVTopShelfSectionedContent](tvtopshelfsectionedcontent.md): The set of items you want to present using a section-based interface in the top shelf.
- [TVTopShelfInsetContent](tvtopshelfinsetcontent.md): A set of items to present using an inset-style interface in the top shelf.
