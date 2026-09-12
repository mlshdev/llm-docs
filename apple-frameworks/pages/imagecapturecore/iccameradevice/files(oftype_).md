> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/files(oftype:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/files(oftype:))

# files(ofType:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Returns an array of files of the selected type on the camera.

## Declaration

```swift
func files(ofType fileUTType: String) -> [String]?
```

<a id="Discussion"></a>

## Discussion

For the `fileType` parameter, pass one of the following uniform type identifier strings: `kUTTypeImage`, `kUTTypeMovie`, `kUTTypeAudio`, or `kUTTypeData`.

## See Also

### Reading Files

- [contents](contents.md): All image, movie, and audio files stored on the camera, in an order that reflects the camera’s storage folder structure.
- [mediaFiles](mediafiles.md): All image, movie and audio files stored on the camera, without regard to the camera’s storage folder structure.
- [contentCatalogPercentCompleted](contentcatalogpercentcompleted.md): The percentage of the camera’s content that has been catalogued.
- [requestReadData(from:atOffset:length:readDelegate:didReadDataSelector:contextInfo:)](requestreaddata%28from_atoffset_length_readdelegate_didreaddataselector_contextinfo_%29.md): Asynchronously reads data of a specified length from a specified offset.

# filesOfType: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Returns an array of files of the selected type on the camera.

## Declaration

```objectivec
- (NSArray<NSString *> *) filesOfType:(NSString *) fileUTType;
```

<a id="Discussion"></a>

## Discussion

For the `fileType` parameter, pass one of the following uniform type identifier strings: `kUTTypeImage`, `kUTTypeMovie`, `kUTTypeAudio`, or `kUTTypeData`.

## See Also

### Reading Files

- [contents](contents.md): All image, movie, and audio files stored on the camera, in an order that reflects the camera’s storage folder structure.
- [mediaFiles](mediafiles.md): All image, movie and audio files stored on the camera, without regard to the camera’s storage folder structure.
- [contentCatalogPercentCompleted](contentcatalogpercentcompleted.md): The percentage of the camera’s content that has been catalogued.
- [requestReadDataFromFile:atOffset:length:readDelegate:didReadDataSelector:contextInfo:](requestreaddata%28from_atoffset_length_readdelegate_didreaddataselector_contextinfo_%29.md): Asynchronously reads data of a specified length from a specified offset.
