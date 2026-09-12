> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceextension/startdevicediscovery()](https://developer.apple.com/documentation/mediadevice/mediadeviceextension/startdevicediscovery())

# startDeviceDiscovery()

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when a user action requires discovered devices to be displayed.

## Declaration

```swift
@MainActor func startDeviceDiscovery()
```

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

Use the `Network`, `WiFiAware`, or `CoreBluetooth` frameworks for service discovery.

> **Note**

> During discovery, your extension will have local area network access, to include direct connections over WiFiAware and Bluetooth. It will not be permitted to connect to the internet or addresses outside the local network.

As devices are found, report them to the system by calling [foundDevice(\_:)](../mediadeviceroutingmanager/founddevice%28__%29.md) on the routing manager. When a previously discovered device is no longer available, call [lostDevice(\_:)](../mediadeviceroutingmanager/lostdevice%28__%29.md). If discovery fails unexpectedly, call [discoveryFailed(\_:)](../mediadeviceroutingmanager/discoveryfailed%28__%29.md).
