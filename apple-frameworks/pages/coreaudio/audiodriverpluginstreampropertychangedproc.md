> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodriverpluginstreampropertychangedproc](https://developer.apple.com/documentation/coreaudio/audiodriverpluginstreampropertychangedproc)

# AudioDriverPlugInStreamPropertyChangedProc

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef int (*)(unsigned int, unsigned int, unsigned int, unsigned int) AudioDriverPlugInStreamPropertyChangedProc;
```

## Parameters

- `inDevice`: The device whose property has changed.
- `inIOAudioStream`: The stream whose property has changed.
- `inChannel`: The channel of the stream the property that has changed belongs to.
- `inPropertyID`: The selector of the property that has changed.

<a id="return-value"></a>

## Return Value

The return value is currently unused and should always be 0.

<a id="discussion"></a>

## Discussion

A plug-in calls this routine to notify the HAL that a property of one of the streams of one of its devices has changed.

The HAL will notify any listeners on behalf of the plug-in. The pointer to this routine is supplied to the plug-in when it is opened.

## See Also

### Data Types

- [AudioClassID](audioclassid.md)
- [AudioDeviceID](audiodeviceid.md)
- [AudioDeviceIOBlock](audiodeviceioblock.md)
- [AudioDeviceIOProc](audiodeviceioproc.md)
- [AudioDeviceIOProcID](audiodeviceioprocid.md)
- [AudioDevicePropertyID](audiodevicepropertyid.md)
- [AudioDevicePropertyListenerProc](audiodevicepropertylistenerproc.md)
- [AudioDriverPlugInDevicePropertyChangedProc](audiodriverplugindevicepropertychangedproc.md)
- [AudioHardwarePropertyID](audiohardwarepropertyid.md)
- [AudioHardwarePropertyListenerProc](audiohardwarepropertylistenerproc.md)
- [AudioObjectID](audioobjectid.md)
- [AudioObjectPropertyElement](audioobjectpropertyelement.md)
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
