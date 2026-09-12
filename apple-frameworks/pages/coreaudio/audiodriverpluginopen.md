> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodriverpluginopen](https://developer.apple.com/documentation/coreaudio/audiodriverpluginopen)

# AudioDriverPlugInOpen

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
extern OSStatus AudioDriverPlugInOpen(AudioDriverPlugInHostInfo *inHostInfo);
```

## Parameters

- `inHostInfo`: An AudioDriverPlugInHostInfo struct that tells the plug-in what device it is being instantiated for.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Instantiates a new instance of the driver plug-in.

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
