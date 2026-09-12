> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclock/setaudiodeviceuid(_:)](https://developer.apple.com/documentation/coremedia/cmclock/setaudiodeviceuid(_:))

# setAudioDeviceUID(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Sets the audio device by using the unique device identifier.

## Declaration

```swift
func setAudioDeviceUID(_ deviceUID: String?) throws
```

## Parameters

- `deviceUID`: The device identifier.

## See Also

### Getting Time and Devices

- [anchorTime()](anchortime%28%29.md): Returns the current time from a clock and the matching time from the clock’s reference clock.
- [audioDevice()](audiodevice%28%29.md): Returns the audio device the clock tracks.
- [setAudioDeviceID(\_:)](setaudiodeviceid%28__%29.md): Sets the audio device by using the device identifier.
