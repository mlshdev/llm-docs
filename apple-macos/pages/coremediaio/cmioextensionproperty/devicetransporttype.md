> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproperty/devicetransporttype](https://developer.apple.com/documentation/coremediaio/cmioextensionproperty/devicetransporttype)

# deviceTransportType (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for the device transport type.

## Declaration

```swift
static let deviceTransportType: CMIOExtensionProperty
```

<a id="Discussion"></a>

## Discussion

The property state for this property is a number value that corresponds to an audio transport type (`kIOAudioDeviceTransportType`) that the IOKit framework defines.

## See Also

### Device Properties

- [deviceModel](devicemodel.md): A property key for the device model.
- [deviceIsSuspended](deviceissuspended.md): A property key for a Boolean value that indicates whether the device is in a suspended state.
- [deviceLinkedCoreAudioDeviceUID](devicelinkedcoreaudiodeviceuid.md): A property key for the UID of the linked Core Audio device.
- [deviceCanBeDefaultInputDevice](devicecanbedefaultinputdevice.md): A property key for a Boolean value that indicates whether the device can be a default input device.
- [deviceCanBeDefaultOutputDevice](devicecanbedefaultoutputdevice.md): A property key for a Boolean value that indicates whether the device can be a default output device.

# CMIOExtensionPropertyDeviceTransportType (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for the device transport type.

## Declaration

```objectivec
extern CMIOExtensionProperty const CMIOExtensionPropertyDeviceTransportType;
```

<a id="Discussion"></a>

## Discussion

The property state for this property is a number value that corresponds to an audio transport type (`kIOAudioDeviceTransportType`) that the IOKit framework defines.

## See Also

### Device Properties

- [CMIOExtensionPropertyDeviceModel](devicemodel.md): A property key for the device model.
- [CMIOExtensionPropertyDeviceIsSuspended](deviceissuspended.md): A property key for a Boolean value that indicates whether the device is in a suspended state.
- [CMIOExtensionPropertyDeviceLinkedCoreAudioDeviceUID](devicelinkedcoreaudiodeviceuid.md): A property key for the UID of the linked Core Audio device.
- [CMIOExtensionPropertyDeviceCanBeDefaultInputDevice](devicecanbedefaultinputdevice.md): A property key for a Boolean value that indicates whether the device can be a default input device.
- [CMIOExtensionPropertyDeviceCanBeDefaultOutputDevice](devicecanbedefaultoutputdevice.md): A property key for a Boolean value that indicates whether the device can be a default output device.
