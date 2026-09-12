> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/subviewscollection](https://developer.apple.com/documentation/swiftui/subviewscollection)

# SubviewsCollection

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An opaque collection representing the subviews of view.

## Declaration

```swift
struct SubviewsCollection
```

<a id="overview"></a>

## Overview

Subviews collection constructs subviews on demand, so only access the part of the collection you need to create the resulting content.

You can get access to a view’s subview collection by using the `Group/init(sectionsOf:transform:)` initializer.

The collection’s elements are the pieces that make up the given view, and the collection as a whole acts as a proxy for the original view.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
- [View](view.md)

## See Also

### Accessing a container’s subviews

- [Subview](subview.md): An opaque value representing a subview of another view.
- [SubviewsCollectionSlice](subviewscollectionslice.md): A slice of a SubviewsCollection.
- [containerValue(\_:\_:)](view/containervalue%28____%29.md): Sets a particular container value of a view.
- [ContainerValues](containervalues.md): A collection of container values associated with a given view.
- [ContainerValueKey](containervaluekey.md): A key for accessing container values.
