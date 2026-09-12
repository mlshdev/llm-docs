> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmaudiodeviceclockgetaudiodevice(_:deviceuidout:deviceidout:trackingdefaultdeviceout:)](https://developer.apple.com/documentation/coremedia/cmaudiodeviceclockgetaudiodevice(_:deviceuidout:deviceidout:trackingdefaultdeviceout:))

# CMAudioDeviceClockGetAudioDevice(\_:deviceUIDOut:deviceIDOut:trackingDefaultDeviceOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** macOS 10.8+

Returns the Core Audio device the clock is tracking.

## Declaration

```swift
func CMAudioDeviceClockGetAudioDevice(_ clock: CMClock, deviceUIDOut: AutoreleasingUnsafeMutablePointer<CFString?>?, deviceIDOut: UnsafeMutablePointer<AudioDeviceID>?, trackingDefaultDeviceOut: UnsafeMutablePointer<DarwinBoolean>?) -> OSStatus
```

## Parameters

- `clock`: The clock from which to retrieve its audio device.
- `deviceUIDOut`: An optional unique device identifier. If you specify a non-`NULL` value, this function returns the `deviceUID` and its associated ID, and sets `trackingDefaultDeviceOut` to `false`.
- `deviceIDOut`: An optional device identifier. If you specify a non-`NULL` value, this function returns a `NULL` UID and the device ID, and sets `trackingDefaultDeviceOut` to `false`.
- `trackingDefaultDeviceOut`: On return, a Boolean value that indicates whether the audio clock tracks the default audio device.

<a id="return-value"></a>

## Return Value

A value that indicates the completion status.

## See Also

### Configuring Audio Clocks

- [CMAudioDeviceClockSetAudioDeviceUID(\_:deviceUID:)](cmaudiodeviceclocksetaudiodeviceuid%28__deviceuid_%29.md): Changes the Core Audio device the clock is tracking by specifying a new device unique identifier.
- [CMAudioDeviceClockSetAudioDeviceID(\_:deviceID:)](cmaudiodeviceclocksetaudiodeviceid%28__deviceid_%29.md): Changes the Core Audio device the clock is tracking by specifying a new device identifier.

# CMAudioDeviceClockGetAudioDevice (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** macOS 10.8+

Returns the Core Audio device the clock is tracking.

## Declaration

```objectivec
extern OSStatus CMAudioDeviceClockGetAudioDevice(CMClockRef clock, CFStringRef*deviceUIDOut, AudioDeviceID *deviceIDOut, Boolean *trackingDefaultDeviceOut);
```

## Parameters

- `clock`: The clock from which to retrieve its audio device.
- `deviceUIDOut`: An optional unique device identifier. If you specify a non-`NULL` value, this function returns the `deviceUID` and its associated ID, and sets `trackingDefaultDeviceOut` to `false`.
- `deviceIDOut`: An optional device identifier. If you specify a non-`NULL` value, this function returns a `NULL` UID and the device ID, and sets `trackingDefaultDeviceOut` to `false`.
- `trackingDefaultDeviceOut`: On return, a Boolean value that indicates whether the audio clock tracks the default audio device.

<a id="return-value"></a>

## Return Value

A value that indicates the completion status.

## See Also

### Configuring Audio Clocks

- [CMAudioDeviceClockSetAudioDeviceUID](cmaudiodeviceclocksetaudiodeviceuid%28__deviceuid_%29.md): Changes the Core Audio device the clock is tracking by specifying a new device unique identifier.
- [CMAudioDeviceClockSetAudioDeviceID](cmaudiodeviceclocksetaudiodeviceid%28__deviceid_%29.md): Changes the Core Audio device the clock is tracking by specifying a new device identifier.
