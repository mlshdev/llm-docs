> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimageoption/cameraintrinsics](https://developer.apple.com/documentation/vision/vnimageoption/cameraintrinsics)

# cameraIntrinsics (Swift)

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An option to specify the camera intrinstics.

## Declaration

```swift
static let cameraIntrinsics: VNImageOption
```

<a id="Discussion"></a>

## Discussion

The camera intrinsics matrix is a [CFData](../../corefoundation/cfdata.md) instance containing a [matrix_float3x3](../../simd/matrix_float3x3.md), which is a column-major matrix:

![The camera intrinsics matrix with focal length along the main diagonal](https://developer.apple.com/images/Vision/media-2954520.png)

`fx` and `fy` are the focal length in pixels. For square pixels, they have the same value.

`ox` and `oy` are the coordinates of the principal point.  The origin is the upper-left corner of the frame.

## See Also

### Options Dictionary Keys

- [properties](properties.md): The dictionary from the image source that contains the metadata for algorithms like horizon detection.
- [ciContext](cicontext.md): An option key to specify the context to use in the handler’s Core Image operations.

# VNImageOptionCameraIntrinsics (Objective-C)

**Framework:** Vision  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An option to specify the camera intrinstics.

## Declaration

```objectivec
extern VNImageOption const VNImageOptionCameraIntrinsics;
```

<a id="Discussion"></a>

## Discussion

The camera intrinsics matrix is a [CFDataRef](../../corefoundation/cfdata.md) instance containing a [matrix_float3x3](../../simd/matrix_float3x3.md), which is a column-major matrix:

![The camera intrinsics matrix with focal length along the main diagonal](https://developer.apple.com/images/Vision/media-2954520.png)

`fx` and `fy` are the focal length in pixels. For square pixels, they have the same value.

`ox` and `oy` are the coordinates of the principal point.  The origin is the upper-left corner of the frame.

## See Also

### Options Dictionary Keys

- [VNImageOptionProperties](properties.md): The dictionary from the image source that contains the metadata for algorithms like horizon detection.
- [VNImageOptionCIContext](cicontext.md): An option key to specify the context to use in the handler’s Core Image operations.
