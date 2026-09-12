> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodriverpluginclose](https://developer.apple.com/documentation/coreaudio/audiodriverpluginclose)

# AudioDriverPlugInClose

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
extern OSStatus AudioDriverPlugInClose(AudioDeviceID inDevice);
```

## Parameters

- `inDevice`: The AudioDeviceID that describes the device whose plug-in instance is being closed.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Closes an instance of the driver plug-in.

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
- [AudioDriverPlugInDeviceGetProperty](audiodriverplugindevicegetproperty.md)
- [AudioDriverPlugInDeviceGetPropertyInfo](audiodriverplugindevicegetpropertyinfo.md)
- [AudioDriverPlugInDeviceSetProperty](audiodriverplugindevicesetproperty.md)
- [AudioDriverPlugInOpen](audiodriverpluginopen.md)
