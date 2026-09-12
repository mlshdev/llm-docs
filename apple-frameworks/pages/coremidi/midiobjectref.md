> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiobjectref](https://developer.apple.com/documentation/coremidi/midiobjectref)

# MIDIObjectRef (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The common base class for many of the framework’s objects.

## Declaration

```swift
typealias MIDIObjectRef = UInt32
```

<a id="Discussion"></a>

## Discussion

MIDI Objects have properties, and often have an owning object, from which they inherit any properties they don’t define themselves.

Developers may add their own private properties, with names that begin with their company’s inverted domain name, but with underscores instead of dots. For example, `com_apple_APrivateAppleProperty`.

## See Also

### MIDI object configuration

- [MIDIObjectFindByUniqueID(\_:\_:\_:)](midiobjectfindbyuniqueid%28______%29.md): Locates a device, entity, or endpoint by its unique identifier.
- [MIDI Object Properties](midi-object-properties.md): Configure the properties of MIDI objects.

# MIDIObjectRef (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The common base class for many of the framework’s objects.

## Declaration

```objectivec
typedef UInt32 MIDIObjectRef;
```

<a id="Discussion"></a>

## Discussion

MIDI Objects have properties, and often have an owning object, from which they inherit any properties they don’t define themselves.

Developers may add their own private properties, with names that begin with their company’s inverted domain name, but with underscores instead of dots. For example, `com_apple_APrivateAppleProperty`.

## See Also

### MIDI object configuration

- [MIDIObjectFindByUniqueID](midiobjectfindbyuniqueid%28______%29.md): Locates a device, entity, or endpoint by its unique identifier.
- [MIDI Object Properties](midi-object-properties.md): Configure the properties of MIDI objects.
