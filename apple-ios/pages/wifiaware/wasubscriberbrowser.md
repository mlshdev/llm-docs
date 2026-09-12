> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wasubscriberbrowser](https://developer.apple.com/documentation/wifiaware/wasubscriberbrowser)

# WASubscriberBrowser

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The structure that configures a network browser to subscribe to a Wi-Fi Aware service and make outgoing connections to paired devices.

## Declaration

```swift
struct WASubscriberBrowser
```

<a id="overview"></a>

## Overview

Devices can subscribe to services provided by other Wi-Fi Aware devices by creating a `NetworkBrowser` object from the [Network](https://developer.apple.com/documentation/Network) framework, and passing in a `.wifiAware()` instruction indicating the `WASubscribableService` to look for, and the set of `WAPairedDevice` to find it on.

The code below configures the `NetworkBrowser` as a Wi-Fi Aware subscriber by passing in a `.wifiAware()` instruction:

```swift
NetworkBrowser(for: .wifiAware( .connecting(to:.selected(devices),  from:service) ) )
```

## Topics

### Configuring a browser

- [WASubscriberBrowser.Action](wasubscriberbrowser/action.md): The structure that configures the Wi-Fi Aware subscriber operation the network browser performs.
- [WASubscriberBrowser.Devices](wasubscriberbrowser/devices.md): The structure that determines the devices to connect to.

### Processing Wi-Fi Aware subscribe results

- [WASubscriberBrowser.Endpoint](wasubscriberbrowser/endpoint.md): A result for each discovered Wi-Fi Aware device.

### Creating browser implementation details

- [makeDescriptor()](wasubscriberbrowser/makedescriptor%28%29.md): Makes a descriptor that can create a network browser for a Wi-Fi Aware subscribe operation.
- [configureParameters(\_:)](wasubscriberbrowser/configureparameters%28__%29.md): Returns the parameters to use to configure the Wi-Fi Aware subscriber and the subsequent connection.
- [makeEndpoint(from:)](wasubscriberbrowser/makeendpoint%28from_%29.md): Creates a connectable Wi-Fi Aware endpoint from a browse result.

## Relationships

### Conforms To

- [BrowserProvider](https://developer.apple.com/documentation/network/browserprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Subscriber

- [WASubscriberBrowser.Action](wasubscriberbrowser/action.md): The structure that configures the Wi-Fi Aware subscriber operation the network browser performs.
- [WASubscriberBrowser.Devices](wasubscriberbrowser/devices.md): The structure that determines the devices to connect to.
