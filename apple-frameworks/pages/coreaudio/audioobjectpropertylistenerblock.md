> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioobjectpropertylistenerblock](https://developer.apple.com/documentation/coreaudio/audioobjectpropertylistenerblock)

# AudioObjectPropertyListenerBlock (Swift)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
typealias AudioObjectPropertyListenerBlock = (UInt32, UnsafePointer<AudioObjectPropertyAddress>) -> Void
```

## Parameters

- `inNumberAddresses`: The number of elements in the inAddresses array.
- `inAddresses`: An array of AudioObjectPropertyAddresses indicating which properties changed.

<a id="discussion"></a>

## Discussion

Clients register an AudioObjectPropertyListenerBlock with an AudioObject in order to receive notifications when the properties of the object change.

Listeners will be called when possibly many properties have changed. Consequently, the implementation of a listener must go through the array of addresses to see what exactly has changed. Note that the array of addresses will always have at least one address in it for which the listener is signed up to receive notifications about but may contain addresses for properties for which the listener is not signed up to receive notifications.

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
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
- [AudioObjectPropertySelector](audioobjectpropertyselector.md)
- [AudioStreamID](audiostreamid.md)

# AudioObjectPropertyListenerBlock (Objective-C)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef void (^)(unsigned int, const struct AudioObjectPropertyAddress *) AudioObjectPropertyListenerBlock;
```

## Parameters

- `inNumberAddresses`: The number of elements in the inAddresses array.
- `inAddresses`: An array of AudioObjectPropertyAddresses indicating which properties changed.

<a id="discussion"></a>

## Discussion

Clients register an AudioObjectPropertyListenerBlock with an AudioObject in order to receive notifications when the properties of the object change.

Listeners will be called when possibly many properties have changed. Consequently, the implementation of a listener must go through the array of addresses to see what exactly has changed. Note that the array of addresses will always have at least one address in it for which the listener is signed up to receive notifications about but may contain addresses for properties for which the listener is not signed up to receive notifications.

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
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
