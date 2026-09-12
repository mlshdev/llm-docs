> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/recommendedtimeoffsetfromlive](https://developer.apple.com/documentation/avfoundation/avplayeritem/recommendedtimeoffsetfromlive)

# recommendedTimeOffsetFromLive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A recommended time offset from the live time based on observed network conditions.

## Declaration

```swift
nonisolated var recommendedTimeOffsetFromLive: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

For nonlive stream content, the value is [invalid](../../coremedia/cmtime/invalid.md).

## See Also

### Managing time offsets

- [automaticallyPreservesTimeOffsetFromLive](automaticallypreservestimeoffsetfromlive.md): A Boolean value that indicates whether the player preserves its time offset from the live time after a buffering operation.
- [configuredTimeOffsetFromLive](configuredtimeoffsetfromlive.md): A time value that indicates the offset from the live time to start playback, or resume playback after a seek to positive infinity.

# recommendedTimeOffsetFromLive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A recommended time offset from the live time based on observed network conditions.

## Declaration

```objectivec
@property (readonly) CMTime recommendedTimeOffsetFromLive;
```

<a id="Discussion"></a>

## Discussion

For nonlive stream content, the value is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md).

## See Also

### Managing time offsets

- [automaticallyPreservesTimeOffsetFromLive](automaticallypreservestimeoffsetfromlive.md): A Boolean value that indicates whether the player preserves its time offset from the live time after a buffering operation.
- [configuredTimeOffsetFromLive](configuredtimeoffsetfromlive.md): A time value that indicates the offset from the live time to start playback, or resume playback after a seek to positive infinity.
