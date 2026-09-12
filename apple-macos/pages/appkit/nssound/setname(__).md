> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/setname(_:)](https://developer.apple.com/documentation/appkit/nssound/setname(_:))

# setName(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```swift
func setName(_ string: NSSound.Name?) -> Bool
```

## See Also

### Configuring Sounds

- [name](name-swift.property.md): The name assigned to the sound.
- [NSSound.Name](name-swift.typealias.md)
- [volume](volume.md): The volume of the sound.
- [currentTime](currenttime.md): The sound’s playback progress, in seconds.
- [loops](loops.md): A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.
- [playbackDeviceIdentifier](playbackdeviceidentifier-swift.property.md): Identifies the sound’s output device
- [NSSound.PlaybackDeviceIdentifier](playbackdeviceidentifier-swift.typealias.md)

# setName: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```objectivec
- (BOOL) setName:(NSSoundName) string;
```

## See Also

### Configuring Sounds

- [name](name-swift.property.md): The name assigned to the sound.
- [NSSoundName](name-swift.typealias.md)
- [volume](volume.md): The volume of the sound.
- [currentTime](currenttime.md): The sound’s playback progress, in seconds.
- [loops](loops.md): A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.
- [playbackDeviceIdentifier](playbackdeviceidentifier-swift.property.md): Identifies the sound’s output device
- [NSSoundPlaybackDeviceIdentifier](playbackdeviceidentifier-swift.typealias.md)
