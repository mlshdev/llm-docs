> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wasubscriberbrowser/devices](https://developer.apple.com/documentation/wifiaware/wasubscriberbrowser/devices)

# WASubscriberBrowser.Devices

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The structure that determines the devices to connect to.

## Declaration

```swift
struct Devices
```

<a id="overview"></a>

## Overview

This structure determines the devices the `NetworkBrowser` acts on when subscribing, such as which devices to try to connect to. It allows your app to include only the devices that are relevant for a given `NetworkBrowser` operation and use case.

`Devices` is the `to:` component of the `.wifiAware()` instruction to a `NetworkBrowser`.

The code below is an example of configuring a `NetworkBrowser` with specific devices to connect to:

```swift
NetworkBrowser(for: .wifiAware( .connecting(to:.selected(devices),  from:service) ) )
```

> **Important**

> Only include the devices your app intends to use with the use case. Including unnecessary devices may impose additional power and performance costs on both the local and remote devices, and may reduce privacy.

## Topics

### Selecting devices to connect to

- [selected(\_:)](devices/selected%28__%29-8myz8.md): Includes only the preselected paired devices in the provided dictionary.
- [selected(\_:)](devices/selected%28__%29-5arv0.md): Includes only the preselected paired devices in the provided list.
- [userSpecifiedDevices](devices/userspecifieddevices.md): Includes only devices the user selects or pairs in DeviceDiscoveryUI’s `DevicePicker()`.

### Using a live matching filter

- [matching(\_:)](devices/matching%28__%29.md): Includes only paired devices matching the provided live filter predicate.

### Connecting to all paired devices

- [allPairedDevices](devices/allpaireddevices.md): The property that includes all paired devices that your app has access to.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Subscriber

- [WASubscriberBrowser](../wasubscriberbrowser.md): The structure that configures a network browser to subscribe to a Wi-Fi Aware service and make outgoing connections to paired devices.
- [WASubscriberBrowser.Action](action.md): The structure that configures the Wi-Fi Aware subscriber operation the network browser performs.
