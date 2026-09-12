> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricplayeritemplaybacksummaryevent](https://developer.apple.com/documentation/avfoundation/avmetricplayeritemplaybacksummaryevent)

# AVMetricPlayerItemPlaybackSummaryEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents the combined metrics for the entire playback session.

## Declaration

```swift
class AVMetricPlayerItemPlaybackSummaryEvent
```

## Topics

### Inspecting the event

- [errorEvent](avmetricplayeritemplaybacksummaryevent/errorevent.md)
- [mediaResourceRequestCount](avmetricplayeritemplaybacksummaryevent/mediaresourcerequestcount.md)
- [playbackDuration](avmetricplayeritemplaybacksummaryevent/playbackduration.md)
- [recoverableErrorCount](avmetricplayeritemplaybacksummaryevent/recoverableerrorcount.md)
- [stallCount](avmetricplayeritemplaybacksummaryevent/stallcount.md)
- [timeSpentInInitialStartup](avmetricplayeritemplaybacksummaryevent/timespentininitialstartup.md)
- [timeSpentRecoveringFromStall](avmetricplayeritemplaybacksummaryevent/timespentrecoveringfromstall.md)
- [timeWeightedAverageBitrate](avmetricplayeritemplaybacksummaryevent/timeweightedaveragebitrate.md)
- [timeWeightedPeakBitrate](avmetricplayeritemplaybacksummaryevent/timeweightedpeakbitrate.md)
- [variantSwitchCount](avmetricplayeritemplaybacksummaryevent/variantswitchcount.md)

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transport control

- [AVMetricPlayerItemRateChangeEvent](avmetricplayeritemratechangeevent.md): An event that represents when the playback rate changes.
- [AVMetricPlayerItemSeekDidCompleteEvent](avmetricplayeritemseekdidcompleteevent.md): An event that represents when the playback seek completes.
- [AVMetricPlayerItemSeekEvent](avmetricplayeritemseekevent.md): An event that represents when a playback seek occurs.

# AVMetricPlayerItemPlaybackSummaryEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An event that represents the combined metrics for the entire playback session.

## Declaration

```objectivec
@interface AVMetricPlayerItemPlaybackSummaryEvent : AVMetricEvent
```

## Topics

### Inspecting the event

- [errorEvent](avmetricplayeritemplaybacksummaryevent/errorevent.md)
- [mediaResourceRequestCount](avmetricplayeritemplaybacksummaryevent/mediaresourcerequestcount.md)
- [playbackDuration](avmetricplayeritemplaybacksummaryevent/playbackduration.md)
- [recoverableErrorCount](avmetricplayeritemplaybacksummaryevent/recoverableerrorcount.md)
- [stallCount](avmetricplayeritemplaybacksummaryevent/stallcount.md)
- [timeSpentInInitialStartup](avmetricplayeritemplaybacksummaryevent/timespentininitialstartup.md)
- [timeSpentRecoveringFromStall](avmetricplayeritemplaybacksummaryevent/timespentrecoveringfromstall.md)
- [timeWeightedAverageBitrate](avmetricplayeritemplaybacksummaryevent/timeweightedaveragebitrate.md)
- [timeWeightedPeakBitrate](avmetricplayeritemplaybacksummaryevent/timeweightedpeakbitrate.md)
- [variantSwitchCount](avmetricplayeritemplaybacksummaryevent/variantswitchcount.md)

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

## See Also

### Transport control

- [AVMetricPlayerItemRateChangeEvent](avmetricplayeritemratechangeevent.md): An event that represents when the playback rate changes.
- [AVMetricPlayerItemSeekDidCompleteEvent](avmetricplayeritemseekdidcompleteevent.md): An event that represents when the playback seek completes.
- [AVMetricPlayerItemSeekEvent](avmetricplayeritemseekevent.md): An event that represents when a playback seek occurs.
