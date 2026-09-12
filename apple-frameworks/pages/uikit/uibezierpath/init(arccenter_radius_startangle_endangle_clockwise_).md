> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/init(arccenter:radius:startangle:endangle:clockwise:)](https://developer.apple.com/documentation/uikit/uibezierpath/init(arccenter:radius:startangle:endangle:clockwise:))

# init(arcCenter:radius:startAngle:endAngle:clockwise:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new Bézier path object with an arc of a circle.

## Declaration

```swift
convenience init(arcCenter center: CGPoint, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat, clockwise: Bool)
```

## Parameters

- `center`: Specifies the center point of the circle (in the current coordinate system) used to define the arc.
- `radius`: Specifies the radius of the circle used to define the arc.
- `startAngle`: Specifies the starting angle of the arc (measured in radians).
- `endAngle`: Specifies the end angle of the arc (measured in radians).
- `clockwise`: The direction in which to draw the arc.

<a id="return-value"></a>

## Return Value

A new path object with the specified arc.

<a id="Discussion"></a>

## Discussion

This method creates an open subpath. The created arc lies on the perimeter of the specified circle. When drawn in the default coordinate system, the start and end angles are based on the unit circle shown in the following image. For example, specifying a start angle of `0` radians, an end angle of `π` radians, and setting the `clockwise` parameter to [true](https://developer.apple.com/documentation/swift/true) draws the bottom half of the circle. However, specifying the same start and end angles but setting the `clockwise` parameter to [false](https://developer.apple.com/documentation/swift/false) draws the top half of the circle.

![](https://developer.apple.com/images/com.apple.uikit/media-1965853.jpg)

After calling this method, the current point is set to the point on the arc at the end angle of the circle.

## See Also

### Creating a Bézier path

- [init(rect:)](init%28rect_%29.md): Creates and returns a new Bézier path object with a rectangular path.
- [init(ovalIn:)](init%28ovalin_%29.md): Creates and returns a new Bézier path object with an inscribed oval path in the specified rectangle.
- [init(roundedRect:cornerRadius:)](init%28roundedrect_cornerradius_%29.md): Creates and returns a new Bézier path object with a rounded rectangular path.
- [init(roundedRect:byRoundingCorners:cornerRadii:)](init%28roundedrect_byroundingcorners_cornerradii_%29.md): Creates and returns a new Bézier path object with a rectangular path rounded at the specified corners.
- [init(cgPath:)](init%28cgpath_%29-833n8.md): Creates and returns a new Bézier path object with the contents of a Core Graphics path.
- [reversing()](reversing%28%29.md): Creates and returns a new Bézier path object with the reversed contents of the current path.
- [init()](init%28%29.md): Creates and returns an empty path object.
- [init(coder:)](init%28coder_%29.md): Creates a Bézier path object from data in an unarchiver.

# bezierPathWithArcCenter:radius:startAngle:endAngle:clockwise: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new Bézier path object with an arc of a circle.

## Declaration

```objectivec
+ (instancetype) bezierPathWithArcCenter:(CGPoint) center radius:(CGFloat) radius startAngle:(CGFloat) startAngle endAngle:(CGFloat) endAngle clockwise:(BOOL) clockwise;
```

## Parameters

- `center`: Specifies the center point of the circle (in the current coordinate system) used to define the arc.
- `radius`: Specifies the radius of the circle used to define the arc.
- `startAngle`: Specifies the starting angle of the arc (measured in radians).
- `endAngle`: Specifies the end angle of the arc (measured in radians).
- `clockwise`: The direction in which to draw the arc.

<a id="return-value"></a>

## Return Value

A new path object with the specified arc.

<a id="Discussion"></a>

## Discussion

This method creates an open subpath. The created arc lies on the perimeter of the specified circle. When drawn in the default coordinate system, the start and end angles are based on the unit circle shown in the following image. For example, specifying a start angle of `0` radians, an end angle of `π` radians, and setting the `clockwise` parameter to [true](https://developer.apple.com/documentation/swift/true) draws the bottom half of the circle. However, specifying the same start and end angles but setting the `clockwise` parameter to [false](https://developer.apple.com/documentation/swift/false) draws the top half of the circle.

![](https://developer.apple.com/images/com.apple.uikit/media-1965853.jpg)

After calling this method, the current point is set to the point on the arc at the end angle of the circle.

## See Also

### Creating a Bézier path

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithRect:](init%28rect_%29.md): Creates and returns a new Bézier path object with a rectangular path.
- [bezierPathWithOvalInRect:](init%28ovalin_%29.md): Creates and returns a new Bézier path object with an inscribed oval path in the specified rectangle.
- [bezierPathWithRoundedRect:cornerRadius:](init%28roundedrect_cornerradius_%29.md): Creates and returns a new Bézier path object with a rounded rectangular path.
- [bezierPathWithRoundedRect:byRoundingCorners:cornerRadii:](init%28roundedrect_byroundingcorners_cornerradii_%29.md): Creates and returns a new Bézier path object with a rectangular path rounded at the specified corners.
- [bezierPathWithCGPath:](init%28cgpath_%29-833n8.md): Creates and returns a new Bézier path object with the contents of a Core Graphics path.
- [bezierPathByReversingPath](reversing%28%29.md): Creates and returns a new Bézier path object with the reversed contents of the current path.
- [init](init%28%29.md): Creates and returns an empty path object.
- [initWithCoder:](init%28coder_%29.md): Creates a Bézier path object from data in an unarchiver.
