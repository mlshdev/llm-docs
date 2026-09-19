> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayeritemsegment/loadedtimeranges-879hc

# loadedTimeRanges

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The time ranges for the segment that have media data is readily available.

## Declaration

```swift
@nonobjc var loadedTimeRanges: [CMTimeRange] { get }
```

<a id="Discussion"></a>

## Discussion

The loaded time ranges might be discontinuous.

## See Also

### Inspecting the segment

- [timeMapping](timemapping.md): The time mapping for this segment.
- [startDate](startdate.md): The date at which a segment starts.
- [interstitialEvent](interstitialevent.md): The associated interstitial event for this segment.
