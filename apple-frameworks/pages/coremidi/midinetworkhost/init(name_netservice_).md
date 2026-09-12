> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworkhost/init(name:netservice:)](https://developer.apple.com/documentation/coremidi/midinetworkhost/init(name:netservice:))

# init(name:netService:) (Swift)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a host with the specified name and net service.

## Declaration

```swift
convenience init(name: String, netService: NetService)
```

## Parameters

- `name`: The host name.
- `netService`: The net service.

## See Also

### Creating Network Hosts

- [init(name:address:port:)](init%28name_address_port_%29.md): Creates a host with the specified name, adress, and port.
- [init(name:netServiceName:netServiceDomain:)](init%28name_netservicename_netservicedomain_%29.md): Creates a host with the specified name, net service name, and domain.
- [MIDINetworkBonjourServiceType](../midinetworkbonjourservicetype.md): The Bonjour service type.

# hostWithName:netService: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a host with the specified name and net service.

## Declaration

```objectivec
+ (instancetype) hostWithName:(NSString *) name netService:(NSNetService *) netService;
```

## Parameters

- `name`: The host name.
- `netService`: The net service.

## See Also

### Creating Network Hosts

- [hostWithName:address:port:](init%28name_address_port_%29.md): Creates a host with the specified name, adress, and port.
- [hostWithName:netServiceName:netServiceDomain:](init%28name_netservicename_netservicedomain_%29.md): Creates a host with the specified name, net service name, and domain.
- [MIDINetworkBonjourServiceType](../midinetworkbonjourservicetype.md): The Bonjour service type.
