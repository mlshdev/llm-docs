> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondeviceproperties/linkedcoreaudiodeviceuid](https://developer.apple.com/documentation/coremediaio/cmioextensiondeviceproperties/linkedcoreaudiodeviceuid)

# linkedCoreAudioDeviceUID (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A universal identifier of the audio device linked to this device.

## Declaration

```swift
var linkedCoreAudioDeviceUID: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The key for this property is [deviceLinkedCoreAudioDeviceUID](../cmioextensionproperty/devicelinkedcoreaudiodeviceuid.md).

## See Also

### Configuring Device Properties

- [model](model.md): A device model string.
- [transportType](transporttype-96gm.md): The transport type of the device, such as USB or HDMI.
- [suspended](suspended-eru0.md): A Boolean value that indicates whether the device is in a suspended state.
- [setPropertyState(\_:forProperty:)](setpropertystate%28__forproperty_%29.md): Sets the value of a device property.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a device.

# linkedCoreAudioDeviceUID (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A universal identifier of the audio device linked to this device.

## Declaration

```objectivec
@property (atomic, strong, nullable) NSString * linkedCoreAudioDeviceUID;
```

<a id="Discussion"></a>

## Discussion

The key for this property is [CMIOExtensionPropertyDeviceLinkedCoreAudioDeviceUID](../cmioextensionproperty/devicelinkedcoreaudiodeviceuid.md).

## See Also

### Configuring Device Properties

- [model](model.md): A device model string.
- [transportType](transporttype-25qzh.md): The transport type of the device, such as USB or HDMI.
- [suspended](suspended-2ja7h.md): A Boolean value that indicates whether the device is in a suspended state.
- [setPropertyState:forProperty:](setpropertystate%28__forproperty_%29.md): Sets the value of a device property.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a device.
