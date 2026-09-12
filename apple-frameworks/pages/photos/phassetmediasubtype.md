> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetmediasubtype](https://developer.apple.com/documentation/photos/phassetmediasubtype)

# PHAssetMediaSubtype (Swift)

**Framework:** Photos  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.

## Declaration

```swift
struct PHAssetMediaSubtype
```

<a id="overview"></a>

## Overview

You use these constants with the [PHAsset](phasset.md) and [PHContentEditingInput](phcontenteditinginput.md) classes to fetch specific types of assets or to identify an asset being edited.

Media subtypes are [OptionSet](https://developer.apple.com/documentation/swift/optionset) values, so you can combine them using set literal syntax to test for multiple subtypes.

## Topics

### Initializers

- [init(rawValue:)](phassetmediasubtype/init%28rawvalue_%29.md): Initializes a media subtype from a raw value.

### Media Subtypes

- [photoPanorama](phassetmediasubtype/photopanorama.md): The asset is a large-format panorama photo.
- [photoHDR](phassetmediasubtype/photohdr.md): The asset is a high-dynamic range photo.
- [photoScreenshot](phassetmediasubtype/photoscreenshot.md): The asset is an image captured with the device’s screenshot feature.
- [photoLive](phassetmediasubtype/photolive.md): The asset is a Live Photo that includes movement and sounds from the moments just before and after its capture.
- [videoCinematic](phassetmediasubtype/videocinematic.md): The asset is a cinematic video.
- [videoStreamed](phassetmediasubtype/videostreamed.md): The asset is a video with contents that always stream over a network connection.
- [videoHighFrameRate](phassetmediasubtype/videohighframerate.md): The asset is a high-frame-rate video.
- [videoTimelapse](phassetmediasubtype/videotimelapse.md): The asset is a time-lapse video.
- [photoDepthEffect](phassetmediasubtype/photodeptheffect.md): The asset is a photo captured with the Camera app’s Portrait mode depth effect.

### Type Properties

- [photoAnimation](phassetmediasubtype/photoanimation.md)
- [spatialMedia](phassetmediasubtype/spatialmedia.md)
- [videoScreenRecording](phassetmediasubtype/videoscreenrecording.md): The media subtype is a photo animation such as a GIF, animated PNGs, etc.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Reading Asset Metadata

- [contentType](phasset/contenttype.md): The type of image or video data that is presented for the asset
- [mediaType](phasset/mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [mediaSubtypes](phasset/mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets, such as panoramic photo or high-frame-rate video.
- [sourceType](phasset/sourcetype.md): The means by which the asset enters the user’s Photos library.
- [PHAssetSourceType](phassetsourcetype.md): The means by which an asset enters the Photos library.
- [pixelWidth](phasset/pixelwidth.md): The width, in pixels, of the asset’s image or video data.
- [pixelHeight](phasset/pixelheight.md): The height, in pixels, of the asset’s image or video data.
- [addedDate](phasset/addeddate.md): The date and time this asset was added to the photo library (from the device that was used to add this asset)
- [creationDate](phasset/creationdate.md): The date and time of the asset’s creation.
- [modificationDate](phasset/modificationdate.md): The date and time of the asset’s last modification.
- [location](phasset/location.md): The location information for the asset.
- [duration](phasset/duration.md): The duration, in seconds, of the video asset.
- [isFavorite](phasset/isfavorite.md): A Boolean value that indicates whether the user marks the asset as a favorite.
- [isHidden](phasset/ishidden.md): A Boolean value that indicates whether the user hides the asset.

# PHAssetMediaSubtype (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.

## Declaration

```objectivec
enum PHAssetMediaSubtype : NSUInteger;
```

<a id="overview"></a>

## Overview

You use these constants with the [PHAsset](phasset.md) and [PHContentEditingInput](phcontenteditinginput.md) classes to fetch specific types of assets or to identify an asset being edited.

Media subtypes are [OptionSet](https://developer.apple.com/documentation/swift/optionset) values, so you can combine them using set literal syntax to test for multiple subtypes.

## Topics

### Media Subtypes

- [PHAssetMediaSubtypeNone](https://developer.apple.com/documentation/photos/phassetmediasubtype/phassetmediasubtypenone): The asset has no subtype.
- [PHAssetMediaSubtypePhotoPanorama](phassetmediasubtype/photopanorama.md): The asset is a large-format panorama photo.
- [PHAssetMediaSubtypePhotoHDR](phassetmediasubtype/photohdr.md): The asset is a high-dynamic range photo.
- [PHAssetMediaSubtypePhotoScreenshot](phassetmediasubtype/photoscreenshot.md): The asset is an image captured with the device’s screenshot feature.
- [PHAssetMediaSubtypePhotoLive](phassetmediasubtype/photolive.md): The asset is a Live Photo that includes movement and sounds from the moments just before and after its capture.
- [PHAssetMediaSubtypeVideoCinematic](phassetmediasubtype/videocinematic.md): The asset is a cinematic video.
- [PHAssetMediaSubtypeVideoStreamed](phassetmediasubtype/videostreamed.md): The asset is a video with contents that always stream over a network connection.
- [PHAssetMediaSubtypeVideoHighFrameRate](phassetmediasubtype/videohighframerate.md): The asset is a high-frame-rate video.
- [PHAssetMediaSubtypeVideoTimelapse](phassetmediasubtype/videotimelapse.md): The asset is a time-lapse video.
- [PHAssetMediaSubtypePhotoDepthEffect](phassetmediasubtype/photodeptheffect.md): The asset is a photo captured with the Camera app’s Portrait mode depth effect.

### Enumeration Cases

- [PHAssetMediaSubtypePhotoAnimation](phassetmediasubtype/photoanimation.md)
- [PHAssetMediaSubtypeSpatialMedia](phassetmediasubtype/spatialmedia.md)
- [PHAssetMediaSubtypeVideoScreenRecording](phassetmediasubtype/videoscreenrecording.md): The media subtype is a photo animation such as a GIF, animated PNGs, etc.

## See Also

### Reading Asset Metadata

- [contentType](phasset/contenttype.md): The type of image or video data that is presented for the asset
- [mediaType](phasset/mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [mediaSubtypes](phasset/mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets, such as panoramic photo or high-frame-rate video.
- [sourceType](phasset/sourcetype.md): The means by which the asset enters the user’s Photos library.
- [PHAssetSourceType](phassetsourcetype.md): The means by which an asset enters the Photos library.
- [pixelWidth](phasset/pixelwidth.md): The width, in pixels, of the asset’s image or video data.
- [pixelHeight](phasset/pixelheight.md): The height, in pixels, of the asset’s image or video data.
- [addedDate](phasset/addeddate.md): The date and time this asset was added to the photo library (from the device that was used to add this asset)
- [creationDate](phasset/creationdate.md): The date and time of the asset’s creation.
- [modificationDate](phasset/modificationdate.md): The date and time of the asset’s last modification.
- [location](phasset/location.md): The location information for the asset.
- [duration](phasset/duration.md): The duration, in seconds, of the video asset.
- [favorite](phasset/isfavorite.md): A Boolean value that indicates whether the user marks the asset as a favorite.
- [hidden](phasset/ishidden.md): A Boolean value that indicates whether the user hides the asset.
