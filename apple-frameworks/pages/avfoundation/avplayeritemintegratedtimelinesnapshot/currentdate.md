> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimelinesnapshot/currentdate](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimelinesnapshot/currentdate)

# currentDate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The current date on the integrated timeline when the system created the snapshot.

## Declaration

```swift
var currentDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if playback doesn’t map to a date.

## See Also

### Inspecting the snapshot

- [duration](duration.md): The total duration of the primary item and scheduled interstitial events.
- [currentSegment](currentsegment.md): The currently playing segment.
- [segments](segments.md): The segments for this snapshot.
- [AVPlayerItemSegment](../avplayeritemsegment.md): An immutable object that represents a segment of time on the integrated timeline.
- [currentTime](currenttime.md): The current time on the integrated timeline when the system created the snapshot.

# currentDate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The current date on the integrated timeline when the system created the snapshot.

## Declaration

```objectivec
@property (readonly, nullable) NSDate * currentDate;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if playback doesn’t map to a date.

## See Also

### Inspecting the snapshot

- [duration](duration.md): The total duration of the primary item and scheduled interstitial events.
- [currentSegment](currentsegment.md): The currently playing segment.
- [segments](segments.md): The segments for this snapshot.
- [AVPlayerItemSegment](../avplayeritemsegment.md): An immutable object that represents a segment of time on the integrated timeline.
- [currentTime](currenttime.md): The current time on the integrated timeline when the system created the snapshot.
