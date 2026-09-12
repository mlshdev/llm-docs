> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathelementtype/addquadcurvetopoint](https://developer.apple.com/documentation/coregraphics/cgpathelementtype/addquadcurvetopoint)

# CGPathElementType.addQuadCurveToPoint (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The path element that adds a quadratic curve from the current point to the specified point.

## Declaration

```swift
case addQuadCurveToPoint
```

<a id="discussion"></a>

## Discussion

The element holds a control point and a destination point. See the function [CGPathAddQuadCurveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddquadcurvetopoint).

## See Also

### Constants

- [CGPathElementType.moveToPoint](movetopoint.md): The path element that starts a new subpath.
- [CGPathElementType.addLineToPoint](addlinetopoint.md): The path element that adds a line from the current point to a new point.
- [CGPathElementType.addCurveToPoint](addcurvetopoint.md): The path element that adds a cubic curve from the current point to the specified point.
- [CGPathElementType.closeSubpath](closesubpath.md): The path element that closes and completes a subpath. The element does not contain any points. See the function [closeSubpath()](../cgmutablepath/closesubpath%28%29.md).

# kCGPathElementAddQuadCurveToPoint (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The path element that adds a quadratic curve from the current point to the specified point.

## Declaration

```objectivec
kCGPathElementAddQuadCurveToPoint
```

<a id="discussion"></a>

## Discussion

The element holds a control point and a destination point. See the function [CGPathAddQuadCurveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddquadcurvetopoint).

## See Also

### Constants

- [kCGPathElementMoveToPoint](movetopoint.md): The path element that starts a new subpath.
- [kCGPathElementAddLineToPoint](addlinetopoint.md): The path element that adds a line from the current point to a new point.
- [kCGPathElementAddCurveToPoint](addcurvetopoint.md): The path element that adds a cubic curve from the current point to the specified point.
- [kCGPathElementCloseSubpath](closesubpath.md): The path element that closes and completes a subpath. The element does not contain any points. See the function [CGPathCloseSubpath](../cgmutablepath/closesubpath%28%29.md).
