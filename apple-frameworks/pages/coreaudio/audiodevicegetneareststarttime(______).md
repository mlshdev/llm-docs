> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodevicegetneareststarttime(_:_:_:)](https://developer.apple.com/documentation/coreaudio/audiodevicegetneareststarttime(_:_:_:))

# AudioDeviceGetNearestStartTime(\_:\_:\_:) (Swift)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+

## Declaration

```swift
func AudioDeviceGetNearestStartTime(_ inDevice: AudioObjectID, _ ioRequestedStartTime: UnsafeMutablePointer<AudioTimeStamp>, _ inFlags: UInt32) -> OSStatus
```

## Parameters

- `inDevice`: The AudioDevice to query.
- `ioRequestedStartTime`: A pointer to an AudioTimeStamp that, on entry, is the requested start time. On exit, it will have the a time equal to or later than the requested time, as dictated by the device’s constraints.
- `inFlags`: A UInt32 containing flags that modify how this function behaves.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure. kAudioHardwareNotRunningError will be returned if the AudioDevice isn’t running. kAudioHardwareUnsupportedOperationError will be returned if the AudioDevice does not support starting at a specific time.

<a id="discussion"></a>

## Discussion

Query an AudioDevice to get a time equal to or later than the given time that is the best time to start IO.

The time that is returned is dictated by the constraints of the device and the system. For instance, the driver of a device that provides both audio and video data may only allow start times that coincide with the edge of a video frame. Also, if the device already has one or more active IOProcs, the start time will be shifted to the beginning of the next IO cycle so as not to cause discontinuities in the existing IOProcs. Another reason the start time may shift is to allow for aligning the buffer accesses in an optimal fashion. Note that the device must be running to use this function.

## See Also

### Functions

- [AudioConvertHostTimeToNanos(\_:)](audioconverthosttimetonanos%28__%29.md)
- [AudioConvertNanosToHostTime(\_:)](audioconvertnanostohosttime%28__%29.md)
- [AudioDeviceCreateIOProcID(\_:\_:\_:\_:)](audiodevicecreateioprocid%28________%29.md)
- [AudioDeviceCreateIOProcIDWithBlock(\_:\_:\_:\_:)](audiodevicecreateioprocidwithblock%28________%29.md)
- [AudioDeviceDestroyIOProcID(\_:\_:)](audiodevicedestroyioprocid%28____%29.md)
- [AudioDeviceGetCurrentTime(\_:\_:)](audiodevicegetcurrenttime%28____%29.md)
- [AudioDeviceStart(\_:\_:)](audiodevicestart%28____%29.md)
- [AudioDeviceStartAtTime(\_:\_:\_:\_:)](audiodevicestartattime%28________%29.md)
- [AudioDeviceStop(\_:\_:)](audiodevicestop%28____%29.md)
- [AudioDeviceTranslateTime(\_:\_:\_:)](audiodevicetranslatetime%28______%29.md)
- [AudioGetCurrentHostTime()](audiogetcurrenthosttime%28%29.md)
- [AudioGetHostClockFrequency()](audiogethostclockfrequency%28%29.md)
- [AudioGetHostClockMinimumTimeDelta()](audiogethostclockminimumtimedelta%28%29.md)
- [AudioHardwareCreateAggregateDevice(\_:\_:)](audiohardwarecreateaggregatedevice%28____%29.md)
- [AudioHardwareDestroyAggregateDevice(\_:)](audiohardwaredestroyaggregatedevice%28__%29.md)

# AudioDeviceGetNearestStartTime (Objective-C)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

## Declaration

```objectivec
extern OSStatus AudioDeviceGetNearestStartTime(AudioObjectID inDevice, AudioTimeStamp *ioRequestedStartTime, UInt32 inFlags);
```

## Parameters

- `inDevice`: The AudioDevice to query.
- `ioRequestedStartTime`: A pointer to an AudioTimeStamp that, on entry, is the requested start time. On exit, it will have the a time equal to or later than the requested time, as dictated by the device’s constraints.
- `inFlags`: A UInt32 containing flags that modify how this function behaves.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure. kAudioHardwareNotRunningError will be returned if the AudioDevice isn’t running. kAudioHardwareUnsupportedOperationError will be returned if the AudioDevice does not support starting at a specific time.

<a id="discussion"></a>

## Discussion

Query an AudioDevice to get a time equal to or later than the given time that is the best time to start IO.

The time that is returned is dictated by the constraints of the device and the system. For instance, the driver of a device that provides both audio and video data may only allow start times that coincide with the edge of a video frame. Also, if the device already has one or more active IOProcs, the start time will be shifted to the beginning of the next IO cycle so as not to cause discontinuities in the existing IOProcs. Another reason the start time may shift is to allow for aligning the buffer accesses in an optimal fashion. Note that the device must be running to use this function.

## See Also

### Functions

- [AudioConvertHostTimeToNanos](audioconverthosttimetonanos%28__%29.md)
- [AudioConvertNanosToHostTime](audioconvertnanostohosttime%28__%29.md)
- [AudioDeviceCreateIOProcID](audiodevicecreateioprocid%28________%29.md)
- [AudioDeviceCreateIOProcIDWithBlock](audiodevicecreateioprocidwithblock%28________%29.md)
- [AudioDeviceDestroyIOProcID](audiodevicedestroyioprocid%28____%29.md)
- [AudioDeviceGetCurrentTime](audiodevicegetcurrenttime%28____%29.md)
- [AudioDeviceStart](audiodevicestart%28____%29.md)
- [AudioDeviceStartAtTime](audiodevicestartattime%28________%29.md)
- [AudioDeviceStop](audiodevicestop%28____%29.md)
- [AudioDeviceTranslateTime](audiodevicetranslatetime%28______%29.md)
- [AudioDriverPlugInClose](audiodriverpluginclose.md)
- [AudioDriverPlugInDeviceGetProperty](audiodriverplugindevicegetproperty.md)
- [AudioDriverPlugInDeviceGetPropertyInfo](audiodriverplugindevicegetpropertyinfo.md)
- [AudioDriverPlugInDeviceSetProperty](audiodriverplugindevicesetproperty.md)
- [AudioDriverPlugInOpen](audiodriverpluginopen.md)
