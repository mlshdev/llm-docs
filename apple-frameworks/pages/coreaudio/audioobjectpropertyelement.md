> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioobjectpropertyelement](https://developer.apple.com/documentation/coreaudio/audioobjectpropertyelement)

# AudioObjectPropertyElement (Swift)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
typealias AudioObjectPropertyElement = UInt32
```

<a id="discussion"></a>

## Discussion

An AudioObjectPropertyElement is an integer that identifies, along with the AudioObjectPropertySelector and AudioObjectPropertyScope, a specific piece of information about an AudioObject.

The element selects one of possibly many items in the section of the object in which to look for the property. Elements are number sequentially where 0 represents the main element. Elements are particular to an instance of a class, meaning that two instances can have different numbers of elements in the same scope. There is no inheritance of elements.

## See Also

### Data Types

- [AudioClassID](audioclassid.md)
- [AudioDeviceID](audiodeviceid.md)
- [AudioDeviceIOBlock](audiodeviceioblock.md)
- [AudioDeviceIOProc](audiodeviceioproc.md)
- [AudioDeviceIOProcID](audiodeviceioprocid.md)
- [AudioDevicePropertyID](audiodevicepropertyid.md)
- [AudioDevicePropertyListenerProc](audiodevicepropertylistenerproc.md)
- [AudioHardwarePropertyID](audiohardwarepropertyid.md)
- [AudioHardwarePropertyListenerProc](audiohardwarepropertylistenerproc.md)
- [AudioObjectID](audioobjectid.md)
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
- [AudioObjectPropertySelector](audioobjectpropertyselector.md)
- [AudioStreamID](audiostreamid.md)

# AudioObjectPropertyElement (Objective-C)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef UInt32 AudioObjectPropertyElement;
```

<a id="discussion"></a>

## Discussion

An AudioObjectPropertyElement is an integer that identifies, along with the AudioObjectPropertySelector and AudioObjectPropertyScope, a specific piece of information about an AudioObject.

The element selects one of possibly many items in the section of the object in which to look for the property. Elements are number sequentially where 0 represents the main element. Elements are particular to an instance of a class, meaning that two instances can have different numbers of elements in the same scope. There is no inheritance of elements.

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
- [AudioDriverPlugInStreamPropertyChangedProc](audiodriverpluginstreampropertychangedproc.md)
- [AudioHardwarePropertyID](audiohardwarepropertyid.md)
- [AudioHardwarePropertyListenerProc](audiohardwarepropertylistenerproc.md)
- [AudioObjectID](audioobjectid.md)
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
