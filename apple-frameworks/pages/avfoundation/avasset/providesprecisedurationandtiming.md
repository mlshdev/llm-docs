> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/providesprecisedurationandtiming](https://developer.apple.com/documentation/avfoundation/avasset/providesprecisedurationandtiming)

# providesPreciseDurationAndTiming (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

A Boolean value that indicates whether the asset provides precise duration and timing.

> Load the value of  [providesPreciseDurationAndTiming](../avpartialasyncproperty/providesprecisedurationandtiming.md)  asynchronously instead.
>
> <a id="Discussion"></a>
>
> ## Discussion
>
> This property value is [true](https://developer.apple.com/documentation/swift/true) if you initialized the asset with the [AVURLAssetPreferPreciseDurationAndTimingKey](../avurlassetpreferprecisedurationandtimingkey.md) initialization option, otherwise it’s [false](https://developer.apple.com/documentation/swift/false).

## Declaration

```swift
var providesPreciseDurationAndTiming: Bool { get }
```

# providesPreciseDurationAndTiming (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the asset provides precise duration and timing.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL providesPreciseDurationAndTiming;
```

## See Also

### Accessing duration and timing

- [duration](duration.md): Deprecated. A time value that indicates the asset’s duration.
- [minimumTimeOffsetFromLive](minimumtimeoffsetfromlive.md): Deprecated. A time value that indicates how closely playback follows the latest live stream content.
