> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodevicecreateioprocidwithblock(_:_:_:_:)](https://developer.apple.com/documentation/coreaudio/audiodevicecreateioprocidwithblock(_:_:_:_:))

# AudioDeviceCreateIOProcIDWithBlock(\_:\_:\_:\_:) (Swift)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+

## Declaration

```swift
func AudioDeviceCreateIOProcIDWithBlock(_ outIOProcID: UnsafeMutablePointer<AudioDeviceIOProcID?>, _ inDevice: AudioObjectID, _ inDispatchQueue: dispatch_queue_t?, _ inIOBlock: @escaping AudioDeviceIOBlock) -> OSStatus
```

## Parameters

- `outIOProcID`: The newly created AudioDeviceIOProcID.
- `inDevice`: The AudioDevice to register the Block with.
- `inDispatchQueue`: The dispatch queue on which the IOBlock will be dispatched. All IOBlocks are dispatched synchronously. Note that this dispatch queue will be retained until a matching call to AudioDeviceDestroyIOProcID is made. If this value is NULL, then the IOBlock will be directly invoked.
- `inIOBlock`: The AudioDeviceIOBlock to register.  Note that this block will be Block_copy’d and the reference maintained until a matching call to AudioDeviceDestroyIOProcID is made.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Creates an AudioDeviceIOProcID from an AudioDeviceIOBlock

## See Also

### Functions

- [AudioConvertHostTimeToNanos(\_:)](audioconverthosttimetonanos%28__%29.md)
- [AudioConvertNanosToHostTime(\_:)](audioconvertnanostohosttime%28__%29.md)
- [AudioDeviceCreateIOProcID(\_:\_:\_:\_:)](audiodevicecreateioprocid%28________%29.md)
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

# AudioDeviceCreateIOProcIDWithBlock (Objective-C)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

## Declaration

```objectivec
extern OSStatus AudioDeviceCreateIOProcIDWithBlock(AudioDeviceIOProcID*outIOProcID, AudioObjectID inDevice, dispatch_queue_t inDispatchQueue, AudioDeviceIOBlock inIOBlock);
```

## Parameters

- `outIOProcID`: The newly created AudioDeviceIOProcID.
- `inDevice`: The AudioDevice to register the Block with.
- `inDispatchQueue`: The dispatch queue on which the IOBlock will be dispatched. All IOBlocks are dispatched synchronously. Note that this dispatch queue will be retained until a matching call to AudioDeviceDestroyIOProcID is made. If this value is NULL, then the IOBlock will be directly invoked.
- `inIOBlock`: The AudioDeviceIOBlock to register.  Note that this block will be Block_copy’d and the reference maintained until a matching call to AudioDeviceDestroyIOProcID is made.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Creates an AudioDeviceIOProcID from an AudioDeviceIOBlock

## See Also

### Functions

- [AudioConvertHostTimeToNanos](audioconverthosttimetonanos%28__%29.md)
- [AudioConvertNanosToHostTime](audioconvertnanostohosttime%28__%29.md)
- [AudioDeviceCreateIOProcID](audiodevicecreateioprocid%28________%29.md)
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
