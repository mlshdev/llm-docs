> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevice/protocol-swift.enum](https://developer.apple.com/documentation/devicediscoveryextension/dddevice/protocol-swift.enum)

# DDDevice.Protocol (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

An identifier for the manner in which an app interacts with a device.

## Declaration

```swift
enum `Protocol`
```

<a id="overview"></a>

## Overview

The device ([DDDevice](../dddevice.md)) [protocol](protocol-swift.property.md) property is of this type.

## Topics

### Indicating a device protocol

- [DDDevice.Protocol.dial](protocol-swift.enum/dial.md): A protocol for client devices that stream media to a TV or set-top box.
- [DDDevice.Protocol.invalid](protocol-swift.enum/invalid.md): A default value for a device protocol.

### Initializers

- [init(rawValue:)](protocol-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Device information

- [DDDevice](../dddevice.md): An object that describes a discovered device of interest.
- [DDDevice.Category](category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceState](../dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString(\_:)](../dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString(\_:)](../dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDeviceProtocolToString(\_:)](../dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](../dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString(\_:)](../dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.

# DDDeviceProtocol (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

An identifier for the manner in which an app interacts with a device.

## Declaration

```objectivec
enum DDDeviceProtocol : NSInteger;
```

<a id="overview"></a>

## Overview

The device ([DDDevice](../dddevice.md)) [protocol](protocol-swift.property.md) property is of this type.

## Topics

### Indicating a device protocol

- [DDDeviceProtocolDIAL](protocol-swift.enum/dial.md): A protocol for client devices that stream media to a TV or set-top box.
- [DDDeviceProtocolInvalid](protocol-swift.enum/invalid.md): A default value for a device protocol.

## See Also

### Device information

- [DDDevice](../dddevice.md): An object that describes a discovered device of interest.
- [DDDeviceCategory](category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceState](../dddevicestate.md): A state that represents the level of user interaction with the device.
- [DDDeviceCategoryToString](../dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString](../dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDeviceProtocolToString](../dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](../dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString](../dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.
