> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/minimumtimeoffsetfromlive](https://developer.apple.com/documentation/avfoundation/avmutablemovie/minimumtimeoffsetfromlive)

# minimumTimeOffsetFromLive

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

A time value that indicates how closely playback follows the latest live stream content.

## Declaration

```swift
var minimumTimeOffsetFromLive: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

This property value is only valid when working with live streaming content. For non-live assets, this property value is [invalid](../../coremedia/cmtime/invalid.md).

## See Also

### Accessing duration and timing

- [duration](duration.md): A time value that indicates the asset’s duration.
- [providesPreciseDurationAndTiming](providesprecisedurationandtiming.md): A Boolean value that indicates whether the asset provides precise duration and timing.
