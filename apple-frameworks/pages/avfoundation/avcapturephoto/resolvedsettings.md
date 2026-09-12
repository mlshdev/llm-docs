> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/resolvedsettings](https://developer.apple.com/documentation/avfoundation/avcapturephoto/resolvedsettings)

# resolvedSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The settings object that was used to request this photo capture.

## Declaration

```swift
var resolvedSettings: AVCaptureResolvedPhotoSettings { get }
```

<a id="Discussion"></a>

## Discussion

To determine which [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) call produced this photo capture result, match this [AVCaptureResolvedPhotoSettings](../avcaptureresolvedphotosettings.md) object’s [uniqueID](../avcaptureresolvedphotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you requested capture with. You can also use this object to find out which values the photo output has chosen for automatic settings.

## See Also

### Resolving photo capture requests

- [photoCount](photocount.md): The 1-based index of this photo capture relative to other results from the same capture request.
- [timestamp](timestamp.md): The time at which the image was captured.

# resolvedSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The settings object that was used to request this photo capture.

## Declaration

```objectivec
@property (readonly) AVCaptureResolvedPhotoSettings * resolvedSettings;
```

<a id="Discussion"></a>

## Discussion

To determine which [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) call produced this photo capture result, match this [AVCaptureResolvedPhotoSettings](../avcaptureresolvedphotosettings.md) object’s [uniqueID](../avcaptureresolvedphotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you requested capture with. You can also use this object to find out which values the photo output has chosen for automatic settings.

## See Also

### Resolving photo capture requests

- [photoCount](photocount.md): The 1-based index of this photo capture relative to other results from the same capture request.
- [timestamp](timestamp.md): The time at which the image was captured.
