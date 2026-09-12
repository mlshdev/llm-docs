> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproperty/devicemodel](https://developer.apple.com/documentation/coremediaio/cmioextensionproperty/devicemodel)

# deviceModel (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for the device model.

## Declaration

```swift
static let deviceModel: CMIOExtensionProperty
```

<a id="Discussion"></a>

## Discussion

The property state for this property is a string with a read-only attribute.

## See Also

### Device Properties

- [deviceIsSuspended](deviceissuspended.md): A property key for a Boolean value that indicates whether the device is in a suspended state.
- [deviceTransportType](devicetransporttype.md): A property key for the device transport type.
- [deviceLinkedCoreAudioDeviceUID](devicelinkedcoreaudiodeviceuid.md): A property key for the UID of the linked Core Audio device.
- [deviceCanBeDefaultInputDevice](devicecanbedefaultinputdevice.md): A property key for a Boolean value that indicates whether the device can be a default input device.
- [deviceCanBeDefaultOutputDevice](devicecanbedefaultoutputdevice.md): A property key for a Boolean value that indicates whether the device can be a default output device.

# CMIOExtensionPropertyDeviceModel (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for the device model.

## Declaration

```objectivec
extern CMIOExtensionProperty const CMIOExtensionPropertyDeviceModel;
```

<a id="Discussion"></a>

## Discussion

The property state for this property is a string with a read-only attribute.

## See Also

### Device Properties

- [CMIOExtensionPropertyDeviceIsSuspended](deviceissuspended.md): A property key for a Boolean value that indicates whether the device is in a suspended state.
- [CMIOExtensionPropertyDeviceTransportType](devicetransporttype.md): A property key for the device transport type.
- [CMIOExtensionPropertyDeviceLinkedCoreAudioDeviceUID](devicelinkedcoreaudiodeviceuid.md): A property key for the UID of the linked Core Audio device.
- [CMIOExtensionPropertyDeviceCanBeDefaultInputDevice](devicecanbedefaultinputdevice.md): A property key for a Boolean value that indicates whether the device can be a default input device.
- [CMIOExtensionPropertyDeviceCanBeDefaultOutputDevice](devicecanbedefaultoutputdevice.md): A property key for a Boolean value that indicates whether the device can be a default output device.
