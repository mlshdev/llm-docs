> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddeviceextensionrequesthandler/configuredevice(named:in:)](https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/configuredevice(named:in:))

# configureDevice(named:in:)

**Framework:** MatterSupport  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

Configures the device with selected attributes.

## Declaration

```swift
func configureDevice(named name: String, in room: MatterAddDeviceRequest.Room?) async
```

## Parameters

- `name`: The selected name for the device.
- `room`: The selected room for the device.

## See Also

### Configuring and validating the device

- [validateDeviceCredential(\_:)](validatedevicecredential%28__%29.md): Performs verification and attestation checks.
- [MatterAddDeviceExtensionRequestHandler.DeviceCredential](devicecredential.md): A collection of device credentials the device presents during commissioning.
- [rooms(in:)](rooms%28in_%29.md): Provides rooms that correspond to a home in the device setup.
