> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudioplayer](https://developer.apple.com/documentation/scenekit/scnaudioplayer)

# SCNAudioPlayer (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A controller for playback of a positional audio source in a SceneKit scene.

## Declaration

```swift
class SCNAudioPlayer
```

<a id="overview"></a>

## Overview

An [SCNAudioPlayer](scnaudioplayer.md) object controls playback of a positional audio source in a SceneKit scene. To use positional audio, first create a reusable [SCNAudioSource](scnaudiosource.md) or [AVAudioNode](../avfaudio/avaudionode.md) object to provide an audio stream. Then, create an audio player to control the playback of that audio source. Finally, attach the audio player to an [SCNNode](scnnode.md) object for spatialized 3D audio playback based on the position of that node relative to the scene’s [audioListener](scnscenerenderer/audiolistener.md) node.

## Topics

### Creating an Audio Player

- [init(source:)](scnaudioplayer/init%28source_%29.md): Initializes an audio player for playing the specified simple audio source.
- [init(avAudioNode:)](scnaudioplayer/init%28avaudionode_%29-4u514.md): Initializes an audio player for playing the specified AVFoundation audio node.

### Working with Audio Sources

- [audioSource](scnaudioplayer/audiosource.md): The source of audio played by this player.
- [audioNode](scnaudioplayer/audionode.md): The audio node SceneKit uses for mixing audio from this player.

### Responding to Playback

- [willStartPlayback](scnaudioplayer/willstartplayback.md): A block called by SceneKit when playback of the player’s audio source is about to begin.
- [didFinishPlayback](scnaudioplayer/didfinishplayback.md): A block called by SceneKit when playback of the player’s audio source has completed.

### Initializers

- [init(AVAudioNode:)](scnaudioplayer/init%28avaudionode_%29-1xsj6.md)
- [init(AVAudioNode:)](scnaudioplayer/init%28avaudionode_%29-6dktc.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Audio

- [SCNAudioSource](scnaudiosource.md): A simple, reusable audio source—music or sound effects loaded from a file—for use in positional audio playback.

# SCNAudioPlayer (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A controller for playback of a positional audio source in a SceneKit scene.

## Declaration

```objectivec
@interface SCNAudioPlayer : NSObject
```

<a id="overview"></a>

## Overview

An [SCNAudioPlayer](scnaudioplayer.md) object controls playback of a positional audio source in a SceneKit scene. To use positional audio, first create a reusable [SCNAudioSource](scnaudiosource.md) or [AVAudioNode](../avfaudio/avaudionode.md) object to provide an audio stream. Then, create an audio player to control the playback of that audio source. Finally, attach the audio player to an [SCNNode](scnnode.md) object for spatialized 3D audio playback based on the position of that node relative to the scene’s [audioListener](scnscenerenderer/audiolistener.md) node.

## Topics

### Creating an Audio Player

- [initWithSource:](scnaudioplayer/init%28source_%29.md): Initializes an audio player for playing the specified simple audio source.
- [initWithAVAudioNode:](scnaudioplayer/init%28avaudionode_%29-4u514.md): Initializes an audio player for playing the specified AVFoundation audio node.
- [audioPlayerWithSource:](scnaudioplayer/audioplayerwithsource_.md): Deprecated. Returns an audio player (creating one if necessary) to play a simple audio source.
- [audioPlayerWithAVAudioNode:](scnaudioplayer/audioplayerwithavaudionode_.md): Deprecated. Returns an audio player (creating one if necessary) to play an audio node.

### Working with Audio Sources

- [audioSource](scnaudioplayer/audiosource.md): The source of audio played by this player.
- [audioNode](scnaudioplayer/audionode.md): The audio node SceneKit uses for mixing audio from this player.

### Responding to Playback

- [willStartPlayback](scnaudioplayer/willstartplayback.md): A block called by SceneKit when playback of the player’s audio source is about to begin.
- [didFinishPlayback](scnaudioplayer/didfinishplayback.md): A block called by SceneKit when playback of the player’s audio source has completed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Audio

- [SCNAudioSource](scnaudiosource.md): A simple, reusable audio source—music or sound effects loaded from a file—for use in positional audio playback.
