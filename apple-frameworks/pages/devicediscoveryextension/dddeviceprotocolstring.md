> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddeviceprotocolstring](https://developer.apple.com/documentation/devicediscoveryextension/dddeviceprotocolstring)

# DDDeviceProtocolString (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

String values for the manner in which an app interacts with a device.

## Declaration

```swift
struct DDDeviceProtocolString
```

<a id="Discussion"></a>

## Discussion

When an app creates a device discovery extension to stream content to a third-party media receiver, the protocol is Discovery and Launch (DIAL), as designated by the [DDDevice.Protocol.dial](dddevice/protocol-swift.enum/dial.md) option.

## Topics

### Creating a device protocol string

- [init(rawValue:)](dddeviceprotocolstring/init%28rawvalue_%29.md): Creates a string for the manner in which an app interacts with a device.

### Specifying a device protocol string

- [dial](dddeviceprotocolstring/dial.md): A human-readable string for the Discovery and Launch protocol.
- [invalid](dddeviceprotocolstring/invalid.md): A human-readable string for the default device protocol.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Device information

- [DDDevice](dddevice.md): An object that describes a discovered device of interest.
- [DDDevice.Category](dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceState](dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString(\_:)](dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString(\_:)](dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDevice.Protocol](dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString(\_:)](dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceMediaPlaybackStateToString(\_:)](dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.

# DDDeviceProtocolString (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

String values for the manner in which an app interacts with a device.

## Declaration

```objectivec
typedef NSString * DDDeviceProtocolString;
```

<a id="Discussion"></a>

## Discussion

When an app creates a device discovery extension to stream content to a third-party media receiver, the protocol is Discovery and Launch (DIAL), as designated by the [DDDeviceProtocolDIAL](dddevice/protocol-swift.enum/dial.md) option.

## Topics

### Specifying a device protocol string

- [DDDeviceProtocolStringDIAL](dddeviceprotocolstring/dial.md): A human-readable string for the Discovery and Launch protocol.
- [DDDeviceProtocolStringInvalid](dddeviceprotocolstring/invalid.md): A human-readable string for the default device protocol.

## See Also

### Device information

- [DDDevice](dddevice.md): An object that describes a discovered device of interest.
- [DDDeviceCategory](dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceState](dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString](dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString](dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDeviceProtocol](dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString](dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceMediaPlaybackStateToString](dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.
