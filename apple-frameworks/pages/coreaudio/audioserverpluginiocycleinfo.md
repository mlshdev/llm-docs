> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioserverpluginiocycleinfo](https://developer.apple.com/documentation/coreaudio/audioserverpluginiocycleinfo)

# AudioServerPlugInIOCycleInfo

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
struct AudioServerPlugInIOCycleInfo;
```

## Topics

### Instance Properties

- [mCurrentTime](audioserverpluginiocycleinfo/mcurrenttime.md)
- [mDeviceHostTicksPerFrame](audioserverpluginiocycleinfo/mdevicehostticksperframe.md)
- [mIOCycleCounter](audioserverpluginiocycleinfo/miocyclecounter.md)
- [mInputTime](audioserverpluginiocycleinfo/minputtime.md)
- [mMainHostTicksPerFrame](audioserverpluginiocycleinfo/mmainhostticksperframe.md)
- [mNominalIOBufferFrameSize](audioserverpluginiocycleinfo/mnominaliobufferframesize.md)
- [mOutputTime](audioserverpluginiocycleinfo/moutputtime.md)

## See Also

### Structures

- [AudioDriverPlugInHostInfo](audiodriverpluginhostinfo.md)
- [AudioHardwareIOProcStreamUsage](audiohardwareioprocstreamusage.md): This structure describes which streams a given AudioDeviceIOProc will use. It is used in conjunction with kAudioDevicePropertyIOProcStreamUsage.
- [AudioObjectPropertyAddress](audioobjectpropertyaddress.md): An AudioObjectPropertyAddress collects the three parts that identify a specific property together in a struct for easy transmission.
- [AudioServerPlugInClientInfo](audioserverpluginclientinfo.md)
- [AudioServerPlugInCustomPropertyInfo](audioserverplugincustompropertyinfo.md)
- [AudioServerPlugInDriverInterface](audioserverplugindriverinterface.md)
- [AudioServerPlugInHostInterface](audioserverpluginhostinterface.md)
- [AudioStreamRangedDescription](audiostreamrangeddescription.md): This structure allows a specific sample rate range to be associated with an AudioStreamBasicDescription that specifies its sample rate as kAudioStreamAnyRate.
