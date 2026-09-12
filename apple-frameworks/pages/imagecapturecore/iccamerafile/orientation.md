> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile/orientation](https://developer.apple.com/documentation/imagecapturecore/iccamerafile/orientation)

# orientation (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The orientation to use when downloading the image.

## Declaration

```swift
var orientation: ICEXIFOrientationType { get set }
```

<a id="Discussion"></a>

## Discussion

This property is initially set to [ICEXIFOrientationType.orientation1](../icexiforientationtype/orientation1.md) If the format of the file supports the `EXIF` orientation tag, then this property updates to match the value of that tag on receipt of the thumbnail or metadata for this file.

## See Also

### Inspecting a File’s EXIF Data

- [ICEXIFOrientationType](../icexiforientationtype.md): The file’s orientation type.
- [exifCreationDate](exifcreationdate.md): The `EXIF` creation date of the file.
- [exifModificationDate](exifmodificationdate.md): The `EXIF` modification date of the file.

# orientation (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The orientation to use when downloading the image.

## Declaration

```objectivec
@property (nonatomic, readwrite) ICEXIFOrientationType orientation;
```

<a id="Discussion"></a>

## Discussion

This property is initially set to [ICEXIFOrientation1](../icexiforientationtype/orientation1.md) If the format of the file supports the `EXIF` orientation tag, then this property updates to match the value of that tag on receipt of the thumbnail or metadata for this file.

## See Also

### Inspecting a File’s EXIF Data

- [ICEXIFOrientationType](../icexiforientationtype.md): The file’s orientation type.
- [exifCreationDate](exifcreationdate.md): The `EXIF` creation date of the file.
- [exifModificationDate](exifmodificationdate.md): The `EXIF` modification date of the file.
