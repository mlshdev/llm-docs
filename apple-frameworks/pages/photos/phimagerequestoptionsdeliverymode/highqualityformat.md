> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptionsdeliverymode/highqualityformat](https://developer.apple.com/documentation/photos/phimagerequestoptionsdeliverymode/highqualityformat)

# PHImageRequestOptionsDeliveryMode.highQualityFormat (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Photos provides only the highest-quality image available, regardless of how much time it takes to load.

## Declaration

```swift
case highQualityFormat
```

<a id="Discussion"></a>

## Discussion

If the [isSynchronous](../phimagerequestoptions/issynchronous.md) property is `true` or if using the [requestImageDataForAsset:options:resultHandler:](https://developer.apple.com/documentation/photos/phimagemanager/requestimagedataforasset:options:resulthandler:) method, this behavior is the default and only option (that is, specifying other delivery mode options has no effect).

## See Also

### Constants

- [PHImageRequestOptionsDeliveryMode.opportunistic](opportunistic.md): Photos automatically provides one or more results in order to balance image quality and responsiveness.
- [PHImageRequestOptionsDeliveryMode.fastFormat](fastformat.md): Photos provides only a fast-loading image, possibly sacrificing image quality.

# PHImageRequestOptionsDeliveryModeHighQualityFormat (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Photos provides only the highest-quality image available, regardless of how much time it takes to load.

## Declaration

```objectivec
PHImageRequestOptionsDeliveryModeHighQualityFormat
```

<a id="Discussion"></a>

## Discussion

If the [synchronous](../phimagerequestoptions/issynchronous.md) property is `true` or if using the [requestImageDataForAsset:options:resultHandler:](https://developer.apple.com/documentation/photos/phimagemanager/requestimagedataforasset:options:resulthandler:) method, this behavior is the default and only option (that is, specifying other delivery mode options has no effect).

## See Also

### Constants

- [PHImageRequestOptionsDeliveryModeOpportunistic](opportunistic.md): Photos automatically provides one or more results in order to balance image quality and responsiveness.
- [PHImageRequestOptionsDeliveryModeFastFormat](fastformat.md): Photos provides only a fast-loading image, possibly sacrificing image quality.
