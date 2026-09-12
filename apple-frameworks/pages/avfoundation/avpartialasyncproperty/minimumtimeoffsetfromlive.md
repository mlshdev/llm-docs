> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/minimumtimeoffsetfromlive](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/minimumtimeoffsetfromlive)

# minimumTimeOffsetFromLive

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A time value that indicates how closely playback follows the latest live stream content.

## Declaration

```swift
static var minimumTimeOffsetFromLive: AVAsyncProperty<Root, CMTime> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

This property value is only valid when working with live streaming content. For non-live assets, this property value is [invalid](../../coremedia/cmtime/invalid.md).

## See Also

### Loading duration and timing

- [duration](duration.md): Conforms when `Root` inherits `AVAsset`. A time value that represents the duration of the asset.
- [providesPreciseDurationAndTiming](providesprecisedurationandtiming.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether the asset provides precise duration and timing.
