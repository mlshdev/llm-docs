> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondeviceproperties/model](https://developer.apple.com/documentation/coremediaio/cmioextensiondeviceproperties/model)

# model (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A device model string.

## Declaration

```swift
var model: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The key for this property is [deviceModel](../cmioextensionproperty/devicemodel.md).

## See Also

### Configuring Device Properties

- [linkedCoreAudioDeviceUID](linkedcoreaudiodeviceuid.md): A universal identifier of the audio device linked to this device.
- [transportType](transporttype-96gm.md): The transport type of the device, such as USB or HDMI.
- [suspended](suspended-eru0.md): A Boolean value that indicates whether the device is in a suspended state.
- [setPropertyState(\_:forProperty:)](setpropertystate%28__forproperty_%29.md): Sets the value of a device property.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a device.

# model (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A device model string.

## Declaration

```objectivec
@property (atomic, strong, nullable) NSString * model;
```

<a id="Discussion"></a>

## Discussion

The key for this property is [CMIOExtensionPropertyDeviceModel](../cmioextensionproperty/devicemodel.md).

## See Also

### Configuring Device Properties

- [linkedCoreAudioDeviceUID](linkedcoreaudiodeviceuid.md): A universal identifier of the audio device linked to this device.
- [transportType](transporttype-25qzh.md): The transport type of the device, such as USB or HDMI.
- [suspended](suspended-2ja7h.md): A Boolean value that indicates whether the device is in a suspended state.
- [setPropertyState:forProperty:](setpropertystate%28__forproperty_%29.md): Sets the value of a device property.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a device.
