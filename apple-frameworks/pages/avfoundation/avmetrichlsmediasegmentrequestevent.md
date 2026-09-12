> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetrichlsmediasegmentrequestevent](https://developer.apple.com/documentation/avfoundation/avmetrichlsmediasegmentrequestevent)

# AVMetricHLSMediaSegmentRequestEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents a live streaming media segment resource request.

## Declaration

```swift
class AVMetricHLSMediaSegmentRequestEvent
```

## Topics

### Inspecting the event

- [byteRange](avmetrichlsmediasegmentrequestevent/byterange.md)
- [indexFileURL](avmetrichlsmediasegmentrequestevent/indexfileurl.md)
- [isMapSegment](avmetrichlsmediasegmentrequestevent/ismapsegment.md)
- [mediaResourceRequestEvent](avmetrichlsmediasegmentrequestevent/mediaresourcerequestevent.md)
- [mediaType](avmetrichlsmediasegmentrequestevent/mediatype.md)
- [segmentDuration](avmetrichlsmediasegmentrequestevent/segmentduration.md): Returns the duration of segment in seconds.
- [url](avmetrichlsmediasegmentrequestevent/url.md)

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
- [AVMetricHLSPlaylistRequestEvent](avmetrichlsplaylistrequestevent.md): An event that represents a live streaming playlist resource request.
- [AVMetricPlayerItemVariantSwitchStartEvent](avmetricplayeritemvariantswitchstartevent.md): An event that represents when the player attempts a variant switch.
- [AVMetricPlayerItemVariantSwitchEvent](avmetricplayeritemvariantswitchevent.md): An event that represents when the player completes a variant switch.
- [AVMetricMediaRendition](avmetricmediarendition.md)

# AVMetricHLSMediaSegmentRequestEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents a live streaming media segment resource request.

## Declaration

```objectivec
@interface AVMetricHLSMediaSegmentRequestEvent : AVMetricEvent
```

## Topics

### Inspecting the event

- [byteRange](avmetrichlsmediasegmentrequestevent/byterange.md)
- [indexFileURL](avmetrichlsmediasegmentrequestevent/indexfileurl.md)
- [isMapSegment](avmetrichlsmediasegmentrequestevent/ismapsegment.md)
- [mediaResourceRequestEvent](avmetrichlsmediasegmentrequestevent/mediaresourcerequestevent.md)
- [mediaType](avmetrichlsmediasegmentrequestevent/mediatype.md)
- [segmentDuration](avmetrichlsmediasegmentrequestevent/segmentduration.md): Returns the duration of segment in seconds.
- [url](avmetrichlsmediasegmentrequestevent/url.md)

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

## See Also

### HTTP Live Streaming

- [AVMetricMediaResourceRequestEvent](avmetricmediaresourcerequestevent.md): An event that represents a media resource request.
- [AVMetricContentKeyRequestEvent](avmetriccontentkeyrequestevent.md): An event that represents a live streaming content key resource request.
- [AVMetricHLSPlaylistRequestEvent](avmetrichlsplaylistrequestevent.md): An event that represents a live streaming playlist resource request.
- [AVMetricPlayerItemVariantSwitchStartEvent](avmetricplayeritemvariantswitchstartevent.md): An event that represents when the player attempts a variant switch.
- [AVMetricPlayerItemVariantSwitchEvent](avmetricplayeritemvariantswitchevent.md): An event that represents when the player completes a variant switch.
- [AVMetricMediaRendition](avmetricmediarendition.md)
