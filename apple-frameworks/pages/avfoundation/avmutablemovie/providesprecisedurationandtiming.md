> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/providesprecisedurationandtiming](https://developer.apple.com/documentation/avfoundation/avmutablemovie/providesprecisedurationandtiming)

# providesPreciseDurationAndTiming

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the asset provides precise duration and timing.

## Declaration

```swift
var providesPreciseDurationAndTiming: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property value is [true](https://developer.apple.com/documentation/swift/true) if you initialized the asset with the [AVURLAssetPreferPreciseDurationAndTimingKey](../avurlassetpreferprecisedurationandtimingkey.md) initialization option, otherwise it’s [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing duration and timing

- [duration](duration.md): A time value that indicates the asset’s duration.
- [minimumTimeOffsetFromLive](minimumtimeoffsetfromlive.md): A time value that indicates how closely playback follows the latest live stream content.
