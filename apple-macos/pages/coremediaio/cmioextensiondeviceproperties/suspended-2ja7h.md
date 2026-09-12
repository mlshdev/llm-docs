> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondeviceproperties/suspended-2ja7h](https://developer.apple.com/documentation/coremediaio/cmioextensiondeviceproperties/suspended-2ja7h)

# suspended

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A Boolean value that indicates whether the device is in a suspended state.

## Declaration

```objectivec
@property (atomic, strong, nullable) NSNumber * suspended;
```

<a id="Discussion"></a>

## Discussion

The key for this property is [CMIOExtensionPropertyDeviceIsSuspended](../cmioextensionproperty/deviceissuspended.md).

## See Also

### Configuring Device Properties

- [model](model.md): A device model string.
- [linkedCoreAudioDeviceUID](linkedcoreaudiodeviceuid.md): A universal identifier of the audio device linked to this device.
- [transportType](transporttype-25qzh.md): The transport type of the device, such as USB or HDMI.
- [setPropertyState:forProperty:](setpropertystate%28__forproperty_%29.md): Sets the value of a device property.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a device.
