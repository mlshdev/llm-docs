> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmaudiodeviceclocksetaudiodeviceuid(_:deviceuid:)](https://developer.apple.com/documentation/coremedia/cmaudiodeviceclocksetaudiodeviceuid(_:deviceuid:))

# CMAudioDeviceClockSetAudioDeviceUID(\_:deviceUID:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** macOS 10.8+

Changes the Core Audio device the clock is tracking by specifying a new device unique identifier.

## Declaration

```swift
func CMAudioDeviceClockSetAudioDeviceUID(_ clock: CMClock, deviceUID: CFString?) -> OSStatus
```

## Parameters

- `clock`: The clock to change.
- `deviceUID`: The UID of the Core Audio device to track.

<a id="Discussion"></a>

## Discussion

Pass `NULL` for `deviceUID` to make the clock track the default device.

## See Also

### Configuring Audio Clocks

- [CMAudioDeviceClockGetAudioDevice(\_:deviceUIDOut:deviceIDOut:trackingDefaultDeviceOut:)](cmaudiodeviceclockgetaudiodevice%28__deviceuidout_deviceidout_trackingdefaultdeviceout_%29.md): Returns the Core Audio device the clock is tracking.
- [CMAudioDeviceClockSetAudioDeviceID(\_:deviceID:)](cmaudiodeviceclocksetaudiodeviceid%28__deviceid_%29.md): Changes the Core Audio device the clock is tracking by specifying a new device identifier.

# CMAudioDeviceClockSetAudioDeviceUID (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** macOS 10.8+

Changes the Core Audio device the clock is tracking by specifying a new device unique identifier.

## Declaration

```objectivec
extern OSStatus CMAudioDeviceClockSetAudioDeviceUID(CMClockRef clock, CFStringRef deviceUID);
```

## Parameters

- `clock`: The clock to change.
- `deviceUID`: The UID of the Core Audio device to track.

<a id="Discussion"></a>

## Discussion

Pass `NULL` for `deviceUID` to make the clock track the default device.

## See Also

### Configuring Audio Clocks

- [CMAudioDeviceClockGetAudioDevice](cmaudiodeviceclockgetaudiodevice%28__deviceuidout_deviceidout_trackingdefaultdeviceout_%29.md): Returns the Core Audio device the clock is tracking.
- [CMAudioDeviceClockSetAudioDeviceID](cmaudiodeviceclocksetaudiodeviceid%28__deviceid_%29.md): Changes the Core Audio device the clock is tracking by specifying a new device identifier.
