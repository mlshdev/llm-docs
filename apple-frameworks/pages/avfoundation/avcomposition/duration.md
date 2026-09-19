> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcomposition/duration

# duration

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A time value that indicates the asset’s duration.

## Declaration

```swift
var duration: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

If you initialized the composition’s assets by passing the [AVURLAssetPreferPreciseDurationAndTimingKey](../avurlassetpreferprecisedurationandtimingkey.md) initialization option, this property value provides precise duration; otherwise, it provides a best-available estimate. You can determine the value’s accuracy by querying the asset’s [providesPreciseDurationAndTiming](../avasset/providesprecisedurationandtiming.md) property.

## See Also

### Accessing duration and timing

- [providesPreciseDurationAndTiming](providesprecisedurationandtiming.md): A Boolean value that indicates whether the asset provides precise duration and timing.
- [minimumTimeOffsetFromLive](minimumtimeoffsetfromlive.md): A time value that indicates how closely playback follows the latest live stream content.
