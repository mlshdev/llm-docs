> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile](https://developer.apple.com/documentation/imagecapturecore/iccamerafile)

# ICCameraFile (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An object that represents a file on a camera.

## Declaration

```swift
class ICCameraFile
```

## Topics

### Requesting Metadata

- [requestMetadataDictionary(options:completion:)](iccamerafile/requestmetadatadictionary%28options_completion_%29.md): Requests metadata and executes the completion block in place of the delegate.

### Requesting Thumbnails

- [requestThumbnailData(options:completion:)](iccamerafile/requestthumbnaildata%28options_completion_%29.md): Requests a thumbnail and executes the completion block in place of the delegate.

### Requesting Downloads

- [requestDownload(options:completion:)](iccamerafile/requestdownload%28options_completion_%29.md): Requests a download and executes the completion block in place of the delegate.

### Requesting Data

- [requestReadData(atOffset:length:completion:)](iccamerafile/requestreaddata%28atoffset_length_completion_%29.md): Requests to asynchronously read data of a specified length from a specified offset, then executes the completion block.

### Inspecting a File’s Name

- [originalFilename](iccamerafile/originalfilename.md): The original name of the file on disk.
- [createdFilename](iccamerafile/createdfilename.md): The created name of the file.

### Inspecting a File’s Identity

- [groupUUID](iccamerafile/groupuuid.md): The group `UUID` of the file.
- [relatedUUID](iccamerafile/relateduuid.md): A related UUID correlating several images from an Apple device.
- [originatingAssetID](iccamerafile/originatingassetid.md): The originating asset ID of an `HEIF` or `HVEC` file.

### Determining When a File Was Created or Modified

- [fileCreationDate](iccamerafile/filecreationdate.md): The creation date of the file.
- [fileModificationDate](iccamerafile/filemodificationdate.md): The modification date of the file.

### Inspecting a File’s Size

- [fileSize](iccamerafile/filesize.md): The size of the file, in bytes.

### Inspecting a File’s Dimensions

- [width](iccamerafile/width.md): The width of an image or movie frame.
- [height](iccamerafile/height.md): The height of an image or movie frame.

### Inspecting a File’s EXIF Data

- [orientation](iccamerafile/orientation.md): The orientation to use when downloading the image.
- [ICEXIFOrientationType](icexiforientationtype.md): The file’s orientation type.
- [exifCreationDate](iccamerafile/exifcreationdate.md): The `EXIF` creation date of the file.
- [exifModificationDate](iccamerafile/exifmodificationdate.md): The `EXIF` modification date of the file.

### Identifying a File’s Location

- [gpsString](iccamerafile/gpsstring.md): The GPS String of the file in standard format.

### Inspecting a File in a Burst

- [firstPicked](iccamerafile/firstpicked.md): A Boolean value that indicates whether a file is autopicked by Photos to represent the burst.
- [burstUUID](iccamerafile/burstuuid.md): The burst UUID of the file if it is in a burst.
- [burstFavorite](iccamerafile/burstfavorite.md): A Boolean value that indicates this file is the burst favorite in a burst.
- [burstPicked](iccamerafile/burstpicked.md): A Boolean value that indicates whether this file is user picked in a burst.

### Inspecting Video Properties

- [duration](iccamerafile/duration.md): The duration, in seconds, of an audio or video file.
- [highFramerate](iccamerafile/highframerate.md): A Boolean value that indicates whether the file is a slow motion or high-frame-rate video file.
- [timeLapse](iccamerafile/timelapse.md): A Boolean value that indicates whether the file is a time-lapse video file.

### Identifying Related Files

- [sidecarFiles](iccamerafile/sidecarfiles.md): An array of two camera files associated with this file.
- [pairedRawImage](iccamerafile/pairedrawimage.md): A sidecar file containing the logical `RAW` compliment of a `JPG` or other two-format image.

### Instance Properties

- [fingerprint](iccamerafile/fingerprint.md)

### Instance Methods

- [requestFingerprint(completion:)](iccamerafile/requestfingerprint%28completion_%29.md)
- [requestSecurityScopedURL(completion:)](iccamerafile/requestsecurityscopedurl%28completion_%29.md)

### Type Methods

- [fingerprintForFile(at:)](iccamerafile/fingerprintforfile%28at_%29.md)

## Relationships

### Inherits From

- [ICCameraItem](iccameraitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Cameras

- [ICCameraDevice](iccameradevice.md): An object that represents a camera.
- [ICCameraDeviceDelegate](iccameradevicedelegate.md): Methods for detecting cameras, getting metadata and thumbnails, handling access and capability changes, and performing other actions on connected cameras.
- [ICCameraItem](iccameraitem.md): An abstract class that represents a camera item.
- [ICCameraFolder](iccamerafolder.md): An object that represents a folder on a camera.

# ICCameraFile (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An object that represents a file on a camera.

## Declaration

```objectivec
@interface ICCameraFile : ICCameraItem
```

## Topics

### Requesting Metadata

- [requestMetadataDictionaryWithOptions:completion:](iccamerafile/requestmetadatadictionary%28options_completion_%29.md): Requests metadata and executes the completion block in place of the delegate.

### Requesting Thumbnails

- [requestThumbnailDataWithOptions:completion:](iccamerafile/requestthumbnaildata%28options_completion_%29.md): Requests a thumbnail and executes the completion block in place of the delegate.

### Requesting Downloads

- [requestDownloadWithOptions:completion:](iccamerafile/requestdownload%28options_completion_%29.md): Requests a download and executes the completion block in place of the delegate.

### Requesting Data

- [requestReadDataAtOffset:length:completion:](iccamerafile/requestreaddata%28atoffset_length_completion_%29.md): Requests to asynchronously read data of a specified length from a specified offset, then executes the completion block.

### Inspecting a File’s Name

- [originalFilename](iccamerafile/originalfilename.md): The original name of the file on disk.
- [createdFilename](iccamerafile/createdfilename.md): The created name of the file.

### Inspecting a File’s Identity

- [groupUUID](iccamerafile/groupuuid.md): The group `UUID` of the file.
- [relatedUUID](iccamerafile/relateduuid.md): A related UUID correlating several images from an Apple device.
- [originatingAssetID](iccamerafile/originatingassetid.md): The originating asset ID of an `HEIF` or `HVEC` file.

### Determining When a File Was Created or Modified

- [fileCreationDate](iccamerafile/filecreationdate.md): The creation date of the file.
- [fileModificationDate](iccamerafile/filemodificationdate.md): The modification date of the file.

### Inspecting a File’s Size

- [fileSize](iccamerafile/filesize.md): The size of the file, in bytes.

### Inspecting a File’s Dimensions

- [width](iccamerafile/width.md): The width of an image or movie frame.
- [height](iccamerafile/height.md): The height of an image or movie frame.

### Inspecting a File’s EXIF Data

- [orientation](iccamerafile/orientation.md): The orientation to use when downloading the image.
- [ICEXIFOrientationType](icexiforientationtype.md): The file’s orientation type.
- [exifCreationDate](iccamerafile/exifcreationdate.md): The `EXIF` creation date of the file.
- [exifModificationDate](iccamerafile/exifmodificationdate.md): The `EXIF` modification date of the file.

### Identifying a File’s Location

- [gpsString](iccamerafile/gpsstring.md): The GPS String of the file in standard format.

### Inspecting a File in a Burst

- [firstPicked](iccamerafile/firstpicked.md): A Boolean value that indicates whether a file is autopicked by Photos to represent the burst.
- [burstUUID](iccamerafile/burstuuid.md): The burst UUID of the file if it is in a burst.
- [burstFavorite](iccamerafile/burstfavorite.md): A Boolean value that indicates this file is the burst favorite in a burst.
- [burstPicked](iccamerafile/burstpicked.md): A Boolean value that indicates whether this file is user picked in a burst.

### Inspecting Video Properties

- [duration](iccamerafile/duration.md): The duration, in seconds, of an audio or video file.
- [highFramerate](iccamerafile/highframerate.md): A Boolean value that indicates whether the file is a slow motion or high-frame-rate video file.
- [timeLapse](iccamerafile/timelapse.md): A Boolean value that indicates whether the file is a time-lapse video file.

### Identifying Related Files

- [sidecarFiles](iccamerafile/sidecarfiles.md): An array of two camera files associated with this file.
- [pairedRawImage](iccamerafile/pairedrawimage.md): A sidecar file containing the logical `RAW` compliment of a `JPG` or other two-format image.

### Instance Properties

- [fingerprint](iccamerafile/fingerprint.md)

### Instance Methods

- [requestFingerprintWithCompletion:](iccamerafile/requestfingerprint%28completion_%29.md)
- [requestSecurityScopedURLWithCompletion:](iccamerafile/requestsecurityscopedurl%28completion_%29.md)

### Type Methods

- [fingerprintForFileAtURL:](iccamerafile/fingerprintforfile%28at_%29.md)

## Relationships

### Inherits From

- [ICCameraItem](iccameraitem.md)

## See Also

### Cameras

- [ICCameraDevice](iccameradevice.md): An object that represents a camera.
- [ICCameraDeviceDelegate](iccameradevicedelegate.md): Methods for detecting cameras, getting metadata and thumbnails, handling access and capability changes, and performing other actions on connected cameras.
- [ICCameraItem](iccameraitem.md): An abstract class that represents a camera item.
- [ICCameraFolder](iccamerafolder.md): An object that represents a folder on a camera.
