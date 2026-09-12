> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform/scale(attime:)](https://developer.apple.com/documentation/modelio/mdltransform/scale(attime:))

# scale(atTime:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space, as of the specified time sample.

## Declaration

```swift
func scale(atTime time: TimeInterval) -> vector_float3
```

## Parameters

- `time`: The time sample for which to request information.

<a id="return-value"></a>

## Return Value

The scale factors of the transform.

<a id="Discussion"></a>

## Discussion

Together with the translation, rotation, and shear factors, a scale factor defines the local coordinate space for any object affected by the transform, relative to a parent coordinate space. To work with the complete transform, use the [localTransform(atTime:)](../mdltransformcomponent/localtransform%28attime_%29.md) and [setLocalTransform(\_:forTime:)](../mdltransformcomponent/setlocaltransform%28__fortime_%29.md) methods.

Requesting a sample outside the time range clamps results to the [minimumTime](../mdltransformcomponent/minimumtime.md) or [maximumTime](../mdltransformcomponent/maximumtime.md) sample. Some asset formats support continuous sampling with interpolation for times between the samples stored in the asset; others are discrete. For an asset with discrete time information, requesting a sample time in between the samples stored in the asset returns data for the immediately preceding time.

## See Also

### Using Factors of an Animated Transform

- [translation(atTime:)](translation%28attime_%29.md): Returns the x-, y-, and z-axis offsets of the transform relative to its parent coordinate space, as of the specified time sample.
- [setTranslation(\_:forTime:)](settranslation%28__fortime_%29.md): Sets the x-, y-, and z-axis offsets of the transform for the specified time sample.
- [rotation(atTime:)](rotation%28attime_%29.md): Returns the orientation of the transform relative to its parent coordinate space, as of the specified time sample.
- [rotationMatrix(atTime:)](rotationmatrix%28attime_%29.md): Returns the orientation of the transform as a rotation matrix, as of the specified time sample.
- [setRotation(\_:forTime:)](setrotation%28__fortime_%29.md): Sets the orientation of the transform for the specified time sample.
- [setScale(\_:forTime:)](setscale%28__fortime_%29.md): Sets the x-, y-, and z-axis scale factors of the transform for the specified time sample.
- [shear(atTime:)](shear%28attime_%29.md): Returns the x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setShear(\_:forTime:)](setshear%28__fortime_%29.md): Sets the x-, y-, and z-axis shear factors of the transform for the specified time sample.
- [setMatrix(\_:forTime:)](setmatrix%28__fortime_%29.md)

# scaleAtTime: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space, as of the specified time sample.

## Declaration

```objectivec
- (vector_float3) scaleAtTime:(NSTimeInterval) time;
```

## Parameters

- `time`: The time sample for which to request information.

<a id="return-value"></a>

## Return Value

The scale factors of the transform.

<a id="Discussion"></a>

## Discussion

Together with the translation, rotation, and shear factors, a scale factor defines the local coordinate space for any object affected by the transform, relative to a parent coordinate space. To work with the complete transform, use the [localTransformAtTime:](../mdltransformcomponent/localtransform%28attime_%29.md) and [setLocalTransform:forTime:](../mdltransformcomponent/setlocaltransform%28__fortime_%29.md) methods.

Requesting a sample outside the time range clamps results to the [minimumTime](../mdltransformcomponent/minimumtime.md) or [maximumTime](../mdltransformcomponent/maximumtime.md) sample. Some asset formats support continuous sampling with interpolation for times between the samples stored in the asset; others are discrete. For an asset with discrete time information, requesting a sample time in between the samples stored in the asset returns data for the immediately preceding time.

## See Also

### Using Factors of an Animated Transform

- [translationAtTime:](translation%28attime_%29.md): Returns the x-, y-, and z-axis offsets of the transform relative to its parent coordinate space, as of the specified time sample.
- [setTranslation:forTime:](settranslation%28__fortime_%29.md): Sets the x-, y-, and z-axis offsets of the transform for the specified time sample.
- [rotationAtTime:](rotation%28attime_%29.md): Returns the orientation of the transform relative to its parent coordinate space, as of the specified time sample.
- [rotationMatrixAtTime:](rotationmatrix%28attime_%29.md): Returns the orientation of the transform as a rotation matrix, as of the specified time sample.
- [setRotation:forTime:](setrotation%28__fortime_%29.md): Sets the orientation of the transform for the specified time sample.
- [setScale:forTime:](setscale%28__fortime_%29.md): Sets the x-, y-, and z-axis scale factors of the transform for the specified time sample.
- [shearAtTime:](shear%28attime_%29.md): Returns the x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setShear:forTime:](setshear%28__fortime_%29.md): Sets the x-, y-, and z-axis shear factors of the transform for the specified time sample.
- [setMatrix:forTime:](setmatrix%28__fortime_%29.md)
