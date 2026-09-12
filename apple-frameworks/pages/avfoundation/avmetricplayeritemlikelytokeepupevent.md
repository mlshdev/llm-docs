> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricplayeritemlikelytokeepupevent](https://developer.apple.com/documentation/avfoundation/avmetricplayeritemlikelytokeepupevent)

# AVMetricPlayerItemLikelyToKeepUpEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents when playback is likely to continue without stalling.

## Declaration

```swift
class AVMetricPlayerItemLikelyToKeepUpEvent
```

## Topics

### Inspecting the event

- [loadedTimeRanges](avmetricplayeritemlikelytokeepupevent/loadedtimeranges-8yzws.md)
- [timeTaken](avmetricplayeritemlikelytokeepupevent/timetaken.md)
- [variant](avmetricplayeritemlikelytokeepupevent/variant.md)

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

### Inherited By

- [AVMetricPlayerItemInitialLikelyToKeepUpEvent](avmetricplayeriteminitiallikelytokeepupevent.md)

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

### Buffering

- [AVMetricPlayerItemStallEvent](avmetricplayeritemstallevent.md): An event that represents when playback stalls.
- [AVMetricPlayerItemInitialLikelyToKeepUpEvent](avmetricplayeriteminitiallikelytokeepupevent.md): An event that represents the initial state for whether playback is likely to continue without stalling.

# AVMetricPlayerItemLikelyToKeepUpEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents when playback is likely to continue without stalling.

## Declaration

```objectivec
@interface AVMetricPlayerItemLikelyToKeepUpEvent : AVMetricEvent
```

## Topics

### Inspecting the event

- [timeTaken](avmetricplayeritemlikelytokeepupevent/timetaken.md)
- [variant](avmetricplayeritemlikelytokeepupevent/variant.md)
- [loadedTimeRanges](avmetricplayeritemlikelytokeepupevent/loadedtimeranges-960vi.md)

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

### Inherited By

- [AVMetricPlayerItemInitialLikelyToKeepUpEvent](avmetricplayeriteminitiallikelytokeepupevent.md)

## See Also

### Buffering

- [AVMetricPlayerItemStallEvent](avmetricplayeritemstallevent.md): An event that represents when playback stalls.
- [AVMetricPlayerItemInitialLikelyToKeepUpEvent](avmetricplayeriteminitiallikelytokeepupevent.md): An event that represents the initial state for whether playback is likely to continue without stalling.
