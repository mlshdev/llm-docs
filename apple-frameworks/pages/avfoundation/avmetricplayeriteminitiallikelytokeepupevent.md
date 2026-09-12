> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricplayeriteminitiallikelytokeepupevent](https://developer.apple.com/documentation/avfoundation/avmetricplayeriteminitiallikelytokeepupevent)

# AVMetricPlayerItemInitialLikelyToKeepUpEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents the initial state for whether playback is likely to continue without stalling.

## Declaration

```swift
class AVMetricPlayerItemInitialLikelyToKeepUpEvent
```

## Topics

### Inspecting the event

- [contentKeyRequestEvents](avmetricplayeriteminitiallikelytokeepupevent/contentkeyrequestevents.md)
- [mediaSegmentRequestEvents](avmetricplayeriteminitiallikelytokeepupevent/mediasegmentrequestevents.md)
- [playlistRequestEvents](avmetricplayeriteminitiallikelytokeepupevent/playlistrequestevents.md)

## Relationships

### Inherits From

- [AVMetricPlayerItemLikelyToKeepUpEvent](avmetricplayeritemlikelytokeepupevent.md)

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
- [AVMetricPlayerItemLikelyToKeepUpEvent](avmetricplayeritemlikelytokeepupevent.md): An event that represents when playback is likely to continue without stalling.

# AVMetricPlayerItemInitialLikelyToKeepUpEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents the initial state for whether playback is likely to continue without stalling.

## Declaration

```objectivec
@interface AVMetricPlayerItemInitialLikelyToKeepUpEvent : AVMetricPlayerItemLikelyToKeepUpEvent
```

## Topics

### Inspecting the event

- [contentKeyRequestEvents](avmetricplayeriteminitiallikelytokeepupevent/contentkeyrequestevents.md)
- [mediaSegmentRequestEvents](avmetricplayeriteminitiallikelytokeepupevent/mediasegmentrequestevents.md)
- [playlistRequestEvents](avmetricplayeriteminitiallikelytokeepupevent/playlistrequestevents.md)

## Relationships

### Inherits From

- [AVMetricPlayerItemLikelyToKeepUpEvent](avmetricplayeritemlikelytokeepupevent.md)

## See Also

### Buffering

- [AVMetricPlayerItemStallEvent](avmetricplayeritemstallevent.md): An event that represents when playback stalls.
- [AVMetricPlayerItemLikelyToKeepUpEvent](avmetricplayeritemlikelytokeepupevent.md): An event that represents when playback is likely to continue without stalling.
