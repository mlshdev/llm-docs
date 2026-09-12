> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmaudiodeviceclocksetaudiodeviceid(_:deviceid:)](https://developer.apple.com/documentation/coremedia/cmaudiodeviceclocksetaudiodeviceid(_:deviceid:))

# CMAudioDeviceClockSetAudioDeviceID(\_:deviceID:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** macOS 10.8+

Changes the Core Audio device the clock is tracking by specifying a new device identifier.

## Declaration

```swift
func CMAudioDeviceClockSetAudioDeviceID(_ clock: CMClock, deviceID: AudioDeviceID) -> OSStatus
```

## Parameters

- `clock`: The clock to change.
- `deviceID`: The new Core Audio device to track.

## See Also

### Configuring Audio Clocks

- [CMAudioDeviceClockGetAudioDevice(\_:deviceUIDOut:deviceIDOut:trackingDefaultDeviceOut:)](cmaudiodeviceclockgetaudiodevice%28__deviceuidout_deviceidout_trackingdefaultdeviceout_%29.md): Returns the Core Audio device the clock is tracking.
- [CMAudioDeviceClockSetAudioDeviceUID(\_:deviceUID:)](cmaudiodeviceclocksetaudiodeviceuid%28__deviceuid_%29.md): Changes the Core Audio device the clock is tracking by specifying a new device unique identifier.

# CMAudioDeviceClockSetAudioDeviceID (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** macOS 10.8+

Changes the Core Audio device the clock is tracking by specifying a new device identifier.

## Declaration

```objectivec
extern OSStatus CMAudioDeviceClockSetAudioDeviceID(CMClockRef clock, AudioDeviceID deviceID);
```

## Parameters

- `clock`: The clock to change.
- `deviceID`: The new Core Audio device to track.

## See Also

### Configuring Audio Clocks

- [CMAudioDeviceClockGetAudioDevice](cmaudiodeviceclockgetaudiodevice%28__deviceuidout_deviceidout_trackingdefaultdeviceout_%29.md): Returns the Core Audio device the clock is tracking.
- [CMAudioDeviceClockSetAudioDeviceUID](cmaudiodeviceclocksetaudiodeviceuid%28__deviceuid_%29.md): Changes the Core Audio device the clock is tracking by specifying a new device unique identifier.
