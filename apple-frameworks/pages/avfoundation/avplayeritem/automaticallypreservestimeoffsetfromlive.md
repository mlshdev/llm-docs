> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/automaticallypreservestimeoffsetfromlive](https://developer.apple.com/documentation/avfoundation/avplayeritem/automaticallypreservestimeoffsetfromlive)

# automaticallyPreservesTimeOffsetFromLive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the player preserves its time offset from the live time after a buffering operation.

## Declaration

```swift
nonisolated var automaticallyPreservesTimeOffsetFromLive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). If the value is [true](https://developer.apple.com/documentation/swift/true), the player seeks forward after it finishes buffering to restore the position that the playhead had when buffering began, relative to the end of the player item’s [seekableTimeRanges](seekabletimeranges.md) property value.

> **Note**

>  This property value has no effect if the asset isn’t a live stream.

## See Also

### Managing time offsets

- [recommendedTimeOffsetFromLive](recommendedtimeoffsetfromlive.md): A recommended time offset from the live time based on observed network conditions.
- [configuredTimeOffsetFromLive](configuredtimeoffsetfromlive.md): A time value that indicates the offset from the live time to start playback, or resume playback after a seek to positive infinity.

# automaticallyPreservesTimeOffsetFromLive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the player preserves its time offset from the live time after a buffering operation.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyPreservesTimeOffsetFromLive;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). If the value is [true](https://developer.apple.com/documentation/swift/true), the player seeks forward after it finishes buffering to restore the position that the playhead had when buffering began, relative to the end of the player item’s [seekableTimeRanges](seekabletimeranges.md) property value.

> **Note**

>  This property value has no effect if the asset isn’t a live stream.

## See Also

### Managing time offsets

- [recommendedTimeOffsetFromLive](recommendedtimeoffsetfromlive.md): A recommended time offset from the live time based on observed network conditions.
- [configuredTimeOffsetFromLive](configuredtimeoffsetfromlive.md): A time value that indicates the offset from the live time to start playback, or resume playback after a seek to positive infinity.
