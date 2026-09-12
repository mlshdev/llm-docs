> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phvideorequestoptionsdeliverymode/fastformat](https://developer.apple.com/documentation/photos/phvideorequestoptionsdeliverymode/fastformat)

# PHVideoRequestOptionsDeliveryMode.fastFormat (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Photos provides whatever quality of video can be most quickly loaded.

## Declaration

```swift
case fastFormat
```

<a id="Discussion"></a>

## Discussion

When the [isNetworkAccessAllowed](../phvideorequestoptions/isnetworkaccessallowed.md) property is `true`, the fast option provides a version of the video asset suitable for streaming from iCloud over a low-quality connection—for example, an MP4 video with 360p resolution. If a higher-quality version is already cached on the device, Photos provides that video instead.

## See Also

### Constants

- [PHVideoRequestOptionsDeliveryMode.automatic](automatic.md): Photos automatically determines which quality of video data to provide based on the request and current conditions.
- [PHVideoRequestOptionsDeliveryMode.highQualityFormat](highqualityformat.md): Photos provides only the highest quality video available.
- [PHVideoRequestOptionsDeliveryMode.mediumQualityFormat](mediumqualityformat.md): Photos provides a video of moderate quality unless a higher quality version is locally cached.

# PHVideoRequestOptionsDeliveryModeFastFormat (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Photos provides whatever quality of video can be most quickly loaded.

## Declaration

```objectivec
PHVideoRequestOptionsDeliveryModeFastFormat
```

<a id="Discussion"></a>

## Discussion

When the [networkAccessAllowed](../phvideorequestoptions/isnetworkaccessallowed.md) property is `true`, the fast option provides a version of the video asset suitable for streaming from iCloud over a low-quality connection—for example, an MP4 video with 360p resolution. If a higher-quality version is already cached on the device, Photos provides that video instead.

## See Also

### Constants

- [PHVideoRequestOptionsDeliveryModeAutomatic](automatic.md): Photos automatically determines which quality of video data to provide based on the request and current conditions.
- [PHVideoRequestOptionsDeliveryModeHighQualityFormat](highqualityformat.md): Photos provides only the highest quality video available.
- [PHVideoRequestOptionsDeliveryModeMediumQualityFormat](mediumqualityformat.md): Photos provides a video of moderate quality unless a higher quality version is locally cached.
