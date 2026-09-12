> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wasubscriberbrowser/action](https://developer.apple.com/documentation/wifiaware/wasubscriberbrowser/action)

# WASubscriberBrowser.Action

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The structure that configures the Wi-Fi Aware subscriber operation the network browser performs.

## Declaration

```swift
struct Action
```

<a id="overview"></a>

## Overview

The configuration includes the service and devices it operates on.

The [WASubscriberBrowser.Action](action.md) is the first component of the `.wifiAware()` instruction to a `NetworkBrowser`.

The code below is an example of creating a `NetworkBrowser`:

```swift
NetworkBrowser(for: .wifiAware( .connecting(to:.selected(devices),  from:service) ) )
```

## Topics

### Creating a browser

- [connecting(to:from:)](action/connecting%28to_from_%29.md): Subscribes to the provided service over Wi-Fi, providing browse results for connecting to the specified paired devices if available.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Subscriber

- [WASubscriberBrowser](../wasubscriberbrowser.md): The structure that configures a network browser to subscribe to a Wi-Fi Aware service and make outgoing connections to paired devices.
- [WASubscriberBrowser.Devices](devices.md): The structure that determines the devices to connect to.
