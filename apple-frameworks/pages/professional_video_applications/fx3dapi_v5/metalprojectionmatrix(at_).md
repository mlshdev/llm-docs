> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fx3dapi_v5/metalprojectionmatrix(at:)](https://developer.apple.com/documentation/professional_video_applications/fx3dapi_v5/metalprojectionmatrix(at:))

# metalProjectionMatrix(at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.1+

Gets the 4x4 Metal projection matrix.

## Declaration

```swift
func metalProjectionMatrix(at time: CMTime) throws -> FxMatrix44
```

## Parameters

- `time`: Specified time, expressed as a CMTime, to retrieve the matrix.

<a id="return-value"></a>

## Return Value

An FxMatrix44 containing the matrix.

## See Also

### Accessing the 3D Environment

- [focalLength(at:error:)](focallength%28at_error_%29.md): Gets the focal length.
- [layerMatrix(at:)](layermatrix%28at_%29.md): Gets the 4x4 layer matrix, which is equivalent to the model matrix for the object that the effect is applied to.
- [viewMatrix(at:)](viewmatrix%28at_%29.md): Gets the 4x4 view matrix.
- [frustumLeft(\_:right:bottom:top:near:far:at:)](frustumleft%28__right_bottom_top_near_far_at_%29.md): Describes the bounds of the viewing solid for generating a projection matrix.

# metalProjectionMatrixAtTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Gets the 4x4 Metal projection matrix.

## Declaration

```objectivec
- (FxMatrix44 *) metalProjectionMatrixAtTime:(CMTime) time error:(NSError * *) error;
```

## Parameters

- `time`: Specified time, expressed as a CMTime, to retrieve the matrix.
- `error`: Description of the problem if you are unable to retrieve the matrix.

<a id="return-value"></a>

## Return Value

An FxMatrix44 containing the matrix. On failure, this method returns `nil`.

## See Also

### Accessing the 3D Environment

- [focalLengthAtTime:error:](focallength%28at_error_%29.md): Gets the focal length.
- [layerMatrixAtTime:error:](layermatrix%28at_%29.md): Gets the 4x4 layer matrix, which is equivalent to the model matrix for the object that the effect is applied to.
- [viewMatrixAtTime:error:](viewmatrix%28at_%29.md): Gets the 4x4 view matrix.
- [frustumLeft:right:bottom:top:near:far:atTime:error:](frustumleft%28__right_bottom_top_near_far_at_%29.md): Describes the bounds of the viewing solid for generating a projection matrix.
