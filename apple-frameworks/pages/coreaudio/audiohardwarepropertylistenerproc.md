> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwarepropertylistenerproc](https://developer.apple.com/documentation/coreaudio/audiohardwarepropertylistenerproc)

# AudioHardwarePropertyListenerProc (Swift)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
typealias AudioHardwarePropertyListenerProc = (AudioHardwarePropertyID, UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inPropertyID`: The AudioHardwarePropertyID of the property that changed.
- `inClientData`: A pointer to client data established when the listener proc was registered with the AudioSystemObject.

<a id="return-value"></a>

## Return Value

The return value is currently unused and should always be 0.

<a id="discussion"></a>

## Discussion

Clients register an AudioHardwarePropertyListenerProc with the AudioSystemObject in order to receive notifications when the properties of the object change.

Note that the same functionality is provided by AudioObjectPropertyListenerProc.

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
- [AudioObjectID](audioobjectid.md)
- [AudioObjectPropertyElement](audioobjectpropertyelement.md)
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
- [AudioObjectPropertySelector](audioobjectpropertyselector.md)
- [AudioStreamID](audiostreamid.md)

# AudioHardwarePropertyListenerProc (Objective-C)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef int (*)(unsigned int, void *) AudioHardwarePropertyListenerProc;
```

## Parameters

- `inPropertyID`: The AudioHardwarePropertyID of the property that changed.
- `inClientData`: A pointer to client data established when the listener proc was registered with the AudioSystemObject.

<a id="return-value"></a>

## Return Value

The return value is currently unused and should always be 0.

<a id="discussion"></a>

## Discussion

Clients register an AudioHardwarePropertyListenerProc with the AudioSystemObject in order to receive notifications when the properties of the object change.

Note that the same functionality is provided by AudioObjectPropertyListenerProc.

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
- [AudioObjectID](audioobjectid.md)
- [AudioObjectPropertyElement](audioobjectpropertyelement.md)
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
