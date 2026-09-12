> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/audioplayers](https://developer.apple.com/documentation/scenekit/scnnode/audioplayers)

# audioPlayers (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The audio players currently attached to the node.

## Declaration

```swift
var audioPlayers: [SCNAudioPlayer] { get }
```

<a id="Discussion"></a>

## Discussion

Positional audio effects from a player attached to a node are based on that node’s position relative to the [audioListener](../scnscenerenderer/audiolistener.md) position in the scene.

After an audio player completes playback, SceneKit automatically removes it from the node. Therefore, this array always contains audio players that are currently playing back audio.

## See Also

### Working with Positional Audio

- [addAudioPlayer(\_:)](addaudioplayer%28__%29.md): Adds the specified auto player to the node and begins playback.
- [removeAudioPlayer(\_:)](removeaudioplayer%28__%29.md): Removes the specified audio player from the node, stopping playback.
- [removeAllAudioPlayers()](removeallaudioplayers%28%29.md): Removes all audio players attached to the node, stopping playback.

# audioPlayers (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio players currently attached to the node.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SCNAudioPlayer *> * audioPlayers;
```

<a id="Discussion"></a>

## Discussion

Positional audio effects from a player attached to a node are based on that node’s position relative to the [audioListener](../scnscenerenderer/audiolistener.md) position in the scene.

After an audio player completes playback, SceneKit automatically removes it from the node. Therefore, this array always contains audio players that are currently playing back audio.

## See Also

### Working with Positional Audio

- [addAudioPlayer:](addaudioplayer%28__%29.md): Adds the specified auto player to the node and begins playback.
- [removeAudioPlayer:](removeaudioplayer%28__%29.md): Removes the specified audio player from the node, stopping playback.
- [removeAllAudioPlayers](removeallaudioplayers%28%29.md): Removes all audio players attached to the node, stopping playback.
