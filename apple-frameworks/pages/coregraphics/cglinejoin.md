> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cglinejoin](https://developer.apple.com/documentation/coregraphics/cglinejoin)

# CGLineJoin (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Junction types for stroked lines.

## Declaration

```swift
enum CGLineJoin
```

<a id="overview"></a>

## Overview

A line join specifies how [strokePath()](cgcontext/strokepath%28%29.md) draws the junction between connected line segments. To set the line join style in a graphics context, you use the function [setLineJoin(\_:)](cgcontext/setlinejoin%28__%29.md).

## Topics

### Constants

- [CGLineJoin.miter](cglinejoin/miter.md)
- [CGLineJoin.round](cglinejoin/round.md): A join with a rounded end. Core Graphics draws the line to extend beyond the endpoint of the path. The line ends with a semicircular arc with a radius of 1/2 the line’s width, centered on the endpoint.
- [CGLineJoin.bevel](cglinejoin/bevel.md): A join with a squared-off end. Core Graphics draws the line to extend beyond the endpoint of the path, for a distance of 1/2 the line’s width.

### Initializers

- [init(rawValue:)](cglinejoin/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CGLineJoin (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Junction types for stroked lines.

## Declaration

```objectivec
enum CGLineJoin : int32_t;
```

<a id="overview"></a>

## Overview

A line join specifies how [CGContextStrokePath](cgcontext/strokepath%28%29.md) draws the junction between connected line segments. To set the line join style in a graphics context, you use the function [CGContextSetLineJoin](cgcontext/setlinejoin%28__%29.md).

## Topics

### Constants

- [kCGLineJoinMiter](cglinejoin/miter.md)
- [kCGLineJoinRound](cglinejoin/round.md): A join with a rounded end. Core Graphics draws the line to extend beyond the endpoint of the path. The line ends with a semicircular arc with a radius of 1/2 the line’s width, centered on the endpoint.
- [kCGLineJoinBevel](cglinejoin/bevel.md): A join with a squared-off end. Core Graphics draws the line to extend beyond the endpoint of the path, for a distance of 1/2 the line’s width.

## See Also

### Constants

- [CGPathDrawingMode](cgpathdrawingmode.md): Options for rendering a path.
- [CGPathElementType](cgpathelementtype.md): The type of element found in a path.
- [CGLineCap](cglinecap.md): Styles for rendering the endpoint of a stroked line.
