> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworkhost/init(name:address:port:)](https://developer.apple.com/documentation/coremidi/midinetworkhost/init(name:address:port:))

# init(name:address:port:) (Swift)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a host with the specified name, adress, and port.

## Declaration

```swift
convenience init(name: String, address: String, port: Int)
```

## Parameters

- `name`: The host name.
- `address`: The host’s IP address or hostname.
- `port`: The host’s UDP port.

## See Also

### Creating Network Hosts

- [init(name:netService:)](init%28name_netservice_%29.md): Creates a host with the specified name and net service.
- [init(name:netServiceName:netServiceDomain:)](init%28name_netservicename_netservicedomain_%29.md): Creates a host with the specified name, net service name, and domain.
- [MIDINetworkBonjourServiceType](../midinetworkbonjourservicetype.md): The Bonjour service type.

# hostWithName:address:port: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a host with the specified name, adress, and port.

## Declaration

```objectivec
+ (instancetype) hostWithName:(NSString *) name address:(NSString *) address port:(NSUInteger) port;
```

## Parameters

- `name`: The host name.
- `address`: The host’s IP address or hostname.
- `port`: The host’s UDP port.

## See Also

### Creating Network Hosts

- [hostWithName:netService:](init%28name_netservice_%29.md): Creates a host with the specified name and net service.
- [hostWithName:netServiceName:netServiceDomain:](init%28name_netservicename_netservicedomain_%29.md): Creates a host with the specified name, net service name, and domain.
- [MIDINetworkBonjourServiceType](../midinetworkbonjourservicetype.md): The Bonjour service type.
