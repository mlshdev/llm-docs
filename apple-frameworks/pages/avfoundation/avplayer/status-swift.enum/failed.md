> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/status-swift.enum/failed](https://developer.apple.com/documentation/avfoundation/avplayer/status-swift.enum/failed)

# AVPlayer.Status.failed (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A value that indicates the player can no longer play media due to an error.

## Declaration

```swift
case failed
```

<a id="Discussion"></a>

## Discussion

Inspect the value of the player’s [error](../error.md) property to determine the details of the failure.

## See Also

### Status values

- [AVPlayer.Status.unknown](unknown.md): A value that indicates a player hasn’t attempted to load media for playback.
- [AVPlayer.Status.readyToPlay](readytoplay.md): A value that indicates the player is ready to media.

# AVPlayerStatusFailed (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A value that indicates the player can no longer play media due to an error.

## Declaration

```objectivec
AVPlayerStatusFailed
```

<a id="Discussion"></a>

## Discussion

Inspect the value of the player’s [error](../error.md) property to determine the details of the failure.

## See Also

### Status values

- [AVPlayerStatusUnknown](unknown.md): A value that indicates a player hasn’t attempted to load media for playback.
- [AVPlayerStatusReadyToPlay](readytoplay.md): A value that indicates the player is ready to media.
