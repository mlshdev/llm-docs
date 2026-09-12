> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodriverpluginstreamgetpropertyinfo](https://developer.apple.com/documentation/coreaudio/audiodriverpluginstreamgetpropertyinfo)

# AudioDriverPlugInStreamGetPropertyInfo

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
extern OSStatus AudioDriverPlugInStreamGetPropertyInfo(AudioDeviceID inDevice, io_object_t inIOAudioStream, UInt32 inChannel, AudioDevicePropertyID inPropertyID, UInt32 *outSize, Boolean *outWritable);
```

## Parameters

- `inDevice`: The AudioDevice whose stream is being queried.
- `inIOAudioStream`: The IOAudioStream to query.
- `inChannel`: The channel of the property to query where 0 is the main channel.
- `inPropertyID`: The AudioDevicePropertyID of the property to query.
- `outSize`: A pointer to a UInt32 that receives the size of the property data in bytes on exit. This can be NULL if the size information is not being requested.
- `outWritable`: A pointer to a Boolean that receives indication of whether or not the given property can be set. This can be NULL if the writability is not being requested.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure. Note that if the plug-in does not implement the given property, it should return kAudioHardwareUnknownPropertyError to ensure that the HAL handles the property normally.

<a id="discussion"></a>

## Discussion

Retrieve information about the given property of an AudioStream.

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
