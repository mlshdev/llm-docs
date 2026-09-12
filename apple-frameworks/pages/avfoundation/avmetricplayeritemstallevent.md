> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricplayeritemstallevent](https://developer.apple.com/documentation/avfoundation/avmetricplayeritemstallevent)

# AVMetricPlayerItemStallEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents when playback stalls.

## Declaration

```swift
class AVMetricPlayerItemStallEvent
```

## Relationships

### Inherits From

- [AVMetricPlayerItemRateChangeEvent](avmetricplayeritemratechangeevent.md)

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

- [AVMetricPlayerItemLikelyToKeepUpEvent](avmetricplayeritemlikelytokeepupevent.md): An event that represents when playback is likely to continue without stalling.
- [AVMetricPlayerItemInitialLikelyToKeepUpEvent](avmetricplayeriteminitiallikelytokeepupevent.md): An event that represents the initial state for whether playback is likely to continue without stalling.

# AVMetricPlayerItemStallEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents when playback stalls.

## Declaration

```objectivec
@interface AVMetricPlayerItemStallEvent : AVMetricPlayerItemRateChangeEvent
```

## Relationships

### Inherits From

- [AVMetricPlayerItemRateChangeEvent](avmetricplayeritemratechangeevent.md)

## See Also

### Buffering

- [AVMetricPlayerItemLikelyToKeepUpEvent](avmetricplayeritemlikelytokeepupevent.md): An event that represents when playback is likely to continue without stalling.
- [AVMetricPlayerItemInitialLikelyToKeepUpEvent](avmetricplayeriteminitiallikelytokeepupevent.md): An event that represents the initial state for whether playback is likely to continue without stalling.
