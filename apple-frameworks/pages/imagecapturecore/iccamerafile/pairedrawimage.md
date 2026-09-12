> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile/pairedrawimage](https://developer.apple.com/documentation/imagecapturecore/iccamerafile/pairedrawimage)

# pairedRawImage (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A sidecar file containing the logical `RAW` compliment of a `JPG` or other two-format image.

## Declaration

```swift
var pairedRawImage: ICCameraFile? { get }
```

<a id="Discussion"></a>

## Discussion

This value contains a single-item subset of the [sidecarFiles](sidecarfiles.md) array.

## See Also

### Identifying Related Files

- [sidecarFiles](sidecarfiles.md): An array of two camera files associated with this file.

# pairedRawImage (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A sidecar file containing the logical `RAW` compliment of a `JPG` or other two-format image.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) ICCameraFile * pairedRawImage;
```

<a id="Discussion"></a>

## Discussion

This value contains a single-item subset of the [sidecarFiles](sidecarfiles.md) array.

## See Also

### Identifying Related Files

- [sidecarFiles](sidecarfiles.md): An array of two camera files associated with this file.
