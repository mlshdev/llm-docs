> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uirectedge](https://developer.apple.com/documentation/uikit/uirectedge)

# UIRectEdge (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constants that specify the edges of a rectangle.

## Declaration

```swift
struct UIRectEdge
```

<a id="overview"></a>

## Overview

You can add these constants together to specify multiple edges at the same time.

## Topics

### Edges

- [top](uirectedge/top.md): The top edge of the rectangle.
- [left](uirectedge/left.md): The left edge of the rectangle.
- [bottom](uirectedge/bottom.md): The bottom edge of the rectangle.
- [right](uirectedge/right.md): The right edge of the rectangle.
- [all](uirectedge/all.md): All edges of the rectangle.

### Initializers

- [init(rawValue:)](uirectedge/init%28rawvalue_%29.md): Creates an edges structure with the specified raw value.

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

## See Also

### Specifying the starting edges

- [edges](uiscreenedgepangesturerecognizer/edges.md): The acceptable starting edges for the gesture.

# UIRectEdge (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constants that specify the edges of a rectangle.

## Declaration

```objectivec
enum UIRectEdge : NSUInteger;
```

<a id="overview"></a>

## Overview

You can add these constants together to specify multiple edges at the same time.

## Topics

### Edges

- [UIRectEdgeNone](uirectedge/uirectedgenone.md): No edge.
- [UIRectEdgeTop](uirectedge/top.md): The top edge of the rectangle.
- [UIRectEdgeLeft](uirectedge/left.md): The left edge of the rectangle.
- [UIRectEdgeBottom](uirectedge/bottom.md): The bottom edge of the rectangle.
- [UIRectEdgeRight](uirectedge/right.md): The right edge of the rectangle.
- [UIRectEdgeAll](uirectedge/all.md): All edges of the rectangle.

## See Also

### Specifying the starting edges

- [edges](uiscreenedgepangesturerecognizer/edges.md): The acceptable starting edges for the gesture.
