> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricplayeritemratechangeevent](https://developer.apple.com/documentation/avfoundation/avmetricplayeritemratechangeevent)

# AVMetricPlayerItemRateChangeEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents when the playback rate changes.

## Declaration

```swift
class AVMetricPlayerItemRateChangeEvent
```

## Topics

### Inspecting the event

- [previousRate](avmetricplayeritemratechangeevent/previousrate.md)
- [rate](avmetricplayeritemratechangeevent/rate.md)
- [variant](avmetricplayeritemratechangeevent/variant.md)

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

### Inherited By

- [AVMetricPlayerItemSeekDidCompleteEvent](avmetricplayeritemseekdidcompleteevent.md)
- [AVMetricPlayerItemSeekEvent](avmetricplayeritemseekevent.md)
- [AVMetricPlayerItemStallEvent](avmetricplayeritemstallevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transport control

- [AVMetricPlayerItemPlaybackSummaryEvent](avmetricplayeritemplaybacksummaryevent.md): An event that represents the combined metrics for the entire playback session.
- [AVMetricPlayerItemSeekDidCompleteEvent](avmetricplayeritemseekdidcompleteevent.md): An event that represents when the playback seek completes.
- [AVMetricPlayerItemSeekEvent](avmetricplayeritemseekevent.md): An event that represents when a playback seek occurs.

# AVMetricPlayerItemRateChangeEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents when the playback rate changes.

## Declaration

```objectivec
@interface AVMetricPlayerItemRateChangeEvent : AVMetricEvent
```

## Topics

### Inspecting the event

- [previousRate](avmetricplayeritemratechangeevent/previousrate.md)
- [rate](avmetricplayeritemratechangeevent/rate.md)
- [variant](avmetricplayeritemratechangeevent/variant.md)

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

### Inherited By

- [AVMetricPlayerItemSeekDidCompleteEvent](avmetricplayeritemseekdidcompleteevent.md)
- [AVMetricPlayerItemSeekEvent](avmetricplayeritemseekevent.md)
- [AVMetricPlayerItemStallEvent](avmetricplayeritemstallevent.md)

## See Also

### Transport control

- [AVMetricPlayerItemPlaybackSummaryEvent](avmetricplayeritemplaybacksummaryevent.md): An event that represents the combined metrics for the entire playback session.
- [AVMetricPlayerItemSeekDidCompleteEvent](avmetricplayeritemseekdidcompleteevent.md): An event that represents when the playback seek completes.
- [AVMetricPlayerItemSeekEvent](avmetricplayeritemseekevent.md): An event that represents when a playback seek occurs.
