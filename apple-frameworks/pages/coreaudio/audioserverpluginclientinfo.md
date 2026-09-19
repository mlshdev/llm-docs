> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audioserverpluginclientinfo

# AudioServerPlugInClientInfo

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
struct AudioServerPlugInClientInfo;
```

## Topics

### Instance Properties

- [mBundleID](audioserverpluginclientinfo/mbundleid.md)
- [mClientID](audioserverpluginclientinfo/mclientid.md)
- [mIsNativeEndian](audioserverpluginclientinfo/misnativeendian.md)
- [mProcessID](audioserverpluginclientinfo/mprocessid.md)

## See Also

### Structures

- [AudioDriverPlugInHostInfo](audiodriverpluginhostinfo.md)
- [AudioHardwareIOProcStreamUsage](audiohardwareioprocstreamusage.md): This structure describes which streams a given AudioDeviceIOProc will use. It is used in conjunction with kAudioDevicePropertyIOProcStreamUsage.
- [AudioObjectPropertyAddress](audioobjectpropertyaddress.md): An AudioObjectPropertyAddress collects the three parts that identify a specific property together in a struct for easy transmission.
- [AudioServerPlugInCustomPropertyInfo](audioserverplugincustompropertyinfo.md)
- [AudioServerPlugInDriverInterface](audioserverplugindriverinterface.md)
- [AudioServerPlugInHostInterface](audioserverpluginhostinterface.md)
- [AudioServerPlugInIOCycleInfo](audioserverpluginiocycleinfo.md)
- [AudioStreamRangedDescription](audiostreamrangeddescription.md): This structure allows a specific sample rate range to be associated with an AudioStreamBasicDescription that specifies its sample rate as kAudioStreamAnyRate.
