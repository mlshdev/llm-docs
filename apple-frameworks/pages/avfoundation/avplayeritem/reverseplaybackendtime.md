> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/reverseplaybackendtime](https://developer.apple.com/documentation/avfoundation/avplayeritem/reverseplaybackendtime)

# reversePlaybackEndTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The time at which reverse playback ends.

## Declaration

```swift
nonisolated var reversePlaybackEndTime: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

The value indicated the time at which playback should end when the playback rate is negative (see `AVPlayer`’s [rate](../avplayer/rate.md) property).

The default value is [invalid](../../coremedia/cmtime/invalid.md), which indicates that no end time for reverse playback is specified. In this case, the effective end time for reverse playback is [zero](../../coremedia/cmtime/zero.md).

The value of this property has no effect on playback when the rate is positive.

## See Also

### Setting playback boundaries

- [forwardPlaybackEndTime](forwardplaybackendtime.md): The time at which forward playback ends.

# reversePlaybackEndTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The time at which reverse playback ends.

## Declaration

```objectivec
@property CMTime reversePlaybackEndTime;
```

<a id="Discussion"></a>

## Discussion

The value indicated the time at which playback should end when the playback rate is negative (see `AVPlayer`’s [rate](../avplayer/rate.md) property).

The default value is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md), which indicates that no end time for reverse playback is specified. In this case, the effective end time for reverse playback is [kCMTimeZero](../../coremedia/cmtime/zero.md).

The value of this property has no effect on playback when the rate is positive.

## See Also

### Setting playback boundaries

- [forwardPlaybackEndTime](forwardplaybackendtime.md): The time at which forward playback ends.
