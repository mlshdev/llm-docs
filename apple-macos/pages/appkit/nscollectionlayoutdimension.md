> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutdimension](https://developer.apple.com/documentation/appkit/nscollectionlayoutdimension)

# NSCollectionLayoutDimension (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

An individual dimension representing an item’s width or height in a collection view.

## Declaration

```swift
@MainActor class NSCollectionLayoutDimension
```

<a id="overview"></a>

## Overview

Each item in a collection view has an explicit width dimension and height dimension, which combine to define the item’s size ([NSCollectionLayoutSize](nscollectionlayoutsize.md)).

You can express an item’s dimensions using an absolute, estimated, or fractional value.

Use an *absolute value* to specify exact dimensions, like a 44 x 44 point square:

**Swift**

```swift
let absoluteSize = NSCollectionLayoutSize(widthDimension: .absolute(44),
                                         heightDimension: .absolute(44))
```

**Objective-C**

```objc
NSCollectionLayoutSize *absoluteSize = [NSCollectionLayoutSize sizeWithWidthDimension:[NSCollectionLayoutDimension absoluteDimension:44.0] heightDimension:[NSCollectionLayoutDimension absoluteDimension:44.0]];
```

Use an *estimated value* if the size of your content might change at runtime, such as when data is loaded or in response to a change in system font size. You provide an initial estimated size and the system computes the actual value later.

**Swift**

```swift
let estimatedSize = NSCollectionLayoutSize(widthDimension: .estimated(200),
                                          heightDimension: .estimated(100))
```

**Objective-C**

```objc
NSCollectionLayoutSize *estimatedSize = [NSCollectionLayoutSize sizeWithWidthDimension:[NSCollectionLayoutDimension estimatedDimension:200.0] heightDimension:[NSCollectionLayoutDimension estimatedDimension:100.0]];
```

Use a *fractional value* to define a value that’s relative to a dimension of the item’s container. This option simplifies specifying aspect ratios. For example, the following item has a width and a height that are both equal to 20% of its container’s width, creating a square that grows and shrinks as the size of its container changes.

**Swift**

```swift
let fractionalSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(0.2),
                                           heightDimension: .fractionalWidth(0.2))
```

**Objective-C**

```objc
NSCollectionLayoutSize *fractionalSize = [NSCollectionLayoutSize sizeWithWidthDimension:[NSCollectionLayoutDimension fractionalWidthDimension:0.2] heightDimension:[NSCollectionLayoutDimension fractionalWidthDimension:0.2]];
```

## Topics

### Creating a dimension

- [absolute(\_:)](nscollectionlayoutdimension/absolute%28__%29.md): Creates a dimension with an absolute point value.
- [estimated(\_:)](nscollectionlayoutdimension/estimated%28__%29.md): Creates a dimension with an estimated point value.
- [fractionalHeight(\_:)](nscollectionlayoutdimension/fractionalheight%28__%29.md): Creates a dimension that is computed as a fraction of the height of the containing group.
- [fractionalWidth(\_:)](nscollectionlayoutdimension/fractionalwidth%28__%29.md): Creates a dimension that is computed as a fraction of the width of the containing group.

### Getting the dimension value

- [dimension](nscollectionlayoutdimension/dimension.md): The floating-point value of the dimension.

### Getting the dimension type

- [isAbsolute](nscollectionlayoutdimension/isabsolute.md): A Boolean value that indicates whether the dimension is expressed as an absolute value.
- [isEstimated](nscollectionlayoutdimension/isestimated.md): A Boolean value that indicates whether the dimension is expressed as an estimated value.
- [isFractionalHeight](nscollectionlayoutdimension/isfractionalheight.md): A Boolean value that indicates whether the dimension is expressed as a fraction of its container’s height.
- [isFractionalWidth](nscollectionlayoutdimension/isfractionalwidth.md): A Boolean value that indicates whether the dimension is expressed as a fraction of its container’s width.

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

- [NSCollectionLayoutSize](nscollectionlayoutsize.md): The width and the height of an item in a collection view.
- [NSCollectionLayoutSpacing](nscollectionlayoutspacing.md): An object that defines the space between or around items in a collection view.
- [NSCollectionLayoutEdgeSpacing](nscollectionlayoutedgespacing.md): An object that defines the space around the edges of items in a collection view.
- [NSCollectionLayoutContainer](nscollectionlayoutcontainer.md): A protocol used to provide information about the size and content insets of a layout’s container.

# NSCollectionLayoutDimension (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

An individual dimension representing an item’s width or height in a collection view.

## Declaration

```objectivec
@interface NSCollectionLayoutDimension : NSObject
```

<a id="overview"></a>

## Overview

Each item in a collection view has an explicit width dimension and height dimension, which combine to define the item’s size ([NSCollectionLayoutSize](nscollectionlayoutsize.md)).

You can express an item’s dimensions using an absolute, estimated, or fractional value.

Use an *absolute value* to specify exact dimensions, like a 44 x 44 point square:

**Swift**

```swift
let absoluteSize = NSCollectionLayoutSize(widthDimension: .absolute(44),
                                         heightDimension: .absolute(44))
```

**Objective-C**

```objc
NSCollectionLayoutSize *absoluteSize = [NSCollectionLayoutSize sizeWithWidthDimension:[NSCollectionLayoutDimension absoluteDimension:44.0] heightDimension:[NSCollectionLayoutDimension absoluteDimension:44.0]];
```

Use an *estimated value* if the size of your content might change at runtime, such as when data is loaded or in response to a change in system font size. You provide an initial estimated size and the system computes the actual value later.

**Swift**

```swift
let estimatedSize = NSCollectionLayoutSize(widthDimension: .estimated(200),
                                          heightDimension: .estimated(100))
```

**Objective-C**

```objc
NSCollectionLayoutSize *estimatedSize = [NSCollectionLayoutSize sizeWithWidthDimension:[NSCollectionLayoutDimension estimatedDimension:200.0] heightDimension:[NSCollectionLayoutDimension estimatedDimension:100.0]];
```

Use a *fractional value* to define a value that’s relative to a dimension of the item’s container. This option simplifies specifying aspect ratios. For example, the following item has a width and a height that are both equal to 20% of its container’s width, creating a square that grows and shrinks as the size of its container changes.

**Swift**

```swift
let fractionalSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(0.2),
                                           heightDimension: .fractionalWidth(0.2))
```

**Objective-C**

```objc
NSCollectionLayoutSize *fractionalSize = [NSCollectionLayoutSize sizeWithWidthDimension:[NSCollectionLayoutDimension fractionalWidthDimension:0.2] heightDimension:[NSCollectionLayoutDimension fractionalWidthDimension:0.2]];
```

## Topics

### Creating a dimension

- [absoluteDimension:](nscollectionlayoutdimension/absolute%28__%29.md): Creates a dimension with an absolute point value.
- [estimatedDimension:](nscollectionlayoutdimension/estimated%28__%29.md): Creates a dimension with an estimated point value.
- [fractionalHeightDimension:](nscollectionlayoutdimension/fractionalheight%28__%29.md): Creates a dimension that is computed as a fraction of the height of the containing group.
- [fractionalWidthDimension:](nscollectionlayoutdimension/fractionalwidth%28__%29.md): Creates a dimension that is computed as a fraction of the width of the containing group.

### Getting the dimension value

- [dimension](nscollectionlayoutdimension/dimension.md): The floating-point value of the dimension.

### Getting the dimension type

- [isAbsolute](nscollectionlayoutdimension/isabsolute.md): A Boolean value that indicates whether the dimension is expressed as an absolute value.
- [isEstimated](nscollectionlayoutdimension/isestimated.md): A Boolean value that indicates whether the dimension is expressed as an estimated value.
- [isFractionalHeight](nscollectionlayoutdimension/isfractionalheight.md): A Boolean value that indicates whether the dimension is expressed as a fraction of its container’s height.
- [isFractionalWidth](nscollectionlayoutdimension/isfractionalwidth.md): A Boolean value that indicates whether the dimension is expressed as a fraction of its container’s width.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Size and spacing

- [NSCollectionLayoutSize](nscollectionlayoutsize.md): The width and the height of an item in a collection view.
- [NSCollectionLayoutSpacing](nscollectionlayoutspacing.md): An object that defines the space between or around items in a collection view.
- [NSCollectionLayoutEdgeSpacing](nscollectionlayoutedgespacing.md): An object that defines the space around the edges of items in a collection view.
- [NSCollectionLayoutContainer](nscollectionlayoutcontainer.md): A protocol used to provide information about the size and content insets of a layout’s container.
