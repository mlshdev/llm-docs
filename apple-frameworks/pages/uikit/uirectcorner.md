> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uirectcorner](https://developer.apple.com/documentation/uikit/uirectcorner)

# UIRectCorner (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

The corners of a rectangle.

## Declaration

```swift
struct UIRectCorner
```

<a id="overview"></a>

## Overview

The specified constants reflect the corners of a rectangle that has not been modified by an affine transform and is drawn in the default coordinate system (where the origin is in the upper-left corner and positive values extend down and to the right).

## Topics

### Constants

- [topLeft](uirectcorner/topleft.md): The top-left corner of the rectangle.
- [topRight](uirectcorner/topright.md): The top-right corner of the rectangle.
- [bottomLeft](uirectcorner/bottomleft.md): The bottom-left corner of the rectangle.
- [bottomRight](uirectcorner/bottomright.md): The bottom-right corner of the rectangle.
- [allCorners](uirectcorner/allcorners.md): All corners of the rectangle.

### Initializer

- [init(rawValue:)](uirectcorner/init%28rawvalue_%29.md): Creates a structure that represents the corners of a rectangle.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# UIRectCorner (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

The corners of a rectangle.

## Declaration

```objectivec
enum UIRectCorner : NSUInteger;
```

<a id="overview"></a>

## Overview

The specified constants reflect the corners of a rectangle that has not been modified by an affine transform and is drawn in the default coordinate system (where the origin is in the upper-left corner and positive values extend down and to the right).

## Topics

### Constants

- [UIRectCornerTopLeft](uirectcorner/topleft.md): The top-left corner of the rectangle.
- [UIRectCornerTopRight](uirectcorner/topright.md): The top-right corner of the rectangle.
- [UIRectCornerBottomLeft](uirectcorner/bottomleft.md): The bottom-left corner of the rectangle.
- [UIRectCornerBottomRight](uirectcorner/bottomright.md): The bottom-right corner of the rectangle.
- [UIRectCornerAllCorners](uirectcorner/allcorners.md): All corners of the rectangle.
