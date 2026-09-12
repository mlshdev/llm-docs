> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareioprocstreamusage](https://developer.apple.com/documentation/coreaudio/audiohardwareioprocstreamusage)

# AudioHardwareIOProcStreamUsage (Swift)

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

This structure describes which streams a given AudioDeviceIOProc will use. It is used in conjunction with kAudioDevicePropertyIOProcStreamUsage.

## Declaration

```swift
struct AudioHardwareIOProcStreamUsage
```

<a id="overview"></a>

## Overview

- **`mIOProc`**: The IOProc whose stream usage is being specified.
- **`mNumberStreams`**: The number of streams being specified.
- **`mStreamIsOn`**: An array of UInt32’s whose length is specified by mNumberStreams. Each element of the array corresponds to a stream. A value of 0 means the stream is not to be enabled. Any other value means the stream is to be used.

## Topics

### Initializers

- [init(mIOProc:mNumberStreams:mStreamIsOn:)](audiohardwareioprocstreamusage/init%28mioproc_mnumberstreams_mstreamison_%29.md)

### Instance Properties

- [mIOProc](audiohardwareioprocstreamusage/mioproc.md)
- [mNumberStreams](audiohardwareioprocstreamusage/mnumberstreams.md)
- [mStreamIsOn](audiohardwareioprocstreamusage/mstreamison.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Structures

- [AudioObjectPropertyAddress](audioobjectpropertyaddress.md): An AudioObjectPropertyAddress collects the three parts that identify a specific property together in a struct for easy transmission.
- [AudioStreamRangedDescription](audiostreamrangeddescription.md): This structure allows a specific sample rate range to be associated with an AudioStreamBasicDescription that specifies its sample rate as kAudioStreamAnyRate.
- [UnsafeMutableAudioBufferListPointer](unsafemutableaudiobufferlistpointer.md): A wrapper for a pointer to an `AudioBufferList`.

# AudioHardwareIOProcStreamUsage (Objective-C)

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

This structure describes which streams a given AudioDeviceIOProc will use. It is used in conjunction with kAudioDevicePropertyIOProcStreamUsage.

## Declaration

```objectivec
struct AudioHardwareIOProcStreamUsage;
```

<a id="overview"></a>

## Overview

- **`mIOProc`**: The IOProc whose stream usage is being specified.
- **`mNumberStreams`**: The number of streams being specified.
- **`mStreamIsOn`**: An array of UInt32’s whose length is specified by mNumberStreams. Each element of the array corresponds to a stream. A value of 0 means the stream is not to be enabled. Any other value means the stream is to be used.

## Topics

### Instance Properties

- [mIOProc](audiohardwareioprocstreamusage/mioproc.md)
- [mNumberStreams](audiohardwareioprocstreamusage/mnumberstreams.md)
- [mStreamIsOn](audiohardwareioprocstreamusage/mstreamison.md)

## See Also

### Structures

- [AudioDriverPlugInHostInfo](audiodriverpluginhostinfo.md)
- [AudioObjectPropertyAddress](audioobjectpropertyaddress.md): An AudioObjectPropertyAddress collects the three parts that identify a specific property together in a struct for easy transmission.
- [AudioServerPlugInClientInfo](audioserverpluginclientinfo.md)
- [AudioServerPlugInCustomPropertyInfo](audioserverplugincustompropertyinfo.md)
- [AudioServerPlugInDriverInterface](audioserverplugindriverinterface.md)
- [AudioServerPlugInHostInterface](audioserverpluginhostinterface.md)
- [AudioServerPlugInIOCycleInfo](audioserverpluginiocycleinfo.md)
- [AudioStreamRangedDescription](audiostreamrangeddescription.md): This structure allows a specific sample rate range to be associated with an AudioStreamBasicDescription that specifies its sample rate as kAudioStreamAnyRate.
