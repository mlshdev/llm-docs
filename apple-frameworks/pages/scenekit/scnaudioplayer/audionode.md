> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudioplayer/audionode](https://developer.apple.com/documentation/scenekit/scnaudioplayer/audionode)

# audioNode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The audio node SceneKit uses for mixing audio from this player.

## Declaration

```swift
var audioNode: AVAudioNode? { get }
```

<a id="Discussion"></a>

## Discussion

SceneKit uses this [AVAudioNode](../../avfaudio/avaudionode.md) object to perform 3D positional mixing during playback. Use this object to vary parameters such as volume and reverb in real time during playback. To set default values for those parameters, use the [audioSource](audiosource.md) property.

## See Also

### Working with Audio Sources

- [audioSource](audiosource.md): The source of audio played by this player.

# audioNode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio node SceneKit uses for mixing audio from this player.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAudioNode * audioNode;
```

<a id="Discussion"></a>

## Discussion

SceneKit uses this [AVAudioNode](../../avfaudio/avaudionode.md) object to perform 3D positional mixing during playback. Use this object to vary parameters such as volume and reverb in real time during playback. To set default values for those parameters, use the [audioSource](audiosource.md) property.

## See Also

### Working with Audio Sources

- [audioSource](audiosource.md): The source of audio played by this player.
