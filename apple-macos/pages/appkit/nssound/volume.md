> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/volume](https://developer.apple.com/documentation/appkit/nssound/volume)

# volume (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The volume of the sound.

## Declaration

```swift
var volume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The valid range is between `0.0` and `1.0`.

The value of this property does not affect the systemwide volume.

## See Also

### Configuring Sounds

- [name](name-swift.property.md): The name assigned to the sound.
- [NSSound.Name](name-swift.typealias.md)
- [setName(\_:)](setname%28__%29.md)
- [currentTime](currenttime.md): The sound’s playback progress, in seconds.
- [loops](loops.md): A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.
- [playbackDeviceIdentifier](playbackdeviceidentifier-swift.property.md): Identifies the sound’s output device
- [NSSound.PlaybackDeviceIdentifier](playbackdeviceidentifier-swift.typealias.md)

# volume (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The volume of the sound.

## Declaration

```objectivec
@property float volume;
```

<a id="Discussion"></a>

## Discussion

The valid range is between `0.0` and `1.0`.

The value of this property does not affect the systemwide volume.

## See Also

### Configuring Sounds

- [name](name-swift.property.md): The name assigned to the sound.
- [NSSoundName](name-swift.typealias.md)
- [setName:](setname%28__%29.md)
- [currentTime](currenttime.md): The sound’s playback progress, in seconds.
- [loops](loops.md): A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.
- [playbackDeviceIdentifier](playbackdeviceidentifier-swift.property.md): Identifies the sound’s output device
- [NSSoundPlaybackDeviceIdentifier](playbackdeviceidentifier-swift.typealias.md)
