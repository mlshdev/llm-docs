> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodevicesetproperty](https://developer.apple.com/documentation/coreaudio/audiodevicesetproperty)

# AudioDeviceSetProperty

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
extern OSStatus AudioDeviceSetProperty(AudioDeviceID inDevice, const AudioTimeStamp *inWhen, UInt32 inChannel, Boolean isInput, AudioDevicePropertyID inPropertyID, UInt32 inPropertyDataSize, const void *inPropertyData);
```

## Parameters

- `inDevice`: The AudioDevice to change.
- `inWhen`: A pointer to an AudioTimeStamp that says when to change the property’s value relative to the device’s time base. NULL means execute the change immediately.
- `inChannel`: The channel of the property to change where 0 is the main channel.
- `isInput`: Which section of the AudioDevice to change.
- `inPropertyID`: The AudioDevicePropertyID of the property to change.
- `inPropertyDataSize`: A UInt32 indicating the size of the buffer pointed to by inData.
- `inPropertyData`: The buffer containing the data to be used to change the property’s value.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Tells the AudioDevice object to change the value of the given property using the provided data.

Note that the value of the property should not be considered changed until the HAL has called the listeners as many properties values are changed asynchronously. Also note that the same functionality is provided by the function AudioObjectSetPropertyData().

## See Also

### Deprecated Functions

- [AudioDeviceAddIOProc](audiodeviceaddioproc.md): Deprecated.
- [AudioDeviceAddPropertyListener](audiodeviceaddpropertylistener.md): Deprecated.
- [AudioDeviceGetProperty](audiodevicegetproperty.md): Deprecated.
- [AudioDeviceGetPropertyInfo](audiodevicegetpropertyinfo.md): Deprecated.
- [AudioDeviceRead](audiodeviceread.md): Deprecated.
- [AudioDeviceRemoveIOProc](audiodeviceremoveioproc.md): Deprecated.
- [AudioDeviceRemovePropertyListener](audiodeviceremovepropertylistener.md): Deprecated.
- [AudioHardwareAddPropertyListener](audiohardwareaddpropertylistener.md): Deprecated.
- [AudioHardwareAddRunLoopSource](audiohardwareaddrunloopsource.md): Deprecated.
- [AudioHardwareGetProperty](audiohardwaregetproperty.md): Deprecated.
- [AudioHardwareGetPropertyInfo](audiohardwaregetpropertyinfo.md): Deprecated.
- [AudioHardwareRemovePropertyListener](audiohardwareremovepropertylistener.md): Deprecated.
- [AudioHardwareRemoveRunLoopSource](audiohardwareremoverunloopsource.md): Deprecated.
- [AudioHardwareSetProperty](audiohardwaresetproperty.md): Deprecated.
- [AudioStreamAddPropertyListener](audiostreamaddpropertylistener.md): Deprecated.
