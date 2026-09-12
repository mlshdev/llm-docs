> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclock/audiodevice()](https://developer.apple.com/documentation/coremedia/cmclock/audiodevice())

# audioDevice()

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns the audio device the clock tracks.

## Declaration

```swift
func audioDevice() throws -> (deviceUID: String?, deviceID: AudioDeviceID, trackingDefaultDevice: Bool)
```

## See Also

### Getting Time and Devices

- [anchorTime()](anchortime%28%29.md): Returns the current time from a clock and the matching time from the clock’s reference clock.
- [setAudioDeviceID(\_:)](setaudiodeviceid%28__%29.md): Sets the audio device by using the device identifier.
- [setAudioDeviceUID(\_:)](setaudiodeviceuid%28__%29.md): Sets the audio device by using the unique device identifier.
