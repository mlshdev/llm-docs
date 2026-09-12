> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproperty](https://developer.apple.com/documentation/coremediaio/cmioextensionproperty)

# CMIOExtensionProperty (Swift)

**Framework:** Core Media I/O  
**Kind:** Structure  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A structure that defines the properties that providers, devices, and streams support.

## Declaration

```swift
struct CMIOExtensionProperty
```

## Topics

### Provider Properties

- [providerName](cmioextensionproperty/providername.md): A property key for the provider name.
- [providerManufacturer](cmioextensionproperty/providermanufacturer.md): A property key for the provider manufacturer.

### Device Properties

- [deviceModel](cmioextensionproperty/devicemodel.md): A property key for the device model.
- [deviceIsSuspended](cmioextensionproperty/deviceissuspended.md): A property key for a Boolean value that indicates whether the device is in a suspended state.
- [deviceTransportType](cmioextensionproperty/devicetransporttype.md): A property key for the device transport type.
- [deviceLinkedCoreAudioDeviceUID](cmioextensionproperty/devicelinkedcoreaudiodeviceuid.md): A property key for the UID of the linked Core Audio device.
- [deviceCanBeDefaultInputDevice](cmioextensionproperty/devicecanbedefaultinputdevice.md): A property key for a Boolean value that indicates whether the device can be a default input device.
- [deviceCanBeDefaultOutputDevice](cmioextensionproperty/devicecanbedefaultoutputdevice.md): A property key for a Boolean value that indicates whether the device can be a default output device.

### Stream Properties

- [streamActiveFormatIndex](cmioextensionproperty/streamactiveformatindex.md): A property key for the index of the active stream format.
- [streamFrameDuration](cmioextensionproperty/streamframeduration.md): A property key for the frame duration.
- [streamMaxFrameDuration](cmioextensionproperty/streammaxframeduration.md): A property key for the maximum frame duration.
- [streamSinkBufferQueueSize](cmioextensionproperty/streamsinkbufferqueuesize.md): A property key for the sink buffer queue size.
- [streamSinkBuffersRequiredForStartup](cmioextensionproperty/streamsinkbuffersrequiredforstartup.md): A property key for the number of buffers required for startup.
- [streamSinkBufferUnderrunCount](cmioextensionproperty/streamsinkbufferunderruncount.md): A property key for the buffer underrun count.
- [streamSinkEndOfData](cmioextensionproperty/streamsinkendofdata.md): A property key for a Boolean value that indicates whether the stream has more data.

### Type Properties

- [deviceLatency](cmioextensionproperty/devicelatency.md)
- [streamLatency](cmioextensionproperty/streamlatency.md)
- [init(rawValue:)](cmioextensionproperty/init%28rawvalue_%29.md): Creates a property with a raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Properties

- [CMIOExtensionPropertyState](cmioextensionpropertystate.md): An object that describes the state of a property.
- [CMIOExtensionPropertyAttributes](cmioextensionpropertyattributes.md): An object that describes the attributes of a property.
- [CMIOExtensionInfoDictionaryKey](cmioextensioninfodictionarykey.md): A key that specifies the extension information dictionary.
- [CMIOExtensionMachServiceNameKey](cmioextensionmachservicenamekey.md): A key that specifies the mach service name.

# CMIOExtensionProperty (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A structure that defines the properties that providers, devices, and streams support.

## Declaration

```objectivec
typedef NSString * CMIOExtensionProperty;
```

## Topics

### Provider Properties

- [CMIOExtensionPropertyProviderName](cmioextensionproperty/providername.md): A property key for the provider name.
- [CMIOExtensionPropertyProviderManufacturer](cmioextensionproperty/providermanufacturer.md): A property key for the provider manufacturer.

### Device Properties

- [CMIOExtensionPropertyDeviceModel](cmioextensionproperty/devicemodel.md): A property key for the device model.
- [CMIOExtensionPropertyDeviceIsSuspended](cmioextensionproperty/deviceissuspended.md): A property key for a Boolean value that indicates whether the device is in a suspended state.
- [CMIOExtensionPropertyDeviceTransportType](cmioextensionproperty/devicetransporttype.md): A property key for the device transport type.
- [CMIOExtensionPropertyDeviceLinkedCoreAudioDeviceUID](cmioextensionproperty/devicelinkedcoreaudiodeviceuid.md): A property key for the UID of the linked Core Audio device.
- [CMIOExtensionPropertyDeviceCanBeDefaultInputDevice](cmioextensionproperty/devicecanbedefaultinputdevice.md): A property key for a Boolean value that indicates whether the device can be a default input device.
- [CMIOExtensionPropertyDeviceCanBeDefaultOutputDevice](cmioextensionproperty/devicecanbedefaultoutputdevice.md): A property key for a Boolean value that indicates whether the device can be a default output device.

### Stream Properties

- [CMIOExtensionPropertyStreamActiveFormatIndex](cmioextensionproperty/streamactiveformatindex.md): A property key for the index of the active stream format.
- [CMIOExtensionPropertyStreamFrameDuration](cmioextensionproperty/streamframeduration.md): A property key for the frame duration.
- [CMIOExtensionPropertyStreamMaxFrameDuration](cmioextensionproperty/streammaxframeduration.md): A property key for the maximum frame duration.
- [CMIOExtensionPropertyStreamSinkBufferQueueSize](cmioextensionproperty/streamsinkbufferqueuesize.md): A property key for the sink buffer queue size.
- [CMIOExtensionPropertyStreamSinkBuffersRequiredForStartup](cmioextensionproperty/streamsinkbuffersrequiredforstartup.md): A property key for the number of buffers required for startup.
- [CMIOExtensionPropertyStreamSinkBufferUnderrunCount](cmioextensionproperty/streamsinkbufferunderruncount.md): A property key for the buffer underrun count.
- [CMIOExtensionPropertyStreamSinkEndOfData](cmioextensionproperty/streamsinkendofdata.md): A property key for a Boolean value that indicates whether the stream has more data.

### Type Properties

- [CMIOExtensionPropertyDeviceLatency](cmioextensionproperty/devicelatency.md)
- [CMIOExtensionPropertyStreamLatency](cmioextensionproperty/streamlatency.md)

## See Also

### Properties

- [CMIOExtensionPropertyState](cmioextensionpropertystate.md): An object that describes the state of a property.
- [CMIOExtensionPropertyAttributes](cmioextensionpropertyattributes.md): An object that describes the attributes of a property.
- [CMIOExtensionInfoDictionaryKey](cmioextensioninfodictionarykey.md): A key that specifies the extension information dictionary.
- [CMIOExtensionMachServiceNameKey](cmioextensionmachservicenamekey.md): A key that specifies the mach service name.
