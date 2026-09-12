> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricmediaresourcerequestevent](https://developer.apple.com/documentation/avfoundation/avmetricmediaresourcerequestevent)

# AVMetricMediaResourceRequestEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents a media resource request.

## Declaration

```swift
class AVMetricMediaResourceRequestEvent
```

## Topics

### Inspecting the event

- [byteRange](avmetricmediaresourcerequestevent/byterange.md)
- [errorEvent](avmetricmediaresourcerequestevent/errorevent.md)
- [networkTransactionMetrics](avmetricmediaresourcerequestevent/networktransactionmetrics.md)
- [requestEndTime](avmetricmediaresourcerequestevent/requestendtime.md)
- [requestStartTime](avmetricmediaresourcerequestevent/requeststarttime.md)
- [responseEndTime](avmetricmediaresourcerequestevent/responseendtime.md)
- [responseStartTime](avmetricmediaresourcerequestevent/responsestarttime.md)
- [serverAddress](avmetricmediaresourcerequestevent/serveraddress.md)
- [url](avmetricmediaresourcerequestevent/url.md)
- [wasReadFromCache](avmetricmediaresourcerequestevent/wasreadfromcache.md)

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

- [AVMetricContentKeyRequestEvent](avmetriccontentkeyrequestevent.md): An event that represents a live streaming content key resource request.
- [AVMetricHLSMediaSegmentRequestEvent](avmetrichlsmediasegmentrequestevent.md): An event that represents a live streaming media segment resource request.
- [AVMetricHLSPlaylistRequestEvent](avmetrichlsplaylistrequestevent.md): An event that represents a live streaming playlist resource request.
- [AVMetricPlayerItemVariantSwitchStartEvent](avmetricplayeritemvariantswitchstartevent.md): An event that represents when the player attempts a variant switch.
- [AVMetricPlayerItemVariantSwitchEvent](avmetricplayeritemvariantswitchevent.md): An event that represents when the player completes a variant switch.
- [AVMetricMediaRendition](avmetricmediarendition.md)

# AVMetricMediaResourceRequestEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents a media resource request.

## Declaration

```objectivec
@interface AVMetricMediaResourceRequestEvent : AVMetricEvent
```

## Topics

### Inspecting the event

- [byteRange](avmetricmediaresourcerequestevent/byterange.md)
- [errorEvent](avmetricmediaresourcerequestevent/errorevent.md)
- [networkTransactionMetrics](avmetricmediaresourcerequestevent/networktransactionmetrics.md)
- [requestEndTime](avmetricmediaresourcerequestevent/requestendtime.md)
- [requestStartTime](avmetricmediaresourcerequestevent/requeststarttime.md)
- [responseEndTime](avmetricmediaresourcerequestevent/responseendtime.md)
- [responseStartTime](avmetricmediaresourcerequestevent/responsestarttime.md)
- [serverAddress](avmetricmediaresourcerequestevent/serveraddress.md)
- [url](avmetricmediaresourcerequestevent/url.md)
- [readFromCache](avmetricmediaresourcerequestevent/wasreadfromcache.md)

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

## See Also

### HTTP Live Streaming

- [AVMetricContentKeyRequestEvent](avmetriccontentkeyrequestevent.md): An event that represents a live streaming content key resource request.
- [AVMetricHLSMediaSegmentRequestEvent](avmetrichlsmediasegmentrequestevent.md): An event that represents a live streaming media segment resource request.
- [AVMetricHLSPlaylistRequestEvent](avmetrichlsplaylistrequestevent.md): An event that represents a live streaming playlist resource request.
- [AVMetricPlayerItemVariantSwitchStartEvent](avmetricplayeritemvariantswitchstartevent.md): An event that represents when the player attempts a variant switch.
- [AVMetricPlayerItemVariantSwitchEvent](avmetricplayeritemvariantswitchevent.md): An event that represents when the player completes a variant switch.
- [AVMetricMediaRendition](avmetricmediarendition.md)
