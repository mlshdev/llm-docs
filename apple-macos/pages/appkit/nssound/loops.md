> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/loops](https://developer.apple.com/documentation/appkit/nssound/loops)

# loops (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.

## Declaration

```swift
var loops: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the sounds restarts playback when it finishes and does not send [sound(\_:didFinishPlaying:)](../nssounddelegate/sound%28__didfinishplaying_%29.md) to its delegate when it reaches the end of its content and restarts playback. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Sounds

- [name](name-swift.property.md): The name assigned to the sound.
- [NSSound.Name](name-swift.typealias.md)
- [setName(\_:)](setname%28__%29.md)
- [volume](volume.md): The volume of the sound.
- [currentTime](currenttime.md): The sound’s playback progress, in seconds.
- [playbackDeviceIdentifier](playbackdeviceidentifier-swift.property.md): Identifies the sound’s output device
- [NSSound.PlaybackDeviceIdentifier](playbackdeviceidentifier-swift.typealias.md)

# loops (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.

## Declaration

```objectivec
@property BOOL loops;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the sounds restarts playback when it finishes and does not send [sound:didFinishPlaying:](../nssounddelegate/sound%28__didfinishplaying_%29.md) to its delegate when it reaches the end of its content and restarts playback. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Sounds

- [name](name-swift.property.md): The name assigned to the sound.
- [NSSoundName](name-swift.typealias.md)
- [setName:](setname%28__%29.md)
- [volume](volume.md): The volume of the sound.
- [currentTime](currenttime.md): The sound’s playback progress, in seconds.
- [playbackDeviceIdentifier](playbackdeviceidentifier-swift.property.md): Identifies the sound’s output device
- [NSSoundPlaybackDeviceIdentifier](playbackdeviceidentifier-swift.typealias.md)
