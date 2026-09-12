> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproperty/deviceissuspended](https://developer.apple.com/documentation/coremediaio/cmioextensionproperty/deviceissuspended)

# deviceIsSuspended (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for a Boolean value that indicates whether the device is in a suspended state.

## Declaration

```swift
static let deviceIsSuspended: CMIOExtensionProperty
```

<a id="Discussion"></a>

## Discussion

An example of when a device may be in a suspended state is when a user closes their laptop. While suspended, the device continues to respond to requests as if it were active, but the stream doesn’t provide any data.

The property state for this property is a number that represents a Boolean value.

## See Also

### Device Properties

- [deviceModel](devicemodel.md): A property key for the device model.
- [deviceTransportType](devicetransporttype.md): A property key for the device transport type.
- [deviceLinkedCoreAudioDeviceUID](devicelinkedcoreaudiodeviceuid.md): A property key for the UID of the linked Core Audio device.
- [deviceCanBeDefaultInputDevice](devicecanbedefaultinputdevice.md): A property key for a Boolean value that indicates whether the device can be a default input device.
- [deviceCanBeDefaultOutputDevice](devicecanbedefaultoutputdevice.md): A property key for a Boolean value that indicates whether the device can be a default output device.

# CMIOExtensionPropertyDeviceIsSuspended (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for a Boolean value that indicates whether the device is in a suspended state.

## Declaration

```objectivec
extern CMIOExtensionProperty const CMIOExtensionPropertyDeviceIsSuspended;
```

<a id="Discussion"></a>

## Discussion

An example of when a device may be in a suspended state is when a user closes their laptop. While suspended, the device continues to respond to requests as if it were active, but the stream doesn’t provide any data.

The property state for this property is a number that represents a Boolean value.

## See Also

### Device Properties

- [CMIOExtensionPropertyDeviceModel](devicemodel.md): A property key for the device model.
- [CMIOExtensionPropertyDeviceTransportType](devicetransporttype.md): A property key for the device transport type.
- [CMIOExtensionPropertyDeviceLinkedCoreAudioDeviceUID](devicelinkedcoreaudiodeviceuid.md): A property key for the UID of the linked Core Audio device.
- [CMIOExtensionPropertyDeviceCanBeDefaultInputDevice](devicecanbedefaultinputdevice.md): A property key for a Boolean value that indicates whether the device can be a default input device.
- [CMIOExtensionPropertyDeviceCanBeDefaultOutputDevice](devicecanbedefaultoutputdevice.md): A property key for a Boolean value that indicates whether the device can be a default output device.
