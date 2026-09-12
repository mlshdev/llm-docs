> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertyconnectionuniqueid](https://developer.apple.com/documentation/coremidi/kmidipropertyconnectionuniqueid)

# kMIDIPropertyConnectionUniqueID (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

The unique identifier of an external device attached to this connection.

## Declaration

```swift
let kMIDIPropertyConnectionUniqueID: CFString
```

<a id="Discussion"></a>

## Discussion

The value provided may be an integer. To indicate that a driver connects to multiple external objects, pass the array of big-endian `SInt32` values as a [CFData](../corefoundation/cfdata.md) object.

The property is nonexistent or 0 if there’s no connection.

## See Also

### Connections

- [kMIDIPropertyCanRoute](kmidipropertycanroute.md): A Boolean value that indicates whether the device or entity can route messages to or from external MIDI devices.
- [kMIDIPropertyIsBroadcast](kmidipropertyisbroadcast.md): A Boolean value that indicates whether the endpoint broadcasts messages to all of the other endpoints in the device.
- [kMIDIPropertyIsEmbeddedEntity](kmidipropertyisembeddedentity.md): A Boolean value that indicates whether this entity or endpoint has external MIDI connections.
- [kMIDIPropertySingleRealtimeEntity](kmidipropertysinglerealtimeentity.md): The 0-based index of the entity on which incoming real-time messages from the device appear to have originated.

# kMIDIPropertyConnectionUniqueID (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

The unique identifier of an external device attached to this connection.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyConnectionUniqueID;
```

<a id="Discussion"></a>

## Discussion

The value provided may be an integer. To indicate that a driver connects to multiple external objects, pass the array of big-endian `SInt32` values as a [CFDataRef](../corefoundation/cfdata.md) object.

The property is nonexistent or 0 if there’s no connection.

## See Also

### Connections

- [kMIDIPropertyCanRoute](kmidipropertycanroute.md): A Boolean value that indicates whether the device or entity can route messages to or from external MIDI devices.
- [kMIDIPropertyIsBroadcast](kmidipropertyisbroadcast.md): A Boolean value that indicates whether the endpoint broadcasts messages to all of the other endpoints in the device.
- [kMIDIPropertyIsEmbeddedEntity](kmidipropertyisembeddedentity.md): A Boolean value that indicates whether this entity or endpoint has external MIDI connections.
- [kMIDIPropertySingleRealtimeEntity](kmidipropertysinglerealtimeentity.md): The 0-based index of the entity on which incoming real-time messages from the device appear to have originated.
