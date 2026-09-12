> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetmediasubtype/videostreamed](https://developer.apple.com/documentation/photos/phassetmediasubtype/videostreamed)

# videoStreamed (Swift)

**Framework:** Photos  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset is a video with contents that always stream over a network connection.

## Declaration

```swift
static var videoStreamed: PHAssetMediaSubtype { get }
```

<a id="Discussion"></a>

## Discussion

This subtype identifies video assets that are never stored on the local device, such as shared videos in a subscribed iCloud Photo Stream.

## See Also

### Media Subtypes

- [photoPanorama](photopanorama.md): The asset is a large-format panorama photo.
- [photoHDR](photohdr.md): The asset is a high-dynamic range photo.
- [photoScreenshot](photoscreenshot.md): The asset is an image captured with the device’s screenshot feature.
- [photoLive](photolive.md): The asset is a Live Photo that includes movement and sounds from the moments just before and after its capture.
- [videoCinematic](videocinematic.md): The asset is a cinematic video.
- [videoHighFrameRate](videohighframerate.md): The asset is a high-frame-rate video.
- [videoTimelapse](videotimelapse.md): The asset is a time-lapse video.
- [photoDepthEffect](photodeptheffect.md): The asset is a photo captured with the Camera app’s Portrait mode depth effect.

# PHAssetMediaSubtypeVideoStreamed (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset is a video with contents that always stream over a network connection.

## Declaration

```objectivec
PHAssetMediaSubtypeVideoStreamed
```

<a id="Discussion"></a>

## Discussion

This subtype identifies video assets that are never stored on the local device, such as shared videos in a subscribed iCloud Photo Stream.

## See Also

### Media Subtypes

- [PHAssetMediaSubtypeNone](https://developer.apple.com/documentation/photos/phassetmediasubtype/phassetmediasubtypenone): The asset has no subtype.
- [PHAssetMediaSubtypePhotoPanorama](photopanorama.md): The asset is a large-format panorama photo.
- [PHAssetMediaSubtypePhotoHDR](photohdr.md): The asset is a high-dynamic range photo.
- [PHAssetMediaSubtypePhotoScreenshot](photoscreenshot.md): The asset is an image captured with the device’s screenshot feature.
- [PHAssetMediaSubtypePhotoLive](photolive.md): The asset is a Live Photo that includes movement and sounds from the moments just before and after its capture.
- [PHAssetMediaSubtypeVideoCinematic](videocinematic.md): The asset is a cinematic video.
- [PHAssetMediaSubtypeVideoHighFrameRate](videohighframerate.md): The asset is a high-frame-rate video.
- [PHAssetMediaSubtypeVideoTimelapse](videotimelapse.md): The asset is a time-lapse video.
- [PHAssetMediaSubtypePhotoDepthEffect](photodeptheffect.md): The asset is a photo captured with the Camera app’s Portrait mode depth effect.
