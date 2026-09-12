> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevicestate](https://developer.apple.com/documentation/devicediscoveryextension/dddevicestate)

# DDDeviceState (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A state that represents the level of user interaction with the device.

## Declaration

```swift
enum DDDeviceState
```

<a id="overview"></a>

## Overview

The device ([DDDevice](dddevice.md)) [state](dddevice/state.md) property is of this type.

## Topics

### Communicating a device’s status

- [DDDeviceState.invalid](dddevicestate/invalid.md): A state that indicates the device is invalid or that the user disapproves of the device.
- [DDDeviceState.activating](dddevicestate/activating.md): A state that indicates when the user selects the device in the picker UI.
- [DDDeviceState.activated](dddevicestate/activated.md): A state that indicates when the user authorizes the device and the app connects to the device.
- [DDDeviceState.authorized](dddevicestate/authorized.md): A state that indicates when the user authorizes the device.
- [DDDeviceState.invalidating](dddevicestate/invalidating.md): A state that indicates that the device is soon to be invalid.

### Initializers

- [init(rawValue:)](dddevicestate/init%28rawvalue_%29.md)

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

- [DDDevice](dddevice.md): An object that describes a discovered device of interest.
- [DDDevice.Category](dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceCategoryToString(\_:)](dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString(\_:)](dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDevice.Protocol](dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString(\_:)](dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString(\_:)](dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.

# DDDeviceState (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A state that represents the level of user interaction with the device.

## Declaration

```objectivec
enum DDDeviceState : NSInteger;
```

<a id="overview"></a>

## Overview

The device ([DDDevice](dddevice.md)) [state](dddevice/state.md) property is of this type.

## Topics

### Communicating a device’s status

- [DDDeviceStateInvalid](dddevicestate/invalid.md): A state that indicates the device is invalid or that the user disapproves of the device.
- [DDDeviceStateActivating](dddevicestate/activating.md): A state that indicates when the user selects the device in the picker UI.
- [DDDeviceStateActivated](dddevicestate/activated.md): A state that indicates when the user authorizes the device and the app connects to the device.
- [DDDeviceStateAuthorized](dddevicestate/authorized.md): A state that indicates when the user authorizes the device.
- [DDDeviceStateInvalidating](dddevicestate/invalidating.md): A state that indicates that the device is soon to be invalid.

## See Also

### Device information

- [DDDevice](dddevice.md): An object that describes a discovered device of interest.
- [DDDeviceCategory](dddevice/category-swift.enum.md): An option that determines the icon for the device in the picker UI.
- [DDDeviceCategoryToString](dddevicecategorytostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s category.
- [DDDeviceStateToString](dddevicestatetostring%28__%29.md): Returns human-readable text for the specified identifier that describes a device’s status.
- [DDDeviceProtocol](dddevice/protocol-swift.enum.md): An identifier for the manner in which an app interacts with a device.
- [DDDeviceProtocolToString](dddeviceprotocoltostring%28__%29.md): Returns human-readable text for the specified protocol identifier.
- [DDDeviceProtocolString](dddeviceprotocolstring.md): String values for the manner in which an app interacts with a device.
- [DDDeviceMediaPlaybackStateToString](dddevicemediaplaybackstatetostring%28__%29.md): Returns human-readable text for the specified media playback state.
