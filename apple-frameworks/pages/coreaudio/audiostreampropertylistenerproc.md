> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiostreampropertylistenerproc](https://developer.apple.com/documentation/coreaudio/audiostreampropertylistenerproc)

# AudioStreamPropertyListenerProc (Swift)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
typealias AudioStreamPropertyListenerProc = (AudioStreamID, UInt32, AudioDevicePropertyID, UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inStream`: The AudioStream whose property has changed.
- `inChannel`: The channel of the property that changed where 0 is the main channel.
- `inPropertyID`: The AudioDevicePropertyID of the property that changed.
- `inClientData`: A pointer to client data established when the listener proc was registered with the object.

<a id="return-value"></a>

## Return Value

The return value is currently unused and should always be 0.

<a id="discussion"></a>

## Discussion

Clients register an AudioStreamPropertyListenerProc with the AudioStream object in order to receive notifications when the properties of the object change.

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
- [AudioHardwarePropertyListenerProc](audiohardwarepropertylistenerproc.md)
- [AudioObjectID](audioobjectid.md)
- [AudioObjectPropertyElement](audioobjectpropertyelement.md)
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
- [AudioObjectPropertySelector](audioobjectpropertyselector.md)

# AudioStreamPropertyListenerProc (Objective-C)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef int (*)(unsigned int, unsigned int, unsigned int, void *) AudioStreamPropertyListenerProc;
```

## Parameters

- `inStream`: The AudioStream whose property has changed.
- `inChannel`: The channel of the property that changed where 0 is the main channel.
- `inPropertyID`: The AudioDevicePropertyID of the property that changed.
- `inClientData`: A pointer to client data established when the listener proc was registered with the object.

<a id="return-value"></a>

## Return Value

The return value is currently unused and should always be 0.

<a id="discussion"></a>

## Discussion

Clients register an AudioStreamPropertyListenerProc with the AudioStream object in order to receive notifications when the properties of the object change.

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
- [AudioHardwarePropertyListenerProc](audiohardwarepropertylistenerproc.md)
- [AudioObjectID](audioobjectid.md)
- [AudioObjectPropertyElement](audioobjectpropertyelement.md)
- [AudioObjectPropertyListenerBlock](audioobjectpropertylistenerblock.md)
- [AudioObjectPropertyListenerProc](audioobjectpropertylistenerproc.md)
