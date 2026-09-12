> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcameracalibrationdata/extrinsicmatrix](https://developer.apple.com/documentation/avfoundation/avcameracalibrationdata/extrinsicmatrix)

# extrinsicMatrix (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A matrix relating a camera’s position and orientation to a world or scene coordinate system.

## Declaration

```swift
var extrinsicMatrix: matrix_float4x3 { get }
```

<a id="Discussion"></a>

## Discussion

The extrinsic matrix consists of a unitless 3 x 3 rotation matrix (`R`) on the left and a 3 x 1 column vector translation (`t`) on the right. The translation vector’s units are millimeters.

![](https://developer.apple.com/images/com.apple.avfoundation/media-2902624@2x.png)

The camera’s pose is expressed with respect to a reference camera (camera-to-world view). If the rotation matrix is an identity matrix, then this camera is the reference camera.

> **Note**

>  A [matrix_float4x3](../../simd/matrix_float4x3.md) matrix is column major with 3 rows and 4 columns.

## See Also

### Mapping pixels to scene geometry

- [intrinsicMatrix](intrinsicmatrix.md): A matrix that relates a camera’s internal properties to an ideal pinhole-camera model.
- [intrinsicMatrixReferenceDimensions](intrinsicmatrixreferencedimensions.md): The image dimensions to which the camera’s intrinsic matrix values are relative.
- [pixelSize](pixelsize.md): The size, in millimeters, of one image pixel.

# extrinsicMatrix (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A matrix relating a camera’s position and orientation to a world or scene coordinate system.

## Declaration

```objectivec
@property (nonatomic, readonly) matrix_float4x3 extrinsicMatrix;
```

<a id="Discussion"></a>

## Discussion

The extrinsic matrix consists of a unitless 3 x 3 rotation matrix (`R`) on the left and a 3 x 1 column vector translation (`t`) on the right. The translation vector’s units are millimeters.

![](https://developer.apple.com/images/com.apple.avfoundation/media-2902624@2x.png)

The camera’s pose is expressed with respect to a reference camera (camera-to-world view). If the rotation matrix is an identity matrix, then this camera is the reference camera.

> **Note**

>  A [matrix_float4x3](../../simd/matrix_float4x3.md) matrix is column major with 3 rows and 4 columns.

## See Also

### Mapping pixels to scene geometry

- [intrinsicMatrix](intrinsicmatrix.md): A matrix that relates a camera’s internal properties to an ideal pinhole-camera model.
- [intrinsicMatrixReferenceDimensions](intrinsicmatrixreferencedimensions.md): The image dimensions to which the camera’s intrinsic matrix values are relative.
- [pixelSize](pixelsize.md): The size, in millimeters, of one image pixel.
