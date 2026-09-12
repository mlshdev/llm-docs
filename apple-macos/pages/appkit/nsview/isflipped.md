> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/isflipped](https://developer.apple.com/documentation/appkit/nsview/isflipped)

# isFlipped (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view uses a flipped coordinate system.

## Declaration

```swift
var isFlipped: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which results in a non-flipped coordinate system. In a non-flipped coordinate system, the origin is in the lower-left corner of the view and positive y-values extend upward. In a flipped coordinate system, the origin is in the upper-left corner of the view and y-values extend downward. X-values always extend to the right.

If you want your view to use a flipped coordinate system, override this property and return [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Examining Coordinate System Modifications

- [isRotatedFromBase](isrotatedfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds.
- [isRotatedOrScaledFromBase](isrotatedorscaledfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds, or has been scaled from the window’s base coordinate system.

# flipped (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view uses a flipped coordinate system.

## Declaration

```objectivec
@property (readonly, getter=isFlipped) BOOL flipped;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which results in a non-flipped coordinate system. In a non-flipped coordinate system, the origin is in the lower-left corner of the view and positive y-values extend upward. In a flipped coordinate system, the origin is in the upper-left corner of the view and y-values extend downward. X-values always extend to the right.

If you want your view to use a flipped coordinate system, override this property and return [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Examining Coordinate System Modifications

- [rotatedFromBase](isrotatedfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds.
- [rotatedOrScaledFromBase](isrotatedorscaledfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds, or has been scaled from the window’s base coordinate system.
