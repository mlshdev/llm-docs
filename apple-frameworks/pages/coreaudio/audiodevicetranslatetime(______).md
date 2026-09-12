> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodevicetranslatetime(_:_:_:)](https://developer.apple.com/documentation/coreaudio/audiodevicetranslatetime(_:_:_:))

# AudioDeviceTranslateTime(\_:\_:\_:) (Swift)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+

## Declaration

```swift
func AudioDeviceTranslateTime(_ inDevice: AudioObjectID, _ inTime: UnsafePointer<AudioTimeStamp>, _ outTime: UnsafeMutablePointer<AudioTimeStamp>) -> OSStatus
```

## Parameters

- `inDevice`: The AudioDevice whose time base governs the translation.
- `inTime`: An AudioTimeStamp containing the time to be translated.
- `outTime`: An AudioTimeStamp into which the translated time is put. On entry, the mFlags field specifies which representations to translate the input time into. Because not every device supports all time representations, on exit, the mFlags field will indicate which translations were actually done.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure. kAudioHardwareNotRunningError will be returned if the AudioDevice isn’t running.

<a id="discussion"></a>

## Discussion

Translates the time in the AudioDevice’s time base from one representation to another. Note that the device has to be running

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
- [AudioGetCurrentHostTime()](audiogetcurrenthosttime%28%29.md)
- [AudioGetHostClockFrequency()](audiogethostclockfrequency%28%29.md)
- [AudioGetHostClockMinimumTimeDelta()](audiogethostclockminimumtimedelta%28%29.md)
- [AudioHardwareCreateAggregateDevice(\_:\_:)](audiohardwarecreateaggregatedevice%28____%29.md)
- [AudioHardwareDestroyAggregateDevice(\_:)](audiohardwaredestroyaggregatedevice%28__%29.md)

# AudioDeviceTranslateTime (Objective-C)

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

## Declaration

```objectivec
extern OSStatus AudioDeviceTranslateTime(AudioObjectID inDevice, const AudioTimeStamp *inTime, AudioTimeStamp *outTime);
```

## Parameters

- `inDevice`: The AudioDevice whose time base governs the translation.
- `inTime`: An AudioTimeStamp containing the time to be translated.
- `outTime`: An AudioTimeStamp into which the translated time is put. On entry, the mFlags field specifies which representations to translate the input time into. Because not every device supports all time representations, on exit, the mFlags field will indicate which translations were actually done.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure. kAudioHardwareNotRunningError will be returned if the AudioDevice isn’t running.

<a id="discussion"></a>

## Discussion

Translates the time in the AudioDevice’s time base from one representation to another. Note that the device has to be running

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
- [AudioDriverPlugInClose](audiodriverpluginclose.md)
- [AudioDriverPlugInDeviceGetProperty](audiodriverplugindevicegetproperty.md)
- [AudioDriverPlugInDeviceGetPropertyInfo](audiodriverplugindevicegetpropertyinfo.md)
- [AudioDriverPlugInDeviceSetProperty](audiodriverplugindevicesetproperty.md)
- [AudioDriverPlugInOpen](audiodriverpluginopen.md)
