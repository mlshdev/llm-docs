> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/mediafiles](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/mediafiles)

# mediaFiles (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

All image, movie and audio files stored on the camera, without regard to the camera’s storage folder structure.

## Declaration

```swift
var mediaFiles: [ICCameraItem]? { get }
```

## See Also

### Reading Files

- [contents](contents.md): All image, movie, and audio files stored on the camera, in an order that reflects the camera’s storage folder structure.
- [contentCatalogPercentCompleted](contentcatalogpercentcompleted.md): The percentage of the camera’s content that has been catalogued.
- [files(ofType:)](files%28oftype_%29.md): Returns an array of files of the selected type on the camera.
- [requestReadData(from:atOffset:length:readDelegate:didReadDataSelector:contextInfo:)](requestreaddata%28from_atoffset_length_readdelegate_didreaddataselector_contextinfo_%29.md): Asynchronously reads data of a specified length from a specified offset.

# mediaFiles (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

All image, movie and audio files stored on the camera, without regard to the camera’s storage folder structure.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<ICCameraItem *> * mediaFiles;
```

## See Also

### Reading Files

- [contents](contents.md): All image, movie, and audio files stored on the camera, in an order that reflects the camera’s storage folder structure.
- [contentCatalogPercentCompleted](contentcatalogpercentcompleted.md): The percentage of the camera’s content that has been catalogued.
- [filesOfType:](files%28oftype_%29.md): Returns an array of files of the selected type on the camera.
- [requestReadDataFromFile:atOffset:length:readDelegate:didReadDataSelector:contextInfo:](requestreaddata%28from_atoffset_length_readdelegate_didreaddataselector_contextinfo_%29.md): Asynchronously reads data of a specified length from a specified offset.
