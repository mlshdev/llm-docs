> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/reversing()](https://developer.apple.com/documentation/uikit/uibezierpath/reversing())

# reversing() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new Bézier path object with the reversed contents of the current path.

## Declaration

```swift
func reversing() -> UIBezierPath
```

<a id="return-value"></a>

## Return Value

A new path object with the same path shape but for which the path has been created in the reverse direction.

<a id="Discussion"></a>

## Discussion

Reversing a path does not necessarily change the appearance of the path when rendered. Instead, it changes the direction in which path segments are drawn. For example, reversing the path of a rectangle (whose line segments are normally drawn starting at the origin and proceeding in a counterclockwise direction) causes its line segments to be drawn in a clockwise direction instead. Drawing a reversed path could affect the appearance of a filled pattern, depending on the pattern and the fill rule in use.

This method reverses each whole or partial subpath in the path object individually.

## See Also

### Creating a Bézier path

- [init(rect:)](init%28rect_%29.md): Creates and returns a new Bézier path object with a rectangular path.
- [init(ovalIn:)](init%28ovalin_%29.md): Creates and returns a new Bézier path object with an inscribed oval path in the specified rectangle.
- [init(roundedRect:cornerRadius:)](init%28roundedrect_cornerradius_%29.md): Creates and returns a new Bézier path object with a rounded rectangular path.
- [init(roundedRect:byRoundingCorners:cornerRadii:)](init%28roundedrect_byroundingcorners_cornerradii_%29.md): Creates and returns a new Bézier path object with a rectangular path rounded at the specified corners.
- [init(arcCenter:radius:startAngle:endAngle:clockwise:)](init%28arccenter_radius_startangle_endangle_clockwise_%29.md): Creates and returns a new Bézier path object with an arc of a circle.
- [init(cgPath:)](init%28cgpath_%29-833n8.md): Creates and returns a new Bézier path object with the contents of a Core Graphics path.
- [init()](init%28%29.md): Creates and returns an empty path object.
- [init(coder:)](init%28coder_%29.md): Creates a Bézier path object from data in an unarchiver.

# bezierPathByReversingPath (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new Bézier path object with the reversed contents of the current path.

## Declaration

```objectivec
- (UIBezierPath *) bezierPathByReversingPath;
```

<a id="return-value"></a>

## Return Value

A new path object with the same path shape but for which the path has been created in the reverse direction.

<a id="Discussion"></a>

## Discussion

Reversing a path does not necessarily change the appearance of the path when rendered. Instead, it changes the direction in which path segments are drawn. For example, reversing the path of a rectangle (whose line segments are normally drawn starting at the origin and proceeding in a counterclockwise direction) causes its line segments to be drawn in a clockwise direction instead. Drawing a reversed path could affect the appearance of a filled pattern, depending on the pattern and the fill rule in use.

This method reverses each whole or partial subpath in the path object individually.

## See Also

### Creating a Bézier path

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithRect:](init%28rect_%29.md): Creates and returns a new Bézier path object with a rectangular path.
- [bezierPathWithOvalInRect:](init%28ovalin_%29.md): Creates and returns a new Bézier path object with an inscribed oval path in the specified rectangle.
- [bezierPathWithRoundedRect:cornerRadius:](init%28roundedrect_cornerradius_%29.md): Creates and returns a new Bézier path object with a rounded rectangular path.
- [bezierPathWithRoundedRect:byRoundingCorners:cornerRadii:](init%28roundedrect_byroundingcorners_cornerradii_%29.md): Creates and returns a new Bézier path object with a rectangular path rounded at the specified corners.
- [bezierPathWithArcCenter:radius:startAngle:endAngle:clockwise:](init%28arccenter_radius_startangle_endangle_clockwise_%29.md): Creates and returns a new Bézier path object with an arc of a circle.
- [bezierPathWithCGPath:](init%28cgpath_%29-833n8.md): Creates and returns a new Bézier path object with the contents of a Core Graphics path.
- [init](init%28%29.md): Creates and returns an empty path object.
- [initWithCoder:](init%28coder_%29.md): Creates a Bézier path object from data in an unarchiver.
