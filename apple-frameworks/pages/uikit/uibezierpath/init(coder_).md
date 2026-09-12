> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/init(coder:)](https://developer.apple.com/documentation/uikit/uibezierpath/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a Bézier path object from data in an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## See Also

### Creating a Bézier path

- [init(rect:)](init%28rect_%29.md): Creates and returns a new Bézier path object with a rectangular path.
- [init(ovalIn:)](init%28ovalin_%29.md): Creates and returns a new Bézier path object with an inscribed oval path in the specified rectangle.
- [init(roundedRect:cornerRadius:)](init%28roundedrect_cornerradius_%29.md): Creates and returns a new Bézier path object with a rounded rectangular path.
- [init(roundedRect:byRoundingCorners:cornerRadii:)](init%28roundedrect_byroundingcorners_cornerradii_%29.md): Creates and returns a new Bézier path object with a rectangular path rounded at the specified corners.
- [init(arcCenter:radius:startAngle:endAngle:clockwise:)](init%28arccenter_radius_startangle_endangle_clockwise_%29.md): Creates and returns a new Bézier path object with an arc of a circle.
- [init(cgPath:)](init%28cgpath_%29-833n8.md): Creates and returns a new Bézier path object with the contents of a Core Graphics path.
- [reversing()](reversing%28%29.md): Creates and returns a new Bézier path object with the reversed contents of the current path.
- [init()](init%28%29.md): Creates and returns an empty path object.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a Bézier path object from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Creating a Bézier path

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithRect:](init%28rect_%29.md): Creates and returns a new Bézier path object with a rectangular path.
- [bezierPathWithOvalInRect:](init%28ovalin_%29.md): Creates and returns a new Bézier path object with an inscribed oval path in the specified rectangle.
- [bezierPathWithRoundedRect:cornerRadius:](init%28roundedrect_cornerradius_%29.md): Creates and returns a new Bézier path object with a rounded rectangular path.
- [bezierPathWithRoundedRect:byRoundingCorners:cornerRadii:](init%28roundedrect_byroundingcorners_cornerradii_%29.md): Creates and returns a new Bézier path object with a rectangular path rounded at the specified corners.
- [bezierPathWithArcCenter:radius:startAngle:endAngle:clockwise:](init%28arccenter_radius_startangle_endangle_clockwise_%29.md): Creates and returns a new Bézier path object with an arc of a circle.
- [bezierPathWithCGPath:](init%28cgpath_%29-833n8.md): Creates and returns a new Bézier path object with the contents of a Core Graphics path.
- [bezierPathByReversingPath](reversing%28%29.md): Creates and returns a new Bézier path object with the reversed contents of the current path.
- [init](init%28%29.md): Creates and returns an empty path object.
