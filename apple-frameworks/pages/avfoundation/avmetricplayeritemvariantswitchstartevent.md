> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricplayeritemvariantswitchstartevent](https://developer.apple.com/documentation/avfoundation/avmetricplayeritemvariantswitchstartevent)

# AVMetricPlayerItemVariantSwitchStartEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents when the player attempts a variant switch.

## Declaration

```swift
class AVMetricPlayerItemVariantSwitchStartEvent
```

## Topics

### Inspecting the event

- [fromVariant](avmetricplayeritemvariantswitchstartevent/fromvariant.md)
- [loadedTimeRanges](avmetricplayeritemvariantswitchstartevent/loadedtimeranges-2mbm7.md)
- [toVariant](avmetricplayeritemvariantswitchstartevent/tovariant.md)
- [audioRendition](avmetricplayeritemvariantswitchstartevent/audiorendition.md)
- [videoRendition](avmetricplayeritemvariantswitchstartevent/videorendition.md)
- [subtitleRendition](avmetricplayeritemvariantswitchstartevent/subtitlerendition.md)

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

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

### HTTP Live Streaming

- [AVMetricMediaResourceRequestEvent](avmetricmediaresourcerequestevent.md): An event that represents a media resource request.
- [AVMetricContentKeyRequestEvent](avmetriccontentkeyrequestevent.md): An event that represents a live streaming content key resource request.
- [AVMetricHLSMediaSegmentRequestEvent](avmetrichlsmediasegmentrequestevent.md): An event that represents a live streaming media segment resource request.
- [AVMetricHLSPlaylistRequestEvent](avmetrichlsplaylistrequestevent.md): An event that represents a live streaming playlist resource request.
- [AVMetricPlayerItemVariantSwitchEvent](avmetricplayeritemvariantswitchevent.md): An event that represents when the player completes a variant switch.
- [AVMetricMediaRendition](avmetricmediarendition.md)

# AVMetricPlayerItemVariantSwitchStartEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents when the player attempts a variant switch.

## Declaration

```objectivec
@interface AVMetricPlayerItemVariantSwitchStartEvent : AVMetricEvent
```

## Topics

### Inspecting the event

- [fromVariant](avmetricplayeritemvariantswitchstartevent/fromvariant.md)
- [toVariant](avmetricplayeritemvariantswitchstartevent/tovariant.md)
- [loadedTimeRanges](avmetricplayeritemvariantswitchstartevent/loadedtimeranges-3svh3.md)
- [audioRendition](avmetricplayeritemvariantswitchstartevent/audiorendition.md)
- [videoRendition](avmetricplayeritemvariantswitchstartevent/videorendition.md)
- [subtitleRendition](avmetricplayeritemvariantswitchstartevent/subtitlerendition.md)

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

## See Also

### HTTP Live Streaming

- [AVMetricMediaResourceRequestEvent](avmetricmediaresourcerequestevent.md): An event that represents a media resource request.
- [AVMetricContentKeyRequestEvent](avmetriccontentkeyrequestevent.md): An event that represents a live streaming content key resource request.
- [AVMetricHLSMediaSegmentRequestEvent](avmetrichlsmediasegmentrequestevent.md): An event that represents a live streaming media segment resource request.
- [AVMetricHLSPlaylistRequestEvent](avmetrichlsplaylistrequestevent.md): An event that represents a live streaming playlist resource request.
- [AVMetricPlayerItemVariantSwitchEvent](avmetricplayeritemvariantswitchevent.md): An event that represents when the player completes a variant switch.
- [AVMetricMediaRendition](avmetricmediarendition.md)
