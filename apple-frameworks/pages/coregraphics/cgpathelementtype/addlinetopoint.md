> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathelementtype/addlinetopoint](https://developer.apple.com/documentation/coregraphics/cgpathelementtype/addlinetopoint)

# CGPathElementType.addLineToPoint (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The path element that adds a line from the current point to a new point.

## Declaration

```swift
case addLineToPoint
```

<a id="discussion"></a>

## Discussion

The element holds a single point for the destination. See the function [CGPathAddLineToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddlinetopoint).

## See Also

### Constants

- [CGPathElementType.moveToPoint](movetopoint.md): The path element that starts a new subpath.
- [CGPathElementType.addQuadCurveToPoint](addquadcurvetopoint.md): The path element that adds a quadratic curve from the current point to the specified point.
- [CGPathElementType.addCurveToPoint](addcurvetopoint.md): The path element that adds a cubic curve from the current point to the specified point.
- [CGPathElementType.closeSubpath](closesubpath.md): The path element that closes and completes a subpath. The element does not contain any points. See the function [closeSubpath()](../cgmutablepath/closesubpath%28%29.md).

# kCGPathElementAddLineToPoint (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The path element that adds a line from the current point to a new point.

## Declaration

```objectivec
kCGPathElementAddLineToPoint
```

<a id="discussion"></a>

## Discussion

The element holds a single point for the destination. See the function [CGPathAddLineToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddlinetopoint).

## See Also

### Constants

- [kCGPathElementMoveToPoint](movetopoint.md): The path element that starts a new subpath.
- [kCGPathElementAddQuadCurveToPoint](addquadcurvetopoint.md): The path element that adds a quadratic curve from the current point to the specified point.
- [kCGPathElementAddCurveToPoint](addcurvetopoint.md): The path element that adds a cubic curve from the current point to the specified point.
- [kCGPathElementCloseSubpath](closesubpath.md): The path element that closes and completes a subpath. The element does not contain any points. See the function [CGPathCloseSubpath](../cgmutablepath/closesubpath%28%29.md).
