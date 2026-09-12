> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/backforwardlist-swift.struct/item](https://developer.apple.com/documentation/webkit/webpage/backforwardlist-swift.struct/item)

# WebPage.BackForwardList.Item

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A representation of a resource that a webpage previously visited.

## Declaration

```swift
struct Item
```

<a id="overview"></a>

## Overview

Two items with equal titles, urls, and initial urls may not necessarily be equal to one another.

## Topics

### Structures

- [WebPage.BackForwardList.Item.ID](item/id-swift.struct.md): An opaque type representing the identifier for an item.

### Instance Properties

- [id](item/id-swift.property.md): The unique identifier for the item.
- [initialURL](item/initialurl.md): The source URL that originally asked to load the resource.
- [title](item/title.md): The title of the page this item represents.
- [url](item/url.md): The url of the page this item represents, after having resolved all redirects.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing navigation between webpages

- [WebPage.BackForwardList](../backforwardlist-swift.struct.md): An observable representation of a webpage’s previously loaded resources.
- [WebPage.NavigationEvent](../navigationevent.md): A particular state that occurs during the progression of a navigation.
- [WebPage.BackForwardList.Item.ID](item/id-swift.struct.md): An opaque type representing the identifier for an item.
