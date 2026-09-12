> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wasubscriberbrowser/devices/selected(_:)-5arv0](https://developer.apple.com/documentation/wifiaware/wasubscriberbrowser/devices/selected(_:)-5arv0)

# selected(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Includes only the preselected paired devices in the provided list.

## Declaration

```swift
static func selected(_ pairedDevices: some Sequence<WAPairedDevice>) -> WASubscriberBrowser.Devices
```

## Parameters

- `pairedDevices`: A sequence holding a snapshot of paired devices to use for this operation.

<a id="return-value"></a>

## Return Value

A new `Devices` list that includes the selected devices.

## See Also

### Selecting devices to connect to

- [selected(\_:)](selected%28__%29-8myz8.md): Includes only the preselected paired devices in the provided dictionary.
- [userSpecifiedDevices](userspecifieddevices.md): Includes only devices the user selects or pairs in DeviceDiscoveryUI’s `DevicePicker()`.
