> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/configuredtimeoffsetfromlive](https://developer.apple.com/documentation/avfoundation/avplayeritem/configuredtimeoffsetfromlive)

# configuredTimeOffsetFromLive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A time value that indicates the offset from the live time to start playback, or resume playback after a seek to positive infinity.

## Declaration

```swift
nonisolated var configuredTimeOffsetFromLive: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

For nonlive stream content, the value is [invalid](../../coremedia/cmtime/invalid.md).

## See Also

### Managing time offsets

- [automaticallyPreservesTimeOffsetFromLive](automaticallypreservestimeoffsetfromlive.md): A Boolean value that indicates whether the player preserves its time offset from the live time after a buffering operation.
- [recommendedTimeOffsetFromLive](recommendedtimeoffsetfromlive.md): A recommended time offset from the live time based on observed network conditions.

# configuredTimeOffsetFromLive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A time value that indicates the offset from the live time to start playback, or resume playback after a seek to positive infinity.

## Declaration

```objectivec
@property CMTime configuredTimeOffsetFromLive;
```

<a id="Discussion"></a>

## Discussion

For nonlive stream content, the value is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md).

## See Also

### Managing time offsets

- [automaticallyPreservesTimeOffsetFromLive](automaticallypreservestimeoffsetfromlive.md): A Boolean value that indicates whether the player preserves its time offset from the live time after a buffering operation.
- [recommendedTimeOffsetFromLive](recommendedtimeoffsetfromlive.md): A recommended time offset from the live time based on observed network conditions.
