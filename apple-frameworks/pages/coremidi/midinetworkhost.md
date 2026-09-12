> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworkhost](https://developer.apple.com/documentation/coremidi/midinetworkhost)

# MIDINetworkHost (Swift)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that represents the host’s network address.

## Declaration

```swift
class MIDINetworkHost
```

## Topics

### Creating Network Hosts

- [init(name:address:port:)](midinetworkhost/init%28name_address_port_%29.md): Creates a host with the specified name, adress, and port.
- [init(name:netService:)](midinetworkhost/init%28name_netservice_%29.md): Creates a host with the specified name and net service.
- [init(name:netServiceName:netServiceDomain:)](midinetworkhost/init%28name_netservicename_netservicedomain_%29.md): Creates a host with the specified name, net service name, and domain.
- [MIDINetworkBonjourServiceType](midinetworkbonjourservicetype.md): The Bonjour service type.

### Inspecting Host Properties

- [name](midinetworkhost/name.md): The host name.
- [netServiceName](midinetworkhost/netservicename.md): The net service name.
- [netServiceDomain](midinetworkhost/netservicedomain.md): The net service domain.
- [address](midinetworkhost/address.md): The host address.
- [port](midinetworkhost/port.md): The host port.

### Comparing Hosts

- [hasSameAddress(as:)](midinetworkhost/hassameaddress%28as_%29.md): Compares this host instance with another to see if they share the same address value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Networking

- [MIDINetworkConnection](midinetworkconnection.md): An object that connects a session to a host.
- [MIDINetworkSession](midinetworksession.md): An object that represents a pairing of a source and destination.

# MIDINetworkHost (Objective-C)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that represents the host’s network address.

## Declaration

```objectivec
@interface MIDINetworkHost : NSObject
```

## Topics

### Creating Network Hosts

- [hostWithName:address:port:](midinetworkhost/init%28name_address_port_%29.md): Creates a host with the specified name, adress, and port.
- [hostWithName:netService:](midinetworkhost/init%28name_netservice_%29.md): Creates a host with the specified name and net service.
- [hostWithName:netServiceName:netServiceDomain:](midinetworkhost/init%28name_netservicename_netservicedomain_%29.md): Creates a host with the specified name, net service name, and domain.
- [MIDINetworkBonjourServiceType](midinetworkbonjourservicetype.md): The Bonjour service type.

### Inspecting Host Properties

- [name](midinetworkhost/name.md): The host name.
- [netServiceName](midinetworkhost/netservicename.md): The net service name.
- [netServiceDomain](midinetworkhost/netservicedomain.md): The net service domain.
- [address](midinetworkhost/address.md): The host address.
- [port](midinetworkhost/port.md): The host port.

### Comparing Hosts

- [hasSameAddressAs:](midinetworkhost/hassameaddress%28as_%29.md): Compares this host instance with another to see if they share the same address value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Networking

- [MIDINetworkConnection](midinetworkconnection.md): An object that connects a session to a host.
- [MIDINetworkSession](midinetworksession.md): An object that represents a pairing of a source and destination.
