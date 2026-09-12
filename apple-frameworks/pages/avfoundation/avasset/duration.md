> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/duration](https://developer.apple.com/documentation/avfoundation/avasset/duration)

# duration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

A time value that indicates the asset’s duration.

> Load the value of [duration](../avpartialasyncproperty/duration.md) asynchronously instead.

## Declaration

```swift
var duration: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

If you initialized the asset by passing the [AVURLAssetPreferPreciseDurationAndTimingKey](../avurlassetpreferprecisedurationandtimingkey.md) initialization option, this property value provides the asset’s precise duration; otherwise, it provides a best-available estimate. You can determine the value’s accuracy by querying the asset’s [providesPreciseDurationAndTiming](providesprecisedurationandtiming.md) property.

# duration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A time value that indicates the asset’s duration.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime duration;
```

<a id="Discussion"></a>

## Discussion

If you initialized the asset by passing the [AVURLAssetPreferPreciseDurationAndTimingKey](../avurlassetpreferprecisedurationandtimingkey.md) initialization option, this property value provides the asset’s precise duration; otherwise, it provides a best-available estimate. You can determine the value’s accuracy by querying the asset’s [providesPreciseDurationAndTiming](providesprecisedurationandtiming.md) property.

## See Also

### Accessing duration and timing

- [providesPreciseDurationAndTiming](providesprecisedurationandtiming.md): Deprecated. A Boolean value that indicates whether the asset provides precise duration and timing.
- [minimumTimeOffsetFromLive](minimumtimeoffsetfromlive.md): Deprecated. A time value that indicates how closely playback follows the latest live stream content.
