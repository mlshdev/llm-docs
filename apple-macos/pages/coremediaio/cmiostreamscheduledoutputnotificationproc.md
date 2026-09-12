> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmiostreamscheduledoutputnotificationproc](https://developer.apple.com/documentation/coremediaio/cmiostreamscheduledoutputnotificationproc)

# CMIOStreamScheduledOutputNotificationProc (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```swift
typealias CMIOStreamScheduledOutputNotificationProc = (UInt64, UInt64, UnsafeMutableRawPointer?) -> Void
```

## See Also

### Data Types

- [CMIOClassID](cmioclassid.md)
- [CMIOControlID](cmiocontrolid.md)
- [CMIODeviceGetSMPTETimeProc](cmiodevicegetsmptetimeproc.md)
- [CMIODeviceID](cmiodeviceid.md)
- [CMIODevicePropertyID](cmiodevicepropertyid.md)
- [CMIODeviceStreamQueueAlteredProc](cmiodevicestreamqueuealteredproc.md)
- [CMIOHardwarePropertyID](cmiohardwarepropertyid.md)
- [CMIOObjectID](cmioobjectid.md)
- [CMIOObjectPropertyElement](cmioobjectpropertyelement.md)
- [CMIOObjectPropertyListenerBlock](cmioobjectpropertylistenerblock.md)
- [CMIOObjectPropertyListenerProc](cmioobjectpropertylistenerproc.md)
- [CMIOObjectPropertyScope](cmioobjectpropertyscope.md)
- [CMIOObjectPropertySelector](cmioobjectpropertyselector.md)
- [CMIOStreamID](cmiostreamid.md)
- [CMIOExtensionProperty](cmioextensionproperty.md): A structure that defines the properties that providers, devices, and streams support.

# CMIOStreamScheduledOutputNotificationProc (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
typedef void (*)(unsigned long long, unsigned long long, void *) CMIOStreamScheduledOutputNotificationProc;
```

## See Also

### Data Types

- [CMIOClassID](cmioclassid.md)
- [CMIOControlID](cmiocontrolid.md)
- [CMIODeviceGetSMPTETimeProc](cmiodevicegetsmptetimeproc.md)
- [CMIODeviceID](cmiodeviceid.md)
- [CMIODevicePropertyID](cmiodevicepropertyid.md)
- [CMIODeviceStreamQueueAlteredProc](cmiodevicestreamqueuealteredproc.md)
- [CMIOHardwarePlugInRef](cmiohardwarepluginref.md)
- [CMIOHardwarePropertyID](cmiohardwarepropertyid.md)
- [CMIOObjectID](cmioobjectid.md)
- [CMIOObjectPropertyElement](cmioobjectpropertyelement.md)
- [CMIOObjectPropertyListenerBlock](cmioobjectpropertylistenerblock.md)
- [CMIOObjectPropertyListenerProc](cmioobjectpropertylistenerproc.md)
- [CMIOObjectPropertyScope](cmioobjectpropertyscope.md)
- [CMIOObjectPropertySelector](cmioobjectpropertyselector.md)
- [CMIOStreamID](cmiostreamid.md)
