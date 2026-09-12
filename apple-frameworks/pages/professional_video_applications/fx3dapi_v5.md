> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fx3dapi_v5](https://developer.apple.com/documentation/professional_video_applications/fx3dapi_v5)

# Fx3DAPI_v5 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.1+

An API that defines the methods the host application provides to get information about the 3D environment, including camera and object transforms.

## Declaration

```swift
protocol Fx3DAPI_v5
```

## Topics

### Accessing the 3D Environment

- [focalLength(at:error:)](fx3dapi_v5/focallength%28at_error_%29.md): Gets the focal length.
- [layerMatrix(at:)](fx3dapi_v5/layermatrix%28at_%29.md): Gets the 4x4 layer matrix, which is equivalent to the model matrix for the object that the effect is applied to.
- [viewMatrix(at:)](fx3dapi_v5/viewmatrix%28at_%29.md): Gets the 4x4 view matrix.
- [metalProjectionMatrix(at:)](fx3dapi_v5/metalprojectionmatrix%28at_%29.md): Gets the 4x4 Metal projection matrix.
- [frustumLeft(\_:right:bottom:top:near:far:at:)](fx3dapi_v5/frustumleft%28__right_bottom_top_near_far_at_%29.md): Describes the bounds of the viewing solid for generating a projection matrix.

## See Also

### 3D and lighting

- [FxLightingAPI_v3](fxlightingapi_v3.md): An API you use to get information about lights in a scene in a Motion project.
- [FxMatrix44](fxmatrix44.md): The `FxMatrix` class encapsulates a 4x4 matrix object and provides matrix inversion and transforming of 2D and 3D points.

# Fx3DAPI_v5 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

An API that defines the methods the host application provides to get information about the 3D environment, including camera and object transforms.

## Declaration

```objectivec
@protocol Fx3DAPI_v5
```

## Topics

### Accessing the 3D Environment

- [focalLengthAtTime:error:](fx3dapi_v5/focallength%28at_error_%29.md): Gets the focal length.
- [layerMatrixAtTime:error:](fx3dapi_v5/layermatrix%28at_%29.md): Gets the 4x4 layer matrix, which is equivalent to the model matrix for the object that the effect is applied to.
- [viewMatrixAtTime:error:](fx3dapi_v5/viewmatrix%28at_%29.md): Gets the 4x4 view matrix.
- [metalProjectionMatrixAtTime:error:](fx3dapi_v5/metalprojectionmatrix%28at_%29.md): Gets the 4x4 Metal projection matrix.
- [frustumLeft:right:bottom:top:near:far:atTime:error:](fx3dapi_v5/frustumleft%28__right_bottom_top_near_far_at_%29.md): Describes the bounds of the viewing solid for generating a projection matrix.

## See Also

### 3D and lighting

- [FxLightingAPI_v3](fxlightingapi_v3.md): An API you use to get information about lights in a scene in a Motion project.
- [FxMatrix44](fxmatrix44.md): The `FxMatrix` class encapsulates a 4x4 matrix object and provides matrix inversion and transforming of 2D and 3D points.
