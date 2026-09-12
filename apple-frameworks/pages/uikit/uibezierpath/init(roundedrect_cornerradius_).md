> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/init(roundedrect:cornerradius:)](https://developer.apple.com/documentation/uikit/uibezierpath/init(roundedrect:cornerradius:))

# init(roundedRect:cornerRadius:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new Bézier path object with a rounded rectangular path.

## Declaration

```swift
convenience init(roundedRect rect: CGRect, cornerRadius: CGFloat)
```

## Parameters

- `rect`: The rectangle that defines the basic shape of the path.
- `cornerRadius`: The radius of each corner oval. A value of `0` results in a rectangle without rounded corners. Values larger than half the rectangle’s width or height are clamped appropriately to half the width or height.

<a id="return-value"></a>

## Return Value

A new path object with the rounded rectangular path.

<a id="Discussion"></a>

## Discussion

This method creates a closed subpath, proceeding in a clockwise direction (relative to the default coordinate system) as it creates the necessary line and curve segments.

## See Also

### Creating a Bézier path

- [init(rect:)](init%28rect_%29.md): Creates and returns a new Bézier path object with a rectangular path.
- [init(ovalIn:)](init%28ovalin_%29.md): Creates and returns a new Bézier path object with an inscribed oval path in the specified rectangle.
- [init(roundedRect:byRoundingCorners:cornerRadii:)](init%28roundedrect_byroundingcorners_cornerradii_%29.md): Creates and returns a new Bézier path object with a rectangular path rounded at the specified corners.
- [init(arcCenter:radius:startAngle:endAngle:clockwise:)](init%28arccenter_radius_startangle_endangle_clockwise_%29.md): Creates and returns a new Bézier path object with an arc of a circle.
- [init(cgPath:)](init%28cgpath_%29-833n8.md): Creates and returns a new Bézier path object with the contents of a Core Graphics path.
- [reversing()](reversing%28%29.md): Creates and returns a new Bézier path object with the reversed contents of the current path.
- [init()](init%28%29.md): Creates and returns an empty path object.
- [init(coder:)](init%28coder_%29.md): Creates a Bézier path object from data in an unarchiver.

# bezierPathWithRoundedRect:cornerRadius: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new Bézier path object with a rounded rectangular path.

## Declaration

```objectivec
+ (instancetype) bezierPathWithRoundedRect:(CGRect) rect cornerRadius:(CGFloat) cornerRadius;
```

## Parameters

- `rect`: The rectangle that defines the basic shape of the path.
- `cornerRadius`: The radius of each corner oval. A value of `0` results in a rectangle without rounded corners. Values larger than half the rectangle’s width or height are clamped appropriately to half the width or height.

<a id="return-value"></a>

## Return Value

A new path object with the rounded rectangular path.

<a id="Discussion"></a>

## Discussion

This method creates a closed subpath, proceeding in a clockwise direction (relative to the default coordinate system) as it creates the necessary line and curve segments.

## See Also

### Creating a Bézier path

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithRect:](init%28rect_%29.md): Creates and returns a new Bézier path object with a rectangular path.
- [bezierPathWithOvalInRect:](init%28ovalin_%29.md): Creates and returns a new Bézier path object with an inscribed oval path in the specified rectangle.
- [bezierPathWithRoundedRect:byRoundingCorners:cornerRadii:](init%28roundedrect_byroundingcorners_cornerradii_%29.md): Creates and returns a new Bézier path object with a rectangular path rounded at the specified corners.
- [bezierPathWithArcCenter:radius:startAngle:endAngle:clockwise:](init%28arccenter_radius_startangle_endangle_clockwise_%29.md): Creates and returns a new Bézier path object with an arc of a circle.
- [bezierPathWithCGPath:](init%28cgpath_%29-833n8.md): Creates and returns a new Bézier path object with the contents of a Core Graphics path.
- [bezierPathByReversingPath](reversing%28%29.md): Creates and returns a new Bézier path object with the reversed contents of the current path.
- [init](init%28%29.md): Creates and returns an empty path object.
- [initWithCoder:](init%28coder_%29.md): Creates a Bézier path object from data in an unarchiver.
