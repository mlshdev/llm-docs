> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapublisherlistener/action](https://developer.apple.com/documentation/wifiaware/wapublisherlistener/action)

# WAPublisherListener.Action

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The structure that configures the Wi-Fi Aware publisher operation that the network listener performs.

## Declaration

```swift
struct Action
```

<a id="overview"></a>

## Overview

The configuration includes the service and devices it operates on.

The [WAPublisherListener.Action](action.md) is the first component of the `.wifiAware()` instruction to a `NetworkListener`.

The code below is an example of creating a `NetworkListener`:

```swift
NetworkListener(for: .wifiAware( .connecting(to:service,  from:.selected(devices)) ) )
```

## Topics

### Creating a listener

- [connecting(to:from:datapath:)](action/connecting%28to_from_datapath_%29.md): Publishes the provided service over Wi-Fi, enabling connections from the specified paired devices.

### Type Methods

- [addingConnections(from:)](action/addingconnections%28from_%29.md): Makes additional network connections over a preexisting Wi-Fi Aware data path without publishing or advertising services over Wi-Fi Aware.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Publisher

- [WAPublisherListener](../wapublisherlistener.md): Configures a network listener to publish a service over Wi-Fi Aware and accept incoming connections from paired devices.
- [WAPublisherListener.Devices](devices.md): The structure that determines the devices to connect to.
- [WAPublisherListener.DatapathParameters](datapathparameters.md): The parameter that sets the initial Wi-Fi Aware data path configuration for any devices that are connected.
