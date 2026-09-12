> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uihovergesturerecognizer/azimuthunitvector(in:)](https://developer.apple.com/documentation/uikit/uihovergesturerecognizer/azimuthunitvector(in:))

# azimuthUnitVector(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

A value that represents the azimuth unit vector of the hovering pointing device in the specified view.

## Declaration

```swift
func azimuthUnitVector(in view: UIView?) -> CGVector
```

## Parameters

- `view`: The view the vector is relative to.

<a id="return-value"></a>

## Return Value

A [CGVector](../../corefoundation/cgvector.md) that represents the azimuth unit vector of the hovering pointing device.

<a id="Discussion"></a>

## Discussion

If the specified view is `nil`, the method returns the azimuth unit vector of the hovering pointing device in the gesture recognizer’s window.

This method returns an empty vector for devices that don’t support azimuth.

## See Also

### Supporting Apple Pencil hover

- [altitudeAngle](altitudeangle.md): A value that represents the altitude angle of the hovering pointing device.
- [azimuthAngle(in:)](azimuthangle%28in_%29.md): A value that represents the azimuth angle of the hovering pointing device in the specified view.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.
- [zOffset](zoffset.md): A value that represents the normalized distance between the screen and a hovering pointing device, such as Apple Pencil.

# azimuthUnitVectorInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · visionOS 1.0+

A value that represents the azimuth unit vector of the hovering pointing device in the specified view.

## Declaration

```objectivec
- (CGVector) azimuthUnitVectorInView:(UIView *) view;
```

## Parameters

- `view`: The view the vector is relative to.

<a id="return-value"></a>

## Return Value

A [CGVector](../../corefoundation/cgvector.md) that represents the azimuth unit vector of the hovering pointing device.

<a id="Discussion"></a>

## Discussion

If the specified view is `nil`, the method returns the azimuth unit vector of the hovering pointing device in the gesture recognizer’s window.

This method returns an empty vector for devices that don’t support azimuth.

## See Also

### Supporting Apple Pencil hover

- [altitudeAngle](altitudeangle.md): A value that represents the altitude angle of the hovering pointing device.
- [azimuthAngleInView:](azimuthangle%28in_%29.md): A value that represents the azimuth angle of the hovering pointing device in the specified view.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.
- [zOffset](zoffset.md): A value that represents the normalized distance between the screen and a hovering pointing device, such as Apple Pencil.
