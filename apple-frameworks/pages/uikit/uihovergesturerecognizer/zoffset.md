> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uihovergesturerecognizer/zoffset](https://developer.apple.com/documentation/uikit/uihovergesturerecognizer/zoffset)

# zOffset (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · visionOS 1.0+

A value that represents the normalized distance between the screen and a hovering pointing device, such as Apple Pencil.

## Declaration

```swift
var zOffset: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This value is `1` at the maximum distance from the screen and approaches `0` as the pointing device gets closer to the screen. This value is `0` for devices that don’t support [zOffset](zoffset.md).

For example, a drawing app might use the value of this property to generate a preview that indicates where a hovering Apple Pencil touches down on an iPad screen. For more information, see [Adopting hover support for Apple Pencil](../adopting-hover-support-for-apple-pencil.md).

## See Also

### Supporting Apple Pencil hover

- [altitudeAngle](altitudeangle.md): A value that represents the altitude angle of the hovering pointing device.
- [azimuthAngle(in:)](azimuthangle%28in_%29.md): A value that represents the azimuth angle of the hovering pointing device in the specified view.
- [azimuthUnitVector(in:)](azimuthunitvector%28in_%29.md): A value that represents the azimuth unit vector of the hovering pointing device in the specified view.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.

# zOffset (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · visionOS 1.0+

A value that represents the normalized distance between the screen and a hovering pointing device, such as Apple Pencil.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat zOffset;
```

<a id="Discussion"></a>

## Discussion

This value is `1` at the maximum distance from the screen and approaches `0` as the pointing device gets closer to the screen. This value is `0` for devices that don’t support [zOffset](zoffset.md).

For example, a drawing app might use the value of this property to generate a preview that indicates where a hovering Apple Pencil touches down on an iPad screen. For more information, see [Adopting hover support for Apple Pencil](../adopting-hover-support-for-apple-pencil.md).

## See Also

### Supporting Apple Pencil hover

- [altitudeAngle](altitudeangle.md): A value that represents the altitude angle of the hovering pointing device.
- [azimuthAngleInView:](azimuthangle%28in_%29.md): A value that represents the azimuth angle of the hovering pointing device in the specified view.
- [azimuthUnitVectorInView:](azimuthunitvector%28in_%29.md): A value that represents the azimuth unit vector of the hovering pointing device in the specified view.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.
