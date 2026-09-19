> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midiobjectaddremovenotification/parent

# parent (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The parent object of the added or removed child.

## Declaration

```swift
var parent: MIDIObjectRef
```

## See Also

### Inspecting the Notification

- [messageID](messageid.md): The message type.
- [messageSize](messagesize.md): The message size.
- [parentType](parenttype.md): The parent object type.
- [child](child.md): The added or removed child object.
- [childType](childtype.md): The child object type.

# parent (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The parent object of the added or removed child.

## Declaration

```objectivec
MIDIObjectRef parent;
```

## See Also

### Inspecting the Notification

- [messageID](messageid.md): The message type.
- [messageSize](messagesize.md): The message size.
- [parentType](parenttype.md): The parent object type.
- [child](child.md): The added or removed child object.
- [childType](childtype.md): The child object type.
