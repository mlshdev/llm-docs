> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/devicepairingview](https://developer.apple.com/documentation/devicediscoveryui/devicepairingview)

# DevicePairingView

**Framework:** DeviceDiscoveryUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A control that allows a user to become discoverable and advertise to local devices.

## Declaration

```swift
@MainActor @preconcurrency struct DevicePairingView<Label, Fallback> where Label : View, Fallback : View
```

<a id="overview"></a>

## Overview

A `DevicePairingView` should be used to become discoverable to local devices from the user through a button interface.

## Topics

### Initializers

- [init(\_:access:label:fallback:)](devicepairingview/init%28__access_label_fallback_%29.md): Creates a `DevicePairingView` which, when pressed, will display a local device advertiser interface.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Publishing service availability

- [Building peer-to-peer apps](https://developer.apple.com/documentation/wifiaware/building-peer-to-peer-apps): Communicate with nearby devices over a secure, high-throughput, low-latency connection by using Wi-Fi Aware.
- [DDDevicePairingViewController](dddevicepairingviewcontroller.md): A UIKit view that displays and manages the device discovery and pairing process.
- [DDDevicePairingAccess](dddevicepairingaccess.md): Specifies the access level requested for device discovery.
- [NSApplicationServices](../bundleresources/information-property-list/nsapplicationservices.md): A list of service providers and the devices that they support.
