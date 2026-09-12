> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform/shear](https://developer.apple.com/documentation/modelio/mdltransform/shear)

# shear (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space.

## Declaration

```swift
var shear: vector_float3 { get set }
```

<a id="Discussion"></a>

## Discussion

Together with the [translation](translation.md), [rotation](rotation.md), and [scale](scale.md) properties, this property defines the local coordinate space for any object affected by the transform, relative to a parent coordinate space. Use the [matrix](../mdltransformcomponent/matrix.md) property to work with the complete transform.

If the transform includes time-based information, reading this property returns the scale as of the earliest time sample (as reported by the [minimumTime](../mdltransformcomponent/minimumtime.md) property). Writing to this property erases any time-sampled data for the scale factor. To work with time-sampled data from an animated transform, use the [scale(atTime:)](scale%28attime_%29.md) and [setScale(\_:forTime:)](setscale%28__fortime_%29.md) methods.

## See Also

### Using Factors of a Static Transform

- [translation](translation.md): The x-, y-, and z-axis offsets of the transform relative to its parent coordinate space.
- [rotation](rotation.md): The orientation, as a vector of Euler angles in radians, of the transform relative to its parent coordinate space.
- [scale](scale.md): The x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space.
- [setIdentity()](setidentity%28%29.md): Sets all factors of the transform to those of the identity transformation.

# shear (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space.

## Declaration

```objectivec
@property (nonatomic, readwrite) vector_float3 shear;
```

<a id="Discussion"></a>

## Discussion

Together with the [translation](translation.md), [rotation](rotation.md), and [scale](scale.md) properties, this property defines the local coordinate space for any object affected by the transform, relative to a parent coordinate space. Use the [matrix](../mdltransformcomponent/matrix.md) property to work with the complete transform.

If the transform includes time-based information, reading this property returns the scale as of the earliest time sample (as reported by the [minimumTime](../mdltransformcomponent/minimumtime.md) property). Writing to this property erases any time-sampled data for the scale factor. To work with time-sampled data from an animated transform, use the [scaleAtTime:](scale%28attime_%29.md) and [setScale:forTime:](setscale%28__fortime_%29.md) methods.

## See Also

### Using Factors of a Static Transform

- [translation](translation.md): The x-, y-, and z-axis offsets of the transform relative to its parent coordinate space.
- [rotation](rotation.md): The orientation, as a vector of Euler angles in radians, of the transform relative to its parent coordinate space.
- [scale](scale.md): The x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space.
- [setIdentity](setidentity%28%29.md): Sets all factors of the transform to those of the identity transformation.
