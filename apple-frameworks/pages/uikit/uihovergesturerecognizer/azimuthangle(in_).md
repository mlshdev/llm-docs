> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uihovergesturerecognizer/azimuthangle(in:)](https://developer.apple.com/documentation/uikit/uihovergesturerecognizer/azimuthangle(in:))

# azimuthAngle(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

A value that represents the azimuth angle of the hovering pointing device in the specified view.

## Declaration

```swift
func azimuthAngle(in view: UIView?) -> CGFloat
```

## Parameters

- `view`: The view the angle is relative to.

<a id="return-value"></a>

## Return Value

A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) that represents the azimuth angle of the hovering pointing device.

<a id="Discussion"></a>

## Discussion

If the specified view is `nil`, the method returns the azimuth angle of the hovering pointing device in the gesture recognizer’s window.

This method returns `0` for devices that don’t support azimuth.

## See Also

### Supporting Apple Pencil hover

- [altitudeAngle](altitudeangle.md): A value that represents the altitude angle of the hovering pointing device.
- [azimuthUnitVector(in:)](azimuthunitvector%28in_%29.md): A value that represents the azimuth unit vector of the hovering pointing device in the specified view.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.
- [zOffset](zoffset.md): A value that represents the normalized distance between the screen and a hovering pointing device, such as Apple Pencil.

# azimuthAngleInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

A value that represents the azimuth angle of the hovering pointing device in the specified view.

## Declaration

```objectivec
- (CGFloat) azimuthAngleInView:(UIView *) view;
```

## Parameters

- `view`: The view the angle is relative to.

<a id="return-value"></a>

## Return Value

A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) that represents the azimuth angle of the hovering pointing device.

<a id="Discussion"></a>

## Discussion

If the specified view is `nil`, the method returns the azimuth angle of the hovering pointing device in the gesture recognizer’s window.

This method returns `0` for devices that don’t support azimuth.

## See Also

### Supporting Apple Pencil hover

- [altitudeAngle](altitudeangle.md): A value that represents the altitude angle of the hovering pointing device.
- [azimuthUnitVectorInView:](azimuthunitvector%28in_%29.md): A value that represents the azimuth unit vector of the hovering pointing device in the specified view.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.
- [zOffset](zoffset.md): A value that represents the normalized distance between the screen and a hovering pointing device, such as Apple Pencil.
