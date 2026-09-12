> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/isrotatedfrombase](https://developer.apple.com/documentation/appkit/nsview/isrotatedfrombase)

# isRotatedFromBase (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds.

## Declaration

```swift
var isRotatedFromBase: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the view or any of its ancestors has had its [frameRotation](framerotation.md) or [boundsRotation](boundsrotation.md) properties modified at any time. The value is still [true](https://developer.apple.com/documentation/swift/true) if the rotation factor is changed to a nonzero value and then back to 0.

Use this information to optimize drawing and coordinate calculation. Do not use it to reflect the exact state of the view’s coordinate system.

## See Also

### Related Documentation

- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [boundsRotation](boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.

### Examining Coordinate System Modifications

- [isFlipped](isflipped.md): A Boolean value indicating whether the view uses a flipped coordinate system.
- [isRotatedOrScaledFromBase](isrotatedorscaledfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds, or has been scaled from the window’s base coordinate system.

# rotatedFromBase (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds.

## Declaration

```objectivec
@property (readonly, getter=isRotatedFromBase) BOOL rotatedFromBase;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the view or any of its ancestors has had its [frameRotation](framerotation.md) or [boundsRotation](boundsrotation.md) properties modified at any time. The value is still [true](https://developer.apple.com/documentation/swift/true) if the rotation factor is changed to a nonzero value and then back to 0.

Use this information to optimize drawing and coordinate calculation. Do not use it to reflect the exact state of the view’s coordinate system.

## See Also

### Related Documentation

- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [boundsRotation](boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.

### Examining Coordinate System Modifications

- [flipped](isflipped.md): A Boolean value indicating whether the view uses a flipped coordinate system.
- [rotatedOrScaledFromBase](isrotatedorscaledfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds, or has been scaled from the window’s base coordinate system.
