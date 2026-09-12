> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioobjectaddpropertylistenerblock(_:_:_:_:)](https://developer.apple.com/documentation/coreaudio/audioobjectaddpropertylistenerblock(_:_:_:_:))

# AudioObjectAddPropertyListenerBlock(\_:\_:\_:\_:) (Swift)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+

## Declaration

```swift
func AudioObjectAddPropertyListenerBlock(_ inObjectID: AudioObjectID, _ inAddress: UnsafePointer<AudioObjectPropertyAddress>, _ inDispatchQueue: dispatch_queue_t?, _ inListener: @escaping AudioObjectPropertyListenerBlock) -> OSStatus
```

## Parameters

- `inObjectID`: The AudioObject to register the listener with.
- `inAddress`: The AudioObjectPropertyAddresses indicating which property the listener should be notified about.
- `inDispatchQueue`: The dispatch queue on which the listener block will be dispatched. All listener blocks will be dispatched asynchronously save for those dispatched from the IO context (of which kAudioDevicePropertyDeviceIsRunning and kAudioDeviceProcessorOverload are the only examples) which will be dispatched synchronously. Note that this dispatch queue will be retained until a matching call to AudioObjectRemovePropertyListenerBlock is made. If this value is NULL, then the block will be directly invoked.
- `inListener`: The AudioObjectPropertyListenerBlock to call. Note that this block will be Block_copy’d and the reference maintained until a matching call to AudioObjectRemovePropertyListenerBlock is made.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Registers the given AudioObjectPropertyListenerBlock to receive notifications when the given properties change.

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

# AudioObjectAddPropertyListenerBlock (Objective-C)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

## Declaration

```objectivec
extern OSStatus AudioObjectAddPropertyListenerBlock(AudioObjectID inObjectID, const AudioObjectPropertyAddress *inAddress, dispatch_queue_t inDispatchQueue, AudioObjectPropertyListenerBlock inListener);
```

## Parameters

- `inObjectID`: The AudioObject to register the listener with.
- `inAddress`: The AudioObjectPropertyAddresses indicating which property the listener should be notified about.
- `inDispatchQueue`: The dispatch queue on which the listener block will be dispatched. All listener blocks will be dispatched asynchronously save for those dispatched from the IO context (of which kAudioDevicePropertyDeviceIsRunning and kAudioDeviceProcessorOverload are the only examples) which will be dispatched synchronously. Note that this dispatch queue will be retained until a matching call to AudioObjectRemovePropertyListenerBlock is made. If this value is NULL, then the block will be directly invoked.
- `inListener`: The AudioObjectPropertyListenerBlock to call. Note that this block will be Block_copy’d and the reference maintained until a matching call to AudioObjectRemovePropertyListenerBlock is made.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Registers the given AudioObjectPropertyListenerBlock to receive notifications when the given properties change.

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
