> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midinetworkconnection/init(host:)

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
