> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocushaloeffect/init(roundedrect:cornerradius:curve:)](https://developer.apple.com/documentation/uikit/uifocushaloeffect/init(roundedrect:cornerradius:curve:))

# init(roundedRect:cornerRadius:curve:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates a rounded halo effect using the specified corner radius and corner curve.

## Declaration

```swift
convenience init(roundedRect rect: CGRect, cornerRadius: CGFloat, curve: CALayerCornerCurve)
```

## See Also

### Creating a halo effect

- [init(rect:)](init%28rect_%29.md): Creates a rectangular halo effect using the specified rectangle.
- [init(path:)](init%28path_%29.md): Creates a halo effect using the specified Bézier path.

# effectWithRoundedRect:cornerRadius:curve: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates a rounded halo effect using the specified corner radius and corner curve.

## Declaration

```objectivec
+ (instancetype) effectWithRoundedRect:(CGRect) rect cornerRadius:(CGFloat) cornerRadius curve:(CALayerCornerCurve) curve;
```

## See Also

### Creating a halo effect

- [effectWithRect:](init%28rect_%29.md): Creates a rectangular halo effect using the specified rectangle.
- [effectWithPath:](init%28path_%29.md): Creates a halo effect using the specified Bézier path.
