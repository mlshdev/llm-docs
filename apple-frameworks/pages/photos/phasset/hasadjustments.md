> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/hasadjustments](https://developer.apple.com/documentation/photos/phasset/hasadjustments)

# hasAdjustments (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset contains adjustment data.

## Declaration

```swift
var hasAdjustments: Bool { get }
```

## See Also

### Reading Asset Metadata

- [contentType](contenttype.md): The type of image or video data that is presented for the asset
- [mediaType](mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](../phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [mediaSubtypes](mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets, such as panoramic photo or high-frame-rate video.
- [PHAssetMediaSubtype](../phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
- [sourceType](sourcetype.md): The means by which the asset enters the user’s Photos library.
- [PHAssetSourceType](../phassetsourcetype.md): The means by which an asset enters the Photos library.
- [pixelWidth](pixelwidth.md): The width, in pixels, of the asset’s image or video data.
- [pixelHeight](pixelheight.md): The height, in pixels, of the asset’s image or video data.
- [addedDate](addeddate.md): The date and time this asset was added to the photo library (from the device that was used to add this asset)
- [creationDate](creationdate.md): The date and time of the asset’s creation.
- [modificationDate](modificationdate.md): The date and time of the asset’s last modification.
- [location](location.md): The location information for the asset.
- [duration](duration.md): The duration, in seconds, of the video asset.
- [isFavorite](isfavorite.md): A Boolean value that indicates whether the user marks the asset as a favorite.

# hasAdjustments (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset contains adjustment data.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL hasAdjustments;
```

## See Also

### Reading Asset Metadata

- [contentType](contenttype.md): The type of image or video data that is presented for the asset
- [mediaType](mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](../phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [mediaSubtypes](mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets, such as panoramic photo or high-frame-rate video.
- [PHAssetMediaSubtype](../phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
- [sourceType](sourcetype.md): The means by which the asset enters the user’s Photos library.
- [PHAssetSourceType](../phassetsourcetype.md): The means by which an asset enters the Photos library.
- [pixelWidth](pixelwidth.md): The width, in pixels, of the asset’s image or video data.
- [pixelHeight](pixelheight.md): The height, in pixels, of the asset’s image or video data.
- [addedDate](addeddate.md): The date and time this asset was added to the photo library (from the device that was used to add this asset)
- [creationDate](creationdate.md): The date and time of the asset’s creation.
- [modificationDate](modificationdate.md): The date and time of the asset’s last modification.
- [location](location.md): The location information for the asset.
- [duration](duration.md): The duration, in seconds, of the video asset.
- [favorite](isfavorite.md): A Boolean value that indicates whether the user marks the asset as a favorite.
