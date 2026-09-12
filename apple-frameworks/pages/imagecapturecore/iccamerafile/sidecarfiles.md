> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile/sidecarfiles](https://developer.apple.com/documentation/imagecapturecore/iccamerafile/sidecarfiles)

# sidecarFiles (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An array of two camera files associated with this file.

## Declaration

```swift
var sidecarFiles: [ICCameraItem]? { get }
```

<a id="Discussion"></a>

## Discussion

An example of a sidecar file is a file with the same base 3 name as this file and an `XMP` extension.

## See Also

### Identifying Related Files

- [pairedRawImage](pairedrawimage.md): A sidecar file containing the logical `RAW` compliment of a `JPG` or other two-format image.

# sidecarFiles (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An array of two camera files associated with this file.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<ICCameraItem *> * sidecarFiles;
```

<a id="Discussion"></a>

## Discussion

An example of a sidecar file is a file with the same base 3 name as this file and an `XMP` extension.

## See Also

### Identifying Related Files

- [pairedRawImage](pairedrawimage.md): A sidecar file containing the logical `RAW` compliment of a `JPG` or other two-format image.
