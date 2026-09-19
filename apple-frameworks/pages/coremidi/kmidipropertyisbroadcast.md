> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/kmidipropertyisbroadcast

# kMIDIPropertyIsBroadcast (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

A Boolean value that indicates whether the endpoint broadcasts messages to all of the other endpoints in the device.

## Declaration

```swift
let kMIDIPropertyIsBroadcast: CFString
```

<a id="Discussion"></a>

## Discussion

Only the owning driver may set this property.

## See Also

### Connections

- [kMIDIPropertyCanRoute](kmidipropertycanroute.md): A Boolean value that indicates whether the device or entity can route messages to or from external MIDI devices.
- [kMIDIPropertyConnectionUniqueID](kmidipropertyconnectionuniqueid.md): The unique identifier of an external device attached to this connection.
- [kMIDIPropertyIsEmbeddedEntity](kmidipropertyisembeddedentity.md): A Boolean value that indicates whether this entity or endpoint has external MIDI connections.
- [kMIDIPropertySingleRealtimeEntity](kmidipropertysinglerealtimeentity.md): The 0-based index of the entity on which incoming real-time messages from the device appear to have originated.

# kMIDIPropertyIsBroadcast (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

A Boolean value that indicates whether the endpoint broadcasts messages to all of the other endpoints in the device.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyIsBroadcast;
```

<a id="Discussion"></a>

## Discussion

Only the owning driver may set this property.

## See Also

### Connections

- [kMIDIPropertyCanRoute](kmidipropertycanroute.md): A Boolean value that indicates whether the device or entity can route messages to or from external MIDI devices.
- [kMIDIPropertyConnectionUniqueID](kmidipropertyconnectionuniqueid.md): The unique identifier of an external device attached to this connection.
- [kMIDIPropertyIsEmbeddedEntity](kmidipropertyisembeddedentity.md): A Boolean value that indicates whether this entity or endpoint has external MIDI connections.
- [kMIDIPropertySingleRealtimeEntity](kmidipropertysinglerealtimeentity.md): The 0-based index of the entity on which incoming real-time messages from the device appear to have originated.
