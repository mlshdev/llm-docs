> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/minimumtimeoffsetfromlive](https://developer.apple.com/documentation/avfoundation/avasset/minimumtimeoffsetfromlive)

# minimumTimeOffsetFromLive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · tvOS 13.0+ (deprecated in 16.0) · watchOS 6.0+ (deprecated in 9.0)

A time value that indicates how closely playback follows the latest live stream content.

> Load the value of [minimumTimeOffsetFromLive](../avpartialasyncproperty/minimumtimeoffsetfromlive.md) asynchronously instead.

## Declaration

```swift
var minimumTimeOffsetFromLive: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

This property value is only valid when working with live streaming content. For non-live assets, this property value is [invalid](../../coremedia/cmtime/invalid.md).

# minimumTimeOffsetFromLive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A time value that indicates how closely playback follows the latest live stream content.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime minimumTimeOffsetFromLive;
```

<a id="Discussion"></a>

## Discussion

This property value is only valid when working with live streaming content. For non-live assets, this property value is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md).

## See Also

### Accessing duration and timing

- [duration](duration.md): Deprecated. A time value that indicates the asset’s duration.
- [providesPreciseDurationAndTiming](providesprecisedurationandtiming.md): Deprecated. A Boolean value that indicates whether the asset provides precise duration and timing.
