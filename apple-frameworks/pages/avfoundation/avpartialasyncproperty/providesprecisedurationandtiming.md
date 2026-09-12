> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/providesprecisedurationandtiming](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/providesprecisedurationandtiming)

# providesPreciseDurationAndTiming

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the asset provides precise duration and timing.

## Declaration

```swift
static var providesPreciseDurationAndTiming: AVAsyncProperty<Root, Bool> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

This property value is [true](https://developer.apple.com/documentation/swift/true) if you initialized the asset with the [AVURLAssetPreferPreciseDurationAndTimingKey](../avurlassetpreferprecisedurationandtimingkey.md) initialization option, otherwise it’s [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  If calculating precise duration and timing isn’t possible for the media resources that the URL references, the value of this property is [false](https://developer.apple.com/documentation/swift/false), even if you requested otherwise.

## See Also

### Loading duration and timing

- [duration](duration.md): Conforms when `Root` inherits `AVAsset`. A time value that represents the duration of the asset.
- [minimumTimeOffsetFromLive](minimumtimeoffsetfromlive.md): Conforms when `Root` inherits `AVAsset`. A time value that indicates how closely playback follows the latest live stream content.
