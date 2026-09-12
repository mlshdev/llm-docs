> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworkconnection](https://developer.apple.com/documentation/coremidi/midinetworkconnection)

# MIDINetworkConnection (Swift)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that connects a session to a host.

## Declaration

```swift
class MIDINetworkConnection
```

## Topics

### Creating Connections

- [init(host:)](midinetworkconnection/init%28host_%29.md): Creates a connection to the specified host.

### Accessing Connections

- [host](midinetworkconnection/host.md): The host connection.

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

- [MIDINetworkHost](midinetworkhost.md): An object that represents the host’s network address.
- [MIDINetworkSession](midinetworksession.md): An object that represents a pairing of a source and destination.

# MIDINetworkConnection (Objective-C)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that connects a session to a host.

## Declaration

```objectivec
@interface MIDINetworkConnection : NSObject
```

## Topics

### Creating Connections

- [connectionWithHost:](midinetworkconnection/init%28host_%29.md): Creates a connection to the specified host.

### Accessing Connections

- [host](midinetworkconnection/host.md): The host connection.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Networking

- [MIDINetworkHost](midinetworkhost.md): An object that represents the host’s network address.
- [MIDINetworkSession](midinetworksession.md): An object that represents a pairing of a source and destination.
