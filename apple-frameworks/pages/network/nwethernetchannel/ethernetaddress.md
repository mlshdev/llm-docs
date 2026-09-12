> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwethernetchannel/ethernetaddress](https://developer.apple.com/documentation/network/nwethernetchannel/ethernetaddress)

# NWEthernetChannel.EthernetAddress

**Framework:** Network  
**Kind:** Structure  
**Availability:** macOS 10.15+

A 48-bit Ethernet address.

## Declaration

```swift
struct EthernetAddress
```

## Topics

### Creating Addresses

- [init(\_:)](ethernetaddress/init%28__%29-62x9i.md): Initializes an Ethernet address with data.
- [init(\_:)](ethernetaddress/init%28__%29-1brh7.md): Initializes an Ethernet address with a string.

### Inspecting Addresses

- [rawValue](ethernetaddress/rawvalue.md): The raw data of the Ethernet address.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending and Receiving Ethernet Frames

- [send(content:to:vlanTag:completion:)](send%28content_to_vlantag_completion_%29.md): Sends a single Ethernet frame over a channel to a specific Ethernet address.
- [receiveHandler](receivehandler.md): A handler that delivers inbound Ethernet frames.
