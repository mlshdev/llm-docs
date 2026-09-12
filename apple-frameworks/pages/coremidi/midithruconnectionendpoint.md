> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midithruconnectionendpoint](https://developer.apple.com/documentation/coremidi/midithruconnectionendpoint)

# MIDIThruConnectionEndpoint (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A source or destination in a MIDI thru connection.

## Declaration

```swift
struct MIDIThruConnectionEndpoint
```

<a id="overview"></a>

## Overview

Set the endpoint’s [uniqueID](midithruconnectionendpoint/uniqueid.md) to 0 if the endpoint exists and you’re passing its [endpointRef](midithruconnectionendpoint/endpointref.md). When retrieving a connection from Core MIDI, its [endpointRef](midithruconnectionendpoint/endpointref.md) may be `NULL` if it doesn’t exist, but the [uniqueID](midithruconnectionendpoint/uniqueid.md) is always non-zero.

## Topics

### Configuring an Endpoint

- [uniqueID](midithruconnectionendpoint/uniqueid.md): The connection’s unique identifier.
- [endpointRef](midithruconnectionendpoint/endpointref.md): The endpoint reference.

### Initializers

- [init()](midithruconnectionendpoint/init%28%29.md)
- [init(endpointRef:uniqueID:)](midithruconnectionendpoint/init%28endpointref_uniqueid_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Managing Connections

- [MIDIThruConnectionCreate(\_:\_:\_:)](midithruconnectioncreate%28______%29.md): Creates a MIDI thru connection.
- [MIDIThruConnectionDispose(\_:)](midithruconnectiondispose%28__%29.md): Disposes a MIDI thru connection.
- [MIDIThruConnectionRef](midithruconnectionref.md): An opaque reference to a play-through connection.
- [Endpoint Configuration](endpoint-configuration.md): Values that define the supported endpoint configurations.

# MIDIThruConnectionEndpoint (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A source or destination in a MIDI thru connection.

## Declaration

```objectivec
struct MIDIThruConnectionEndpoint;
```

<a id="overview"></a>

## Overview

Set the endpoint’s [uniqueID](midithruconnectionendpoint/uniqueid.md) to 0 if the endpoint exists and you’re passing its [endpointRef](midithruconnectionendpoint/endpointref.md). When retrieving a connection from Core MIDI, its [endpointRef](midithruconnectionendpoint/endpointref.md) may be `NULL` if it doesn’t exist, but the [uniqueID](midithruconnectionendpoint/uniqueid.md) is always non-zero.

## Topics

### Configuring an Endpoint

- [uniqueID](midithruconnectionendpoint/uniqueid.md): The connection’s unique identifier.
- [endpointRef](midithruconnectionendpoint/endpointref.md): The endpoint reference.

## See Also

### Managing Connections

- [MIDIThruConnectionCreate](midithruconnectioncreate%28______%29.md): Creates a MIDI thru connection.
- [MIDIThruConnectionDispose](midithruconnectiondispose%28__%29.md): Disposes a MIDI thru connection.
- [MIDIThruConnectionRef](midithruconnectionref.md): An opaque reference to a play-through connection.
- [Endpoint Configuration](endpoint-configuration.md): Values that define the supported endpoint configurations.
