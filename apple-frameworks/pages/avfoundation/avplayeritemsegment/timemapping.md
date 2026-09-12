> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemsegment/timemapping](https://developer.apple.com/documentation/avfoundation/avplayeritemsegment/timemapping)

# timeMapping (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The time mapping for this segment.

## Declaration

```swift
var timeMapping: CMTimeMapping { get }
```

<a id="Discussion"></a>

## Discussion

The time mapping’s source time range represents the start time and duration in the segment source’s timeline, either the primary item or interstitial event. The target time range represents the start time and duration in the integrated timeline. For interstitial events that occupy a single point, the target’s duration is [zero](../../coremedia/cmtime/zero.md).

## See Also

### Inspecting the segment

- [loadedTimeRanges](loadedtimeranges-879hc.md): The time ranges for the segment that have media data is readily available.
- [startDate](startdate.md): The date at which a segment starts.
- [interstitialEvent](interstitialevent.md): The associated interstitial event for this segment.

# timeMapping (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The time mapping for this segment.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTimeMapping timeMapping;
```

<a id="Discussion"></a>

## Discussion

The time mapping’s source time range represents the start time and duration in the segment source’s timeline, either the primary item or interstitial event. The target time range represents the start time and duration in the integrated timeline. For interstitial events that occupy a single point, the target’s duration is [kCMTimeZero](../../coremedia/cmtime/zero.md).

## See Also

### Inspecting the segment

- [loadedTimeRanges](loadedtimeranges-2p0fl.md): The time ranges for the segment that have media data is readily available.
- [startDate](startdate.md): The date at which a segment starts.
- [interstitialEvent](interstitialevent.md): The associated interstitial event for this segment.
