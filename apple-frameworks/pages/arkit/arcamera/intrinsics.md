> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/intrinsics](https://developer.apple.com/documentation/arkit/arcamera/intrinsics)

# intrinsics (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A matrix that converts between the 2D camera plane and 3D world coordinate space.

## Declaration

```swift
var intrinsics: simd_float3x3 { get }
```

<a id="Discussion"></a>

## Discussion

The intrinsic matrix (commonly represented in equations as `K`) is based on physical characteristics of the device camera and a pinhole camera model. You can use the matrix to transform 3D coordinates to 2D coordinates on an image plane.

![](https://developer.apple.com/images/com.apple.arkit/media-2902622@2x.png)

The values `fx` and `fy` are the pixel focal length, and are identical for square pixels. The values `ox` and `oy` are the offsets of the principal point from the top-left corner of the image frame. All values are expressed in pixels.

## See Also

### Examining Imaging Parameters

- [imageResolution](imageresolution.md): The width and height, in pixels, of the captured camera image.

# intrinsics (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A matrix that converts between the 2D camera plane and 3D world coordinate space.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float3x3 intrinsics;
```

<a id="Discussion"></a>

## Discussion

The intrinsic matrix (commonly represented in equations as `K`) is based on physical characteristics of the device camera and a pinhole camera model. You can use the matrix to transform 3D coordinates to 2D coordinates on an image plane.

![](https://developer.apple.com/images/com.apple.arkit/media-2902622@2x.png)

The values `fx` and `fy` are the pixel focal length, and are identical for square pixels. The values `ox` and `oy` are the offsets of the principal point from the top-left corner of the image frame. All values are expressed in pixels.

## See Also

### Examining Imaging Parameters

- [imageResolution](imageresolution.md): The width and height, in pixels, of the captured camera image.
