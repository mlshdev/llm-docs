> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetsourcetype](https://developer.apple.com/documentation/photos/phassetsourcetype)

# PHAssetSourceType (Swift)

**Framework:** Photos  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The means by which an asset enters the Photos library.

## Declaration

```swift
struct PHAssetSourceType
```

## Topics

### Initializers

- [init(rawValue:)](phassetsourcetype/init%28rawvalue_%29.md): Initializes an asset source type from a raw value.

### Constants

- [typeUserLibrary](phassetsourcetype/typeuserlibrary.md): The asset is part of the user’s main Photos library.
- [typeCloudShared](phassetsourcetype/typecloudshared.md): The asset originates from an iCloud Shared Album.
- [typeiTunesSynced](phassetsourcetype/typeitunessynced.md): The asset originates from a Mac or PC and is present on the device through iTunes sync.

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
- [PHAssetMediaSubtype](phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
- [sourceType](phasset/sourcetype.md): The means by which the asset enters the user’s Photos library.
- [pixelWidth](phasset/pixelwidth.md): The width, in pixels, of the asset’s image or video data.
- [pixelHeight](phasset/pixelheight.md): The height, in pixels, of the asset’s image or video data.
- [addedDate](phasset/addeddate.md): The date and time this asset was added to the photo library (from the device that was used to add this asset)
- [creationDate](phasset/creationdate.md): The date and time of the asset’s creation.
- [modificationDate](phasset/modificationdate.md): The date and time of the asset’s last modification.
- [location](phasset/location.md): The location information for the asset.
- [duration](phasset/duration.md): The duration, in seconds, of the video asset.
- [isFavorite](phasset/isfavorite.md): A Boolean value that indicates whether the user marks the asset as a favorite.
- [isHidden](phasset/ishidden.md): A Boolean value that indicates whether the user hides the asset.

# PHAssetSourceType (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The means by which an asset enters the Photos library.

## Declaration

```objectivec
enum PHAssetSourceType : NSUInteger;
```

## Topics

### Constants

- [PHAssetSourceTypeNone](https://developer.apple.com/documentation/photos/phassetsourcetype/phassetsourcetypenone): Source information is not available for the asset.
- [PHAssetSourceTypeUserLibrary](phassetsourcetype/typeuserlibrary.md): The asset is part of the user’s main Photos library.
- [PHAssetSourceTypeCloudShared](phassetsourcetype/typecloudshared.md): The asset originates from an iCloud Shared Album.
- [PHAssetSourceTypeiTunesSynced](phassetsourcetype/typeitunessynced.md): The asset originates from a Mac or PC and is present on the device through iTunes sync.

## See Also

### Reading Asset Metadata

- [contentType](phasset/contenttype.md): The type of image or video data that is presented for the asset
- [mediaType](phasset/mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [mediaSubtypes](phasset/mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets, such as panoramic photo or high-frame-rate video.
- [PHAssetMediaSubtype](phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
- [sourceType](phasset/sourcetype.md): The means by which the asset enters the user’s Photos library.
- [pixelWidth](phasset/pixelwidth.md): The width, in pixels, of the asset’s image or video data.
- [pixelHeight](phasset/pixelheight.md): The height, in pixels, of the asset’s image or video data.
- [addedDate](phasset/addeddate.md): The date and time this asset was added to the photo library (from the device that was used to add this asset)
- [creationDate](phasset/creationdate.md): The date and time of the asset’s creation.
- [modificationDate](phasset/modificationdate.md): The date and time of the asset’s last modification.
- [location](phasset/location.md): The location information for the asset.
- [duration](phasset/duration.md): The duration, in seconds, of the video asset.
- [favorite](phasset/isfavorite.md): A Boolean value that indicates whether the user marks the asset as a favorite.
- [hidden](phasset/ishidden.md): A Boolean value that indicates whether the user hides the asset.
