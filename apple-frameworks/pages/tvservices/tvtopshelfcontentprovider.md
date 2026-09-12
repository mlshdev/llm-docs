> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfcontentprovider](https://developer.apple.com/documentation/tvservices/tvtopshelfcontentprovider)

# TVTopShelfContentProvider (Swift)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

The main interface for your Top Shelf app extension, which you use to provide content for the top shelf area of the tvOS Home Screen.

## Declaration

```swift
class TVTopShelfContentProvider
```

<a id="overview"></a>

## Overview

Adopt this protocol in the principal class of your Top Shelf app extension. Use its methods to create the items that you want to display in the top shelf interface. For each item, specify additional resources such as the image or video to display.

Fill the top shelf area with the user’s active content or with content you want to highlight or promote. For each distinct piece of content, create a [TVTopShelfCarouselItem](tvtopshelfcarouselitem.md) or [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md) and fill the object with details about that content. For example, provide an identifier for the item and URLs for the pictures or videos you want to display for that item. After creating your items, add them to an appropriate content object and return them from your [loadTopShelfContent(completionHandler:)](tvtopshelfcontentprovider/loadtopshelfcontent%28completionhandler_%29.md) method.

## Topics

### Providing the Top Shelf Content

- [loadTopShelfContent(completionHandler:)](tvtopshelfcontentprovider/loadtopshelfcontent%28completionhandler_%29.md): Provides the content you want to display in the top shelf for your app.

### Updating Your Content

- [topShelfContentDidChange()](tvtopshelfcontentprovider/topshelfcontentdidchange%28%29.md): Tells the system that your top shelf content changed and requires an update.

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

### Top shelf app extensions

- [Building a Full Screen Top Shelf Extension](building-a-full-screen-top-shelf-extension.md): Highlight content from your Apple TV application by building a full screen Top Shelf extension.
- [Legacy Extension](legacy-extension.md): Help users discover your app by providing top shelf content and a description of your tvOS app.

# TVTopShelfContentProvider (Objective-C)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

The main interface for your Top Shelf app extension, which you use to provide content for the top shelf area of the tvOS Home Screen.

## Declaration

```objectivec
@interface TVTopShelfContentProvider : NSObject
```

<a id="overview"></a>

## Overview

Adopt this protocol in the principal class of your Top Shelf app extension. Use its methods to create the items that you want to display in the top shelf interface. For each item, specify additional resources such as the image or video to display.

Fill the top shelf area with the user’s active content or with content you want to highlight or promote. For each distinct piece of content, create a [TVTopShelfCarouselItem](tvtopshelfcarouselitem.md) or [TVTopShelfSectionedItem](tvtopshelfsectioneditem.md) and fill the object with details about that content. For example, provide an identifier for the item and URLs for the pictures or videos you want to display for that item. After creating your items, add them to an appropriate content object and return them from your [loadTopShelfContentWithCompletionHandler:](tvtopshelfcontentprovider/loadtopshelfcontent%28completionhandler_%29.md) method.

## Topics

### Providing the Top Shelf Content

- [loadTopShelfContentWithCompletionHandler:](tvtopshelfcontentprovider/loadtopshelfcontent%28completionhandler_%29.md): Provides the content you want to display in the top shelf for your app.

### Updating Your Content

- [topShelfContentDidChange](tvtopshelfcontentprovider/topshelfcontentdidchange%28%29.md): Tells the system that your top shelf content changed and requires an update.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Top shelf app extensions

- [Building a Full Screen Top Shelf Extension](building-a-full-screen-top-shelf-extension.md): Highlight content from your Apple TV application by building a full screen Top Shelf extension.
- [Legacy Extension](legacy-extension.md): Help users discover your app by providing top shelf content and a description of your tvOS app.
