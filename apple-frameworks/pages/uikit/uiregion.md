> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiregion](https://developer.apple.com/documentation/uikit/uiregion)

# UIRegion (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A shape for use in UIKit Dynamics.

## Declaration

```swift
@MainActor class UIRegion
```

<a id="overview"></a>

## Overview

When creating animations, you use regions to define the effective area of a field behavior such as a magnetic or gravitational force. Most regions are rectangular or elliptical in shape, but you can use the methods of this class to create more complex shapes by adding, subtracting, and intersecting other regions.

When creating a new region, you specify only the size of the corresponding rectangle or circle. The origin of a newly created region is at the center of the specified area, and any mathematical manipulations you make to the region occur relative to that origin point.

## Topics

### Creating and initializing regions

- [infinite](uiregion/infinite.md): Returns the region that encloses all points.
- [init(size:)](uiregion/init%28size_%29.md): Initializes and returns a rectangular region of the specified size.
- [init(radius:)](uiregion/init%28radius_%29.md): Initializes and returns a region with a circular shape of the specified radius.

### Creating complex regions

- [inverse()](uiregion/inverse%28%29.md): Returns a new region that’s the mathematical inverse of the current region.
- [byDifference(from:)](uiregion/bydifference%28from_%29.md): Returns a new region created by subtracting the specified region from the current region.
- [byIntersection(with:)](uiregion/byintersection%28with_%29.md): Returns a new region containing only the area occupied by both the specified region and current region.
- [byUnion(with:)](uiregion/byunion%28with_%29.md): Returns a new region containing the combined areas of the specified region and the current region.

### Interacting with a region

- [contains(\_:)](uiregion/contains%28__%29.md): Returns a Boolean indicating whether the specified point is inside of the current region.

### Initializers

- [init(coder:)](uiregion/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# UIRegion (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A shape for use in UIKit Dynamics.

## Declaration

```objectivec
@interface UIRegion : NSObject
```

<a id="overview"></a>

## Overview

When creating animations, you use regions to define the effective area of a field behavior such as a magnetic or gravitational force. Most regions are rectangular or elliptical in shape, but you can use the methods of this class to create more complex shapes by adding, subtracting, and intersecting other regions.

When creating a new region, you specify only the size of the corresponding rectangle or circle. The origin of a newly created region is at the center of the specified area, and any mathematical manipulations you make to the region occur relative to that origin point.

## Topics

### Creating and initializing regions

- [infiniteRegion](uiregion/infinite.md): Returns the region that encloses all points.
- [initWithSize:](uiregion/init%28size_%29.md): Initializes and returns a rectangular region of the specified size.
- [initWithRadius:](uiregion/init%28radius_%29.md): Initializes and returns a region with a circular shape of the specified radius.

### Creating complex regions

- [inverseRegion](uiregion/inverse%28%29.md): Returns a new region that’s the mathematical inverse of the current region.
- [regionByDifferenceFromRegion:](uiregion/bydifference%28from_%29.md): Returns a new region created by subtracting the specified region from the current region.
- [regionByIntersectionWithRegion:](uiregion/byintersection%28with_%29.md): Returns a new region containing only the area occupied by both the specified region and current region.
- [regionByUnionWithRegion:](uiregion/byunion%28with_%29.md): Returns a new region containing the combined areas of the specified region and the current region.

### Interacting with a region

- [containsPoint:](uiregion/contains%28__%29.md): Returns a Boolean indicating whether the specified point is inside of the current region.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
