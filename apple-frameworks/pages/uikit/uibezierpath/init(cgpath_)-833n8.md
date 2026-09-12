> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/init(cgpath:)-833n8](https://developer.apple.com/documentation/uikit/uibezierpath/init(cgpath:)-833n8)

# init(cgPath:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new Bézier path object with the contents of a Core Graphics path.

## Declaration

```swift
convenience init(cgPath CGPath: CGPath)
```

## Parameters

- `CGPath`: The Core Graphics path from which to obtain the initial path information. If this parameter is `nil`, the method raises an exception.

<a id="return-value"></a>

## Return Value

A new path object with the specified path information.

## See Also

### Creating a Bézier path

- [init(rect:)](init%28rect_%29.md): Creates and returns a new Bézier path object with a rectangular path.
- [init(ovalIn:)](init%28ovalin_%29.md): Creates and returns a new Bézier path object with an inscribed oval path in the specified rectangle.
- [init(roundedRect:cornerRadius:)](init%28roundedrect_cornerradius_%29.md): Creates and returns a new Bézier path object with a rounded rectangular path.
- [init(roundedRect:byRoundingCorners:cornerRadii:)](init%28roundedrect_byroundingcorners_cornerradii_%29.md): Creates and returns a new Bézier path object with a rectangular path rounded at the specified corners.
- [init(arcCenter:radius:startAngle:endAngle:clockwise:)](init%28arccenter_radius_startangle_endangle_clockwise_%29.md): Creates and returns a new Bézier path object with an arc of a circle.
- [reversing()](reversing%28%29.md): Creates and returns a new Bézier path object with the reversed contents of the current path.
- [init()](init%28%29.md): Creates and returns an empty path object.
- [init(coder:)](init%28coder_%29.md): Creates a Bézier path object from data in an unarchiver.

# bezierPathWithCGPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new Bézier path object with the contents of a Core Graphics path.

## Declaration

```objectivec
+ (instancetype) bezierPathWithCGPath:(CGPathRef) CGPath;
```

## Parameters

- `CGPath`: The Core Graphics path from which to obtain the initial path information. If this parameter is `nil`, the method raises an exception.

<a id="return-value"></a>

## Return Value

A new path object with the specified path information.

## See Also

### Creating a Bézier path

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithRect:](init%28rect_%29.md): Creates and returns a new Bézier path object with a rectangular path.
- [bezierPathWithOvalInRect:](init%28ovalin_%29.md): Creates and returns a new Bézier path object with an inscribed oval path in the specified rectangle.
- [bezierPathWithRoundedRect:cornerRadius:](init%28roundedrect_cornerradius_%29.md): Creates and returns a new Bézier path object with a rounded rectangular path.
- [bezierPathWithRoundedRect:byRoundingCorners:cornerRadii:](init%28roundedrect_byroundingcorners_cornerradii_%29.md): Creates and returns a new Bézier path object with a rectangular path rounded at the specified corners.
- [bezierPathWithArcCenter:radius:startAngle:endAngle:clockwise:](init%28arccenter_radius_startangle_endangle_clockwise_%29.md): Creates and returns a new Bézier path object with an arc of a circle.
- [bezierPathByReversingPath](reversing%28%29.md): Creates and returns a new Bézier path object with the reversed contents of the current path.
- [init](init%28%29.md): Creates and returns an empty path object.
- [initWithCoder:](init%28coder_%29.md): Creates a Bézier path object from data in an unarchiver.
