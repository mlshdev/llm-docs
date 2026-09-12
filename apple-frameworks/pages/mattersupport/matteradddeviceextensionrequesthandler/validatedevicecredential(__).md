> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddeviceextensionrequesthandler/validatedevicecredential(_:)](https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/validatedevicecredential(_:))

# validateDeviceCredential(\_:)

**Framework:** MatterSupport  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

Performs verification and attestation checks.

## Declaration

```swift
func validateDeviceCredential(_ deviceCredential: MatterAddDeviceExtensionRequestHandler.DeviceCredential) async throws
```

<a id="Overview"></a>

## Overview

Override this method to perform additional verification and attestation checks, which execute after Apple’s built-in device attestation checks. If either attestation fails as indicated by an exception thrown here, a warning dialog appears before proceeding.

This is the first callback that the system invokes during the setup flow. It runs after selecting a device but before commissioning, and can abort commissioning if the credential is rejected by throwing an exception.

## See Also

### Configuring and validating the device

- [configureDevice(named:in:)](configuredevice%28named_in_%29.md): Configures the device with selected attributes.
- [MatterAddDeviceExtensionRequestHandler.DeviceCredential](devicecredential.md): A collection of device credentials the device presents during commissioning.
- [rooms(in:)](rooms%28in_%29.md): Provides rooms that correspond to a home in the device setup.
