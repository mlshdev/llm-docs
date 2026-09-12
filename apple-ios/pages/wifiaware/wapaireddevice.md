> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapaireddevice](https://developer.apple.com/documentation/wifiaware/wapaireddevice)

# WAPairedDevice

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A known Wi-Fi Aware device that your app can connect to.

## Declaration

```swift
struct WAPairedDevice
```

<a id="overview"></a>

## Overview

Your app may request the system securely pair and grant access to remote devices. Use [AccessorySetupKit](https://developer.apple.com/documentation/accessorysetupkit/) or [DeviceDiscoveryUI](https://developer.apple.com/documentation/devicediscoveryui) to add the devices to the set of `WAPairedDevice.Devices` that your app may connect to on-demand. The list of paired devices can change over time as a person adds and removes devices from the system.

## Topics

### Selecting from your app’s paired devices

- [WAPairedDevice.Devices](wapaireddevice/devices.md): A dictionary holding a snapshot of currently paired devices accessible and known to your app.
- [allDevices](wapaireddevice/alldevices.md): Provides a snapshot of all the paired devices known to your app.
- [allDevices(matching:)](wapaireddevice/alldevices%28matching_%29.md): Provides a snapshot of all the paired devices known to your app.
- [WAPairedDevice.DevicesSequence](wapaireddevice/devicessequence.md): A sequence that vends updates to a paired device list, as the list changes.

### Getting the app-specific identifier

- [WAPairedDevice.ID](wapaireddevice/id-swift.typealias.md): A type of value that uniquely identifies the paired device.
- [id](wapaireddevice/id-swift.property.md): A stable ID that you can use to uniquely identify a device.

### Getting the configured device name

- [name](wapaireddevice/name.md): The user-provided name of the device as a string, or `nil` if not available.

### Getting pairing-related device data

- [pairingInfo](wapaireddevice/pairinginfo-swift.property.md): The unauthenticated information provided by the device before a person pairs it for the first time.
- [WAPairedDevice.PairingInfo](wapaireddevice/pairinginfo-swift.struct.md): A collection of unauthenticated information the system receives from a device before it’s paired for the first time.

### Getting a string description

- [description](wapaireddevice/description.md): A string description of the publisher.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Paired devices

- [WAPairedDevice.Devices](wapaireddevice/devices.md): A dictionary holding a snapshot of currently paired devices accessible and known to your app.
- [WAPairedDevice.DevicesSequence](wapaireddevice/devicessequence.md): A sequence that vends updates to a paired device list, as the list changes.
- [WAPairedDevice.PairingInfo](wapaireddevice/pairinginfo-swift.struct.md): A collection of unauthenticated information the system receives from a device before it’s paired for the first time.
