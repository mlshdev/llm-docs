> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlstereoscopiccamera/leftviewmatrix](https://developer.apple.com/documentation/modelio/mdlstereoscopiccamera/leftviewmatrix)

# leftViewMatrix (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The transformation matrix that determines the position and orientation of the camera’s left viewpoint relative to a scene.

## Declaration

```swift
var leftViewMatrix: matrix_float4x4 { get }
```

<a id="Discussion"></a>

## Discussion

Model I/O  automatically generates this matrix from the camera’s position and orientation, additionally using the [interPupillaryDistance](interpupillarydistance.md) and [leftVergence](leftvergence.md) properties to account for the offset and angle of a stereoscopic camera’s left viewpoint.

A renderer uses this matrix, along with the [leftProjectionMatrix](leftprojectionmatrix.md) property and model matrices derived from the camera’s position and orientation (the [transform](../mdlobject/transform.md) property) and the content to be rendered, to transform vertex data to the renderer’s 2D screen space at render time.

## See Also

### Generating View and Projection Matrices

- [leftProjectionMatrix](leftprojectionmatrix.md): The transformation matrix that determines the extent of a scene visible to the camera’s left viewpoint.
- [rightViewMatrix](rightviewmatrix.md): The transformation matrix that determines the position and orientation of the camera’s right viewpoint relative to a scene.
- [rightProjectionMatrix](rightprojectionmatrix.md): The transformation matrix that determines the extent of a scene visible to the camera’s right viewpoint.

# leftViewMatrix (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The transformation matrix that determines the position and orientation of the camera’s left viewpoint relative to a scene.

## Declaration

```objectivec
@property (nonatomic, readonly) matrix_float4x4 leftViewMatrix;
```

<a id="Discussion"></a>

## Discussion

Model I/O  automatically generates this matrix from the camera’s position and orientation, additionally using the [interPupillaryDistance](interpupillarydistance.md) and [leftVergence](leftvergence.md) properties to account for the offset and angle of a stereoscopic camera’s left viewpoint.

A renderer uses this matrix, along with the [leftProjectionMatrix](leftprojectionmatrix.md) property and model matrices derived from the camera’s position and orientation (the [transform](../mdlobject/transform.md) property) and the content to be rendered, to transform vertex data to the renderer’s 2D screen space at render time.

## See Also

### Generating View and Projection Matrices

- [leftProjectionMatrix](leftprojectionmatrix.md): The transformation matrix that determines the extent of a scene visible to the camera’s left viewpoint.
- [rightViewMatrix](rightviewmatrix.md): The transformation matrix that determines the position and orientation of the camera’s right viewpoint relative to a scene.
- [rightProjectionMatrix](rightprojectionmatrix.md): The transformation matrix that determines the extent of a scene visible to the camera’s right viewpoint.
