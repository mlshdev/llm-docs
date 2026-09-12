> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phvideorequestoptionsdeliverymode/automatic](https://developer.apple.com/documentation/photos/phvideorequestoptionsdeliverymode/automatic)

# PHVideoRequestOptionsDeliveryMode.automatic (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Photos automatically determines which quality of video data to provide based on the request and current conditions.

## Declaration

```swift
case automatic
```

<a id="Discussion"></a>

## Discussion

When you request an [AVAsset](../../avfoundation/avasset.md) or [AVPlayerItem](../../avfoundation/avplayeritem.md) object, Photos typically uses the medium-quality format. When you request an [AVAssetExportSession](../../avfoundation/avassetexportsession.md) object for writing out the asset’s contents, Photos always uses the high-quality format.

## See Also

### Constants

- [PHVideoRequestOptionsDeliveryMode.highQualityFormat](highqualityformat.md): Photos provides only the highest quality video available.
- [PHVideoRequestOptionsDeliveryMode.mediumQualityFormat](mediumqualityformat.md): Photos provides a video of moderate quality unless a higher quality version is locally cached.
- [PHVideoRequestOptionsDeliveryMode.fastFormat](fastformat.md): Photos provides whatever quality of video can be most quickly loaded.

# PHVideoRequestOptionsDeliveryModeAutomatic (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Photos automatically determines which quality of video data to provide based on the request and current conditions.

## Declaration

```objectivec
PHVideoRequestOptionsDeliveryModeAutomatic
```

<a id="Discussion"></a>

## Discussion

When you request an [AVAsset](../../avfoundation/avasset.md) or [AVPlayerItem](../../avfoundation/avplayeritem.md) object, Photos typically uses the medium-quality format. When you request an [AVAssetExportSession](../../avfoundation/avassetexportsession.md) object for writing out the asset’s contents, Photos always uses the high-quality format.

## See Also

### Constants

- [PHVideoRequestOptionsDeliveryModeHighQualityFormat](highqualityformat.md): Photos provides only the highest quality video available.
- [PHVideoRequestOptionsDeliveryModeMediumQualityFormat](mediumqualityformat.md): Photos provides a video of moderate quality unless a higher quality version is locally cached.
- [PHVideoRequestOptionsDeliveryModeFastFormat](fastformat.md): Photos provides whatever quality of video can be most quickly loaded.
