> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cglinecap](https://developer.apple.com/documentation/coregraphics/cglinecap)

# CGLineCap (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Styles for rendering the endpoint of a stroked line.

## Declaration

```swift
enum CGLineCap
```

<a id="overview"></a>

## Overview

A line cap specifies the method used by [strokePath()](cgcontext/strokepath%28%29.md) to draw the endpoint of the line. To change the line cap style in a graphics context, you use the function [setLineCap(\_:)](cgcontext/setlinecap%28__%29.md).

## Topics

### Constants

- [CGLineCap.butt](cglinecap/butt.md): A line with a squared-off end. Core Graphics draws the line to extend only to the exact endpoint of the path. This is the default.
- [CGLineCap.round](cglinecap/round.md): A line with a rounded end. Core Graphics draws the line to extend beyond the endpoint of the path. The line ends with a semicircular arc with a radius of 1/2 the line’s width, centered on the endpoint.
- [CGLineCap.square](cglinecap/square.md): A line with a squared-off end. Core Graphics extends the line beyond the endpoint of the path for a distance equal to half the line width.

### Initializers

- [init(rawValue:)](cglinecap/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CGLineCap (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Styles for rendering the endpoint of a stroked line.

## Declaration

```objectivec
enum CGLineCap : int32_t;
```

<a id="overview"></a>

## Overview

A line cap specifies the method used by [CGContextStrokePath](cgcontext/strokepath%28%29.md) to draw the endpoint of the line. To change the line cap style in a graphics context, you use the function [CGContextSetLineCap](cgcontext/setlinecap%28__%29.md).

## Topics

### Constants

- [kCGLineCapButt](cglinecap/butt.md): A line with a squared-off end. Core Graphics draws the line to extend only to the exact endpoint of the path. This is the default.
- [kCGLineCapRound](cglinecap/round.md): A line with a rounded end. Core Graphics draws the line to extend beyond the endpoint of the path. The line ends with a semicircular arc with a radius of 1/2 the line’s width, centered on the endpoint.
- [kCGLineCapSquare](cglinecap/square.md): A line with a squared-off end. Core Graphics extends the line beyond the endpoint of the path for a distance equal to half the line width.

## See Also

### Constants

- [CGPathDrawingMode](cgpathdrawingmode.md): Options for rendering a path.
- [CGPathElementType](cgpathelementtype.md): The type of element found in a path.
- [CGLineJoin](cglinejoin.md): Junction types for stroked lines.
