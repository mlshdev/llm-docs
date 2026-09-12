> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodevicecreateioprocid(_:_:_:_:)](https://developer.apple.com/documentation/coreaudio/audiodevicecreateioprocid(_:_:_:_:))

# AudioDeviceCreateIOProcID(\_:\_:\_:\_:) (Swift)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func AudioDeviceCreateIOProcID(_ inDevice: AudioObjectID, _ inProc: AudioDeviceIOProc, _ inClientData: UnsafeMutableRawPointer?, _ outIOProcID: UnsafeMutablePointer<AudioDeviceIOProcID?>) -> OSStatus
```

## Parameters

- `inDevice`: The AudioDevice to register the IOProc with.
- `inProc`: The AudioDeviceIOProc to register.
- `inClientData`: A pointer to client data that is passed back to the IOProc when it is called.
- `outIOProcID`: The newly created AudioDeviceIOProcID.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Creates an AudioDeviceIOProcID from an AudioDeviceIOProc and a client data pointer.

AudioDeviceIOProcIDs allow for the client to register the same function pointer with a device multiple times

## See Also

### Functions

- [AudioConvertHostTimeToNanos(\_:)](audioconverthosttimetonanos%28__%29.md)
- [AudioConvertNanosToHostTime(\_:)](audioconvertnanostohosttime%28__%29.md)
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
- [AudioHardwareDestroyAggregateDevice(\_:)](audiohardwaredestroyaggregatedevice%28__%29.md)

# AudioDeviceCreateIOProcID (Objective-C)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
extern OSStatus AudioDeviceCreateIOProcID(AudioObjectID inDevice, AudioDeviceIOProc inProc, void *inClientData, AudioDeviceIOProcID*outIOProcID);
```

## Parameters

- `inDevice`: The AudioDevice to register the IOProc with.
- `inProc`: The AudioDeviceIOProc to register.
- `inClientData`: A pointer to client data that is passed back to the IOProc when it is called.
- `outIOProcID`: The newly created AudioDeviceIOProcID.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Creates an AudioDeviceIOProcID from an AudioDeviceIOProc and a client data pointer.

AudioDeviceIOProcIDs allow for the client to register the same function pointer with a device multiple times

## See Also

### Functions

- [AudioConvertHostTimeToNanos](audioconverthosttimetonanos%28__%29.md)
- [AudioConvertNanosToHostTime](audioconvertnanostohosttime%28__%29.md)
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
- [AudioDriverPlugInOpen](audiodriverpluginopen.md)
