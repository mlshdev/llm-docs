> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioserverpluginhostinterface](https://developer.apple.com/documentation/coreaudio/audioserverpluginhostinterface)

# AudioServerPlugInHostInterface

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
struct AudioServerPlugInHostInterface;
```

## Topics

### Instance Properties

- [CopyFromStorage](audioserverpluginhostinterface/copyfromstorage.md)
- [DeleteFromStorage](audioserverpluginhostinterface/deletefromstorage.md)
- [PropertiesChanged](audioserverpluginhostinterface/propertieschanged.md)
- [RequestDeviceConfigurationChange](audioserverpluginhostinterface/requestdeviceconfigurationchange.md)
- [WriteToStorage](audioserverpluginhostinterface/writetostorage.md)

## See Also

### Structures

- [AudioDriverPlugInHostInfo](audiodriverpluginhostinfo.md)
- [AudioHardwareIOProcStreamUsage](audiohardwareioprocstreamusage.md): This structure describes which streams a given AudioDeviceIOProc will use. It is used in conjunction with kAudioDevicePropertyIOProcStreamUsage.
- [AudioObjectPropertyAddress](audioobjectpropertyaddress.md): An AudioObjectPropertyAddress collects the three parts that identify a specific property together in a struct for easy transmission.
- [AudioServerPlugInClientInfo](audioserverpluginclientinfo.md)
- [AudioServerPlugInCustomPropertyInfo](audioserverplugincustompropertyinfo.md)
- [AudioServerPlugInDriverInterface](audioserverplugindriverinterface.md)
- [AudioServerPlugInIOCycleInfo](audioserverpluginiocycleinfo.md)
- [AudioStreamRangedDescription](audiostreamrangeddescription.md): This structure allows a specific sample rate range to be associated with an AudioStreamBasicDescription that specifies its sample rate as kAudioStreamAnyRate.
