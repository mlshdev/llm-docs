> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureresolvedphotosettings/uniqueid](https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/uniqueid)

# uniqueID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The unique identifier for the photo capture this settings object corresponds to.

## Declaration

```swift
var uniqueID: Int64 { get }
```

## Mentioned In

- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

The value of this property matches the matches the [uniqueID](../avcapturephotosettings/uniqueid.md) value of the [AVCapturePhotoSettings](../avcapturephotosettings.md) object you passed when initiating a photo capture with the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. Use this value to determine which delegate method calls correspond to which capture requests.

## See Also

### Resolving photo capture requests

- [expectedPhotoCount](expectedphotocount.md): The number of photo capture results in the capture request.

# uniqueID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The unique identifier for the photo capture this settings object corresponds to.

## Declaration

```objectivec
@property (readonly) int64_t uniqueID;
```

## Mentioned In

- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

The value of this property matches the matches the [uniqueID](../avcapturephotosettings/uniqueid.md) value of the [AVCapturePhotoSettings](../avcapturephotosettings.md) object you passed when initiating a photo capture with the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. Use this value to determine which delegate method calls correspond to which capture requests.

## See Also

### Resolving photo capture requests

- [expectedPhotoCount](expectedphotocount.md): The number of photo capture results in the capture request.
