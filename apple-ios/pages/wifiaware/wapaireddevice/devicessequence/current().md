> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapaireddevice/devicessequence/current()](https://developer.apple.com/documentation/wifiaware/wapaireddevice/devicessequence/current())

# current()

**Framework:** Wi-Fi Aware  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Fetches a one-time snapshot of all paired devices that are currently known and  accessible to your app.

## Declaration

```swift
func current() async throws -> WAPairedDevice.DevicesSequence.Element?
```

<a id="return-value"></a>

## Return Value

A single [WAPairedDevice.Devices](../devices.md) element holding a snapshot of the currently paired devices known to the app, or `nil` if the sequence has no more values.

<a id="discussion"></a>

## Discussion

The [WAPairedDevice.Devices](../devices.md) dictionary holds a snapshot of the currently paired devices that are known and accessible to your app. This method returns an empty dictionary if there are no paired devices known to your app. The following code is an example of how to use `current()` to return the first `Devices` snapshot in the sequence:

```swift
guard let devices = try await WAPairedDevice.allDevices.current() { return }
```

Don’t use this method if you need to monitor for changes to the paired device list, or change app behavior in response to such changes. Instead, use

```swift
for try await devices in WAPairedDevice.allDevices {
	// Process the devices.
}
```

> **Throws**

> An error if the system can’t read the sequence, or if the app isn’t permitted to access Wi-Fi Aware devices.

> **See Also**

> [allDevices](../alldevices.md)

> **See Also**

> [allDevices(matching:)](../alldevices%28matching_%29.md)
