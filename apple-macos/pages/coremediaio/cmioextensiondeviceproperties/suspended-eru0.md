> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondeviceproperties/suspended-eru0](https://developer.apple.com/documentation/coremediaio/cmioextensiondeviceproperties/suspended-eru0)

# suspended

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+ · Xcode 13.0+

A Boolean value that indicates whether the device is in a suspended state.

## Declaration

```swift
@nonobjc var suspended: Bool? { get set }
```

<a id="Discussion"></a>

## Discussion

The key for this property is [deviceIsSuspended](../cmioextensionproperty/deviceissuspended.md).

## See Also

### Configuring Device Properties

- [model](model.md): A device model string.
- [linkedCoreAudioDeviceUID](linkedcoreaudiodeviceuid.md): A universal identifier of the audio device linked to this device.
- [transportType](transporttype-96gm.md): The transport type of the device, such as USB or HDMI.
- [setPropertyState(\_:forProperty:)](setpropertystate%28__forproperty_%29.md): Sets the value of a device property.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a device.
