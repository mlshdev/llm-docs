> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathelementtype/movetopoint](https://developer.apple.com/documentation/coregraphics/cgpathelementtype/movetopoint)

# CGPathElementType.moveToPoint (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The path element that starts a new subpath.

## Declaration

```swift
case moveToPoint
```

<a id="discussion"></a>

## Discussion

The element holds a single point for the destination. See the function [CGPathMoveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathmovetopoint).

## See Also

### Constants

- [CGPathElementType.addLineToPoint](addlinetopoint.md): The path element that adds a line from the current point to a new point.
- [CGPathElementType.addQuadCurveToPoint](addquadcurvetopoint.md): The path element that adds a quadratic curve from the current point to the specified point.
- [CGPathElementType.addCurveToPoint](addcurvetopoint.md): The path element that adds a cubic curve from the current point to the specified point.
- [CGPathElementType.closeSubpath](closesubpath.md): The path element that closes and completes a subpath. The element does not contain any points. See the function [closeSubpath()](../cgmutablepath/closesubpath%28%29.md).

# kCGPathElementMoveToPoint (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The path element that starts a new subpath.

## Declaration

```objectivec
kCGPathElementMoveToPoint
```

<a id="discussion"></a>

## Discussion

The element holds a single point for the destination. See the function [CGPathMoveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathmovetopoint).

## See Also

### Constants

- [kCGPathElementAddLineToPoint](addlinetopoint.md): The path element that adds a line from the current point to a new point.
- [kCGPathElementAddQuadCurveToPoint](addquadcurvetopoint.md): The path element that adds a quadratic curve from the current point to the specified point.
- [kCGPathElementAddCurveToPoint](addcurvetopoint.md): The path element that adds a cubic curve from the current point to the specified point.
- [kCGPathElementCloseSubpath](closesubpath.md): The path element that closes and completes a subpath. The element does not contain any points. See the function [CGPathCloseSubpath](../cgmutablepath/closesubpath%28%29.md).
