> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform/setrotation(_:fortime:)](https://developer.apple.com/documentation/modelio/mdltransform/setrotation(_:fortime:))

# setRotation(\_:forTime:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the orientation of the transform for the specified time sample.

## Declaration

```swift
func setRotation(_ rotation: vector_float3, forTime time: TimeInterval)
```

## Parameters

- `rotation`: The orientation, as Euler angles in radians, to set for the transform relative to its parent coordinate space.
- `time`: The time sample with which to associate transform information.

<a id="Discussion"></a>

## Discussion

The three components of the `rotation` vector describe counterclockwise rotation around the corresponding axes. In a coordinate system where the negative z-axis direction is considered “forward”, these components are pitch (rotation about the x-axis), yaw (rotation about the y-axis), and roll (rotation about the z-axis).

Together with the translation, scale, and shear factors, rotation information defines the local coordinate space for any object affected by the transform, relative to a parent coordinate space. To work with the complete transform, use the [localTransform(atTime:)](../mdltransformcomponent/localtransform%28attime_%29.md) and [setLocalTransform(\_:forTime:)](../mdltransformcomponent/setlocaltransform%28__fortime_%29.md) methods.

Setting a new rotation synthesizes a complete transform matrix by combining the new translation with the [translation(atTime:)](translation%28attime_%29.md), [scale(atTime:)](scale%28attime_%29.md), and [shear(atTime:)](shear%28attime_%29.md) factors for the specified time. If the new time is outside the range of the [minimumTime](../mdltransformcomponent/minimumtime.md) and [maximumTime](../mdltransformcomponent/maximumtime.md) properties, this method updates those values to reflect the range of time samples stored in the transform object.

## See Also

### Using Factors of an Animated Transform

- [translation(atTime:)](translation%28attime_%29.md): Returns the x-, y-, and z-axis offsets of the transform relative to its parent coordinate space, as of the specified time sample.
- [setTranslation(\_:forTime:)](settranslation%28__fortime_%29.md): Sets the x-, y-, and z-axis offsets of the transform for the specified time sample.
- [rotation(atTime:)](rotation%28attime_%29.md): Returns the orientation of the transform relative to its parent coordinate space, as of the specified time sample.
- [rotationMatrix(atTime:)](rotationmatrix%28attime_%29.md): Returns the orientation of the transform as a rotation matrix, as of the specified time sample.
- [scale(atTime:)](scale%28attime_%29.md): Returns the x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setScale(\_:forTime:)](setscale%28__fortime_%29.md): Sets the x-, y-, and z-axis scale factors of the transform for the specified time sample.
- [shear(atTime:)](shear%28attime_%29.md): Returns the x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setShear(\_:forTime:)](setshear%28__fortime_%29.md): Sets the x-, y-, and z-axis shear factors of the transform for the specified time sample.
- [setMatrix(\_:forTime:)](setmatrix%28__fortime_%29.md)

# setRotation:forTime: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the orientation of the transform for the specified time sample.

## Declaration

```objectivec
- (void) setRotation:(vector_float3) rotation forTime:(NSTimeInterval) time;
```

## Parameters

- `rotation`: The orientation, as Euler angles in radians, to set for the transform relative to its parent coordinate space.
- `time`: The time sample with which to associate transform information.

<a id="Discussion"></a>

## Discussion

The three components of the `rotation` vector describe counterclockwise rotation around the corresponding axes. In a coordinate system where the negative z-axis direction is considered “forward”, these components are pitch (rotation about the x-axis), yaw (rotation about the y-axis), and roll (rotation about the z-axis).

Together with the translation, scale, and shear factors, rotation information defines the local coordinate space for any object affected by the transform, relative to a parent coordinate space. To work with the complete transform, use the [localTransformAtTime:](../mdltransformcomponent/localtransform%28attime_%29.md) and [setLocalTransform:forTime:](../mdltransformcomponent/setlocaltransform%28__fortime_%29.md) methods.

Setting a new rotation synthesizes a complete transform matrix by combining the new translation with the [translationAtTime:](translation%28attime_%29.md), [scaleAtTime:](scale%28attime_%29.md), and [shearAtTime:](shear%28attime_%29.md) factors for the specified time. If the new time is outside the range of the [minimumTime](../mdltransformcomponent/minimumtime.md) and [maximumTime](../mdltransformcomponent/maximumtime.md) properties, this method updates those values to reflect the range of time samples stored in the transform object.

## See Also

### Using Factors of an Animated Transform

- [translationAtTime:](translation%28attime_%29.md): Returns the x-, y-, and z-axis offsets of the transform relative to its parent coordinate space, as of the specified time sample.
- [setTranslation:forTime:](settranslation%28__fortime_%29.md): Sets the x-, y-, and z-axis offsets of the transform for the specified time sample.
- [rotationAtTime:](rotation%28attime_%29.md): Returns the orientation of the transform relative to its parent coordinate space, as of the specified time sample.
- [rotationMatrixAtTime:](rotationmatrix%28attime_%29.md): Returns the orientation of the transform as a rotation matrix, as of the specified time sample.
- [scaleAtTime:](scale%28attime_%29.md): Returns the x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setScale:forTime:](setscale%28__fortime_%29.md): Sets the x-, y-, and z-axis scale factors of the transform for the specified time sample.
- [shearAtTime:](shear%28attime_%29.md): Returns the x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setShear:forTime:](setshear%28__fortime_%29.md): Sets the x-, y-, and z-axis shear factors of the transform for the specified time sample.
- [setMatrix:forTime:](setmatrix%28__fortime_%29.md)
