> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/contentcatalogpercentcompleted](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/contentcatalogpercentcompleted)

# contentCatalogPercentCompleted (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The percentage of the camera’s content that has been catalogued.

## Declaration

```swift
var contentCatalogPercentCompleted: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property ranges from 0 to 100.

## See Also

### Reading Files

- [contents](contents.md): All image, movie, and audio files stored on the camera, in an order that reflects the camera’s storage folder structure.
- [mediaFiles](mediafiles.md): All image, movie and audio files stored on the camera, without regard to the camera’s storage folder structure.
- [files(ofType:)](files%28oftype_%29.md): Returns an array of files of the selected type on the camera.
- [requestReadData(from:atOffset:length:readDelegate:didReadDataSelector:contextInfo:)](requestreaddata%28from_atoffset_length_readdelegate_didreaddataselector_contextinfo_%29.md): Asynchronously reads data of a specified length from a specified offset.

# contentCatalogPercentCompleted (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The percentage of the camera’s content that has been catalogued.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger contentCatalogPercentCompleted;
```

<a id="Discussion"></a>

## Discussion

The value of this property ranges from 0 to 100.

## See Also

### Reading Files

- [contents](contents.md): All image, movie, and audio files stored on the camera, in an order that reflects the camera’s storage folder structure.
- [mediaFiles](mediafiles.md): All image, movie and audio files stored on the camera, without regard to the camera’s storage folder structure.
- [filesOfType:](files%28oftype_%29.md): Returns an array of files of the selected type on the camera.
- [requestReadDataFromFile:atOffset:length:readDelegate:didReadDataSelector:contextInfo:](requestreaddata%28from_atoffset_length_readdelegate_didreaddataselector_contextinfo_%29.md): Asynchronously reads data of a specified length from a specified offset.
