> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/removeaudioplayer(_:)](https://developer.apple.com/documentation/scenekit/scnnode/removeaudioplayer(_:))

# removeAudioPlayer(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Removes the specified audio player from the node, stopping playback.

## Declaration

```swift
func removeAudioPlayer(_ player: SCNAudioPlayer)
```

## Parameters

- `player`: An audio player attached to the node.

<a id="Discussion"></a>

## Discussion

This method has no effect if the `player` parameter does not reference an audio player directly attached to the node.

## See Also

### Working with Positional Audio

- [addAudioPlayer(\_:)](addaudioplayer%28__%29.md): Adds the specified auto player to the node and begins playback.
- [audioPlayers](audioplayers.md): The audio players currently attached to the node.
- [removeAllAudioPlayers()](removeallaudioplayers%28%29.md): Removes all audio players attached to the node, stopping playback.

# removeAudioPlayer: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the specified audio player from the node, stopping playback.

## Declaration

```objectivec
- (void) removeAudioPlayer:(SCNAudioPlayer *) player;
```

## Parameters

- `player`: An audio player attached to the node.

<a id="Discussion"></a>

## Discussion

This method has no effect if the `player` parameter does not reference an audio player directly attached to the node.

## See Also

### Working with Positional Audio

- [addAudioPlayer:](addaudioplayer%28__%29.md): Adds the specified auto player to the node and begins playback.
- [audioPlayers](audioplayers.md): The audio players currently attached to the node.
- [removeAllAudioPlayers](removeallaudioplayers%28%29.md): Removes all audio players attached to the node, stopping playback.
