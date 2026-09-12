> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiodriverpluginhostinfo](https://developer.apple.com/documentation/coreaudio/audiodriverpluginhostinfo)

# AudioDriverPlugInHostInfo

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
struct AudioDriverPlugInHostInfo;
```

## Topics

### Instance Properties

- [mDeviceID](audiodriverpluginhostinfo/mdeviceid.md)
- [mDevicePropertyChangedProc](audiodriverpluginhostinfo/mdevicepropertychangedproc.md)
- [mIOAudioDevice](audiodriverpluginhostinfo/mioaudiodevice.md)
- [mIOAudioEngine](audiodriverpluginhostinfo/mioaudioengine.md)
- [mStreamPropertyChangedProc](audiodriverpluginhostinfo/mstreampropertychangedproc.md)

## See Also

### Structures

- [AudioHardwareIOProcStreamUsage](audiohardwareioprocstreamusage.md): This structure describes which streams a given AudioDeviceIOProc will use. It is used in conjunction with kAudioDevicePropertyIOProcStreamUsage.
- [AudioObjectPropertyAddress](audioobjectpropertyaddress.md): An AudioObjectPropertyAddress collects the three parts that identify a specific property together in a struct for easy transmission.
- [AudioServerPlugInClientInfo](audioserverpluginclientinfo.md)
- [AudioServerPlugInCustomPropertyInfo](audioserverplugincustompropertyinfo.md)
- [AudioServerPlugInDriverInterface](audioserverplugindriverinterface.md)
- [AudioServerPlugInHostInterface](audioserverpluginhostinterface.md)
- [AudioServerPlugInIOCycleInfo](audioserverpluginiocycleinfo.md)
- [AudioStreamRangedDescription](audiostreamrangeddescription.md): This structure allows a specific sample rate range to be associated with an AudioStreamBasicDescription that specifies its sample rate as kAudioStreamAnyRate.
