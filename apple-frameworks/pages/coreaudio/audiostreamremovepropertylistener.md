> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiostreamremovepropertylistener](https://developer.apple.com/documentation/coreaudio/audiostreamremovepropertylistener)

# AudioStreamRemovePropertyListener

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.1+ (deprecated in 10.6)

## Declaration

```objectivec
extern OSStatus AudioStreamRemovePropertyListener(AudioStreamID inStream, UInt32 inChannel, AudioDevicePropertyID inPropertyID, AudioStreamPropertyListenerProc inProc);
```

## Parameters

- `inStream`: The AudioStream with whom to unregister the listener.
- `inChannel`: The channel of the property to unregister from.
- `inPropertyID`: The AudioDevicePropertyID of the property to stop listening to.
- `inProc`: AudioStreamPropertyListenerProc to unregister.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Unregisters the given AudioStreamPropertyListenerProc from receiving notifications when the given property changes.

Note that the same functionality is provided by AudioObjectRemovePropertyListener in conjunction with AudioObjectPropertyListenerProc.

## See Also

### Deprecated Functions

- [AudioDeviceAddIOProc](audiodeviceaddioproc.md): Deprecated.
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
