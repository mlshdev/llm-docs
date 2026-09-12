> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiostreamrangeddescription](https://developer.apple.com/documentation/coreaudio/audiostreamrangeddescription)

# AudioStreamRangedDescription (Swift)

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

This structure allows a specific sample rate range to be associated with an AudioStreamBasicDescription that specifies its sample rate as kAudioStreamAnyRate.

## Declaration

```swift
struct AudioStreamRangedDescription
```

<a id="overview"></a>

## Overview

Note that this structure is only used to describe the the available formats for a stream. It is not used for the current format.

- **`mFormat`**: The AudioStreamBasicDescription that describes the format of the stream. Note that the mSampleRate field of the structure will be the same as the the values in mSampleRateRange when only a single sample rate is supported. It will be kAudioStreamAnyRate when there is a range with more elements.
- **`mSampleRateRange`**: The AudioValueRange that describes the minimum and maximum sample rate for the stream. If the mSampleRate field of mFormat is kAudioStreamAnyRate the format supports the range of sample rates described by this structure. Otherwise, the minimum will be the same as the maximum which will be the same as the mSampleRate field of mFormat.

## Topics

### Initializers

- [init()](audiostreamrangeddescription/init%28%29.md)
- [init(mFormat:mSampleRateRange:)](audiostreamrangeddescription/init%28mformat_msampleraterange_%29.md)

### Instance Properties

- [mFormat](audiostreamrangeddescription/mformat.md)
- [mSampleRateRange](audiostreamrangeddescription/msampleraterange.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [AudioHardwareIOProcStreamUsage](audiohardwareioprocstreamusage.md): This structure describes which streams a given AudioDeviceIOProc will use. It is used in conjunction with kAudioDevicePropertyIOProcStreamUsage.
- [AudioObjectPropertyAddress](audioobjectpropertyaddress.md): An AudioObjectPropertyAddress collects the three parts that identify a specific property together in a struct for easy transmission.
- [UnsafeMutableAudioBufferListPointer](unsafemutableaudiobufferlistpointer.md): A wrapper for a pointer to an `AudioBufferList`.

# AudioStreamRangedDescription (Objective-C)

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This structure allows a specific sample rate range to be associated with an AudioStreamBasicDescription that specifies its sample rate as kAudioStreamAnyRate.

## Declaration

```objectivec
struct AudioStreamRangedDescription;
```

<a id="overview"></a>

## Overview

Note that this structure is only used to describe the the available formats for a stream. It is not used for the current format.

- **`mFormat`**: The AudioStreamBasicDescription that describes the format of the stream. Note that the mSampleRate field of the structure will be the same as the the values in mSampleRateRange when only a single sample rate is supported. It will be kAudioStreamAnyRate when there is a range with more elements.
- **`mSampleRateRange`**: The AudioValueRange that describes the minimum and maximum sample rate for the stream. If the mSampleRate field of mFormat is kAudioStreamAnyRate the format supports the range of sample rates described by this structure. Otherwise, the minimum will be the same as the maximum which will be the same as the mSampleRate field of mFormat.

## Topics

### Instance Properties

- [mFormat](audiostreamrangeddescription/mformat.md)
- [mSampleRateRange](audiostreamrangeddescription/msampleraterange.md)

## See Also

### Structures

- [AudioDriverPlugInHostInfo](audiodriverpluginhostinfo.md)
- [AudioHardwareIOProcStreamUsage](audiohardwareioprocstreamusage.md): This structure describes which streams a given AudioDeviceIOProc will use. It is used in conjunction with kAudioDevicePropertyIOProcStreamUsage.
- [AudioObjectPropertyAddress](audioobjectpropertyaddress.md): An AudioObjectPropertyAddress collects the three parts that identify a specific property together in a struct for easy transmission.
- [AudioServerPlugInClientInfo](audioserverpluginclientinfo.md)
- [AudioServerPlugInCustomPropertyInfo](audioserverplugincustompropertyinfo.md)
- [AudioServerPlugInDriverInterface](audioserverplugindriverinterface.md)
- [AudioServerPlugInHostInterface](audioserverpluginhostinterface.md)
- [AudioServerPlugInIOCycleInfo](audioserverpluginiocycleinfo.md)
