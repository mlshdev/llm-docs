> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredestroyaggregatedevice(_:)](https://developer.apple.com/documentation/coreaudio/audiohardwaredestroyaggregatedevice(_:))

# AudioHardwareDestroyAggregateDevice(\_:) (Swift)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+

## Declaration

```swift
func AudioHardwareDestroyAggregateDevice(_ inDeviceID: AudioObjectID) -> OSStatus
```

## Parameters

- `inDeviceID`: The AudioObjectID of the AudioAggregateDevice to destroy.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

This routine destroys the given AudioAggregateDevice.

The actual destruction of the device is asynchronous and may take place after the call to this routine has returned.

## See Also

### Functions

- [AudioConvertHostTimeToNanos(\_:)](audioconverthosttimetonanos%28__%29.md)
- [AudioConvertNanosToHostTime(\_:)](audioconvertnanostohosttime%28__%29.md)
- [AudioDeviceCreateIOProcID(\_:\_:\_:\_:)](audiodevicecreateioprocid%28________%29.md)
- [AudioDeviceCreateIOProcIDWithBlock(\_:\_:\_:\_:)](audiodevicecreateioprocidwithblock%28________%29.md)
- [AudioDeviceDestroyIOProcID(\_:\_:)](audiodevicedestroyioprocid%28____%29.md)
- [AudioDeviceGetCurrentTime(\_:\_:)](audiodevicegetcurrenttime%28____%29.md)
- [AudioDeviceGetNearestStartTime(\_:\_:\_:)](audiodevicegetneareststarttime%28______%29.md)
- [AudioDeviceStart(\_:\_:)](audiodevicestart%28____%29.md)
- [AudioDeviceStartAtTime(\_:\_:\_:\_:)](audiodevicestartattime%28________%29.md)
- [AudioDeviceStop(\_:\_:)](audiodevicestop%28____%29.md)
- [AudioDeviceTranslateTime(\_:\_:\_:)](audiodevicetranslatetime%28______%29.md)
- [AudioGetCurrentHostTime()](audiogetcurrenthosttime%28%29.md)
- [AudioGetHostClockFrequency()](audiogethostclockfrequency%28%29.md)
- [AudioGetHostClockMinimumTimeDelta()](audiogethostclockminimumtimedelta%28%29.md)
- [AudioHardwareCreateAggregateDevice(\_:\_:)](audiohardwarecreateaggregatedevice%28____%29.md)

# AudioHardwareDestroyAggregateDevice (Objective-C)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.9+

## Declaration

```objectivec
extern OSStatus AudioHardwareDestroyAggregateDevice(AudioObjectID inDeviceID);
```

## Parameters

- `inDeviceID`: The AudioObjectID of the AudioAggregateDevice to destroy.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

This routine destroys the given AudioAggregateDevice.

The actual destruction of the device is asynchronous and may take place after the call to this routine has returned.

## See Also

### Functions

- [AudioConvertHostTimeToNanos](audioconverthosttimetonanos%28__%29.md)
- [AudioConvertNanosToHostTime](audioconvertnanostohosttime%28__%29.md)
- [AudioDeviceCreateIOProcID](audiodevicecreateioprocid%28________%29.md)
- [AudioDeviceCreateIOProcIDWithBlock](audiodevicecreateioprocidwithblock%28________%29.md)
- [AudioDeviceDestroyIOProcID](audiodevicedestroyioprocid%28____%29.md)
- [AudioDeviceGetCurrentTime](audiodevicegetcurrenttime%28____%29.md)
- [AudioDeviceGetNearestStartTime](audiodevicegetneareststarttime%28______%29.md)
- [AudioDeviceStart](audiodevicestart%28____%29.md)
- [AudioDeviceStartAtTime](audiodevicestartattime%28________%29.md)
- [AudioDeviceStop](audiodevicestop%28____%29.md)
- [AudioDeviceTranslateTime](audiodevicetranslatetime%28______%29.md)
- [AudioDriverPlugInClose](audiodriverpluginclose.md)
- [AudioDriverPlugInDeviceGetProperty](audiodriverplugindevicegetproperty.md)
- [AudioDriverPlugInDeviceGetPropertyInfo](audiodriverplugindevicegetpropertyinfo.md)
- [AudioDriverPlugInDeviceSetProperty](audiodriverplugindevicesetproperty.md)
