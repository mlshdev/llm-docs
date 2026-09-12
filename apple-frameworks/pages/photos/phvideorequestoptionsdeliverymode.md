> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phvideorequestoptionsdeliverymode](https://developer.apple.com/documentation/photos/phvideorequestoptionsdeliverymode)

# PHVideoRequestOptionsDeliveryMode (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Options for delivering requested video data, used by the [deliveryMode](phvideorequestoptions/deliverymode.md) property.

## Declaration

```swift
enum PHVideoRequestOptionsDeliveryMode
```

## Topics

### Constants

- [PHVideoRequestOptionsDeliveryMode.automatic](phvideorequestoptionsdeliverymode/automatic.md): Photos automatically determines which quality of video data to provide based on the request and current conditions.
- [PHVideoRequestOptionsDeliveryMode.highQualityFormat](phvideorequestoptionsdeliverymode/highqualityformat.md): Photos provides only the highest quality video available.
- [PHVideoRequestOptionsDeliveryMode.mediumQualityFormat](phvideorequestoptionsdeliverymode/mediumqualityformat.md): Photos provides a video of moderate quality unless a higher quality version is locally cached.
- [PHVideoRequestOptionsDeliveryMode.fastFormat](phvideorequestoptionsdeliverymode/fastformat.md): Photos provides whatever quality of video can be most quickly loaded.

### Initializers

- [init(rawValue:)](phvideorequestoptionsdeliverymode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying Video Request Options

- [version](phvideorequestoptions/version.md): The version of the video to request.
- [PHVideoRequestOptionsVersion](phvideorequestoptionsversion.md): Options for requesting a video asset with or without adjustments, used by the [version](phvideorequestoptions/version.md) property.
- [deliveryMode](phvideorequestoptions/deliverymode.md): A mode specifying the requested video quality and delivery priority.

# PHVideoRequestOptionsDeliveryMode (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Options for delivering requested video data, used by the [deliveryMode](phvideorequestoptions/deliverymode.md) property.

## Declaration

```objectivec
enum PHVideoRequestOptionsDeliveryMode : NSInteger;
```

## Topics

### Constants

- [PHVideoRequestOptionsDeliveryModeAutomatic](phvideorequestoptionsdeliverymode/automatic.md): Photos automatically determines which quality of video data to provide based on the request and current conditions.
- [PHVideoRequestOptionsDeliveryModeHighQualityFormat](phvideorequestoptionsdeliverymode/highqualityformat.md): Photos provides only the highest quality video available.
- [PHVideoRequestOptionsDeliveryModeMediumQualityFormat](phvideorequestoptionsdeliverymode/mediumqualityformat.md): Photos provides a video of moderate quality unless a higher quality version is locally cached.
- [PHVideoRequestOptionsDeliveryModeFastFormat](phvideorequestoptionsdeliverymode/fastformat.md): Photos provides whatever quality of video can be most quickly loaded.

## See Also

### Specifying Video Request Options

- [version](phvideorequestoptions/version.md): The version of the video to request.
- [PHVideoRequestOptionsVersion](phvideorequestoptionsversion.md): Options for requesting a video asset with or without adjustments, used by the [version](phvideorequestoptions/version.md) property.
- [deliveryMode](phvideorequestoptions/deliverymode.md): A mode specifying the requested video quality and delivery priority.
