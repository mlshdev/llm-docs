> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/dddevicepairingaccess](https://developer.apple.com/documentation/devicediscoveryui/dddevicepairingaccess)

# DDDevicePairingAccess

**Framework:** DeviceDiscoveryUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Specifies the access level requested for device discovery.

## Declaration

```swift
struct DDDevicePairingAccess
```

## Topics

### Type Properties

- [default](dddevicepairingaccess/default.md): Use the system’s default access for the device selected by the user.
- [permanent](dddevicepairingaccess/permanent.md): Grant the app permanent access to the device selected by the user for future use.

## See Also

### Publishing service availability

- [Building peer-to-peer apps](https://developer.apple.com/documentation/wifiaware/building-peer-to-peer-apps): Communicate with nearby devices over a secure, high-throughput, low-latency connection by using Wi-Fi Aware.
- [DevicePairingView](devicepairingview.md): A control that allows a user to become discoverable and advertise to local devices.
- [DDDevicePairingViewController](dddevicepairingviewcontroller.md): A UIKit view that displays and manages the device discovery and pairing process.
- [NSApplicationServices](../bundleresources/information-property-list/nsapplicationservices.md): A list of service providers and the devices that they support.
