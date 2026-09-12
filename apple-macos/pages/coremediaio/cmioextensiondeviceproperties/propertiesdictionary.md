> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondeviceproperties/propertiesdictionary](https://developer.apple.com/documentation/coremediaio/cmioextensiondeviceproperties/propertiesdictionary)

# propertiesDictionary (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A dictionary of properties for a device.

## Declaration

```swift
var propertiesDictionary: [CMIOExtensionProperty : CMIOExtensionPropertyState<AnyObject>] { get set }
```

## See Also

### Configuring Device Properties

- [model](model.md): A device model string.
- [linkedCoreAudioDeviceUID](linkedcoreaudiodeviceuid.md): A universal identifier of the audio device linked to this device.
- [transportType](transporttype-96gm.md): The transport type of the device, such as USB or HDMI.
- [suspended](suspended-eru0.md): A Boolean value that indicates whether the device is in a suspended state.
- [setPropertyState(\_:forProperty:)](setpropertystate%28__forproperty_%29.md): Sets the value of a device property.

# propertiesDictionary (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A dictionary of properties for a device.

## Declaration

```objectivec
@property (atomic, copy) NSDictionary<NSString *,CMIOExtensionPropertyState *> * propertiesDictionary;
```

## See Also

### Configuring Device Properties

- [model](model.md): A device model string.
- [linkedCoreAudioDeviceUID](linkedcoreaudiodeviceuid.md): A universal identifier of the audio device linked to this device.
- [transportType](transporttype-25qzh.md): The transport type of the device, such as USB or HDMI.
- [suspended](suspended-2ja7h.md): A Boolean value that indicates whether the device is in a suspended state.
- [setPropertyState:forProperty:](setpropertystate%28__forproperty_%29.md): Sets the value of a device property.
