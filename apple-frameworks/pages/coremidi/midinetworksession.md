> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession](https://developer.apple.com/documentation/coremidi/midinetworksession)

# MIDINetworkSession (Swift)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that represents a pairing of a source and destination.

## Declaration

```swift
class MIDINetworkSession
```

<a id="overview"></a>

## Overview

A session can have any number of connections. The system broadcasts output to all connections, and merges input from multiple connections.

## Topics

### Configuring a Session

- [default()](midinetworksession/default%28%29.md): Returns the default singleton session.
- [isEnabled](midinetworksession/isenabled.md): A Boolean value that determines whether the session is enabled.
- [connectionPolicy](midinetworksession/connectionpolicy.md): The policy that determines who can connect to this session.

### Inspecting a Sessions

- [localName](midinetworksession/localname.md): The name of this session’s entity.
- [networkName](midinetworksession/networkname.md): The name with which this session advertises itself over Bonjour.
- [networkPort](midinetworksession/networkport.md): The session’s UDP port.
- [sourceEndpoint()](midinetworksession/sourceendpoint%28%29.md): Returns the session’s source endpoint.
- [destinationEndpoint()](midinetworksession/destinationendpoint%28%29.md): Returns the session’s destination endpoint.

### Managing Connections

- [connections()](midinetworksession/connections%28%29.md): Returns the session’s set of MIDI network connections.
- [addConnection(\_:)](midinetworksession/addconnection%28__%29.md): Adds a new connection to this session.
- [removeConnection(\_:)](midinetworksession/removeconnection%28__%29.md): Removes a connection from this session.

### Managing Contacts

- [contacts()](midinetworksession/contacts%28%29.md): Returns the array of network hosts.
- [addContact(\_:)](midinetworksession/addcontact%28__%29.md): Adds a host as a contact.
- [removeContact(\_:)](midinetworksession/removecontact%28__%29.md): Removes a host as a contact.
- [MIDINetworkNotificationContactsDidChange](midinetworknotificationcontactsdidchange.md): Indicates that the list of contacts changed.

### Observing State Changes

- [MIDINetworkNotificationSessionDidChange](midinetworknotificationsessiondidchange.md): Indicates that other aspects of the session changed, such as the connection list, connection policy, and so on.

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
- [MIDINetworkConnection](midinetworkconnection.md): An object that connects a session to a host.

# MIDINetworkSession (Objective-C)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that represents a pairing of a source and destination.

## Declaration

```objectivec
@interface MIDINetworkSession : NSObject
```

<a id="overview"></a>

## Overview

A session can have any number of connections. The system broadcasts output to all connections, and merges input from multiple connections.

## Topics

### Configuring a Session

- [defaultSession](midinetworksession/default%28%29.md): Returns the default singleton session.
- [enabled](midinetworksession/isenabled.md): A Boolean value that determines whether the session is enabled.
- [connectionPolicy](midinetworksession/connectionpolicy.md): The policy that determines who can connect to this session.

### Inspecting a Sessions

- [localName](midinetworksession/localname.md): The name of this session’s entity.
- [networkName](midinetworksession/networkname.md): The name with which this session advertises itself over Bonjour.
- [networkPort](midinetworksession/networkport.md): The session’s UDP port.
- [sourceEndpoint](midinetworksession/sourceendpoint%28%29.md): Returns the session’s source endpoint.
- [destinationEndpoint](midinetworksession/destinationendpoint%28%29.md): Returns the session’s destination endpoint.

### Managing Connections

- [connections](midinetworksession/connections%28%29.md): Returns the session’s set of MIDI network connections.
- [addConnection:](midinetworksession/addconnection%28__%29.md): Adds a new connection to this session.
- [removeConnection:](midinetworksession/removeconnection%28__%29.md): Removes a connection from this session.

### Managing Contacts

- [contacts](midinetworksession/contacts%28%29.md): Returns the array of network hosts.
- [addContact:](midinetworksession/addcontact%28__%29.md): Adds a host as a contact.
- [removeContact:](midinetworksession/removecontact%28__%29.md): Removes a host as a contact.
- [MIDINetworkNotificationContactsDidChange](midinetworknotificationcontactsdidchange.md): Indicates that the list of contacts changed.

### Observing State Changes

- [MIDINetworkNotificationSessionDidChange](midinetworknotificationsessiondidchange.md): Indicates that other aspects of the session changed, such as the connection list, connection policy, and so on.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Networking

- [MIDINetworkHost](midinetworkhost.md): An object that represents the host’s network address.
- [MIDINetworkConnection](midinetworkconnection.md): An object that connects a session to a host.
