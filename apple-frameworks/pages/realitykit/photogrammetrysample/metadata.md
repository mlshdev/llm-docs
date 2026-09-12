> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysample/metadata](https://developer.apple.com/documentation/realitykit/photogrammetrysample/metadata)

# metadata

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An image’s EXIF metadata.

## Declaration

```swift
var metadata: [String : Any] { get set }
```

<a id="discussion"></a>

## Discussion

You can provide EXIF metadata captured by your digital camera to assist in the object-creation process. During object creation, RealityKit can use data from the EXIF keys listed below.

- `TIFFMake`
- `TIFFModel`
- `TIFFOrientation`
- `ExifBodySerialNumber`
- `ExifLensMake`
- `ExifLensModel`
- `ExifLensSerialNumber`
- `ExifFocalLength`
- `ExifFocalLengthIn35mmFilm`
- `GPSAltitude`
- `GPSAltitudeRef`
- `GPSLatitude`
- `GPSLatitudeRef`
- `GPSLongitude`
- `GPSLongitudeRef`

## See Also

### Describing the sample

- [image](image.md): The image data for this sample.
- [depthDataMap](depthdatamap.md): The image’s depth data.
- [gravity](gravity.md): An image’s gravity vector.
- [objectMask](objectmask.md): The image’s object mask.
