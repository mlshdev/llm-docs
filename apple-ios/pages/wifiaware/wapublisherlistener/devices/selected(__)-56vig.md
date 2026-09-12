> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapublisherlistener/devices/selected(_:)-56vig](https://developer.apple.com/documentation/wifiaware/wapublisherlistener/devices/selected(_:)-56vig)

# selected(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Includes only the preselected paired devices in the provided dictionary.

## Declaration

```swift
static func selected(_ pairedDevices: WAPairedDevice.Devices) -> WAPublisherListener.Devices
```

## Parameters

- `pairedDevices`: A [WAPublisherListener.Devices](../devices.md) dictionary holding a snapshot  of paired devices to use for this operation.

<a id="return-value"></a>

## Return Value

A new `Devices` including the selected devices.

## See Also

### Selecting specific devices

- [selected(\_:)](selected%28__%29-1e2.md): Includes only the preselected paired devices in the provided list.
- [userSpecifiedDevices](userspecifieddevices.md): Includes only new devices the user pairs via DeviceDiscoveryUI’s `DevicePairingView()`.
