> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutsize](https://developer.apple.com/documentation/appkit/nscollectionlayoutsize)

# NSCollectionLayoutSize (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

The width and the height of an item in a collection view.

## Declaration

```swift
@MainActor class NSCollectionLayoutSize
```

<a id="overview"></a>

## Overview

A size is a pair of dimensions ([NSCollectionLayoutDimension](nscollectionlayoutdimension.md)): a width dimension and a height dimension. Every component of a collection view layout has an explicit size.

## Topics

### Creating a layout size

- [init(widthDimension:heightDimension:)](nscollectionlayoutsize/init%28widthdimension_heightdimension_%29.md): Creates a size with the specified width and height dimensions.

### Getting the width and height

- [widthDimension](nscollectionlayoutsize/widthdimension.md): The width dimension of an item in a collection view layout.
- [heightDimension](nscollectionlayoutsize/heightdimension.md): The height dimension of an item in a collection view layout.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Size and spacing

- [NSCollectionLayoutDimension](nscollectionlayoutdimension.md): An individual dimension representing an item’s width or height in a collection view.
- [NSCollectionLayoutSpacing](nscollectionlayoutspacing.md): An object that defines the space between or around items in a collection view.
- [NSCollectionLayoutEdgeSpacing](nscollectionlayoutedgespacing.md): An object that defines the space around the edges of items in a collection view.
- [NSCollectionLayoutContainer](nscollectionlayoutcontainer.md): A protocol used to provide information about the size and content insets of a layout’s container.

# NSCollectionLayoutSize (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

The width and the height of an item in a collection view.

## Declaration

```objectivec
@interface NSCollectionLayoutSize : NSObject
```

<a id="overview"></a>

## Overview

A size is a pair of dimensions ([NSCollectionLayoutDimension](nscollectionlayoutdimension.md)): a width dimension and a height dimension. Every component of a collection view layout has an explicit size.

## Topics

### Creating a layout size

- [sizeWithWidthDimension:heightDimension:](nscollectionlayoutsize/init%28widthdimension_heightdimension_%29.md): Creates a size with the specified width and height dimensions.

### Getting the width and height

- [widthDimension](nscollectionlayoutsize/widthdimension.md): The width dimension of an item in a collection view layout.
- [heightDimension](nscollectionlayoutsize/heightdimension.md): The height dimension of an item in a collection view layout.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Size and spacing

- [NSCollectionLayoutDimension](nscollectionlayoutdimension.md): An individual dimension representing an item’s width or height in a collection view.
- [NSCollectionLayoutSpacing](nscollectionlayoutspacing.md): An object that defines the space between or around items in a collection view.
- [NSCollectionLayoutEdgeSpacing](nscollectionlayoutedgespacing.md): An object that defines the space around the edges of items in a collection view.
- [NSCollectionLayoutContainer](nscollectionlayoutcontainer.md): A protocol used to provide information about the size and content insets of a layout’s container.
