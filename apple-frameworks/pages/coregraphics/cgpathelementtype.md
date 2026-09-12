> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathelementtype](https://developer.apple.com/documentation/coregraphics/cgpathelementtype)

# CGPathElementType (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The type of element found in a path.

## Declaration

```swift
enum CGPathElementType
```

<a id="overview"></a>

## Overview

For more information about paths, see [CGPath](cgpath.md).

## Topics

### Constants

- [CGPathElementType.moveToPoint](cgpathelementtype/movetopoint.md): The path element that starts a new subpath.
- [CGPathElementType.addLineToPoint](cgpathelementtype/addlinetopoint.md): The path element that adds a line from the current point to a new point.
- [CGPathElementType.addQuadCurveToPoint](cgpathelementtype/addquadcurvetopoint.md): The path element that adds a quadratic curve from the current point to the specified point.
- [CGPathElementType.addCurveToPoint](cgpathelementtype/addcurvetopoint.md): The path element that adds a cubic curve from the current point to the specified point.
- [CGPathElementType.closeSubpath](cgpathelementtype/closesubpath.md): The path element that closes and completes a subpath. The element does not contain any points. See the function [closeSubpath()](cgmutablepath/closesubpath%28%29.md).

### Initializers

- [init(rawValue:)](cgpathelementtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Applying a Function to the Elements of a Path

- [apply(info:function:)](cgpath/apply%28info_function_%29.md): For each element in a graphics path, calls a custom applier function.
- [CGPathApplierFunction](cgpathapplierfunction.md): Defines a callback function that can view an element in a graphics path.
- [CGPathElement](cgpathelement.md): A data structure that provides information about a path element.

# CGPathElementType (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The type of element found in a path.

## Declaration

```objectivec
enum CGPathElementType : int32_t;
```

<a id="overview"></a>

## Overview

For more information about paths, see [CGPathRef](cgpath.md).

## Topics

### Constants

- [kCGPathElementMoveToPoint](cgpathelementtype/movetopoint.md): The path element that starts a new subpath.
- [kCGPathElementAddLineToPoint](cgpathelementtype/addlinetopoint.md): The path element that adds a line from the current point to a new point.
- [kCGPathElementAddQuadCurveToPoint](cgpathelementtype/addquadcurvetopoint.md): The path element that adds a quadratic curve from the current point to the specified point.
- [kCGPathElementAddCurveToPoint](cgpathelementtype/addcurvetopoint.md): The path element that adds a cubic curve from the current point to the specified point.
- [kCGPathElementCloseSubpath](cgpathelementtype/closesubpath.md): The path element that closes and completes a subpath. The element does not contain any points. See the function [CGPathCloseSubpath](cgmutablepath/closesubpath%28%29.md).

## See Also

### Applying a Function to the Elements of a Path

- [CGPathApply](cgpath/apply%28info_function_%29.md): For each element in a graphics path, calls a custom applier function.
- [CGPathApplierFunction](cgpathapplierfunction.md): Defines a callback function that can view an element in a graphics path.
- [CGPathElement](cgpathelement.md): A data structure that provides information about a path element.
