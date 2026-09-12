> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiobjectaddremovenotification](https://developer.apple.com/documentation/coremidi/midiobjectaddremovenotification)

# MIDIObjectAddRemoveNotification (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A message that describes the addition or removal of an object.

## Declaration

```swift
struct MIDIObjectAddRemoveNotification
```

## Topics

### Inspecting the Notification

- [messageID](midiobjectaddremovenotification/messageid.md): The message type.
- [messageSize](midiobjectaddremovenotification/messagesize.md): The message size.
- [parent](midiobjectaddremovenotification/parent.md): The parent object of the added or removed child.
- [parentType](midiobjectaddremovenotification/parenttype.md): The parent object type.
- [child](midiobjectaddremovenotification/child.md): The added or removed child object.
- [childType](midiobjectaddremovenotification/childtype.md): The child object type.

### Initializers

- [init()](midiobjectaddremovenotification/init%28%29.md)
- [init(messageID:messageSize:parent:parentType:child:childType:)](midiobjectaddremovenotification/init%28messageid_messagesize_parent_parenttype_child_childtype_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Notifications

- [MIDIObjectPropertyChangeNotification](midiobjectpropertychangenotification.md): A message that describes the change to an object property.

# MIDIObjectAddRemoveNotification (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A message that describes the addition or removal of an object.

## Declaration

```objectivec
struct MIDIObjectAddRemoveNotification;
```

## Topics

### Inspecting the Notification

- [messageID](midiobjectaddremovenotification/messageid.md): The message type.
- [messageSize](midiobjectaddremovenotification/messagesize.md): The message size.
- [parent](midiobjectaddremovenotification/parent.md): The parent object of the added or removed child.
- [parentType](midiobjectaddremovenotification/parenttype.md): The parent object type.
- [child](midiobjectaddremovenotification/child.md): The added or removed child object.
- [childType](midiobjectaddremovenotification/childtype.md): The child object type.

## See Also

### Notifications

- [MIDIObjectPropertyChangeNotification](midiobjectpropertychangenotification.md): A message that describes the change to an object property.
