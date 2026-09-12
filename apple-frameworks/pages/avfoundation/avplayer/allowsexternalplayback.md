> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/allowsexternalplayback](https://developer.apple.com/documentation/avfoundation/avplayer/allowsexternalplayback)

# allowsExternalPlayback (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+

A Boolean value that indicates whether the player allows switching to external playback mode.

## Declaration

```swift
nonisolated var allowsExternalPlayback: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing external playback

- [isExternalPlaybackActive](isexternalplaybackactive.md): A Boolean value that indicates whether the player is currently playing video in external playback mode.
- [usesExternalPlaybackWhileExternalScreenIsActive](usesexternalplaybackwhileexternalscreenisactive.md): A Boolean value that indicates whether the player should automatically switch to external playback mode while the external screen mode is active.
- [externalPlaybackVideoGravity](externalplaybackvideogravity.md): The video gravity of the player for external playback mode only.

# allowsExternalPlayback (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+

A Boolean value that indicates whether the player allows switching to external playback mode.

## Declaration

```objectivec
@property BOOL allowsExternalPlayback;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing external playback

- [externalPlaybackActive](isexternalplaybackactive.md): A Boolean value that indicates whether the player is currently playing video in external playback mode.
- [usesExternalPlaybackWhileExternalScreenIsActive](usesexternalplaybackwhileexternalscreenisactive.md): A Boolean value that indicates whether the player should automatically switch to external playback mode while the external screen mode is active.
- [externalPlaybackVideoGravity](externalplaybackvideogravity.md): The video gravity of the player for external playback mode only.
