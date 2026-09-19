> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicediscoveryextension/dddevicestate/authorized

# DDDeviceState.authorized (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A state that indicates when the user authorizes the device.

## Declaration

```swift
case authorized
```

## See Also

### Communicating a device’s status

- [DDDeviceState.invalid](invalid.md): A state that indicates the device is invalid or that the user disapproves of the device.
- [DDDeviceState.activating](activating.md): A state that indicates when the user selects the device in the picker UI.
- [DDDeviceState.activated](activated.md): A state that indicates when the user authorizes the device and the app connects to the device.
- [DDDeviceState.invalidating](invalidating.md): A state that indicates that the device is soon to be invalid.

# DDDeviceStateAuthorized (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A state that indicates when the user authorizes the device.

## Declaration

```objectivec
DDDeviceStateAuthorized
```

## See Also

### Communicating a device’s status

- [DDDeviceStateInvalid](invalid.md): A state that indicates the device is invalid or that the user disapproves of the device.
- [DDDeviceStateActivating](activating.md): A state that indicates when the user selects the device in the picker UI.
- [DDDeviceStateActivated](activated.md): A state that indicates when the user authorizes the device and the app connects to the device.
- [DDDeviceStateInvalidating](invalidating.md): A state that indicates that the device is soon to be invalid.
