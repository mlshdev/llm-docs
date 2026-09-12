> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathdrawingmode](https://developer.apple.com/documentation/coregraphics/cgpathdrawingmode)

# CGPathDrawingMode (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for rendering a path.

## Declaration

```swift
enum CGPathDrawingMode
```

<a id="overview"></a>

## Overview

You can pass a path drawing mode constant to the function [drawPath(using:)](cgcontext/drawpath%28using_%29.md) to specify how Core Graphics should paint a graphics context’s current path.

## Topics

### Constants

- [CGPathDrawingMode.fill](cgpathdrawingmode/fill.md): Render the area contained within the path using the non-zero winding number rule.
- [CGPathDrawingMode.eoFill](cgpathdrawingmode/eofill.md): Render the area within the path using the even-odd rule.
- [CGPathDrawingMode.stroke](cgpathdrawingmode/stroke.md): Render a line along the path.
- [CGPathDrawingMode.fillStroke](cgpathdrawingmode/fillstroke.md): First fill and then stroke the path, using the nonzero winding number rule.
- [CGPathDrawingMode.eoFillStroke](cgpathdrawingmode/eofillstroke.md): First fill and then stroke the path, using the even-odd rule.

### Initializers

- [init(rawValue:)](cgpathdrawingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drawing the Current Graphics Path

- [drawPath(using:)](cgcontext/drawpath%28using_%29.md): Draws the current path using the provided drawing mode.
- [fillPath(using:)](cgcontext/fillpath%28using_%29.md): Paints the area within the current path, as determined by the specified fill rule.
- [strokePath()](cgcontext/strokepath%28%29.md): Paints a line along the current path.

# CGPathDrawingMode (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for rendering a path.

## Declaration

```objectivec
enum CGPathDrawingMode : int32_t;
```

<a id="overview"></a>

## Overview

You can pass a path drawing mode constant to the function [CGContextDrawPath](cgcontext/drawpath%28using_%29.md) to specify how Core Graphics should paint a graphics context’s current path.

## Topics

### Constants

- [kCGPathFill](cgpathdrawingmode/fill.md): Render the area contained within the path using the non-zero winding number rule.
- [kCGPathEOFill](cgpathdrawingmode/eofill.md): Render the area within the path using the even-odd rule.
- [kCGPathStroke](cgpathdrawingmode/stroke.md): Render a line along the path.
- [kCGPathFillStroke](cgpathdrawingmode/fillstroke.md): First fill and then stroke the path, using the nonzero winding number rule.
- [kCGPathEOFillStroke](cgpathdrawingmode/eofillstroke.md): First fill and then stroke the path, using the even-odd rule.

## See Also

### Drawing the Current Graphics Path

- [CGContextDrawPath](cgcontext/drawpath%28using_%29.md): Draws the current path using the provided drawing mode.
- [CGContextEOFillPath](cgcontexteofillpath.md): Paints the area within the current path, using the even-odd fill rule.
- [CGContextFillPath](cgcontextfillpath.md): Paints the area within the current path, using the nonzero winding number rule.
- [CGContextStrokePath](cgcontext/strokepath%28%29.md): Paints a line along the current path.
