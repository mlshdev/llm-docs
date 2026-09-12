> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudioplayer/audiosource](https://developer.apple.com/documentation/scenekit/scnaudioplayer/audiosource)

# audioSource (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The source of audio played by this player.

## Declaration

```swift
var audioSource: SCNAudioSource? { get }
```

<a id="Discussion"></a>

## Discussion

An [SCNAudioSource](../scnaudiosource.md) object represents a distinct source of audio—for example, a sound file—that can be reused and shared by many player objects. Use a player’s audio source to configure the default values for playback parameters such as volume and reverb. To vary those parameters in real time during playback, use the [audioNode](audionode.md) property to work with the underlying [AVAudioNode](../../avfaudio/avaudionode.md) object.

If the player was created with the [audioPlayerWithAVAudioNode:](audioplayerwithavaudionode_.md) method, this property’s value is `nil`.

## See Also

### Working with Audio Sources

- [audioNode](audionode.md): The audio node SceneKit uses for mixing audio from this player.

# audioSource (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The source of audio played by this player.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SCNAudioSource * audioSource;
```

<a id="Discussion"></a>

## Discussion

An [SCNAudioSource](../scnaudiosource.md) object represents a distinct source of audio—for example, a sound file—that can be reused and shared by many player objects. Use a player’s audio source to configure the default values for playback parameters such as volume and reverb. To vary those parameters in real time during playback, use the [audioNode](audionode.md) property to work with the underlying [AVAudioNode](../../avfaudio/avaudionode.md) object.

If the player was created with the [audioPlayerWithAVAudioNode:](audioplayerwithavaudionode_.md) method, this property’s value is `nil`.

## See Also

### Working with Audio Sources

- [audioNode](audionode.md): The audio node SceneKit uses for mixing audio from this player.
