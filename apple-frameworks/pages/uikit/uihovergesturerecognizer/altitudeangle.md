> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uihovergesturerecognizer/altitudeangle](https://developer.apple.com/documentation/uikit/uihovergesturerecognizer/altitudeangle)

# altitudeAngle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

A value that represents the altitude angle of the hovering pointing device.

## Declaration

```swift
var altitudeAngle: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This value is `0` for devices that don’t support altitude.

## See Also

### Supporting Apple Pencil hover

- [azimuthAngle(in:)](azimuthangle%28in_%29.md): A value that represents the azimuth angle of the hovering pointing device in the specified view.
- [azimuthUnitVector(in:)](azimuthunitvector%28in_%29.md): A value that represents the azimuth unit vector of the hovering pointing device in the specified view.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.
- [zOffset](zoffset.md): A value that represents the normalized distance between the screen and a hovering pointing device, such as Apple Pencil.

# altitudeAngle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

A value that represents the altitude angle of the hovering pointing device.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat altitudeAngle;
```

<a id="Discussion"></a>

## Discussion

This value is `0` for devices that don’t support altitude.

## See Also

### Supporting Apple Pencil hover

- [azimuthAngleInView:](azimuthangle%28in_%29.md): A value that represents the azimuth angle of the hovering pointing device in the specified view.
- [azimuthUnitVectorInView:](azimuthunitvector%28in_%29.md): A value that represents the azimuth unit vector of the hovering pointing device in the specified view.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.
- [zOffset](zoffset.md): A value that represents the normalized distance between the screen and a hovering pointing device, such as Apple Pencil.
