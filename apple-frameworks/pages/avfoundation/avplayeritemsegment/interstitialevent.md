> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemsegment/interstitialevent](https://developer.apple.com/documentation/avfoundation/avplayeritemsegment/interstitialevent)

# interstitialEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The associated interstitial event for this segment.

## Declaration

```swift
var interstitialEvent: AVPlayerInterstitialEvent? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` for segments that represent playback of the primary item.

## See Also

### Inspecting the segment

- [timeMapping](timemapping.md): The time mapping for this segment.
- [loadedTimeRanges](loadedtimeranges-879hc.md): The time ranges for the segment that have media data is readily available.
- [startDate](startdate.md): The date at which a segment starts.

# interstitialEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The associated interstitial event for this segment.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVPlayerInterstitialEvent * interstitialEvent;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` for segments that represent playback of the primary item.

## See Also

### Inspecting the segment

- [timeMapping](timemapping.md): The time mapping for this segment.
- [loadedTimeRanges](loadedtimeranges-2p0fl.md): The time ranges for the segment that have media data is readily available.
- [startDate](startdate.md): The date at which a segment starts.
