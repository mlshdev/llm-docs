> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiodeviceid

# AudioDeviceID (Swift)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
typealias AudioDeviceID = AudioObjectID
```

<a id="discussion"></a>

## Discussion

AudioDevice is the base class for all objects that represent an audio device.

AudioDevice is a subclass of AudioObject. AudioDevices normally contain AudioStreams and AudioControls, but may contain other things depending on the kind of AudioDevice (e.g. aggregate devices contain other AudioDevices).

## See Also

### Data Types

- [AudioClassID](audioclassid.md)
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
- [AudioStreamID](audiostreamid.md)

# AudioDeviceID (Objective-C)

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef AudioObjectID AudioDeviceID;
```

<a id="discussion"></a>

## Discussion

AudioDevice is the base class for all objects that represent an audio device.

AudioDevice is a subclass of AudioObject. AudioDevices normally contain AudioStreams and AudioControls, but may contain other things depending on the kind of AudioDevice (e.g. aggregate devices contain other AudioDevices).

## See Also

### Data Types

- [AudioClassID](audioclassid.md)
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
- [AudioObjectPropertyScope](audioobjectpropertyscope.md)
