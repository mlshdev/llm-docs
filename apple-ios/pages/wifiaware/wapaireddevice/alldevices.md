> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapaireddevice/alldevices](https://developer.apple.com/documentation/wifiaware/wapaireddevice/alldevices)

# allDevices

**Framework:** Wi-Fi Aware  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Provides a snapshot of all the paired devices known to your app.

## Declaration

```swift
static var allDevices: WAPairedDevice.DevicesSequence { get }
```

<a id="return-value"></a>

## Return Value

A new [WAPairedDevice.DevicesSequence](devicessequence.md) that returns [WAPairedDevice.Devices](devices.md) elements holding a snapshot of the currently paired devices known to the app.

## Mentioned In

- [Connecting devices for peer-to-peer Wi-Fi](../connecting-paired-devices.md)

<a id="discussion"></a>

## Discussion

This property gets an `AsyncSequence` and provides updates with a new [WAPairedDevice.Devices](devices.md) snapshot when the set of paired devices known to your app changes. The sequence outputs an empty dictionary if there are no paired devices known to your app, or if a person removes all of your app’s paired devices.

You can select the set of `Devices` from this property using the following code snippet:

```swift
// Get a snapshot of all paired devices at the current moment.
guard let devices = try await WAPairedDevice.allDevices.current() { return }

// Get a snapshot of all paired devices at the current moment, and a new snapshot each time a device is added, changed, or removed.
for try await devices in WAPairedDevice.allDevices {
	// Process update.
}
```

## See Also

### Selecting from your app’s paired devices

- [WAPairedDevice.Devices](devices.md): A dictionary holding a snapshot of currently paired devices accessible and known to your app.
- [allDevices(matching:)](alldevices%28matching_%29.md): Provides a snapshot of all the paired devices known to your app.
- [WAPairedDevice.DevicesSequence](devicessequence.md): A sequence that vends updates to a paired device list, as the list changes.
