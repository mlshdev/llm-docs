> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapublisherlistener/devices/userspecifieddevices](https://developer.apple.com/documentation/wifiaware/wapublisherlistener/devices/userspecifieddevices)

# userSpecifiedDevices

**Framework:** Wi-Fi Aware  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Includes only new devices the user pairs via DeviceDiscoveryUI’s `DevicePairingView()`.

## Declaration

```swift
static let userSpecifiedDevices: WAPublisherListener.Devices
```

<a id="discussion"></a>

## Discussion

Only applicable to use with the `DevicePairingView()` API. Will throw an error if used with a `NetworkListener`.

## See Also

### Selecting specific devices

- [selected(\_:)](selected%28__%29-56vig.md): Includes only the preselected paired devices in the provided dictionary.
- [selected(\_:)](selected%28__%29-1e2.md): Includes only the preselected paired devices in the provided list.
