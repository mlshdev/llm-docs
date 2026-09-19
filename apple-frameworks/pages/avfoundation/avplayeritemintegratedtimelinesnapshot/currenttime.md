> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimelinesnapshot/currenttime

# currentTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The current time on the integrated timeline when the system created the snapshot.

## Declaration

```swift
var currentTime: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

This value doesn’t change as time progresses.

## See Also

### Inspecting the snapshot

- [duration](duration.md): The total duration of the primary item and scheduled interstitial events.
- [currentSegment](currentsegment.md): The currently playing segment.
- [segments](segments.md): The segments for this snapshot.
- [AVPlayerItemSegment](../avplayeritemsegment.md): An immutable object that represents a segment of time on the integrated timeline.
- [currentDate](currentdate.md): The current date on the integrated timeline when the system created the snapshot.

# currentTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The current time on the integrated timeline when the system created the snapshot.

## Declaration

```objectivec
@property (readonly) CMTime currentTime;
```

<a id="Discussion"></a>

## Discussion

This value doesn’t change as time progresses.

## See Also

### Inspecting the snapshot

- [duration](duration.md): The total duration of the primary item and scheduled interstitial events.
- [currentSegment](currentsegment.md): The currently playing segment.
- [segments](segments.md): The segments for this snapshot.
- [AVPlayerItemSegment](../avplayeritemsegment.md): An immutable object that represents a segment of time on the integrated timeline.
- [currentDate](currentdate.md): The current date on the integrated timeline when the system created the snapshot.
