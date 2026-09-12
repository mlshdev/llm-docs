> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimelinesnapshot/duration](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimelinesnapshot/duration)

# duration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The total duration of the primary item and scheduled interstitial events.

## Declaration

```swift
var duration: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

The duration property takes into account the interstitial event’s [playoutLimit](../avplayerinterstitialevent/playoutlimit.md) and [resumptionOffset](../avplayerinterstitialevent/resumptionoffset.md) values.

Before loading the duration of the primary item, the value of this property is [invalid](../../coremedia/cmtime/invalid.md). For livestreams, this value is [indefinite](../../coremedia/cmtime/indefinite.md).

## See Also

### Inspecting the snapshot

- [currentSegment](currentsegment.md): The currently playing segment.
- [segments](segments.md): The segments for this snapshot.
- [AVPlayerItemSegment](../avplayeritemsegment.md): An immutable object that represents a segment of time on the integrated timeline.
- [currentTime](currenttime.md): The current time on the integrated timeline when the system created the snapshot.
- [currentDate](currentdate.md): The current date on the integrated timeline when the system created the snapshot.

# duration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The total duration of the primary item and scheduled interstitial events.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime duration;
```

<a id="Discussion"></a>

## Discussion

The duration property takes into account the interstitial event’s [playoutLimit](../avplayerinterstitialevent/playoutlimit.md) and [resumptionOffset](../avplayerinterstitialevent/resumptionoffset.md) values.

Before loading the duration of the primary item, the value of this property is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md). For livestreams, this value is [kCMTimeIndefinite](../../coremedia/cmtime/indefinite.md).

## See Also

### Inspecting the snapshot

- [currentSegment](currentsegment.md): The currently playing segment.
- [segments](segments.md): The segments for this snapshot.
- [AVPlayerItemSegment](../avplayeritemsegment.md): An immutable object that represents a segment of time on the integrated timeline.
- [currentTime](currenttime.md): The current time on the integrated timeline when the system created the snapshot.
- [currentDate](currentdate.md): The current date on the integrated timeline when the system created the snapshot.
