> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddevicestate/activating](https://developer.apple.com/documentation/devicediscoveryextension/dddevicestate/activating)

# DDDeviceState.activating (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A state that indicates when the user selects the device in the picker UI.

## Declaration

```swift
case activating
```

## See Also

### Communicating a device’s status

- [DDDeviceState.invalid](invalid.md): A state that indicates the device is invalid or that the user disapproves of the device.
- [DDDeviceState.activated](activated.md): A state that indicates when the user authorizes the device and the app connects to the device.
- [DDDeviceState.authorized](authorized.md): A state that indicates when the user authorizes the device.
- [DDDeviceState.invalidating](invalidating.md): A state that indicates that the device is soon to be invalid.

# DDDeviceStateActivating (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A state that indicates when the user selects the device in the picker UI.

## Declaration

```objectivec
DDDeviceStateActivating
```

## See Also

### Communicating a device’s status

- [DDDeviceStateInvalid](invalid.md): A state that indicates the device is invalid or that the user disapproves of the device.
- [DDDeviceStateActivated](activated.md): A state that indicates when the user authorizes the device and the app connects to the device.
- [DDDeviceStateAuthorized](authorized.md): A state that indicates when the user authorizes the device.
- [DDDeviceStateInvalidating](invalidating.md): A state that indicates that the device is soon to be invalid.
