> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phvideorequestoptionsversion](https://developer.apple.com/documentation/photos/phvideorequestoptionsversion)

# PHVideoRequestOptionsVersion (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Options for requesting a video asset with or without adjustments, used by the [version](phvideorequestoptions/version.md) property.

## Declaration

```swift
enum PHVideoRequestOptionsVersion
```

## Topics

### Constants

- [PHVideoRequestOptionsVersion.current](phvideorequestoptionsversion/current.md): Request the most recent version of the video asset, reflecting all edits.
- [PHVideoRequestOptionsVersion.original](phvideorequestoptionsversion/original.md): Request a version of the video asset without adjustments.

### Initializers

- [init(rawValue:)](phvideorequestoptionsversion/init%28rawvalue_%29.md)

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
- [deliveryMode](phvideorequestoptions/deliverymode.md): A mode specifying the requested video quality and delivery priority.
- [PHVideoRequestOptionsDeliveryMode](phvideorequestoptionsdeliverymode.md): Options for delivering requested video data, used by the [deliveryMode](phvideorequestoptions/deliverymode.md) property.

# PHVideoRequestOptionsVersion (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Options for requesting a video asset with or without adjustments, used by the [version](phvideorequestoptions/version.md) property.

## Declaration

```objectivec
enum PHVideoRequestOptionsVersion : NSInteger;
```

## Topics

### Constants

- [PHVideoRequestOptionsVersionCurrent](phvideorequestoptionsversion/current.md): Request the most recent version of the video asset, reflecting all edits.
- [PHVideoRequestOptionsVersionOriginal](phvideorequestoptionsversion/original.md): Request a version of the video asset without adjustments.

## See Also

### Specifying Video Request Options

- [version](phvideorequestoptions/version.md): The version of the video to request.
- [deliveryMode](phvideorequestoptions/deliverymode.md): A mode specifying the requested video quality and delivery priority.
- [PHVideoRequestOptionsDeliveryMode](phvideorequestoptionsdeliverymode.md): Options for delivering requested video data, used by the [deliveryMode](phvideorequestoptions/deliverymode.md) property.
