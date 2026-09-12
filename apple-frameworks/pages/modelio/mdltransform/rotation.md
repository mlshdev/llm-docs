> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform/rotation](https://developer.apple.com/documentation/modelio/mdltransform/rotation)

# rotation (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The orientation, as a vector of Euler angles in radians, of the transform relative to its parent coordinate space.

## Declaration

```swift
var rotation: vector_float3 { get set }
```

<a id="Discussion"></a>

## Discussion

The three components of this vector describe counterclockwise rotation around the corresponding axes. In a coordinate system where the negative z-axis direction is considered “forward”, these components are pitch (rotation about the x-axis), yaw (rotation about the y-axis), and roll (rotation about the z-axis).

Together with the [translation](translation.md), [scale](scale.md), and [shear](shear.md) properties, this property defines the local coordinate space for any object affected by the transform, relative to a parent coordinate space. Use the [matrix](../mdltransformcomponent/matrix.md) property to work with the complete transform.

If the transform includes time-based information, reading this property returns the rotation as of the earliest time sample (as reported by the [minimumTime](../mdltransformcomponent/minimumtime.md) property). Writing to this property erases any time-sampled data for the rotation factor. To work with time-sampled data from an animated transform, use the [rotation(atTime:)](rotation%28attime_%29.md) and [setRotation(\_:forTime:)](setrotation%28__fortime_%29.md) methods.

## See Also

### Using Factors of a Static Transform

- [translation](translation.md): The x-, y-, and z-axis offsets of the transform relative to its parent coordinate space.
- [scale](scale.md): The x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space.
- [shear](shear.md): The x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space.
- [setIdentity()](setidentity%28%29.md): Sets all factors of the transform to those of the identity transformation.

# rotation (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The orientation, as a vector of Euler angles in radians, of the transform relative to its parent coordinate space.

## Declaration

```objectivec
@property (nonatomic, readwrite) vector_float3 rotation;
```

<a id="Discussion"></a>

## Discussion

The three components of this vector describe counterclockwise rotation around the corresponding axes. In a coordinate system where the negative z-axis direction is considered “forward”, these components are pitch (rotation about the x-axis), yaw (rotation about the y-axis), and roll (rotation about the z-axis).

Together with the [translation](translation.md), [scale](scale.md), and [shear](shear.md) properties, this property defines the local coordinate space for any object affected by the transform, relative to a parent coordinate space. Use the [matrix](../mdltransformcomponent/matrix.md) property to work with the complete transform.

If the transform includes time-based information, reading this property returns the rotation as of the earliest time sample (as reported by the [minimumTime](../mdltransformcomponent/minimumtime.md) property). Writing to this property erases any time-sampled data for the rotation factor. To work with time-sampled data from an animated transform, use the [rotationAtTime:](rotation%28attime_%29.md) and [setRotation:forTime:](setrotation%28__fortime_%29.md) methods.

## See Also

### Using Factors of a Static Transform

- [translation](translation.md): The x-, y-, and z-axis offsets of the transform relative to its parent coordinate space.
- [scale](scale.md): The x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space.
- [shear](shear.md): The x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space.
- [setIdentity](setidentity%28%29.md): Sets all factors of the transform to those of the identity transformation.
