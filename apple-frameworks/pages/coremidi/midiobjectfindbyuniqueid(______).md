> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiobjectfindbyuniqueid(_:_:_:)](https://developer.apple.com/documentation/coremidi/midiobjectfindbyuniqueid(_:_:_:))

# MIDIObjectFindByUniqueID(\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Locates a device, entity, or endpoint by its unique identifier.

## Declaration

```swift
func MIDIObjectFindByUniqueID(_ inUniqueID: MIDIUniqueID, _ outObject: UnsafeMutablePointer<MIDIObjectRef>?, _ outObjectType: UnsafeMutablePointer<MIDIObjectType>?) -> OSStatus
```

## Parameters

- `inUniqueID`: The unique ID of the object to search for. You determine the unique ID by querying [MIDIObjectGetIntegerProperty(\_:\_:\_:)](midiobjectgetintegerproperty%28______%29.md) for the [kMIDIPropertyUniqueID](kmidipropertyuniqueid.md) property.
- `outObject`: The returned object, or 0 if the object wasn’t found or an error occurred. Cast this pointer to the appropriate type, according to type specified by the `outObjectType` argument.
- `outObjectType`: On exit, the type of object found, or undefined if the system found no objects.

<a id="return-value"></a>

## Return Value

An `OSStatus` error code, including [kMIDIObjectNotFound](kmidiobjectnotfound.md) if there is no object with this unique ID.

## Topics

### Parameter Types

- [MIDIUniqueID](midiuniqueid.md): A MIDI object’s unique identifier.
- [kMIDIInvalidUniqueID](kmidiinvaliduniqueid.md): An invalid identifier.
- [MIDIObjectType](midiobjecttype.md): The MIDI object types that the system supports.

## See Also

### MIDI object configuration

- [MIDIObjectRef](midiobjectref.md): The common base class for many of the framework’s objects.
- [MIDI Object Properties](midi-object-properties.md): Configure the properties of MIDI objects.

# MIDIObjectFindByUniqueID (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Locates a device, entity, or endpoint by its unique identifier.

## Declaration

```objectivec
extern OSStatus MIDIObjectFindByUniqueID(MIDIUniqueID inUniqueID, MIDIObjectRef *outObject, MIDIObjectType *outObjectType);
```

## Parameters

- `inUniqueID`: The unique ID of the object to search for. You determine the unique ID by querying [MIDIObjectGetIntegerProperty](midiobjectgetintegerproperty%28______%29.md) for the [kMIDIPropertyUniqueID](kmidipropertyuniqueid.md) property.
- `outObject`: The returned object, or 0 if the object wasn’t found or an error occurred. Cast this pointer to the appropriate type, according to type specified by the `outObjectType` argument.
- `outObjectType`: On exit, the type of object found, or undefined if the system found no objects.

<a id="return-value"></a>

## Return Value

An `OSStatus` error code, including [kMIDIObjectNotFound](kmidiobjectnotfound.md) if there is no object with this unique ID.

## Topics

### Parameter Types

- [MIDIUniqueID](midiuniqueid.md): A MIDI object’s unique identifier.
- [kMIDIInvalidUniqueID](kmidiinvaliduniqueid.md): An invalid identifier.
- [MIDIObjectType](midiobjecttype.md): The MIDI object types that the system supports.

## See Also

### MIDI object configuration

- [MIDIObjectRef](midiobjectref.md): The common base class for many of the framework’s objects.
- [MIDI Object Properties](midi-object-properties.md): Configure the properties of MIDI objects.
