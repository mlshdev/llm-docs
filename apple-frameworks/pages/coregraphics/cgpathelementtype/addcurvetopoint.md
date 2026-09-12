> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathelementtype/addcurvetopoint](https://developer.apple.com/documentation/coregraphics/cgpathelementtype/addcurvetopoint)

# CGPathElementType.addCurveToPoint (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The path element that adds a cubic curve from the current point to the specified point.

## Declaration

```swift
case addCurveToPoint
```

<a id="discussion"></a>

## Discussion

The element holds two control points and a destination point. See the function [CGPathAddCurveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddcurvetopoint).

## See Also

### Constants

- [CGPathElementType.moveToPoint](movetopoint.md): The path element that starts a new subpath.
- [CGPathElementType.addLineToPoint](addlinetopoint.md): The path element that adds a line from the current point to a new point.
- [CGPathElementType.addQuadCurveToPoint](addquadcurvetopoint.md): The path element that adds a quadratic curve from the current point to the specified point.
- [CGPathElementType.closeSubpath](closesubpath.md): The path element that closes and completes a subpath. The element does not contain any points. See the function [closeSubpath()](../cgmutablepath/closesubpath%28%29.md).

# kCGPathElementAddCurveToPoint (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The path element that adds a cubic curve from the current point to the specified point.

## Declaration

```objectivec
kCGPathElementAddCurveToPoint
```

<a id="discussion"></a>

## Discussion

The element holds two control points and a destination point. See the function [CGPathAddCurveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddcurvetopoint).

## See Also

### Constants

- [kCGPathElementMoveToPoint](movetopoint.md): The path element that starts a new subpath.
- [kCGPathElementAddLineToPoint](addlinetopoint.md): The path element that adds a line from the current point to a new point.
- [kCGPathElementAddQuadCurveToPoint](addquadcurvetopoint.md): The path element that adds a quadratic curve from the current point to the specified point.
- [kCGPathElementCloseSubpath](closesubpath.md): The path element that closes and completes a subpath. The element does not contain any points. See the function [CGPathCloseSubpath](../cgmutablepath/closesubpath%28%29.md).
