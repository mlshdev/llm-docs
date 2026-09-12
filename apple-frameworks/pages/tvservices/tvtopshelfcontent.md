> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfcontent](https://developer.apple.com/documentation/tvservices/tvtopshelfcontent)

# TVTopShelfContent (Swift)

**Framework:** TV Services  
**Kind:** Protocol  
**Availability:** tvOS 13.0+

The protocol that objects adopt to provide content for the top shelf.

## Declaration

```swift
protocol TVTopShelfContent : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Don’t adopt this protocol in your own classes. The TVServices framework adopts this protocol in classes that can contain top shelf content, such as the [TVTopShelfCarouselContent](tvtopshelfcarouselcontent.md) class.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [TVTopShelfCarouselContent](tvtopshelfcarouselcontent.md)
- [TVTopShelfInsetContent](tvtopshelfinsetcontent.md)
- [TVTopShelfSectionedContent](tvtopshelfsectionedcontent.md)

## See Also

### Common types

- [TVTopShelfItem](tvtopshelfitem.md): An item that uses an image to represent a movie, show, or other content in the top shelf.
- [TVTopShelfAction](tvtopshelfaction.md): An action to perform in response to user interactions with an item in the top shelf.
- [TVTopShelfObject](tvtopshelfobject.md): An abstract base class for describing top shelf items and item collections.

# TVTopShelfContent (Objective-C)

**Framework:** TV Services  
**Kind:** Protocol  
**Availability:** tvOS 13.0+

The protocol that objects adopt to provide content for the top shelf.

## Declaration

```objectivec
@protocol TVTopShelfContent <NSObject>
```

<a id="overview"></a>

## Overview

Don’t adopt this protocol in your own classes. The TVServices framework adopts this protocol in classes that can contain top shelf content, such as the [TVTopShelfCarouselContent](tvtopshelfcarouselcontent.md) class.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [TVTopShelfCarouselContent](tvtopshelfcarouselcontent.md)
- [TVTopShelfInsetContent](tvtopshelfinsetcontent.md)
- [TVTopShelfSectionedContent](tvtopshelfsectionedcontent.md)

## See Also

### Common types

- [TVTopShelfItem](tvtopshelfitem.md): An item that uses an image to represent a movie, show, or other content in the top shelf.
- [TVTopShelfAction](tvtopshelfaction.md): An action to perform in response to user interactions with an item in the top shelf.
- [TVTopShelfObject](tvtopshelfobject.md): An abstract base class for describing top shelf items and item collections.
