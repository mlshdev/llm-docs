> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutspacing](https://developer.apple.com/documentation/uikit/nscollectionlayoutspacing)

# NSCollectionLayoutSpacing (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that defines the space between or around items in a collection view.

## Declaration

```swift
@MainActor class NSCollectionLayoutSpacing
```

<a id="overview"></a>

## Overview

In a collection view layout, you use a spacing object to specify both the amount of space and the way in which it’s calculated.

You can express spacing using fixed or flexible spacing.

Use *fixed spacing* to provide an exact amount of space. For example, the following code creates exactly 200 points of space between the items in the group.

**Swift**

```swift
group.interItemSpacing = .fixed(200.0)
```

**Objective-C**

```objc
[group setInterItemSpacing: [NSCollectionLayoutSpacing fixedSpacing:200.0]];
```

Use *flexible spacing* to provide a minimum amount of space that can grow as more space becomes available. For example, the following code creates at least 200 points of space between the items in the group. As more space becomes available, items are respaced evenly in the additional space.

**Swift**

```swift
group.interItemSpacing = .flexible(200.0)
```

**Objective-C**

```objc
[group setInterItemSpacing: [NSCollectionLayoutSpacing flexibleSpacing:200.0]];
```

## Topics

### Creating spacing

- [fixed(\_:)](nscollectionlayoutspacing/fixed%28__%29.md): Creates a space equivalent to the specified number of points.
- [flexible(\_:)](nscollectionlayoutspacing/flexible%28__%29.md): Creates a space equivalent to or greater than the specified number of points, depending on the available space.

### Getting the spacing value

- [spacing](nscollectionlayoutspacing/spacing.md): The floating-point value of the space.

### Getting the spacing type

- [isFixed](nscollectionlayoutspacing/isfixed.md): A Boolean value that indicates whether the space is fixed to a specific number of points.
- [isFlexible](nscollectionlayoutspacing/isflexible.md): A Boolean value that indicates whether the space is flexible.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Size and spacing

- [NSCollectionLayoutDimension](nscollectionlayoutdimension.md): An individual dimension representing an item’s width or height in a collection view.
- [NSCollectionLayoutSize](nscollectionlayoutsize.md): The width and the height of an item in a collection view.
- [NSCollectionLayoutEdgeSpacing](nscollectionlayoutedgespacing.md): An object that defines the space around the edges of items in a collection view.
- [NSCollectionLayoutContainer](nscollectionlayoutcontainer.md): A protocol used to provide information about the size and content insets of a layout’s container.

# NSCollectionLayoutSpacing (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that defines the space between or around items in a collection view.

## Declaration

```objectivec
@interface NSCollectionLayoutSpacing : NSObject
```

<a id="overview"></a>

## Overview

In a collection view layout, you use a spacing object to specify both the amount of space and the way in which it’s calculated.

You can express spacing using fixed or flexible spacing.

Use *fixed spacing* to provide an exact amount of space. For example, the following code creates exactly 200 points of space between the items in the group.

**Swift**

```swift
group.interItemSpacing = .fixed(200.0)
```

**Objective-C**

```objc
[group setInterItemSpacing: [NSCollectionLayoutSpacing fixedSpacing:200.0]];
```

Use *flexible spacing* to provide a minimum amount of space that can grow as more space becomes available. For example, the following code creates at least 200 points of space between the items in the group. As more space becomes available, items are respaced evenly in the additional space.

**Swift**

```swift
group.interItemSpacing = .flexible(200.0)
```

**Objective-C**

```objc
[group setInterItemSpacing: [NSCollectionLayoutSpacing flexibleSpacing:200.0]];
```

## Topics

### Creating spacing

- [fixedSpacing:](nscollectionlayoutspacing/fixed%28__%29.md): Creates a space equivalent to the specified number of points.
- [flexibleSpacing:](nscollectionlayoutspacing/flexible%28__%29.md): Creates a space equivalent to or greater than the specified number of points, depending on the available space.

### Getting the spacing value

- [spacing](nscollectionlayoutspacing/spacing.md): The floating-point value of the space.

### Getting the spacing type

- [isFixedSpacing](nscollectionlayoutspacing/isfixed.md): A Boolean value that indicates whether the space is fixed to a specific number of points.
- [isFlexibleSpacing](nscollectionlayoutspacing/isflexible.md): A Boolean value that indicates whether the space is flexible.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Size and spacing

- [NSCollectionLayoutDimension](nscollectionlayoutdimension.md): An individual dimension representing an item’s width or height in a collection view.
- [NSCollectionLayoutSize](nscollectionlayoutsize.md): The width and the height of an item in a collection view.
- [NSCollectionLayoutEdgeSpacing](nscollectionlayoutedgespacing.md): An object that defines the space around the edges of items in a collection view.
- [NSCollectionLayoutContainer](nscollectionlayoutcontainer.md): A protocol used to provide information about the size and content insets of a layout’s container.
