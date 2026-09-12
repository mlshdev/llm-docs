> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/playbackdeviceidentifier-swift.property](https://developer.apple.com/documentation/appkit/nssound/playbackdeviceidentifier-swift.property)

# playbackDeviceIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Identifies the sound’s output device

## Declaration

```swift
var playbackDeviceIdentifier: NSSound.PlaybackDeviceIdentifier? { get set }
```

## See Also

### Configuring Sounds

- [name](name-swift.property.md): The name assigned to the sound.
- [NSSound.Name](name-swift.typealias.md)
- [setName(\_:)](setname%28__%29.md)
- [volume](volume.md): The volume of the sound.
- [currentTime](currenttime.md): The sound’s playback progress, in seconds.
- [loops](loops.md): A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.
- [NSSound.PlaybackDeviceIdentifier](playbackdeviceidentifier-swift.typealias.md)

# playbackDeviceIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Identifies the sound’s output device

## Declaration

```objectivec
@property (copy, nullable) NSSoundPlaybackDeviceIdentifier playbackDeviceIdentifier;
```

## See Also

### Configuring Sounds

- [name](name-swift.property.md): The name assigned to the sound.
- [NSSoundName](name-swift.typealias.md)
- [setName:](setname%28__%29.md)
- [volume](volume.md): The volume of the sound.
- [currentTime](currenttime.md): The sound’s playback progress, in seconds.
- [loops](loops.md): A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.
- [NSSoundPlaybackDeviceIdentifier](playbackdeviceidentifier-swift.typealias.md)
