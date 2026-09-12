> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/addclip()](https://developer.apple.com/documentation/uikit/uibezierpath/addclip())

# addClip() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Uses the clipping path of the current graphics context to intersect the region that the path encloses, and makes the resulting shape the current clipping path.

## Declaration

```swift
func addClip()
```

<a id="Discussion"></a>

## Discussion

This method modifies the visible drawing area of the current graphics context. After calling it, subsequent drawing operations result in rendered content only if they occur within the fill area of the specified path.

> **Important**

>  If you need to remove the clipping region to perform subsequent drawing operations, you must save the current graphics state (using the [saveGState()](../../coregraphics/cgcontext/savegstate%28%29.md) function) before calling this method. When you no longer need the clipping region, you can then restore the previous drawing properties and clipping region using the [restoreGState()](../../coregraphics/cgcontext/restoregstate%28%29.md) function.

The [usesEvenOddFillRule](usesevenoddfillrule.md) property is used to determine whether the even-odd or non-zero rule is used to determine the area enclosed by the path.

# addClip (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Uses the clipping path of the current graphics context to intersect the region that the path encloses, and makes the resulting shape the current clipping path.

## Declaration

```objectivec
- (void) addClip;
```

<a id="Discussion"></a>

## Discussion

This method modifies the visible drawing area of the current graphics context. After calling it, subsequent drawing operations result in rendered content only if they occur within the fill area of the specified path.

> **Important**

>  If you need to remove the clipping region to perform subsequent drawing operations, you must save the current graphics state (using the [CGContextSaveGState](../../coregraphics/cgcontext/savegstate%28%29.md) function) before calling this method. When you no longer need the clipping region, you can then restore the previous drawing properties and clipping region using the [CGContextRestoreGState](../../coregraphics/cgcontext/restoregstate%28%29.md) function.

The [usesEvenOddFillRule](usesevenoddfillrule.md) property is used to determine whether the even-odd or non-zero rule is used to determine the area enclosed by the path.
