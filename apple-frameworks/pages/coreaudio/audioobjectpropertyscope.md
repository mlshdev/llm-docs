> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioobjectpropertyscope](https://developer.apple.com/documentation/coreaudio/audioobjectpropertyscope)

# AudioObjectPropertyScope (Swift)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
typealias AudioObjectPropertyScope = UInt32
```

<a id="discussion"></a>

## Discussion

An AudioObjectPropertyScope is a four char code that identifies, along with the AudioObjectPropertySelector and AudioObjectPropertyElement, a specific piece of information about an AudioObject.

The scope specifies the section of the object in which to look for the property, such as input, output, global, etc. Note that each class has a different set of scopes. A subclass inherits its superclass’s set of scopes.

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
- [AudioObjectPropertyElement](audioobjectpropertyelement.md)
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
- [AudioObjectPropertySelector](audioobjectpropertyselector.md)
- [AudioStreamID](audiostreamid.md)

# AudioObjectPropertyScope (Objective-C)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef UInt32 AudioObjectPropertyScope;
```

<a id="discussion"></a>

## Discussion

An AudioObjectPropertyScope is a four char code that identifies, along with the AudioObjectPropertySelector and AudioObjectPropertyElement, a specific piece of information about an AudioObject.

The scope specifies the section of the object in which to look for the property, such as input, output, global, etc. Note that each class has a different set of scopes. A subclass inherits its superclass’s set of scopes.

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
- [AudioObjectPropertyElement](audioobjectpropertyelement.md)
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
