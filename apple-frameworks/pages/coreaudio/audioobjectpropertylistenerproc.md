> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioobjectpropertylistenerproc](https://developer.apple.com/documentation/coreaudio/audioobjectpropertylistenerproc)

# AudioObjectPropertyListenerProc (Swift)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
typealias AudioObjectPropertyListenerProc = (AudioObjectID, UInt32, UnsafePointer<AudioObjectPropertyAddress>, UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inObjectID`: The AudioObject whose properties have changed.
- `inNumberAddresses`: The number of elements in the inAddresses array.
- `inAddresses`: An array of AudioObjectPropertyAddresses indicating which properties changed.
- `inClientData`: A pointer to client data established when the listener proc was registered with the AudioObject.

<a id="return-value"></a>

## Return Value

The return value is currently unused and should always be 0.

<a id="discussion"></a>

## Discussion

Clients register an AudioObjectPropertyListenerProc with an AudioObject in order to receive notifications when the properties of the object change.

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
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
- [AudioObjectPropertySelector](audioobjectpropertyselector.md)
- [AudioStreamID](audiostreamid.md)

# AudioObjectPropertyListenerProc (Objective-C)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef int (*)(unsigned int, unsigned int, const struct AudioObjectPropertyAddress *, void *) AudioObjectPropertyListenerProc;
```

## Parameters

- `inObjectID`: The AudioObject whose properties have changed.
- `inNumberAddresses`: The number of elements in the inAddresses array.
- `inAddresses`: An array of AudioObjectPropertyAddresses indicating which properties changed.
- `inClientData`: A pointer to client data established when the listener proc was registered with the AudioObject.

<a id="return-value"></a>

## Return Value

The return value is currently unused and should always be 0.

<a id="discussion"></a>

## Discussion

Clients register an AudioObjectPropertyListenerProc with an AudioObject in order to receive notifications when the properties of the object change.

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
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
