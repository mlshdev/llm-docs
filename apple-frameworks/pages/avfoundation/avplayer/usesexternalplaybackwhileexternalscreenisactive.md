> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/usesexternalplaybackwhileexternalscreenisactive](https://developer.apple.com/documentation/avfoundation/avplayer/usesexternalplaybackwhileexternalscreenisactive)

# usesExternalPlaybackWhileExternalScreenIsActive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+

A Boolean value that indicates whether the player should automatically switch to external playback mode while the external screen mode is active.

## Declaration

```swift
nonisolated var usesExternalPlaybackWhileExternalScreenIsActive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The player automatically switches back to the external screen mode once video playback concludes. A brief transition may be visible on the external display when automatically switching between the two modes. The default value of this property is [false](https://developer.apple.com/documentation/swift/false). The value of this property has no effect if [allowsExternalPlayback](allowsexternalplayback.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing external playback

- [allowsExternalPlayback](allowsexternalplayback.md): A Boolean value that indicates whether the player allows switching to external playback mode.
- [isExternalPlaybackActive](isexternalplaybackactive.md): A Boolean value that indicates whether the player is currently playing video in external playback mode.
- [externalPlaybackVideoGravity](externalplaybackvideogravity.md): The video gravity of the player for external playback mode only.

# usesExternalPlaybackWhileExternalScreenIsActive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+

A Boolean value that indicates whether the player should automatically switch to external playback mode while the external screen mode is active.

## Declaration

```objectivec
@property BOOL usesExternalPlaybackWhileExternalScreenIsActive;
```

<a id="Discussion"></a>

## Discussion

The player automatically switches back to the external screen mode once video playback concludes. A brief transition may be visible on the external display when automatically switching between the two modes. The default value of this property is [false](https://developer.apple.com/documentation/swift/false). The value of this property has no effect if [allowsExternalPlayback](allowsexternalplayback.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing external playback

- [allowsExternalPlayback](allowsexternalplayback.md): A Boolean value that indicates whether the player allows switching to external playback mode.
- [externalPlaybackActive](isexternalplaybackactive.md): A Boolean value that indicates whether the player is currently playing video in external playback mode.
- [externalPlaybackVideoGravity](externalplaybackvideogravity.md): The video gravity of the player for external playback mode only.
