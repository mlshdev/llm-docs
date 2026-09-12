> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetmediatype](https://developer.apple.com/documentation/photos/phassetmediatype)

# PHAssetMediaType (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Identifies the general type of an asset, such as image or video.

## Declaration

```swift
enum PHAssetMediaType
```

<a id="overview"></a>

## Overview

You use these constants with the [PHAsset](phasset.md) and [PHContentEditingInput](phcontenteditinginput.md) classes to fetch specific types of assets or to identify an asset being edited.

## Topics

### Constants

- [PHAssetMediaType.unknown](phassetmediatype/unknown.md): The asset’s type is unknown.
- [PHAssetMediaType.image](phassetmediatype/image.md): The asset is a photo or other static image.
- [PHAssetMediaType.video](phassetmediatype/video.md): The asset is a video file.
- [PHAssetMediaType.audio](phassetmediatype/audio.md): The asset is an audio file.

### Initializers

- [init(rawValue:)](phassetmediatype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reading Asset Metadata

- [contentType](phasset/contenttype.md): The type of image or video data that is presented for the asset
- [mediaType](phasset/mediatype.md): The type of the asset, such as video or audio.
- [mediaSubtypes](phasset/mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets, such as panoramic photo or high-frame-rate video.
- [PHAssetMediaSubtype](phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
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

# PHAssetMediaType (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Identifies the general type of an asset, such as image or video.

## Declaration

```objectivec
enum PHAssetMediaType : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants with the [PHAsset](phasset.md) and [PHContentEditingInput](phcontenteditinginput.md) classes to fetch specific types of assets or to identify an asset being edited.

## Topics

### Constants

- [PHAssetMediaTypeUnknown](phassetmediatype/unknown.md): The asset’s type is unknown.
- [PHAssetMediaTypeImage](phassetmediatype/image.md): The asset is a photo or other static image.
- [PHAssetMediaTypeVideo](phassetmediatype/video.md): The asset is a video file.
- [PHAssetMediaTypeAudio](phassetmediatype/audio.md): The asset is an audio file.

## See Also

### Reading Asset Metadata

- [contentType](phasset/contenttype.md): The type of image or video data that is presented for the asset
- [mediaType](phasset/mediatype.md): The type of the asset, such as video or audio.
- [mediaSubtypes](phasset/mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets, such as panoramic photo or high-frame-rate video.
- [PHAssetMediaSubtype](phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
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
