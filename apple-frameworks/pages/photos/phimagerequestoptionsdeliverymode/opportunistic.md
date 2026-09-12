> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptionsdeliverymode/opportunistic](https://developer.apple.com/documentation/photos/phimagerequestoptionsdeliverymode/opportunistic)

# PHImageRequestOptionsDeliveryMode.opportunistic (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Photos automatically provides one or more results in order to balance image quality and responsiveness.

## Declaration

```swift
case opportunistic
```

<a id="Discussion"></a>

## Discussion

If the [isSynchronous](../phimagerequestoptions/issynchronous.md) property is `false`, Photos may call the `resultHandler` block (that you specified in the [requestImage(for:targetSize:contentMode:options:resultHandler:)](../phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method more than once. Photos may call your result handler once to provide a low-quality image suitable for displaying temporarily while it prepares a high-quality image. If low-quality image data is immediately available, this first call may occur before the [requestImage(for:targetSize:contentMode:options:resultHandler:)](../phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method returns. When the high-quality image is ready, Photos calls your result handler again to provide it.

If the image manager has already cached the requested image, or if the [isSynchronous](../phimagerequestoptions/issynchronous.md) property is `true`, Photos calls your result handler only once.

## See Also

### Constants

- [PHImageRequestOptionsDeliveryMode.highQualityFormat](highqualityformat.md): Photos provides only the highest-quality image available, regardless of how much time it takes to load.
- [PHImageRequestOptionsDeliveryMode.fastFormat](fastformat.md): Photos provides only a fast-loading image, possibly sacrificing image quality.

# PHImageRequestOptionsDeliveryModeOpportunistic (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Photos automatically provides one or more results in order to balance image quality and responsiveness.

## Declaration

```objectivec
PHImageRequestOptionsDeliveryModeOpportunistic
```

<a id="Discussion"></a>

## Discussion

If the [synchronous](../phimagerequestoptions/issynchronous.md) property is `false`, Photos may call the `resultHandler` block (that you specified in the [requestImageForAsset:targetSize:contentMode:options:resultHandler:](../phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method more than once. Photos may call your result handler once to provide a low-quality image suitable for displaying temporarily while it prepares a high-quality image. If low-quality image data is immediately available, this first call may occur before the [requestImageForAsset:targetSize:contentMode:options:resultHandler:](../phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method returns. When the high-quality image is ready, Photos calls your result handler again to provide it.

If the image manager has already cached the requested image, or if the [synchronous](../phimagerequestoptions/issynchronous.md) property is `true`, Photos calls your result handler only once.

## See Also

### Constants

- [PHImageRequestOptionsDeliveryModeHighQualityFormat](highqualityformat.md): Photos provides only the highest-quality image available, regardless of how much time it takes to load.
- [PHImageRequestOptionsDeliveryModeFastFormat](fastformat.md): Photos provides only a fast-loading image, possibly sacrificing image quality.
