> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiobjectpropertychangenotification](https://developer.apple.com/documentation/coremidi/midiobjectpropertychangenotification)

# MIDIObjectPropertyChangeNotification (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A message that describes the change to an object property.

## Declaration

```swift
struct MIDIObjectPropertyChangeNotification
```

## Topics

### Inspecting the Notification

- [messageID](midiobjectpropertychangenotification/messageid.md): The message type.
- [messageSize](midiobjectpropertychangenotification/messagesize.md): The message size.
- [object](midiobjectpropertychangenotification/object.md): The object whose property changed.
- [objectType](midiobjectpropertychangenotification/objecttype.md): The object type.
- [propertyName](midiobjectpropertychangenotification/propertyname.md): The name of the modified property.

### Initializers

- [init(messageID:messageSize:object:objectType:propertyName:)](midiobjectpropertychangenotification/init%28messageid_messagesize_object_objecttype_propertyname_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Notifications

- [MIDIObjectAddRemoveNotification](midiobjectaddremovenotification.md): A message that describes the addition or removal of an object.

# MIDIObjectPropertyChangeNotification (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A message that describes the change to an object property.

## Declaration

```objectivec
struct MIDIObjectPropertyChangeNotification;
```

## Topics

### Inspecting the Notification

- [messageID](midiobjectpropertychangenotification/messageid.md): The message type.
- [messageSize](midiobjectpropertychangenotification/messagesize.md): The message size.
- [object](midiobjectpropertychangenotification/object.md): The object whose property changed.
- [objectType](midiobjectpropertychangenotification/objecttype.md): The object type.
- [propertyName](midiobjectpropertychangenotification/propertyname.md): The name of the modified property.

## See Also

### Notifications

- [MIDIObjectAddRemoveNotification](midiobjectaddremovenotification.md): A message that describes the addition or removal of an object.
