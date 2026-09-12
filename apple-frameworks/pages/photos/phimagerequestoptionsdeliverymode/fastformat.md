> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptionsdeliverymode/fastformat](https://developer.apple.com/documentation/photos/phimagerequestoptionsdeliverymode/fastformat)

# PHImageRequestOptionsDeliveryMode.fastFormat (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Photos provides only a fast-loading image, possibly sacrificing image quality.

## Declaration

```swift
case fastFormat
```

<a id="Discussion"></a>

## Discussion

Photos calls your `resultHandler` block once. If a high-quality image cannot be loaded quickly, the result handler provides a low-quality image. Check the [PHImageResultIsDegradedKey](../phimageresultisdegradedkey.md) key in the info dictionary to determine the quality of image provided to the result handler.

This option is available only if the [isSynchronous](../phimagerequestoptions/issynchronous.md) property is `false`.

## See Also

### Constants

- [PHImageRequestOptionsDeliveryMode.opportunistic](opportunistic.md): Photos automatically provides one or more results in order to balance image quality and responsiveness.
- [PHImageRequestOptionsDeliveryMode.highQualityFormat](highqualityformat.md): Photos provides only the highest-quality image available, regardless of how much time it takes to load.

# PHImageRequestOptionsDeliveryModeFastFormat (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Photos provides only a fast-loading image, possibly sacrificing image quality.

## Declaration

```objectivec
PHImageRequestOptionsDeliveryModeFastFormat
```

<a id="Discussion"></a>

## Discussion

Photos calls your `resultHandler` block once. If a high-quality image cannot be loaded quickly, the result handler provides a low-quality image. Check the [PHImageResultIsDegradedKey](../phimageresultisdegradedkey.md) key in the info dictionary to determine the quality of image provided to the result handler.

This option is available only if the [synchronous](../phimagerequestoptions/issynchronous.md) property is `false`.

## See Also

### Constants

- [PHImageRequestOptionsDeliveryModeOpportunistic](opportunistic.md): Photos automatically provides one or more results in order to balance image quality and responsiveness.
- [PHImageRequestOptionsDeliveryModeHighQualityFormat](highqualityformat.md): Photos provides only the highest-quality image available, regardless of how much time it takes to load.
