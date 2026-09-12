> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertyisembeddedentity](https://developer.apple.com/documentation/coremidi/kmidipropertyisembeddedentity)

# kMIDIPropertyIsEmbeddedEntity (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

A Boolean value that indicates whether this entity or endpoint has external MIDI connections.

## Declaration

```swift
let kMIDIPropertyIsEmbeddedEntity: CFString
```

## See Also

### Connections

- [kMIDIPropertyCanRoute](kmidipropertycanroute.md): A Boolean value that indicates whether the device or entity can route messages to or from external MIDI devices.
- [kMIDIPropertyIsBroadcast](kmidipropertyisbroadcast.md): A Boolean value that indicates whether the endpoint broadcasts messages to all of the other endpoints in the device.
- [kMIDIPropertyConnectionUniqueID](kmidipropertyconnectionuniqueid.md): The unique identifier of an external device attached to this connection.
- [kMIDIPropertySingleRealtimeEntity](kmidipropertysinglerealtimeentity.md): The 0-based index of the entity on which incoming real-time messages from the device appear to have originated.

# kMIDIPropertyIsEmbeddedEntity (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

A Boolean value that indicates whether this entity or endpoint has external MIDI connections.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyIsEmbeddedEntity;
```

## See Also

### Connections

- [kMIDIPropertyCanRoute](kmidipropertycanroute.md): A Boolean value that indicates whether the device or entity can route messages to or from external MIDI devices.
- [kMIDIPropertyIsBroadcast](kmidipropertyisbroadcast.md): A Boolean value that indicates whether the endpoint broadcasts messages to all of the other endpoints in the device.
- [kMIDIPropertyConnectionUniqueID](kmidipropertyconnectionuniqueid.md): The unique identifier of an external device attached to this connection.
- [kMIDIPropertySingleRealtimeEntity](kmidipropertysinglerealtimeentity.md): The 0-based index of the entity on which incoming real-time messages from the device appear to have originated.
