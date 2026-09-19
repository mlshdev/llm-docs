> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/wasubscriberbrowser/devices/userspecifieddevices

# userSpecifiedDevices

**Framework:** Wi-Fi Aware  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Includes only devices the user selects or pairs in DeviceDiscoveryUI’s `DevicePicker()`.

## Declaration

```swift
static let userSpecifiedDevices: WASubscriberBrowser.Devices
```

<a id="discussion"></a>

## Discussion

Only applicable to use with the `DevicePicker()` API. Will throw an error if used with a `NetworkBrowser`.

## See Also

### Selecting devices to connect to

- [selected(\_:)](selected%28__%29-8myz8.md): Includes only the preselected paired devices in the provided dictionary.
- [selected(\_:)](selected%28__%29-5arv0.md): Includes only the preselected paired devices in the provided list.
