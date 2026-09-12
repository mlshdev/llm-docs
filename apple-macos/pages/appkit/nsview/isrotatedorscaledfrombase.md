> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/isrotatedorscaledfrombase](https://developer.apple.com/documentation/appkit/nsview/isrotatedorscaledfrombase)

# isRotatedOrScaledFromBase (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds, or has been scaled from the window’s base coordinate system.

## Declaration

```swift
var isRotatedOrScaledFromBase: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the view or any of its ancestors has had its [frameRotation](framerotation.md) or [boundsRotation](boundsrotation.md) properties modified at any time. The value is still [true](https://developer.apple.com/documentation/swift/true) if the rotation factor is changed to a nonzero value and then back to 0.

Use this information to optimize drawing and coordinate calculation. Do not use it to reflect the exact state of the view’s coordinate system.

## See Also

### Related Documentation

- [setBoundsSize(\_:)](setboundssize%28__%29.md): Sets the size of the view’s bounds rectangle to specified dimensions, inversely scaling its coordinate system relative to its frame rectangle.
- [scaleUnitSquare(to:)](scaleunitsquare%28to_%29.md): Scales the view’s coordinate system so that the unit square scales to the specified dimensions.
- [bounds](bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.
- [centerScanRect(\_:)](centerscanrect%28__%29.md): Converts the corners of a specified rectangle to lie on the center of device pixels, which is useful in compensating for rendering overscanning when the coordinate system has been scaled.
- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [boundsRotation](boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.

### Examining Coordinate System Modifications

- [isFlipped](isflipped.md): A Boolean value indicating whether the view uses a flipped coordinate system.
- [isRotatedFromBase](isrotatedfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds.

# rotatedOrScaledFromBase (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds, or has been scaled from the window’s base coordinate system.

## Declaration

```objectivec
@property (readonly, getter=isRotatedOrScaledFromBase) BOOL rotatedOrScaledFromBase;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the view or any of its ancestors has had its [frameRotation](framerotation.md) or [boundsRotation](boundsrotation.md) properties modified at any time. The value is still [true](https://developer.apple.com/documentation/swift/true) if the rotation factor is changed to a nonzero value and then back to 0.

Use this information to optimize drawing and coordinate calculation. Do not use it to reflect the exact state of the view’s coordinate system.

## See Also

### Related Documentation

- [setBoundsSize:](setboundssize%28__%29.md): Sets the size of the view’s bounds rectangle to specified dimensions, inversely scaling its coordinate system relative to its frame rectangle.
- [scaleUnitSquareToSize:](scaleunitsquare%28to_%29.md): Scales the view’s coordinate system so that the unit square scales to the specified dimensions.
- [bounds](bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.
- [centerScanRect:](centerscanrect%28__%29.md): Converts the corners of a specified rectangle to lie on the center of device pixels, which is useful in compensating for rendering overscanning when the coordinate system has been scaled.
- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [boundsRotation](boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.

### Examining Coordinate System Modifications

- [flipped](isflipped.md): A Boolean value indicating whether the view uses a flipped coordinate system.
- [rotatedFromBase](isrotatedfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds.
