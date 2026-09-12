> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimelinesnapshot/segments](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimelinesnapshot/segments)

# segments (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The segments for this snapshot.

## Declaration

```swift
var segments: [AVPlayerItemSegment] { get }
```

<a id="Discussion"></a>

## Discussion

The system presents segments in chronological order, contiguous from the previous element, and non-overlapping.

## See Also

### Inspecting the snapshot

- [duration](duration.md): The total duration of the primary item and scheduled interstitial events.
- [currentSegment](currentsegment.md): The currently playing segment.
- [AVPlayerItemSegment](../avplayeritemsegment.md): An immutable object that represents a segment of time on the integrated timeline.
- [currentTime](currenttime.md): The current time on the integrated timeline when the system created the snapshot.
- [currentDate](currentdate.md): The current date on the integrated timeline when the system created the snapshot.

# segments (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The segments for this snapshot.

## Declaration

```objectivec
@property (readonly) NSArray<AVPlayerItemSegment *> * segments;
```

<a id="Discussion"></a>

## Discussion

The system presents segments in chronological order, contiguous from the previous element, and non-overlapping.

## See Also

### Inspecting the snapshot

- [duration](duration.md): The total duration of the primary item and scheduled interstitial events.
- [currentSegment](currentsegment.md): The currently playing segment.
- [AVPlayerItemSegment](../avplayeritemsegment.md): An immutable object that represents a segment of time on the integrated timeline.
- [currentTime](currenttime.md): The current time on the integrated timeline when the system created the snapshot.
- [currentDate](currentdate.md): The current date on the integrated timeline when the system created the snapshot.
