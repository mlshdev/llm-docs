> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocushaloeffect/init(path:)](https://developer.apple.com/documentation/uikit/uifocushaloeffect/init(path:))

# init(path:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates a halo effect using the specified Bézier path.

## Declaration

```swift
convenience init(path bezierPath: UIBezierPath)
```

## See Also

### Creating a halo effect

- [init(roundedRect:cornerRadius:curve:)](init%28roundedrect_cornerradius_curve_%29.md): Creates a rounded halo effect using the specified corner radius and corner curve.
- [init(rect:)](init%28rect_%29.md): Creates a rectangular halo effect using the specified rectangle.

# effectWithPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates a halo effect using the specified Bézier path.

## Declaration

```objectivec
+ (instancetype) effectWithPath:(UIBezierPath *) bezierPath;
```

## See Also

### Creating a halo effect

- [effectWithRoundedRect:cornerRadius:curve:](init%28roundedrect_cornerradius_curve_%29.md): Creates a rounded halo effect using the specified corner radius and corner curve.
- [effectWithRect:](init%28rect_%29.md): Creates a rectangular halo effect using the specified rectangle.
