> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodeviceaddioproc](https://developer.apple.com/documentation/coreaudio/audiodeviceaddioproc)

# AudioDeviceAddIOProc

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.5)

## Declaration

```objectivec
extern OSStatus AudioDeviceAddIOProc(AudioDeviceID inDevice, AudioDeviceIOProc inProc, void *inClientData);
```

## Parameters

- `inDevice`: The AudioDevice to register the IOProc with.
- `inProc`: The AudioDeviceIOProc to register.
- `inClientData`: A pointer to client data that is passed back to the IOProc when it is called.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Registers the given AudioDeviceIOProc with the AudioDevice.

A client may have multiple IOProcs for a given device, but the device is free to only accept as many as it can handle. Note that it is not recommended for clients to have more than a single IOProc registered at a time as this can be wasteful of system resources. Rather, it is recommended that the client do any necessary mixing itself so that only one IOProc is necessary. This routine has been deprecated in favor of AudioDeviceCreateIOProcID().

## See Also

### Deprecated Functions

- [AudioDeviceAddPropertyListener](audiodeviceaddpropertylistener.md): Deprecated.
- [AudioDeviceGetProperty](audiodevicegetproperty.md): Deprecated.
- [AudioDeviceGetPropertyInfo](audiodevicegetpropertyinfo.md): Deprecated.
- [AudioDeviceRead](audiodeviceread.md): Deprecated.
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
