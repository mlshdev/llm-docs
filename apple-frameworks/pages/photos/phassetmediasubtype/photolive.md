> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetmediasubtype/photolive](https://developer.apple.com/documentation/photos/phassetmediasubtype/photolive)

# photoLive (Swift)

**Framework:** Photos  
**Kind:** Type Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset is a Live Photo that includes movement and sounds from the moments just before and after its capture.

## Declaration

```swift
static var photoLive: PHAssetMediaSubtype { get }
```

<a id="Discussion"></a>

## Discussion

To display a Live Photo asset with its associated video content, retrieve a [PHLivePhoto](../phlivephoto.md) object using the [PHImageManager](../phimagemanager.md) class and assign it to a [PHLivePhotoView](../../photosui/phlivephotoview.md) object.

## See Also

### Media Subtypes

- [photoPanorama](photopanorama.md): The asset is a large-format panorama photo.
- [photoHDR](photohdr.md): The asset is a high-dynamic range photo.
- [photoScreenshot](photoscreenshot.md): The asset is an image captured with the device’s screenshot feature.
- [videoCinematic](videocinematic.md): The asset is a cinematic video.
- [videoStreamed](videostreamed.md): The asset is a video with contents that always stream over a network connection.
- [videoHighFrameRate](videohighframerate.md): The asset is a high-frame-rate video.
- [videoTimelapse](videotimelapse.md): The asset is a time-lapse video.
- [photoDepthEffect](photodeptheffect.md): The asset is a photo captured with the Camera app’s Portrait mode depth effect.

# PHAssetMediaSubtypePhotoLive (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset is a Live Photo that includes movement and sounds from the moments just before and after its capture.

## Declaration

```objectivec
PHAssetMediaSubtypePhotoLive
```

<a id="Discussion"></a>

## Discussion

To display a Live Photo asset with its associated video content, retrieve a [PHLivePhoto](../phlivephoto.md) object using the [PHImageManager](../phimagemanager.md) class and assign it to a [PHLivePhotoView](../../photosui/phlivephotoview.md) object.

## See Also

### Media Subtypes

- [PHAssetMediaSubtypeNone](https://developer.apple.com/documentation/photos/phassetmediasubtype/phassetmediasubtypenone): The asset has no subtype.
- [PHAssetMediaSubtypePhotoPanorama](photopanorama.md): The asset is a large-format panorama photo.
- [PHAssetMediaSubtypePhotoHDR](photohdr.md): The asset is a high-dynamic range photo.
- [PHAssetMediaSubtypePhotoScreenshot](photoscreenshot.md): The asset is an image captured with the device’s screenshot feature.
- [PHAssetMediaSubtypeVideoCinematic](videocinematic.md): The asset is a cinematic video.
- [PHAssetMediaSubtypeVideoStreamed](videostreamed.md): The asset is a video with contents that always stream over a network connection.
- [PHAssetMediaSubtypeVideoHighFrameRate](videohighframerate.md): The asset is a high-frame-rate video.
- [PHAssetMediaSubtypeVideoTimelapse](videotimelapse.md): The asset is a time-lapse video.
- [PHAssetMediaSubtypePhotoDepthEffect](photodeptheffect.md): The asset is a photo captured with the Camera app’s Portrait mode depth effect.
