> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/currenttime](https://developer.apple.com/documentation/appkit/nssound/currenttime)

# currentTime (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The sound’s playback progress, in seconds.

## Declaration

```swift
var currentTime: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

Sounds start with `currentTime == 0` and end with `currentTime == ([<sound> duration] - 1)`.

This property is not archived, copied, or stored on the pasteboard.

## See Also

### Related Documentation

- [duration](duration.md): The duration of the sound, in seconds.

### Configuring Sounds

- [name](name-swift.property.md): The name assigned to the sound.
- [NSSound.Name](name-swift.typealias.md)
- [setName(\_:)](setname%28__%29.md)
- [volume](volume.md): The volume of the sound.
- [loops](loops.md): A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.
- [playbackDeviceIdentifier](playbackdeviceidentifier-swift.property.md): Identifies the sound’s output device
- [NSSound.PlaybackDeviceIdentifier](playbackdeviceidentifier-swift.typealias.md)

# currentTime (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The sound’s playback progress, in seconds.

## Declaration

```objectivec
@property NSTimeInterval currentTime;
```

<a id="Discussion"></a>

## Discussion

Sounds start with `currentTime == 0` and end with `currentTime == ([<sound> duration] - 1)`.

This property is not archived, copied, or stored on the pasteboard.

## See Also

### Related Documentation

- [duration](duration.md): The duration of the sound, in seconds.

### Configuring Sounds

- [name](name-swift.property.md): The name assigned to the sound.
- [NSSoundName](name-swift.typealias.md)
- [setName:](setname%28__%29.md)
- [volume](volume.md): The volume of the sound.
- [loops](loops.md): A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.
- [playbackDeviceIdentifier](playbackdeviceidentifier-swift.property.md): Identifies the sound’s output device
- [NSSoundPlaybackDeviceIdentifier](playbackdeviceidentifier-swift.typealias.md)
