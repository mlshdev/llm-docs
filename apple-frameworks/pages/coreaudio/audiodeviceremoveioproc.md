> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodeviceremoveioproc](https://developer.apple.com/documentation/coreaudio/audiodeviceremoveioproc)

# AudioDeviceRemoveIOProc

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.5)

## Declaration

```objectivec
extern OSStatus AudioDeviceRemoveIOProc(AudioDeviceID inDevice, AudioDeviceIOProc inProc);
```

## Parameters

- `inDevice`: The AudioDevice to unregister the IOProc from.
- `inProc`: The AudioDeviceIOProc to unregister.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Unregisters the given AudioDeviceIOProc from the AudioDevice. This routine has been deprecated in favor of AudioDeviceDestroyIOProcID().

## See Also

### Deprecated Functions

- [AudioDeviceAddIOProc](audiodeviceaddioproc.md): Deprecated.
- [AudioDeviceAddPropertyListener](audiodeviceaddpropertylistener.md): Deprecated.
- [AudioDeviceGetProperty](audiodevicegetproperty.md): Deprecated.
- [AudioDeviceGetPropertyInfo](audiodevicegetpropertyinfo.md): Deprecated.
- [AudioDeviceRead](audiodeviceread.md): Deprecated.
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
