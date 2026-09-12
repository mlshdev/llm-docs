> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondeviceproperties/transporttype-25qzh](https://developer.apple.com/documentation/coremediaio/cmioextensiondeviceproperties/transporttype-25qzh)

# transportType

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The transport type of the device, such as USB or HDMI.

## Declaration

```objectivec
@property (atomic, strong, nullable) NSNumber * transportType;
```

<a id="Discussion"></a>

## Discussion

The value is an IOKit framework transport type constant (`kIOAudioDeviceTransportType`).

The key for this property is [CMIOExtensionPropertyDeviceTransportType](../cmioextensionproperty/devicetransporttype.md).

## See Also

### Configuring Device Properties

- [model](model.md): A device model string.
- [linkedCoreAudioDeviceUID](linkedcoreaudiodeviceuid.md): A universal identifier of the audio device linked to this device.
- [suspended](suspended-2ja7h.md): A Boolean value that indicates whether the device is in a suspended state.
- [setPropertyState:forProperty:](setpropertystate%28__forproperty_%29.md): Sets the value of a device property.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a device.
