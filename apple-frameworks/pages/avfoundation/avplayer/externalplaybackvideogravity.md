> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/externalplaybackvideogravity](https://developer.apple.com/documentation/avfoundation/avplayer/externalplaybackvideogravity)

# externalPlaybackVideoGravity (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+

The video gravity of the player for external playback mode only.

## Declaration

```swift
nonisolated var externalPlaybackVideoGravity: AVLayerVideoGravity { get set }
```

<a id="Discussion"></a>

## Discussion

Valid values are [resize](../avlayervideogravity/resize.md), [resizeAspectFill](../avlayervideogravity/resizeaspectfill.md), or [resizeAspect](../avlayervideogravity/resizeaspect.md).

## See Also

### Managing external playback

- [allowsExternalPlayback](allowsexternalplayback.md): A Boolean value that indicates whether the player allows switching to external playback mode.
- [isExternalPlaybackActive](isexternalplaybackactive.md): A Boolean value that indicates whether the player is currently playing video in external playback mode.
- [usesExternalPlaybackWhileExternalScreenIsActive](usesexternalplaybackwhileexternalscreenisactive.md): A Boolean value that indicates whether the player should automatically switch to external playback mode while the external screen mode is active.

# externalPlaybackVideoGravity (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+

The video gravity of the player for external playback mode only.

## Declaration

```objectivec
@property (nonatomic, copy) AVLayerVideoGravity externalPlaybackVideoGravity;
```

<a id="Discussion"></a>

## Discussion

Valid values are [AVLayerVideoGravityResize](../avlayervideogravity/resize.md), [AVLayerVideoGravityResizeAspectFill](../avlayervideogravity/resizeaspectfill.md), or [AVLayerVideoGravityResizeAspect](../avlayervideogravity/resizeaspect.md).

## See Also

### Managing external playback

- [allowsExternalPlayback](allowsexternalplayback.md): A Boolean value that indicates whether the player allows switching to external playback mode.
- [externalPlaybackActive](isexternalplaybackactive.md): A Boolean value that indicates whether the player is currently playing video in external playback mode.
- [usesExternalPlaybackWhileExternalScreenIsActive](usesexternalplaybackwhileexternalscreenisactive.md): A Boolean value that indicates whether the player should automatically switch to external playback mode while the external screen mode is active.
