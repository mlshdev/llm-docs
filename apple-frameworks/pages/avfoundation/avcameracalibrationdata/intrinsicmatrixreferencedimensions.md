> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcameracalibrationdata/intrinsicmatrixreferencedimensions](https://developer.apple.com/documentation/avfoundation/avcameracalibrationdata/intrinsicmatrixreferencedimensions)

# intrinsicMatrixReferenceDimensions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The image dimensions to which the camera’s intrinsic matrix values are relative.

## Declaration

```swift
var intrinsicMatrixReferenceDimensions: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

The [intrinsicMatrix](intrinsicmatrix.md) property measures focal length and principal point offset in pixels, but those values are meaningful only in the context of an image of this size.

## See Also

### Mapping pixels to scene geometry

- [intrinsicMatrix](intrinsicmatrix.md): A matrix that relates a camera’s internal properties to an ideal pinhole-camera model.
- [extrinsicMatrix](extrinsicmatrix.md): A matrix relating a camera’s position and orientation to a world or scene coordinate system.
- [pixelSize](pixelsize.md): The size, in millimeters, of one image pixel.

# intrinsicMatrixReferenceDimensions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The image dimensions to which the camera’s intrinsic matrix values are relative.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize intrinsicMatrixReferenceDimensions;
```

<a id="Discussion"></a>

## Discussion

The [intrinsicMatrix](intrinsicmatrix.md) property measures focal length and principal point offset in pixels, but those values are meaningful only in the context of an image of this size.

## See Also

### Mapping pixels to scene geometry

- [intrinsicMatrix](intrinsicmatrix.md): A matrix that relates a camera’s internal properties to an ideal pinhole-camera model.
- [extrinsicMatrix](extrinsicmatrix.md): A matrix relating a camera’s position and orientation to a world or scene coordinate system.
- [pixelSize](pixelsize.md): The size, in millimeters, of one image pixel.
