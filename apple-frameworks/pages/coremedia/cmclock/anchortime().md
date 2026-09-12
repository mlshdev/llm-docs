> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclock/anchortime()](https://developer.apple.com/documentation/coremedia/cmclock/anchortime())

# anchorTime()

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the current time from a clock and the matching time from the clock’s reference clock.

## Declaration

```swift
func anchorTime() throws -> (anchorTime: CMTime, referenceTime: CMTime)
```

## See Also

### Getting Time and Devices

- [audioDevice()](audiodevice%28%29.md): Returns the audio device the clock tracks.
- [setAudioDeviceID(\_:)](setaudiodeviceid%28__%29.md): Sets the audio device by using the device identifier.
- [setAudioDeviceUID(\_:)](setaudiodeviceuid%28__%29.md): Sets the audio device by using the unique device identifier.
