> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertycanroute](https://developer.apple.com/documentation/coremidi/kmidipropertycanroute)

# kMIDIPropertyCanRoute (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the device or entity can route messages to or from external MIDI devices.

## Declaration

```swift
let kMIDIPropertyCanRoute: CFString
```

<a id="Discussion"></a>

## Discussion

Don’t set this property value on driver-owned devices.

## See Also

### Connections

- [kMIDIPropertyIsBroadcast](kmidipropertyisbroadcast.md): A Boolean value that indicates whether the endpoint broadcasts messages to all of the other endpoints in the device.
- [kMIDIPropertyConnectionUniqueID](kmidipropertyconnectionuniqueid.md): The unique identifier of an external device attached to this connection.
- [kMIDIPropertyIsEmbeddedEntity](kmidipropertyisembeddedentity.md): A Boolean value that indicates whether this entity or endpoint has external MIDI connections.
- [kMIDIPropertySingleRealtimeEntity](kmidipropertysinglerealtimeentity.md): The 0-based index of the entity on which incoming real-time messages from the device appear to have originated.

# kMIDIPropertyCanRoute (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the device or entity can route messages to or from external MIDI devices.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyCanRoute;
```

<a id="Discussion"></a>

## Discussion

Don’t set this property value on driver-owned devices.

## See Also

### Connections

- [kMIDIPropertyIsBroadcast](kmidipropertyisbroadcast.md): A Boolean value that indicates whether the endpoint broadcasts messages to all of the other endpoints in the device.
- [kMIDIPropertyConnectionUniqueID](kmidipropertyconnectionuniqueid.md): The unique identifier of an external device attached to this connection.
- [kMIDIPropertyIsEmbeddedEntity](kmidipropertyisembeddedentity.md): A Boolean value that indicates whether this entity or endpoint has external MIDI connections.
- [kMIDIPropertySingleRealtimeEntity](kmidipropertysinglerealtimeentity.md): The 0-based index of the entity on which incoming real-time messages from the device appear to have originated.
