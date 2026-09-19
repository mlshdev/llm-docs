> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midiobjectaddremovenotification/parenttype

# parentType (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The parent object type.

## Declaration

```swift
var parentType: MIDIObjectType
```

## See Also

### Inspecting the Notification

- [messageID](messageid.md): The message type.
- [messageSize](messagesize.md): The message size.
- [parent](parent.md): The parent object of the added or removed child.
- [child](child.md): The added or removed child object.
- [childType](childtype.md): The child object type.

# parentType (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The parent object type.

## Declaration

```objectivec
MIDIObjectType parentType;
```

## See Also

### Inspecting the Notification

- [messageID](messageid.md): The message type.
- [messageSize](messagesize.md): The message size.
- [parent](parent.md): The parent object of the added or removed child.
- [child](child.md): The added or removed child object.
- [childType](childtype.md): The child object type.
