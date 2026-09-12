> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioobjectpropertyaddress](https://developer.apple.com/documentation/coreaudio/audioobjectpropertyaddress)

# AudioObjectPropertyAddress (Swift)

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

An AudioObjectPropertyAddress collects the three parts that identify a specific property together in a struct for easy transmission.

## Declaration

```swift
struct AudioObjectPropertyAddress
```

<a id="overview"></a>

## Overview

- term: `mSelector`: The AudioObjectPropertySelector for the property.
- term: `mScope`: The AudioObjectPropertyScope for the property.
- term: `mElement`: The AudioObjectPropertyElement for the property.

## Topics

### Initializers

- [init()](audioobjectpropertyaddress/init%28%29.md)
- [init(mSelector:mScope:mElement:)](audioobjectpropertyaddress/init%28mselector_mscope_melement_%29.md)

### Instance Properties

- [mElement](audioobjectpropertyaddress/melement.md)
- [mScope](audioobjectpropertyaddress/mscope.md)
- [mSelector](audioobjectpropertyaddress/mselector.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [AudioHardwareIOProcStreamUsage](audiohardwareioprocstreamusage.md): This structure describes which streams a given AudioDeviceIOProc will use. It is used in conjunction with kAudioDevicePropertyIOProcStreamUsage.
- [AudioStreamRangedDescription](audiostreamrangeddescription.md): This structure allows a specific sample rate range to be associated with an AudioStreamBasicDescription that specifies its sample rate as kAudioStreamAnyRate.
- [UnsafeMutableAudioBufferListPointer](unsafemutableaudiobufferlistpointer.md): A wrapper for a pointer to an `AudioBufferList`.

# AudioObjectPropertyAddress (Objective-C)

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An AudioObjectPropertyAddress collects the three parts that identify a specific property together in a struct for easy transmission.

## Declaration

```objectivec
struct AudioObjectPropertyAddress;
```

<a id="overview"></a>

## Overview

- term: `mSelector`: The AudioObjectPropertySelector for the property.
- term: `mScope`: The AudioObjectPropertyScope for the property.
- term: `mElement`: The AudioObjectPropertyElement for the property.

## Topics

### Instance Properties

- [mElement](audioobjectpropertyaddress/melement.md)
- [mScope](audioobjectpropertyaddress/mscope.md)
- [mSelector](audioobjectpropertyaddress/mselector.md)

## See Also

### Structures

- [AudioDriverPlugInHostInfo](audiodriverpluginhostinfo.md)
- [AudioHardwareIOProcStreamUsage](audiohardwareioprocstreamusage.md): This structure describes which streams a given AudioDeviceIOProc will use. It is used in conjunction with kAudioDevicePropertyIOProcStreamUsage.
- [AudioServerPlugInClientInfo](audioserverpluginclientinfo.md)
- [AudioServerPlugInCustomPropertyInfo](audioserverplugincustompropertyinfo.md)
- [AudioServerPlugInDriverInterface](audioserverplugindriverinterface.md)
- [AudioServerPlugInHostInterface](audioserverpluginhostinterface.md)
- [AudioServerPlugInIOCycleInfo](audioserverpluginiocycleinfo.md)
- [AudioStreamRangedDescription](audiostreamrangeddescription.md): This structure allows a specific sample rate range to be associated with an AudioStreamBasicDescription that specifies its sample rate as kAudioStreamAnyRate.
