> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/forwardplaybackendtime](https://developer.apple.com/documentation/avfoundation/avplayeritem/forwardplaybackendtime)

# forwardPlaybackEndTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The time at which forward playback ends.

## Declaration

```swift
nonisolated var forwardPlaybackEndTime: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

The value indicates the time at which playback should end when the playback rate is positive (see `AVPlayer`’s [rate](../avplayer/rate.md) property).

The default value is [invalid](../../coremedia/cmtime/invalid.md), which indicates that no end time for forward playback is specified. In this case, the effective end time for forward playback is the item’s duration.

The value of this property has no effect on playback when the rate is negative.

## See Also

### Setting playback boundaries

- [reversePlaybackEndTime](reverseplaybackendtime.md): The time at which reverse playback ends.

# forwardPlaybackEndTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The time at which forward playback ends.

## Declaration

```objectivec
@property CMTime forwardPlaybackEndTime;
```

<a id="Discussion"></a>

## Discussion

The value indicates the time at which playback should end when the playback rate is positive (see `AVPlayer`’s [rate](../avplayer/rate.md) property).

The default value is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md), which indicates that no end time for forward playback is specified. In this case, the effective end time for forward playback is the item’s duration.

The value of this property has no effect on playback when the rate is negative.

## See Also

### Setting playback boundaries

- [reversePlaybackEndTime](reverseplaybackendtime.md): The time at which reverse playback ends.
