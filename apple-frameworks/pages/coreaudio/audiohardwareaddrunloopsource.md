> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareaddrunloopsource](https://developer.apple.com/documentation/coreaudio/audiohardwareaddrunloopsource)

# AudioHardwareAddRunLoopSource

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.7)

## Declaration

```objectivec
extern OSStatus AudioHardwareAddRunLoopSource(CFRunLoopSourceRef inRunLoopSource);
```

## Parameters

- `inRunLoopSource`: The CFRunLoopSource to add.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Add the given CFRunLoopSource to the the HAL’s notification CFRunLoop.

The CFRunLoop the HAL uses for notifications is specified by kAudioHardwarePropertyRunLoop. If kAudioHardwarePropertyRunLoop changes, CFRunLoopSources added with this function will automatically be transferred to the new CFRunLoop. Usage of the HAL’s notification run loop is deprecated. Please use libdispatch instead.

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
- [AudioHardwareGetProperty](audiohardwaregetproperty.md): Deprecated.
- [AudioHardwareGetPropertyInfo](audiohardwaregetpropertyinfo.md): Deprecated.
- [AudioHardwareRemovePropertyListener](audiohardwareremovepropertylistener.md): Deprecated.
- [AudioHardwareRemoveRunLoopSource](audiohardwareremoverunloopsource.md): Deprecated.
- [AudioHardwareSetProperty](audiohardwaresetproperty.md): Deprecated.
- [AudioStreamAddPropertyListener](audiostreamaddpropertylistener.md): Deprecated.
