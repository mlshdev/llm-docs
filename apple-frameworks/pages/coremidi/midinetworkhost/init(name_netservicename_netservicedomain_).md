> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworkhost/init(name:netservicename:netservicedomain:)](https://developer.apple.com/documentation/coremidi/midinetworkhost/init(name:netservicename:netservicedomain:))

# init(name:netServiceName:netServiceDomain:) (Swift)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a host with the specified name, net service name, and domain.

## Declaration

```swift
convenience init(name: String, netServiceName: String, netServiceDomain: String)
```

## Parameters

- `name`: The host name.
- `netServiceName`: The net service name.
- `netServiceDomain`: The net service domain.

## See Also

### Creating Network Hosts

- [init(name:address:port:)](init%28name_address_port_%29.md): Creates a host with the specified name, adress, and port.
- [init(name:netService:)](init%28name_netservice_%29.md): Creates a host with the specified name and net service.
- [MIDINetworkBonjourServiceType](../midinetworkbonjourservicetype.md): The Bonjour service type.

# hostWithName:netServiceName:netServiceDomain: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a host with the specified name, net service name, and domain.

## Declaration

```objectivec
+ (instancetype) hostWithName:(NSString *) name netServiceName:(NSString *) netServiceName netServiceDomain:(NSString *) netServiceDomain;
```

## Parameters

- `name`: The host name.
- `netServiceName`: The net service name.
- `netServiceDomain`: The net service domain.

## See Also

### Creating Network Hosts

- [hostWithName:address:port:](init%28name_address_port_%29.md): Creates a host with the specified name, adress, and port.
- [hostWithName:netService:](init%28name_netservice_%29.md): Creates a host with the specified name and net service.
- [MIDINetworkBonjourServiceType](../midinetworkbonjourservicetype.md): The Bonjour service type.
