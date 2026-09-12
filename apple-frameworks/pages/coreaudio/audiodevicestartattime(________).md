> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodevicestartattime(_:_:_:_:)](https://developer.apple.com/documentation/coreaudio/audiodevicestartattime(_:_:_:_:))

# AudioDeviceStartAtTime(\_:\_:\_:\_:) (Swift)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+

## Declaration

```swift
func AudioDeviceStartAtTime(_ inDevice: AudioObjectID, _ inProcID: AudioDeviceIOProcID?, _ ioRequestedStartTime: UnsafeMutablePointer<AudioTimeStamp>, _ inFlags: UInt32) -> OSStatus
```

## Parameters

- `inDevice`: The AudioDevice to start the IOProc on.
- `inProcID`: The AudioDeviceIOProcID to start. Note that this can be NULL, which starts the hardware regardless of whether or not there are any IOProcs registered.
- `ioRequestedStartTime`: A pointer to an AudioTimeStamp that, on entry, is the requested time to start the IOProc. On exit, it will be the actual time the IOProc will start.
- `inFlags`: A UInt32 containing flags that modify how this function behaves.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure. kAudioHardwareUnsupportedOperationError will be returned if the AudioDevice does not support starting at a specific time and inProc and ioRequestedStartTime are not NULL.

<a id="discussion"></a>

## Discussion

Starts IO for the given AudioDeviceIOProcID and aligns the IO cycle of the AudioDevice with the given time.

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
- [AudioDeviceStop(\_:\_:)](audiodevicestop%28____%29.md)
- [AudioDeviceTranslateTime(\_:\_:\_:)](audiodevicetranslatetime%28______%29.md)
- [AudioGetCurrentHostTime()](audiogetcurrenthosttime%28%29.md)
- [AudioGetHostClockFrequency()](audiogethostclockfrequency%28%29.md)
- [AudioGetHostClockMinimumTimeDelta()](audiogethostclockminimumtimedelta%28%29.md)
- [AudioHardwareCreateAggregateDevice(\_:\_:)](audiohardwarecreateaggregatedevice%28____%29.md)
- [AudioHardwareDestroyAggregateDevice(\_:)](audiohardwaredestroyaggregatedevice%28__%29.md)

# AudioDeviceStartAtTime (Objective-C)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

## Declaration

```objectivec
extern OSStatus AudioDeviceStartAtTime(AudioObjectID inDevice, AudioDeviceIOProcID inProcID, AudioTimeStamp *ioRequestedStartTime, UInt32 inFlags);
```

## Parameters

- `inDevice`: The AudioDevice to start the IOProc on.
- `inProcID`: The AudioDeviceIOProcID to start. Note that this can be NULL, which starts the hardware regardless of whether or not there are any IOProcs registered.
- `ioRequestedStartTime`: A pointer to an AudioTimeStamp that, on entry, is the requested time to start the IOProc. On exit, it will be the actual time the IOProc will start.
- `inFlags`: A UInt32 containing flags that modify how this function behaves.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure. kAudioHardwareUnsupportedOperationError will be returned if the AudioDevice does not support starting at a specific time and inProc and ioRequestedStartTime are not NULL.

<a id="discussion"></a>

## Discussion

Starts IO for the given AudioDeviceIOProcID and aligns the IO cycle of the AudioDevice with the given time.

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
- [AudioDeviceStop](audiodevicestop%28____%29.md)
- [AudioDeviceTranslateTime](audiodevicetranslatetime%28______%29.md)
- [AudioDriverPlugInClose](audiodriverpluginclose.md)
- [AudioDriverPlugInDeviceGetProperty](audiodriverplugindevicegetproperty.md)
- [AudioDriverPlugInDeviceGetPropertyInfo](audiodriverplugindevicegetpropertyinfo.md)
- [AudioDriverPlugInDeviceSetProperty](audiodriverplugindevicesetproperty.md)
- [AudioDriverPlugInOpen](audiodriverpluginopen.md)
