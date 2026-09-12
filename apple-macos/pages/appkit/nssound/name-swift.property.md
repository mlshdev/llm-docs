> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/name-swift.property](https://developer.apple.com/documentation/appkit/nssound/name-swift.property)

# name (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name assigned to the sound.

## Declaration

```swift
var name: NSSound.Name? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when no name has been assigned.

## See Also

### Configuring Sounds

- [NSSound.Name](name-swift.typealias.md)
- [setName(\_:)](setname%28__%29.md)
- [volume](volume.md): The volume of the sound.
- [currentTime](currenttime.md): The sound’s playback progress, in seconds.
- [loops](loops.md): A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.
- [playbackDeviceIdentifier](playbackdeviceidentifier-swift.property.md): Identifies the sound’s output device
- [NSSound.PlaybackDeviceIdentifier](playbackdeviceidentifier-swift.typealias.md)

# name (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name assigned to the sound.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSSoundName name;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when no name has been assigned.

## See Also

### Configuring Sounds

- [NSSoundName](name-swift.typealias.md)
- [setName:](setname%28__%29.md)
- [volume](volume.md): The volume of the sound.
- [currentTime](currenttime.md): The sound’s playback progress, in seconds.
- [loops](loops.md): A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.
- [playbackDeviceIdentifier](playbackdeviceidentifier-swift.property.md): Identifies the sound’s output device
- [NSSoundPlaybackDeviceIdentifier](playbackdeviceidentifier-swift.typealias.md)
