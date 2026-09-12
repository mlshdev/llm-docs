> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/addeddate](https://developer.apple.com/documentation/photos/phasset/addeddate)

# addedDate (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The date and time this asset was added to the photo library (from the device that was used to add this asset)

## Declaration

```swift
var addedDate: Date? { get }
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
- [creationDate](creationdate.md): The date and time of the asset’s creation.
- [modificationDate](modificationdate.md): The date and time of the asset’s last modification.
- [location](location.md): The location information for the asset.
- [duration](duration.md): The duration, in seconds, of the video asset.
- [isFavorite](isfavorite.md): A Boolean value that indicates whether the user marks the asset as a favorite.
- [isHidden](ishidden.md): A Boolean value that indicates whether the user hides the asset.

# addedDate (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The date and time this asset was added to the photo library (from the device that was used to add this asset)

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSDate * addedDate;
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
- [creationDate](creationdate.md): The date and time of the asset’s creation.
- [modificationDate](modificationdate.md): The date and time of the asset’s last modification.
- [location](location.md): The location information for the asset.
- [duration](duration.md): The duration, in seconds, of the video asset.
- [favorite](isfavorite.md): A Boolean value that indicates whether the user marks the asset as a favorite.
- [hidden](ishidden.md): A Boolean value that indicates whether the user hides the asset.
