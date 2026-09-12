> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wasubscriberbrowser/devices/selected(_:)-8myz8](https://developer.apple.com/documentation/wifiaware/wasubscriberbrowser/devices/selected(_:)-8myz8)

# selected(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Includes only the preselected paired devices in the provided dictionary.

## Declaration

```swift
static func selected(_ pairedDevices: WAPairedDevice.Devices) -> WASubscriberBrowser.Devices
```

## Parameters

- `pairedDevices`: A [WASubscriberBrowser.Devices](../devices.md) dictionary holding a snapshot  of paired devices to use for this operation.

<a id="return-value"></a>

## Return Value

A new `WASubscriber/Devices` including the selected devices.

## See Also

### Selecting devices to connect to

- [selected(\_:)](selected%28__%29-5arv0.md): Includes only the preselected paired devices in the provided list.
- [userSpecifiedDevices](userspecifieddevices.md): Includes only devices the user selects or pairs in DeviceDiscoveryUI’s `DevicePicker()`.
