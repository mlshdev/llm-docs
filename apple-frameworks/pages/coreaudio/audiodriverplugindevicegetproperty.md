> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodriverplugindevicegetproperty](https://developer.apple.com/documentation/coreaudio/audiodriverplugindevicegetproperty)

# AudioDriverPlugInDeviceGetProperty

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
extern OSStatus AudioDriverPlugInDeviceGetProperty(AudioDeviceID inDevice, UInt32 inChannel, Boolean isInput, AudioDevicePropertyID inPropertyID, UInt32 *ioPropertyDataSize, void *outPropertyData);
```

## Parameters

- `inDevice`: The AudioDevice to query.
- `inChannel`: The channel of the property to query where 0 is the main channel.
- `isInput`: Which section of the AudioDevice to query.
- `inPropertyID`: The AudioDevicePropertyID of the property to query.
- `ioPropertyDataSize`: A UInt32 which on entry indicates the size of the buffer pointed to by outData and on exit indicates how much of the buffer was used.
- `outPropertyData`: The buffer into which the object will put the data for the given property.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure. Note that if the plug-in does not implement the given property, it should return kAudioHardwareUnknownPropertyError to ensure that the HAL handles the property normally.

<a id="discussion"></a>

## Discussion

Queries an the AudioDevice object to get the data of the given property and places it in the provided buffer.

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
- [AudioDriverPlugInDeviceGetPropertyInfo](audiodriverplugindevicegetpropertyinfo.md)
- [AudioDriverPlugInDeviceSetProperty](audiodriverplugindevicesetproperty.md)
- [AudioDriverPlugInOpen](audiodriverpluginopen.md)
