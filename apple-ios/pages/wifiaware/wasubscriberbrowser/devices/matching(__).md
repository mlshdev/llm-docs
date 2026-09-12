> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wasubscriberbrowser/devices/matching(_:)](https://developer.apple.com/documentation/wifiaware/wasubscriberbrowser/devices/matching(_:))

# matching(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Includes only paired devices matching the provided live filter predicate.

## Declaration

```swift
static func matching(_ pairedDevicesFilter: Predicate<WAPairedDevice>) -> WASubscriberBrowser.Devices
```

## Parameters

- `pairedDevicesFilter`: The filter to apply to choose paired devices for this operation.

<a id="return-value"></a>

## Return Value

A new `Devices` containing the device filter to use.
