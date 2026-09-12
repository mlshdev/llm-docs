> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/photocount](https://developer.apple.com/documentation/avfoundation/avcapturephoto/photocount)

# photoCount (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The 1-based index of this photo capture relative to other results from the same capture request.

## Declaration

```swift
var photoCount: Int { get }
```

## Mentioned In

- [Capturing a bracketed photo sequence](../capturing-a-bracketed-photo-sequence.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

The [expectedPhotoCount](../avcaptureresolvedphotosettings/expectedphotocount.md) property of this capture result’s [resolvedSettings](resolvedsettings.md) object indicates the total number of images that will be returned for a given capture request. When your delegate’s [photoOutput(\_:didFinishProcessingPhoto:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method receives a photo whose [photoCount](photocount.md) value  matches the [expectedPhotoCount](../avcaptureresolvedphotosettings/expectedphotocount.md) value, you know you’ve received the last one for the given capture request.

## See Also

### Resolving photo capture requests

- [resolvedSettings](resolvedsettings.md): The settings object that was used to request this photo capture.
- [timestamp](timestamp.md): The time at which the image was captured.

# photoCount (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The 1-based index of this photo capture relative to other results from the same capture request.

## Declaration

```objectivec
@property (readonly) NSInteger photoCount;
```

## Mentioned In

- [Capturing a bracketed photo sequence](../capturing-a-bracketed-photo-sequence.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

The [expectedPhotoCount](../avcaptureresolvedphotosettings/expectedphotocount.md) property of this capture result’s [resolvedSettings](resolvedsettings.md) object indicates the total number of images that will be returned for a given capture request. When your delegate’s [captureOutput:didFinishProcessingPhoto:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessingphoto_error_%29.md) method receives a photo whose [photoCount](photocount.md) value  matches the [expectedPhotoCount](../avcaptureresolvedphotosettings/expectedphotocount.md) value, you know you’ve received the last one for the given capture request.

## See Also

### Resolving photo capture requests

- [resolvedSettings](resolvedsettings.md): The settings object that was used to request this photo capture.
- [timestamp](timestamp.md): The time at which the image was captured.
