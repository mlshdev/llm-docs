> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fx3dapi_v5/frustumleft(_:right:bottom:top:near:far:at:)](https://developer.apple.com/documentation/professional_video_applications/fx3dapi_v5/frustumleft(_:right:bottom:top:near:far:at:))

# frustumLeft(\_:right:bottom:top:near:far:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.1+

Describes the bounds of the viewing solid for generating a projection matrix.

## Declaration

```swift
func frustumLeft(_ left: UnsafeMutablePointer<Double>!, right: UnsafeMutablePointer<Double>!, bottom: UnsafeMutablePointer<Double>!, top: UnsafeMutablePointer<Double>!, near: UnsafeMutablePointer<Double>!, far: UnsafeMutablePointer<Double>!, at time: CMTime) throws
```

## Parameters

- `left`: The x coordinate for the left vertical clipping plane.
- `right`: The x coordinate for the right vertical clipping plane.
- `bottom`: The y coordinate for the bottom horizontal clipping plane.
- `top`: The y coordinate for the top horizontal clipping plane.
- `near`: The z distance to the near depth clipping plane. Value must be positive.
- `far`: The z distance to the far depth clipping plane. Value must be positive.
- `time`: Specified time, expressed as a CMTime, to retrieve the matrix.

## See Also

### Accessing the 3D Environment

- [focalLength(at:error:)](focallength%28at_error_%29.md): Gets the focal length.
- [layerMatrix(at:)](layermatrix%28at_%29.md): Gets the 4x4 layer matrix, which is equivalent to the model matrix for the object that the effect is applied to.
- [viewMatrix(at:)](viewmatrix%28at_%29.md): Gets the 4x4 view matrix.
- [metalProjectionMatrix(at:)](metalprojectionmatrix%28at_%29.md): Gets the 4x4 Metal projection matrix.

# frustumLeft:right:bottom:top:near:far:atTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Describes the bounds of the viewing solid for generating a projection matrix.

## Declaration

```objectivec
- (BOOL) frustumLeft:(double *) left right:(double *) right bottom:(double *) bottom top:(double *) top near:(double *) near far:(double *) far atTime:(CMTime) time error:(NSError * *) error;
```

## Parameters

- `left`: The x coordinate for the left vertical clipping plane.
- `right`: The x coordinate for the right vertical clipping plane.
- `bottom`: The y coordinate for the bottom horizontal clipping plane.
- `top`: The y coordinate for the top horizontal clipping plane.
- `near`: The z distance to the near depth clipping plane. Value must be positive.
- `far`: The z distance to the far depth clipping plane. Value must be positive.
- `time`: Specified time, expressed as a CMTime, to retrieve the matrix.
- `error`: Description of the problem if you are unable to retrieve the matrix.

<a id="return-value"></a>

## Return Value

`YES` if the the frustum was retrieved, `NO` otherwise.

## See Also

### Accessing the 3D Environment

- [focalLengthAtTime:error:](focallength%28at_error_%29.md): Gets the focal length.
- [layerMatrixAtTime:error:](layermatrix%28at_%29.md): Gets the 4x4 layer matrix, which is equivalent to the model matrix for the object that the effect is applied to.
- [viewMatrixAtTime:error:](viewmatrix%28at_%29.md): Gets the 4x4 view matrix.
- [metalProjectionMatrixAtTime:error:](metalprojectionmatrix%28at_%29.md): Gets the 4x4 Metal projection matrix.
