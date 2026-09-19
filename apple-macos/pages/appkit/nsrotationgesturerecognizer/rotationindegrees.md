> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsrotationgesturerecognizer/rotationindegrees

# rotationInDegrees (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The rotation of the gesture in degrees.

## Declaration

```swift
var rotationInDegrees: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the current rotation in effect for the gesture. Changing the value in this property also updates the value in the [rotation](rotation.md) property.

## See Also

### Interpreting the gesture

- [rotation](rotation.md): The rotation of the gesture in radians.

# rotationInDegrees (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The rotation of the gesture in degrees.

## Declaration

```objectivec
@property CGFloat rotationInDegrees;
```

<a id="Discussion"></a>

## Discussion

This property contains the current rotation in effect for the gesture. Changing the value in this property also updates the value in the [rotation](rotation.md) property.

## See Also

### Interpreting the gesture

- [rotation](rotation.md): The rotation of the gesture in radians.
