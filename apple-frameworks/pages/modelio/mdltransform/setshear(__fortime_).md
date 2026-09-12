> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform/setshear(_:fortime:)](https://developer.apple.com/documentation/modelio/mdltransform/setshear(_:fortime:))

# setShear(\_:forTime:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the x-, y-, and z-axis shear factors of the transform for the specified time sample.

## Declaration

```swift
func setShear(_ shear: vector_float3, forTime time: TimeInterval)
```

## Parameters

- `shear`: The shear factors to set for the transform relative to its parent coordinate space.
- `time`: The time sample with which to associate transform information.

<a id="Discussion"></a>

## Discussion

Together with the translation, rotation, and scale factors, a shear vector defines the local coordinate space for any object affected by the transform, relative to a parent coordinate space. To work with the complete transform, use the [localTransform(atTime:)](../mdltransformcomponent/localtransform%28attime_%29.md) and [setLocalTransform(\_:forTime:)](../mdltransformcomponent/setlocaltransform%28__fortime_%29.md) methods.

Setting a new shear synthesizes a complete transform matrix by combining the new translation with the [translation(atTime:)](translation%28attime_%29.md), [rotation(atTime:)](rotation%28attime_%29.md), and [scale(atTime:)](scale%28attime_%29.md) factors for the specified time. If the new time is outside the range of the [minimumTime](../mdltransformcomponent/minimumtime.md) and [maximumTime](../mdltransformcomponent/maximumtime.md) properties, this method updates those values to reflect the range of time samples stored in the transform object.

## See Also

### Using Factors of an Animated Transform

- [translation(atTime:)](translation%28attime_%29.md): Returns the x-, y-, and z-axis offsets of the transform relative to its parent coordinate space, as of the specified time sample.
- [setTranslation(\_:forTime:)](settranslation%28__fortime_%29.md): Sets the x-, y-, and z-axis offsets of the transform for the specified time sample.
- [rotation(atTime:)](rotation%28attime_%29.md): Returns the orientation of the transform relative to its parent coordinate space, as of the specified time sample.
- [rotationMatrix(atTime:)](rotationmatrix%28attime_%29.md): Returns the orientation of the transform as a rotation matrix, as of the specified time sample.
- [setRotation(\_:forTime:)](setrotation%28__fortime_%29.md): Sets the orientation of the transform for the specified time sample.
- [scale(atTime:)](scale%28attime_%29.md): Returns the x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setScale(\_:forTime:)](setscale%28__fortime_%29.md): Sets the x-, y-, and z-axis scale factors of the transform for the specified time sample.
- [shear(atTime:)](shear%28attime_%29.md): Returns the x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setMatrix(\_:forTime:)](setmatrix%28__fortime_%29.md)

# setShear:forTime: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the x-, y-, and z-axis shear factors of the transform for the specified time sample.

## Declaration

```objectivec
- (void) setShear:(vector_float3) shear forTime:(NSTimeInterval) time;
```

## Parameters

- `shear`: The shear factors to set for the transform relative to its parent coordinate space.
- `time`: The time sample with which to associate transform information.

<a id="Discussion"></a>

## Discussion

Together with the translation, rotation, and scale factors, a shear vector defines the local coordinate space for any object affected by the transform, relative to a parent coordinate space. To work with the complete transform, use the [localTransformAtTime:](../mdltransformcomponent/localtransform%28attime_%29.md) and [setLocalTransform:forTime:](../mdltransformcomponent/setlocaltransform%28__fortime_%29.md) methods.

Setting a new shear synthesizes a complete transform matrix by combining the new translation with the [translationAtTime:](translation%28attime_%29.md), [rotationAtTime:](rotation%28attime_%29.md), and [scaleAtTime:](scale%28attime_%29.md) factors for the specified time. If the new time is outside the range of the [minimumTime](../mdltransformcomponent/minimumtime.md) and [maximumTime](../mdltransformcomponent/maximumtime.md) properties, this method updates those values to reflect the range of time samples stored in the transform object.

## See Also

### Using Factors of an Animated Transform

- [translationAtTime:](translation%28attime_%29.md): Returns the x-, y-, and z-axis offsets of the transform relative to its parent coordinate space, as of the specified time sample.
- [setTranslation:forTime:](settranslation%28__fortime_%29.md): Sets the x-, y-, and z-axis offsets of the transform for the specified time sample.
- [rotationAtTime:](rotation%28attime_%29.md): Returns the orientation of the transform relative to its parent coordinate space, as of the specified time sample.
- [rotationMatrixAtTime:](rotationmatrix%28attime_%29.md): Returns the orientation of the transform as a rotation matrix, as of the specified time sample.
- [setRotation:forTime:](setrotation%28__fortime_%29.md): Sets the orientation of the transform for the specified time sample.
- [scaleAtTime:](scale%28attime_%29.md): Returns the x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setScale:forTime:](setscale%28__fortime_%29.md): Sets the x-, y-, and z-axis scale factors of the transform for the specified time sample.
- [shearAtTime:](shear%28attime_%29.md): Returns the x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setMatrix:forTime:](setmatrix%28__fortime_%29.md)
