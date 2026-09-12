> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uihovergesturerecognizer/rollangle](https://developer.apple.com/documentation/uikit/uihovergesturerecognizer/rollangle)

# rollAngle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 1.2+

A value that represents the current barrel-roll angle of Apple Pencil.

## Declaration

```swift
var rollAngle: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

For models of Apple Pencil that don’t support barrel-roll angle data, the value of this property is `0`.

## See Also

### Supporting Apple Pencil hover

- [altitudeAngle](altitudeangle.md): A value that represents the altitude angle of the hovering pointing device.
- [azimuthAngle(in:)](azimuthangle%28in_%29.md): A value that represents the azimuth angle of the hovering pointing device in the specified view.
- [azimuthUnitVector(in:)](azimuthunitvector%28in_%29.md): A value that represents the azimuth unit vector of the hovering pointing device in the specified view.
- [zOffset](zoffset.md): A value that represents the normalized distance between the screen and a hovering pointing device, such as Apple Pencil.

# rollAngle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 1.2+

A value that represents the current barrel-roll angle of Apple Pencil.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat rollAngle;
```

<a id="Discussion"></a>

## Discussion

For models of Apple Pencil that don’t support barrel-roll angle data, the value of this property is `0`.

## See Also

### Supporting Apple Pencil hover

- [altitudeAngle](altitudeangle.md): A value that represents the altitude angle of the hovering pointing device.
- [azimuthAngleInView:](azimuthangle%28in_%29.md): A value that represents the azimuth angle of the hovering pointing device in the specified view.
- [azimuthUnitVectorInView:](azimuthunitvector%28in_%29.md): A value that represents the azimuth unit vector of the hovering pointing device in the specified view.
- [zOffset](zoffset.md): A value that represents the normalized distance between the screen and a hovering pointing device, such as Apple Pencil.
