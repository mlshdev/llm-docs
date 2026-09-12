> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/elementtype](https://developer.apple.com/documentation/appkit/nsbezierpath/elementtype)

# NSBezierPath.ElementType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify basic path element commands.

## Declaration

```swift
enum ElementType
```

<a id="overview"></a>

## Overview

These commands are enough to define all of the possible path shapes. Each command has one or more points that contain information needed to position the path element. Most path elements use the current drawing point as the starting point for drawing. For more information, see [NSBezierPath](../nsbezierpath.md).

## Topics

### Constants

- [NSBezierPath.ElementType.moveTo](elementtype/moveto.md): Moves the path object’s current drawing point to the specified point.
- [NSBezierPath.ElementType.lineTo](elementtype/lineto.md): Creates a straight line from the current drawing point to the specified point.
- [NSBezierPath.ElementType.closePath](elementtype/closepath.md): Marks the end of the current subpath at the specified point.
- [curveTo](elementtype/curveto.md): Deprecated. Creates a curved line segment from the current point to the specified endpoint using two control points to define the curve.
- [NSBezierPath.ElementType.cubicCurveTo](elementtype/cubiccurveto.md)
- [NSBezierPath.ElementType.quadraticCurveTo](elementtype/quadraticcurveto.md)

### Initializers

- [init(rawValue:)](elementtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSBezierPath.LineJoinStyle](linejoinstyle-swift.enum.md): Constants that specify the shape of the joins between connected segments of a stroked path.
- [NSBezierPath.LineCapStyle](linecapstyle-swift.enum.md): Constants that specify the shape of endpoints for an open path when it is stroked.
- [NSBezierPath.WindingRule](windingrule-swift.enum.md): Constants that specify the winding rule a Bézier path uses.

# NSBezierPathElement (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify basic path element commands.

## Declaration

```objectivec
enum NSBezierPathElement : NSUInteger;
```

<a id="overview"></a>

## Overview

These commands are enough to define all of the possible path shapes. Each command has one or more points that contain information needed to position the path element. Most path elements use the current drawing point as the starting point for drawing. For more information, see [NSBezierPath](../nsbezierpath.md).

## Topics

### Constants

- [NSBezierPathElementMoveTo](elementtype/moveto.md): Moves the path object’s current drawing point to the specified point.
- [NSBezierPathElementLineTo](elementtype/lineto.md): Creates a straight line from the current drawing point to the specified point.
- [NSBezierPathElementClosePath](elementtype/closepath.md): Marks the end of the current subpath at the specified point.
- [NSBezierPathElementCurveTo](elementtype/curveto.md): Deprecated. Creates a curved line segment from the current point to the specified endpoint using two control points to define the curve.
- [NSBezierPathElementCubicCurveTo](elementtype/cubiccurveto.md)
- [NSBezierPathElementQuadraticCurveTo](elementtype/quadraticcurveto.md)

### Deprecated Constants

- [NSMoveToBezierPathElement](../nsmovetobezierpathelement.md): Deprecated. Moves the path object’s current drawing point to the specified point.
- [NSLineToBezierPathElement](../nslinetobezierpathelement.md): Deprecated. Creates a straight line from the current drawing point to the specified point.
- [NSCurveToBezierPathElement](../nscurvetobezierpathelement.md): Deprecated. Creates a curved line segment from the current point to the specified endpoint using two control points to define the curve.
- [NSClosePathBezierPathElement](../nsclosepathbezierpathelement.md): Deprecated. Marks the end of the current subpath at the specified point.

## See Also

### Constants

- [NSLineJoinStyle](linejoinstyle-swift.enum.md): Constants that specify the shape of the joins between connected segments of a stroked path.
- [NSLineCapStyle](linecapstyle-swift.enum.md): Constants that specify the shape of endpoints for an open path when it is stroked.
- [NSWindingRule](windingrule-swift.enum.md): Constants that specify the winding rule a Bézier path uses.
