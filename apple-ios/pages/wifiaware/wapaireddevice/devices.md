> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapaireddevice/devices](https://developer.apple.com/documentation/wifiaware/wapaireddevice/devices)

# WAPairedDevice.Devices

**Framework:** Wi-Fi Aware  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A dictionary holding a snapshot of currently paired devices accessible and known to your app.

## Declaration

```swift
typealias Devices = [WAPairedDevice.ID : WAPairedDevice]
```

## Mentioned In

- [Connecting devices for peer-to-peer Wi-Fi](../connecting-paired-devices.md)

<a id="discussion"></a>

## Discussion

An empty dictionary indicates that no paired devices are known to your app.

## See Also

### Paired devices

- [WAPairedDevice](../wapaireddevice.md): A known Wi-Fi Aware device that your app can connect to.
- [WAPairedDevice.DevicesSequence](devicessequence.md): A sequence that vends updates to a paired device list, as the list changes.
- [WAPairedDevice.PairingInfo](pairinginfo-swift.struct.md): A collection of unauthenticated information the system receives from a device before it’s paired for the first time.
