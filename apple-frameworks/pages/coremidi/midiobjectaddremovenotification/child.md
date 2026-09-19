> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midiobjectaddremovenotification/child

# child (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The added or removed child object.

## Declaration

```swift
var child: MIDIObjectRef
```

## See Also

### Inspecting the Notification

- [messageID](messageid.md): The message type.
- [messageSize](messagesize.md): The message size.
- [parent](parent.md): The parent object of the added or removed child.
- [parentType](parenttype.md): The parent object type.
- [childType](childtype.md): The child object type.

# child (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The added or removed child object.

## Declaration

```objectivec
MIDIObjectRef child;
```

## See Also

### Inspecting the Notification

- [messageID](messageid.md): The message type.
- [messageSize](messagesize.md): The message size.
- [parent](parent.md): The parent object of the added or removed child.
- [parentType](parenttype.md): The parent object type.
- [childType](childtype.md): The child object type.
