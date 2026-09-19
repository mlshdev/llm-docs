> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceplaybackstate

# AVPlaybackUserInterfacePlaybackState (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Describes possible transport states of the playback source.

## Declaration

```swift
enum AVPlaybackUserInterfacePlaybackState
```

## Topics

### Enumeration Cases

- [AVPlaybackUserInterfacePlaybackState.normal](avplaybackuserinterfaceplaybackstate/normal.md): Indicates the source is in a normal state.
- [AVPlaybackUserInterfacePlaybackState.scanning](avplaybackuserinterfaceplaybackstate/scanning.md): Indicates the source is scanning forward or backward at an accelerated rate.
- [AVPlaybackUserInterfacePlaybackState.scrubbing](avplaybackuserinterfaceplaybackstate/scrubbing.md): Indicates the source is being scrubbed by user interaction with the timeline.

### Initializers

- [init(rawValue:)](avplaybackuserinterfaceplaybackstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Playback control

- [AVPlaybackUserInterfacePlaybackControllable](avplaybackuserinterfaceplaybackcontrollable-9he54.md): Provides playback control and state management for media content.
- [AVPlaybackUserInterfaceSeekCapabilities](avplaybackuserinterfaceseekcapabilities.md): Describes navigation capabilities of the media source.

# AVPlaybackUserInterfacePlaybackState (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Describes possible transport states of the playback source.

## Declaration

```objectivec
enum AVPlaybackUserInterfacePlaybackState : NSInteger;
```

## Topics

### Enumeration Cases

- [AVPlaybackUserInterfacePlaybackStateNormal](avplaybackuserinterfaceplaybackstate/normal.md): Indicates the source is in a normal state.
- [AVPlaybackUserInterfacePlaybackStateScanning](avplaybackuserinterfaceplaybackstate/scanning.md): Indicates the source is scanning forward or backward at an accelerated rate.
- [AVPlaybackUserInterfacePlaybackStateScrubbing](avplaybackuserinterfaceplaybackstate/scrubbing.md): Indicates the source is being scrubbed by user interaction with the timeline.

## See Also

### Playback control

- [AVPlaybackUserInterfacePlaybackControllable](avplaybackuserinterfaceplaybackcontrollable-81n66.md): Provides playback control and state management for media content.
- [AVPlaybackUserInterfaceSeekCapabilities](avplaybackuserinterfaceseekcapabilities.md): Describes navigation capabilities of the media source.
