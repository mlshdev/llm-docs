> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptionsdeliverymode](https://developer.apple.com/documentation/photos/phimagerequestoptionsdeliverymode)

# PHImageRequestOptionsDeliveryMode (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Options for delivering requested image data, used by the [deliveryMode](phimagerequestoptions/deliverymode.md) property.

## Declaration

```swift
enum PHImageRequestOptionsDeliveryMode
```

## Topics

### Constants

- [PHImageRequestOptionsDeliveryMode.opportunistic](phimagerequestoptionsdeliverymode/opportunistic.md): Photos automatically provides one or more results in order to balance image quality and responsiveness.
- [PHImageRequestOptionsDeliveryMode.highQualityFormat](phimagerequestoptionsdeliverymode/highqualityformat.md): Photos provides only the highest-quality image available, regardless of how much time it takes to load.
- [PHImageRequestOptionsDeliveryMode.fastFormat](phimagerequestoptionsdeliverymode/fastformat.md): Photos provides only a fast-loading image, possibly sacrificing image quality.

### Initializers

- [init(rawValue:)](phimagerequestoptionsdeliverymode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying Image Request Options

- [version](phimagerequestoptions/version.md): The version of the image to be requested.
- [PHImageRequestOptionsVersion](phimagerequestoptionsversion.md): Options for requesting an image asset with or without adjustments, used by the [version](phimagerequestoptions/version.md) property.
- [deliveryMode](phimagerequestoptions/deliverymode.md): The requested image quality and delivery priority.
- [resizeMode](phimagerequestoptions/resizemode.md): A mode that specifies how to resize the requested image.
- [PHImageRequestOptionsResizeMode](phimagerequestoptionsresizemode.md): Options for how to resize the requested image to fit a target size, used by the [resizeMode](phimagerequestoptions/resizemode.md) property.
- [normalizedCropRect](phimagerequestoptions/normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.

# PHImageRequestOptionsDeliveryMode (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Options for delivering requested image data, used by the [deliveryMode](phimagerequestoptions/deliverymode.md) property.

## Declaration

```objectivec
enum PHImageRequestOptionsDeliveryMode : NSInteger;
```

## Topics

### Constants

- [PHImageRequestOptionsDeliveryModeOpportunistic](phimagerequestoptionsdeliverymode/opportunistic.md): Photos automatically provides one or more results in order to balance image quality and responsiveness.
- [PHImageRequestOptionsDeliveryModeHighQualityFormat](phimagerequestoptionsdeliverymode/highqualityformat.md): Photos provides only the highest-quality image available, regardless of how much time it takes to load.
- [PHImageRequestOptionsDeliveryModeFastFormat](phimagerequestoptionsdeliverymode/fastformat.md): Photos provides only a fast-loading image, possibly sacrificing image quality.

## See Also

### Specifying Image Request Options

- [version](phimagerequestoptions/version.md): The version of the image to be requested.
- [PHImageRequestOptionsVersion](phimagerequestoptionsversion.md): Options for requesting an image asset with or without adjustments, used by the [version](phimagerequestoptions/version.md) property.
- [deliveryMode](phimagerequestoptions/deliverymode.md): The requested image quality and delivery priority.
- [resizeMode](phimagerequestoptions/resizemode.md): A mode that specifies how to resize the requested image.
- [PHImageRequestOptionsResizeMode](phimagerequestoptionsresizemode.md): Options for how to resize the requested image to fit a target size, used by the [resizeMode](phimagerequestoptions/resizemode.md) property.
- [normalizedCropRect](phimagerequestoptions/normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.
