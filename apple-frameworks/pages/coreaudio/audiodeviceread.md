> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodeviceread](https://developer.apple.com/documentation/coreaudio/audiodeviceread)

# AudioDeviceRead

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.1+ (deprecated in 10.5)

## Declaration

```objectivec
extern OSStatus AudioDeviceRead(AudioDeviceID inDevice, const AudioTimeStamp *inStartTime, AudioBufferList *outData);
```

## Parameters

- `inDevice`: The AudioDevice to read from.
- `inStartTime`: An AudioTimeStamp indicating the time from which to read the data. In general, the valid range of time (in frames) is from the current time minus the maximum IO buffer size to the current time minus the safety offset.
- `outData`: An AudioBufferList that must be the same size and shape as that returned by kAudioDevicePropertyStreamConfiguration. Further, the AudioBufferList must have been previously registered with the device via kAudioDevicePropertyRegisterBufferList. On exit, the mDataSize fields will be updated with the amount of data read.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure. kAudioHardwareUnsupportedOperationError will be returned if the AudioDevice does not support direct reading.

<a id="discussion"></a>

## Discussion

Read some data from an AudioDevice starting at the given time.

With the advent of aggregate devices, the need for AudioDeviceRead has gone away. Consequently, this function is now deprecated.

## See Also

### Deprecated Functions

- [AudioDeviceAddIOProc](audiodeviceaddioproc.md): Deprecated.
- [AudioDeviceAddPropertyListener](audiodeviceaddpropertylistener.md): Deprecated.
- [AudioDeviceGetProperty](audiodevicegetproperty.md): Deprecated.
- [AudioDeviceGetPropertyInfo](audiodevicegetpropertyinfo.md): Deprecated.
- [AudioDeviceRemoveIOProc](audiodeviceremoveioproc.md): Deprecated.
- [AudioDeviceRemovePropertyListener](audiodeviceremovepropertylistener.md): Deprecated.
- [AudioDeviceSetProperty](audiodevicesetproperty.md): Deprecated.
- [AudioHardwareAddPropertyListener](audiohardwareaddpropertylistener.md): Deprecated.
- [AudioHardwareAddRunLoopSource](audiohardwareaddrunloopsource.md): Deprecated.
- [AudioHardwareGetProperty](audiohardwaregetproperty.md): Deprecated.
- [AudioHardwareGetPropertyInfo](audiohardwaregetpropertyinfo.md): Deprecated.
- [AudioHardwareRemovePropertyListener](audiohardwareremovepropertylistener.md): Deprecated.
- [AudioHardwareRemoveRunLoopSource](audiohardwareremoverunloopsource.md): Deprecated.
- [AudioHardwareSetProperty](audiohardwaresetproperty.md): Deprecated.
- [AudioStreamAddPropertyListener](audiostreamaddpropertylistener.md): Deprecated.
