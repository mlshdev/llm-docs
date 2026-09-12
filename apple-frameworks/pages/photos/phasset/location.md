> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/location](https://developer.apple.com/documentation/photos/phasset/location)

# location (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The location information for the asset.

## Declaration

```swift
var location: CLLocation? { get }
```

<a id="Discussion"></a>

## Discussion

Typically, an asset’s location metadata identifies the place where the asset was captured.

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
- [duration](duration.md): The duration, in seconds, of the video asset.
- [isFavorite](isfavorite.md): A Boolean value that indicates whether the user marks the asset as a favorite.
- [isHidden](ishidden.md): A Boolean value that indicates whether the user hides the asset.

# location (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The location information for the asset.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CLLocation * location;
```

<a id="Discussion"></a>

## Discussion

Typically, an asset’s location metadata identifies the place where the asset was captured.

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
- [duration](duration.md): The duration, in seconds, of the video asset.
- [favorite](isfavorite.md): A Boolean value that indicates whether the user marks the asset as a favorite.
- [hidden](ishidden.md): A Boolean value that indicates whether the user hides the asset.
