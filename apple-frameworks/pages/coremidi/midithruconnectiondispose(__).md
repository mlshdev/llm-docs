> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midithruconnectiondispose(_:)](https://developer.apple.com/documentation/coremidi/midithruconnectiondispose(_:))

# MIDIThruConnectionDispose(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Disposes a MIDI thru connection.

## Declaration

```swift
func MIDIThruConnectionDispose(_ connection: MIDIThruConnectionRef) -> OSStatus
```

## Parameters

- `connection`: The connection to dispose.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Managing Connections

- [MIDIThruConnectionCreate(\_:\_:\_:)](midithruconnectioncreate%28______%29.md): Creates a MIDI thru connection.
- [MIDIThruConnectionRef](midithruconnectionref.md): An opaque reference to a play-through connection.
- [MIDIThruConnectionEndpoint](midithruconnectionendpoint.md): A source or destination in a MIDI thru connection.
- [Endpoint Configuration](endpoint-configuration.md): Values that define the supported endpoint configurations.

# MIDIThruConnectionDispose (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Disposes a MIDI thru connection.

## Declaration

```objectivec
extern OSStatus MIDIThruConnectionDispose(MIDIThruConnectionRef connection);
```

## Parameters

- `connection`: The connection to dispose.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Managing Connections

- [MIDIThruConnectionCreate](midithruconnectioncreate%28______%29.md): Creates a MIDI thru connection.
- [MIDIThruConnectionRef](midithruconnectionref.md): An opaque reference to a play-through connection.
- [MIDIThruConnectionEndpoint](midithruconnectionendpoint.md): A source or destination in a MIDI thru connection.
- [Endpoint Configuration](endpoint-configuration.md): Values that define the supported endpoint configurations.
