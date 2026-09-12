> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/providesprecisedurationandtiming](https://developer.apple.com/documentation/avfoundation/avcomposition/providesprecisedurationandtiming)

# providesPreciseDurationAndTiming

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

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
