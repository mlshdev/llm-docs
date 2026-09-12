> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midithruconnectioncreate(_:_:_:)](https://developer.apple.com/documentation/coremidi/midithruconnectioncreate(_:_:_:))

# MIDIThruConnectionCreate(\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Creates a MIDI thru connection.

## Declaration

```swift
func MIDIThruConnectionCreate(_ inPersistentOwnerID: CFString?, _ inConnectionParams: CFData, _ outConnection: UnsafeMutablePointer<MIDIThruConnectionRef>) -> OSStatus
```

## Parameters

- `inPersistentOwnerID`: A unique identifier of the owning object, such as `com.mycompany.MyApp`. If you pass `NULL`, the client owns the connection and it’s automatically disposed with the client.
- `inConnectionParams`: A [MIDIThruConnectionParams](midithruconnectionparams.md) object that’s contained in a [CFData](../corefoundation/cfdata.md).
- `outConnection`: On successful return, a reference to the newly created connection.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Managing Connections

- [MIDIThruConnectionDispose(\_:)](midithruconnectiondispose%28__%29.md): Disposes a MIDI thru connection.
- [MIDIThruConnectionRef](midithruconnectionref.md): An opaque reference to a play-through connection.
- [MIDIThruConnectionEndpoint](midithruconnectionendpoint.md): A source or destination in a MIDI thru connection.
- [Endpoint Configuration](endpoint-configuration.md): Values that define the supported endpoint configurations.

# MIDIThruConnectionCreate (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Creates a MIDI thru connection.

## Declaration

```objectivec
extern OSStatus MIDIThruConnectionCreate(CFStringRef inPersistentOwnerID, CFDataRef inConnectionParams, MIDIThruConnectionRef *outConnection);
```

## Parameters

- `inPersistentOwnerID`: A unique identifier of the owning object, such as `com.mycompany.MyApp`. If you pass `NULL`, the client owns the connection and it’s automatically disposed with the client.
- `inConnectionParams`: A [MIDIThruConnectionParams](midithruconnectionparams.md) object that’s contained in a [CFDataRef](../corefoundation/cfdata.md).
- `outConnection`: On successful return, a reference to the newly created connection.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Managing Connections

- [MIDIThruConnectionDispose](midithruconnectiondispose%28__%29.md): Disposes a MIDI thru connection.
- [MIDIThruConnectionRef](midithruconnectionref.md): An opaque reference to a play-through connection.
- [MIDIThruConnectionEndpoint](midithruconnectionendpoint.md): A source or destination in a MIDI thru connection.
- [Endpoint Configuration](endpoint-configuration.md): Values that define the supported endpoint configurations.
