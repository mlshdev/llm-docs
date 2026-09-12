> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/duration](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/duration)

# duration

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A time value that represents the duration of the asset.

## Declaration

```swift
static var duration: AVAsyncProperty<Root, CMTime> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

If the value of [providesPreciseDurationAndTiming](providesprecisedurationandtiming.md) is [false](https://developer.apple.com/documentation/swift/false), the asset returns a best-available estimate of the duration. You can specify your preferred degree of precision for timing-related properties when you create an [AVURLAsset](../avurlasset.md) by passing a value for the [AVURLAssetPreferPreciseDurationAndTimingKey](../avurlassetpreferprecisedurationandtimingkey.md) initialization option.

## See Also

### Loading duration and timing

- [providesPreciseDurationAndTiming](providesprecisedurationandtiming.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether the asset provides precise duration and timing.
- [minimumTimeOffsetFromLive](minimumtimeoffsetfromlive.md): Conforms when `Root` inherits `AVAsset`. A time value that indicates how closely playback follows the latest live stream content.
