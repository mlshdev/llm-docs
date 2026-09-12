> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fx3dapi_v5/focallength(at:error:)](https://developer.apple.com/documentation/professional_video_applications/fx3dapi_v5/focallength(at:error:))

# focalLength(at:error:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.1+

Gets the focal length.

## Declaration

```swift
func focalLength(at time: CMTime, error: NSErrorPointer) -> Double
```

## Parameters

- `time`: Specified time, expressed as a [CMTime](../../coremedia/cmtime.md), to retrieve the matrix value.
- `error`: Description of the problem if you are unable to retrieve the value.

<a id="return-value"></a>

## Return Value

The value of the focal length.

## See Also

### Accessing the 3D Environment

- [layerMatrix(at:)](layermatrix%28at_%29.md): Gets the 4x4 layer matrix, which is equivalent to the model matrix for the object that the effect is applied to.
- [viewMatrix(at:)](viewmatrix%28at_%29.md): Gets the 4x4 view matrix.
- [metalProjectionMatrix(at:)](metalprojectionmatrix%28at_%29.md): Gets the 4x4 Metal projection matrix.
- [frustumLeft(\_:right:bottom:top:near:far:at:)](frustumleft%28__right_bottom_top_near_far_at_%29.md): Describes the bounds of the viewing solid for generating a projection matrix.

# focalLengthAtTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Gets the focal length.

## Declaration

```objectivec
- (double) focalLengthAtTime:(CMTime) time error:(NSError * *) error;
```

## Parameters

- `time`: Specified time, expressed as a [CMTime](../../coremedia/cmtime.md), to retrieve the matrix value.
- `error`: Description of the problem if you are unable to retrieve the value.

<a id="return-value"></a>

## Return Value

The value of the focal length.

## See Also

### Accessing the 3D Environment

- [layerMatrixAtTime:error:](layermatrix%28at_%29.md): Gets the 4x4 layer matrix, which is equivalent to the model matrix for the object that the effect is applied to.
- [viewMatrixAtTime:error:](viewmatrix%28at_%29.md): Gets the 4x4 view matrix.
- [metalProjectionMatrixAtTime:error:](metalprojectionmatrix%28at_%29.md): Gets the 4x4 Metal projection matrix.
- [frustumLeft:right:bottom:top:near:far:atTime:error:](frustumleft%28__right_bottom_top_near_far_at_%29.md): Describes the bounds of the viewing solid for generating a projection matrix.
