> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricplayeritemvariantswitchevent](https://developer.apple.com/documentation/avfoundation/avmetricplayeritemvariantswitchevent)

# AVMetricPlayerItemVariantSwitchEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents when the player completes a variant switch.

## Declaration

```swift
class AVMetricPlayerItemVariantSwitchEvent
```

## Topics

### Inspecting the event

- [didSucceed](avmetricplayeritemvariantswitchevent/didsucceed.md)
- [fromVariant](avmetricplayeritemvariantswitchevent/fromvariant.md)
- [loadedTimeRanges](avmetricplayeritemvariantswitchevent/loadedtimeranges-5lkmg.md)
- [toVariant](avmetricplayeritemvariantswitchevent/tovariant.md)
- [audioRendition](avmetricplayeritemvariantswitchevent/audiorendition.md): Represents the currently selected video rendition’s identifiers.
- [videoRendition](avmetricplayeritemvariantswitchevent/videorendition.md): Represents the currently selected video rendition’s identifiers.
- [subtitleRendition](avmetricplayeritemvariantswitchevent/subtitlerendition.md): Represents the currently selected audio rendition’s identifiers.

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
- [AVMetricPlayerItemVariantSwitchStartEvent](avmetricplayeritemvariantswitchstartevent.md): An event that represents when the player attempts a variant switch.
- [AVMetricMediaRendition](avmetricmediarendition.md)

# AVMetricPlayerItemVariantSwitchEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents when the player completes a variant switch.

## Declaration

```objectivec
@interface AVMetricPlayerItemVariantSwitchEvent : AVMetricEvent
```

## Topics

### Inspecting the event

- [didSucceed](avmetricplayeritemvariantswitchevent/didsucceed.md)
- [fromVariant](avmetricplayeritemvariantswitchevent/fromvariant.md)
- [toVariant](avmetricplayeritemvariantswitchevent/tovariant.md)
- [loadedTimeRanges](avmetricplayeritemvariantswitchevent/loadedtimeranges-4rhjw.md)
- [audioRendition](avmetricplayeritemvariantswitchevent/audiorendition.md): Represents the currently selected video rendition’s identifiers.
- [videoRendition](avmetricplayeritemvariantswitchevent/videorendition.md): Represents the currently selected video rendition’s identifiers.
- [subtitleRendition](avmetricplayeritemvariantswitchevent/subtitlerendition.md): Represents the currently selected audio rendition’s identifiers.

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

## See Also

### HTTP Live Streaming

- [AVMetricMediaResourceRequestEvent](avmetricmediaresourcerequestevent.md): An event that represents a media resource request.
- [AVMetricContentKeyRequestEvent](avmetriccontentkeyrequestevent.md): An event that represents a live streaming content key resource request.
- [AVMetricHLSMediaSegmentRequestEvent](avmetrichlsmediasegmentrequestevent.md): An event that represents a live streaming media segment resource request.
- [AVMetricHLSPlaylistRequestEvent](avmetrichlsplaylistrequestevent.md): An event that represents a live streaming playlist resource request.
- [AVMetricPlayerItemVariantSwitchStartEvent](avmetricplayeritemvariantswitchstartevent.md): An event that represents when the player attempts a variant switch.
- [AVMetricMediaRendition](avmetricmediarendition.md)
