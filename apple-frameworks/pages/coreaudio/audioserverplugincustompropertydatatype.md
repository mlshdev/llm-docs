> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioserverplugincustompropertydatatype](https://developer.apple.com/documentation/coreaudio/audioserverplugincustompropertydatatype)

# AudioServerPlugInCustomPropertyDataType

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The set of data types the Host knows how to marshal between the server and the client.

## Declaration

```objectivec
typedef UInt32 AudioServerPlugInCustomPropertyDataType;
```

<a id="discussion"></a>

## Discussion

These are the only types supported for custom properties. See [AudioServerPlugInCustomPropertyInfo](audioserverplugincustompropertyinfo.md) for more information.

- **`kAudioServerPlugInCustomPropertyDataTypeNone`**: This is used to declare that the property doesn’t have any property or qualifier data.
- **`kAudioServerPlugInCustomPropertyDataTypeCFString`**: The property/qualifier data is a CFStringRef.
- **`kAudioServerPlugInCustomPropertyDataTypeCFPropertyList`**: The property/qualifier data is a CFPropertyListRef.

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
