> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfaction](https://developer.apple.com/documentation/tvservices/tvtopshelfaction)

# TVTopShelfAction (Swift)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

An action to perform in response to user interactions with an item in the top shelf.

## Declaration

```swift
class TVTopShelfAction
```

<a id="overview"></a>

## Overview

A [TVTopShelfAction](tvtopshelfaction.md) object contains the URL that you want tvOS to open when the user selects an item in the top shelf. Use actions to specify the location of playable content or pages containing additional information.

When configuring a [TVTopShelfItem](tvtopshelfitem.md) to display in a carousel interface, the system chooses a title and image for each button on the item based on whether you assigned the action object to the [playAction](tvtopshelfitem/playaction.md) or [displayAction](tvtopshelfitem/displayaction.md) property of your item.

## Topics

### Creating an Action Object

- [init(url:)](tvtopshelfaction/init%28url_%29-2zqfn.md): Creates a new action object that displays the content at the specified URL.

### Getting the URL

- [url](tvtopshelfaction/url.md): The URL of the content you want to display.

### Initializers

- [init(URL:)](tvtopshelfaction/init%28url_%29-6nuwx.md)

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

## See Also

### Common types

- [TVTopShelfItem](tvtopshelfitem.md): An item that uses an image to represent a movie, show, or other content in the top shelf.
- [TVTopShelfContent](tvtopshelfcontent.md): The protocol that objects adopt to provide content for the top shelf.
- [TVTopShelfObject](tvtopshelfobject.md): An abstract base class for describing top shelf items and item collections.

# TVTopShelfAction (Objective-C)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

An action to perform in response to user interactions with an item in the top shelf.

## Declaration

```objectivec
@interface TVTopShelfAction : NSObject
```

<a id="overview"></a>

## Overview

A [TVTopShelfAction](tvtopshelfaction.md) object contains the URL that you want tvOS to open when the user selects an item in the top shelf. Use actions to specify the location of playable content or pages containing additional information.

When configuring a [TVTopShelfItem](tvtopshelfitem.md) to display in a carousel interface, the system chooses a title and image for each button on the item based on whether you assigned the action object to the [playAction](tvtopshelfitem/playaction.md) or [displayAction](tvtopshelfitem/displayaction.md) property of your item.

## Topics

### Creating an Action Object

- [initWithURL:](tvtopshelfaction/init%28url_%29-2zqfn.md): Creates a new action object that displays the content at the specified URL.

### Getting the URL

- [URL](tvtopshelfaction/url.md): The URL of the content you want to display.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Common types

- [TVTopShelfItem](tvtopshelfitem.md): An item that uses an image to represent a movie, show, or other content in the top shelf.
- [TVTopShelfContent](tvtopshelfcontent.md): The protocol that objects adopt to provide content for the top shelf.
- [TVTopShelfObject](tvtopshelfobject.md): An abstract base class for describing top shelf items and item collections.
