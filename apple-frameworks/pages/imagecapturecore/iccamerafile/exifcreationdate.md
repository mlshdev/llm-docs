> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccamerafile/exifcreationdate

# exifCreationDate (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The `EXIF` creation date of the file.

## Declaration

```swift
var exifCreationDate: Date? { get }
```

## See Also

### Inspecting a File’s EXIF Data

- [orientation](orientation.md): The orientation to use when downloading the image.
- [ICEXIFOrientationType](../icexiforientationtype.md): The file’s orientation type.
- [exifModificationDate](exifmodificationdate.md): The `EXIF` modification date of the file.

# exifCreationDate (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The `EXIF` creation date of the file.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * exifCreationDate;
```

## See Also

### Inspecting a File’s EXIF Data

- [orientation](orientation.md): The orientation to use when downloading the image.
- [ICEXIFOrientationType](../icexiforientationtype.md): The file’s orientation type.
- [exifModificationDate](exifmodificationdate.md): The `EXIF` modification date of the file.
