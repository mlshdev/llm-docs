> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworkconnection/init(host:)](https://developer.apple.com/documentation/coremidi/midinetworkconnection/init(host:))

# init(host:) (Swift)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a connection to the specified host.

## Declaration

```swift
convenience init(host: MIDINetworkHost)
```

## Parameters

- `host`: The host with which to establish a connection.

# connectionWithHost: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a connection to the specified host.

## Declaration

```objectivec
+ (instancetype) connectionWithHost:(MIDINetworkHost *) host;
```

## Parameters

- `host`: The host with which to establish a connection.
