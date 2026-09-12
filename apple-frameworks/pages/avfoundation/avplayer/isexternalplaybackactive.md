> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/isexternalplaybackactive](https://developer.apple.com/documentation/avfoundation/avplayer/isexternalplaybackactive)

# isExternalPlaybackActive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+

A Boolean value that indicates whether the player is currently playing video in external playback mode.

## Declaration

```swift
nonisolated var isExternalPlaybackActive: Bool { get }
```

## See Also

### Managing external playback

- [allowsExternalPlayback](allowsexternalplayback.md): A Boolean value that indicates whether the player allows switching to external playback mode.
- [usesExternalPlaybackWhileExternalScreenIsActive](usesexternalplaybackwhileexternalscreenisactive.md): A Boolean value that indicates whether the player should automatically switch to external playback mode while the external screen mode is active.
- [externalPlaybackVideoGravity](externalplaybackvideogravity.md): The video gravity of the player for external playback mode only.

# externalPlaybackActive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+

A Boolean value that indicates whether the player is currently playing video in external playback mode.

## Declaration

```objectivec
@property (readonly, getter=isExternalPlaybackActive) BOOL externalPlaybackActive;
```

## See Also

### Managing external playback

- [allowsExternalPlayback](allowsexternalplayback.md): A Boolean value that indicates whether the player allows switching to external playback mode.
- [usesExternalPlaybackWhileExternalScreenIsActive](usesexternalplaybackwhileexternalscreenisactive.md): A Boolean value that indicates whether the player should automatically switch to external playback mode while the external screen mode is active.
- [externalPlaybackVideoGravity](externalplaybackvideogravity.md): The video gravity of the player for external playback mode only.
