> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimelinesnapshot/currentsegment](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimelinesnapshot/currentsegment)

# currentSegment (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The currently playing segment.

## Declaration

```swift
var currentSegment: AVPlayerItemSegment? { get }
```

## See Also

### Inspecting the snapshot

- [duration](duration.md): The total duration of the primary item and scheduled interstitial events.
- [segments](segments.md): The segments for this snapshot.
- [AVPlayerItemSegment](../avplayeritemsegment.md): An immutable object that represents a segment of time on the integrated timeline.
- [currentTime](currenttime.md): The current time on the integrated timeline when the system created the snapshot.
- [currentDate](currentdate.md): The current date on the integrated timeline when the system created the snapshot.

# currentSegment (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The currently playing segment.

## Declaration

```objectivec
@property (readonly, nullable) AVPlayerItemSegment * currentSegment;
```

## See Also

### Inspecting the snapshot

- [duration](duration.md): The total duration of the primary item and scheduled interstitial events.
- [segments](segments.md): The segments for this snapshot.
- [AVPlayerItemSegment](../avplayeritemsegment.md): An immutable object that represents a segment of time on the integrated timeline.
- [currentTime](currenttime.md): The current time on the integrated timeline when the system created the snapshot.
- [currentDate](currentdate.md): The current date on the integrated timeline when the system created the snapshot.
