> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrotationgesturerecognizer/rotation](https://developer.apple.com/documentation/appkit/nsrotationgesturerecognizer/rotation)

# rotation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The rotation of the gesture in radians.

## Declaration

```swift
var rotation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the current rotation in effect for the gesture. Changing the value in this property also updates the value in the [rotationInDegrees](rotationindegrees.md) property.

## See Also

### Interpreting the gesture

- [rotationInDegrees](rotationindegrees.md): The rotation of the gesture in degrees.

# rotation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The rotation of the gesture in radians.

## Declaration

```objectivec
@property CGFloat rotation;
```

<a id="Discussion"></a>

## Discussion

This property contains the current rotation in effect for the gesture. Changing the value in this property also updates the value in the [rotationInDegrees](rotationindegrees.md) property.

## See Also

### Interpreting the gesture

- [rotationInDegrees](rotationindegrees.md): The rotation of the gesture in degrees.
