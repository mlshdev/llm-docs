> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/addaudioplayer(_:)](https://developer.apple.com/documentation/scenekit/scnnode/addaudioplayer(_:))

# addAudioPlayer(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Adds the specified auto player to the node and begins playback.

## Declaration

```swift
func addAudioPlayer(_ player: SCNAudioPlayer)
```

## Parameters

- `player`: An audio player object.

<a id="Discussion"></a>

## Discussion

Positional audio effects from a player attached to a node are based on that node’s position relative to the [audioListener](../scnscenerenderer/audiolistener.md) position in the scene.

After playback has completed, SceneKit automatically removes the audio player from the node.

## See Also

### Working with Positional Audio

- [audioPlayers](audioplayers.md): The audio players currently attached to the node.
- [removeAudioPlayer(\_:)](removeaudioplayer%28__%29.md): Removes the specified audio player from the node, stopping playback.
- [removeAllAudioPlayers()](removeallaudioplayers%28%29.md): Removes all audio players attached to the node, stopping playback.

# addAudioPlayer: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the specified auto player to the node and begins playback.

## Declaration

```objectivec
- (void) addAudioPlayer:(SCNAudioPlayer *) player;
```

## Parameters

- `player`: An audio player object.

<a id="Discussion"></a>

## Discussion

Positional audio effects from a player attached to a node are based on that node’s position relative to the [audioListener](../scnscenerenderer/audiolistener.md) position in the scene.

After playback has completed, SceneKit automatically removes the audio player from the node.

## See Also

### Working with Positional Audio

- [audioPlayers](audioplayers.md): The audio players currently attached to the node.
- [removeAudioPlayer:](removeaudioplayer%28__%29.md): Removes the specified audio player from the node, stopping playback.
- [removeAllAudioPlayers](removeallaudioplayers%28%29.md): Removes all audio players attached to the node, stopping playback.
