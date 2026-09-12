> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwethernetchannel](https://developer.apple.com/documentation/network/nwethernetchannel)

# NWEthernetChannel

**Framework:** Network  
**Kind:** Class  
**Availability:** macOS 10.15+

An object you use to send and receive custom Ethernet frames.

## Declaration

```swift
final class NWEthernetChannel
```

<a id="overview"></a>

## Overview

Use Ethernet channels to send and receive custom Ethernet frame types over an interface.

Creating Ethernet channels requires the `com.apple.developer.networking.custom-protocol` entitlement.

## Topics

### Managing Ethernet Channels

- [init(on:etherType:)](nwethernetchannel/init%28on_ethertype_%29.md): Initializes an Ethernet channel on a specific interface with a custom Ethernet type.
- [start(queue:)](nwethernetchannel/start%28queue_%29.md): Starts the process of registering the channel, and sets the queue on which all channel events are delivered.
- [cancel()](nwethernetchannel/cancel%28%29.md): Unregisters the channel from the interface.

### Handling State Updates

- [state](nwethernetchannel/state-swift.property.md): The current state of the channel.
- [NWEthernetChannel.State](nwethernetchannel/state-swift.enum.md): States indicating whether an Ethernet channel is able to send and receive frames.
- [stateUpdateHandler](nwethernetchannel/stateupdatehandler.md): A handler that delivers channel state updates.

### Sending and Receiving Ethernet Frames

- [send(content:to:vlanTag:completion:)](nwethernetchannel/send%28content_to_vlantag_completion_%29.md): Sends a single Ethernet frame over a channel to a specific Ethernet address.
- [receiveHandler](nwethernetchannel/receivehandler.md): A handler that delivers inbound Ethernet frames.
- [NWEthernetChannel.EthernetAddress](nwethernetchannel/ethernetaddress.md): A 48-bit Ethernet address.

### Inspecting Ethernet Channels

- [etherType](nwethernetchannel/ethertype.md): The custom Ethernet type with which the channel was initialized.
- [interface](nwethernetchannel/interface.md): The interface with which the channel was initialized.
- [queue](nwethernetchannel/queue.md): The queue on which channel events will be delivered.

### Initializers

- [init(on:etherType:parameters:)](nwethernetchannel/init%28on_ethertype_parameters_%29.md)

### Instance Properties

- [maximumPayloadSize](nwethernetchannel/maximumpayloadsize.md)

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Connections and Listeners

- [NWConnection](nwconnection.md): A bidirectional data connection between a local endpoint and a remote endpoint.
- [NWListener](nwlistener.md): An object you use to listen for incoming network connections.
- [NWBrowser](nwbrowser.md): An object you use to browse for available network services.
- [NWConnectionGroup](nwconnectiongroup.md): An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.
