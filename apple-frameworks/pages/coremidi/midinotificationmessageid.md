> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinotificationmessageid](https://developer.apple.com/documentation/coremidi/midinotificationmessageid)

# MIDINotificationMessageID (Swift)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The types of state changes the system supports.

## Declaration

```swift
enum MIDINotificationMessageID
```

## Topics

### Change Types

- [MIDINotificationMessageID.msgSetupChanged](midinotificationmessageid/msgsetupchanged.md): Some aspect of the current MIDI setup changed.
- [MIDINotificationMessageID.msgObjectAdded](midinotificationmessageid/msgobjectadded.md): The system added a device, entity, or endpoint.
- [MIDINotificationMessageID.msgObjectRemoved](midinotificationmessageid/msgobjectremoved.md): The system removed a device, entity, or endpoint.
- [MIDINotificationMessageID.msgPropertyChanged](midinotificationmessageid/msgpropertychanged.md): An object’s property value changed.
- [MIDINotificationMessageID.msgThruConnectionsChanged](midinotificationmessageid/msgthruconnectionschanged.md): The system created or disposed of a persistent MIDI Thru connection.
- [MIDINotificationMessageID.msgSerialPortOwnerChanged](midinotificationmessageid/msgserialportownerchanged.md): The system changed a serial port owner.
- [MIDINotificationMessageID.msgIOError](midinotificationmessageid/msgioerror.md): A driver I/O error occurred.

### Enumeration Cases

- [MIDINotificationMessageID.msgInternalStart](midinotificationmessageid/msginternalstart.md)

### Initializers

- [init(rawValue:)](midinotificationmessageid/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the Notification

- [messageID](midinotification/messageid.md): An identifier that describes the type of state change.
- [messageSize](midinotification/messagesize.md): The size of the message including its ID.

# MIDINotificationMessageID (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The types of state changes the system supports.

## Declaration

```objectivec
enum MIDINotificationMessageID : SInt32;
```

## Topics

### Change Types

- [kMIDIMsgSetupChanged](midinotificationmessageid/msgsetupchanged.md): Some aspect of the current MIDI setup changed.
- [kMIDIMsgObjectAdded](midinotificationmessageid/msgobjectadded.md): The system added a device, entity, or endpoint.
- [kMIDIMsgObjectRemoved](midinotificationmessageid/msgobjectremoved.md): The system removed a device, entity, or endpoint.
- [kMIDIMsgPropertyChanged](midinotificationmessageid/msgpropertychanged.md): An object’s property value changed.
- [kMIDIMsgThruConnectionsChanged](midinotificationmessageid/msgthruconnectionschanged.md): The system created or disposed of a persistent MIDI Thru connection.
- [kMIDIMsgSerialPortOwnerChanged](midinotificationmessageid/msgserialportownerchanged.md): The system changed a serial port owner.
- [kMIDIMsgIOError](midinotificationmessageid/msgioerror.md): A driver I/O error occurred.

### Enumeration Cases

- [kMIDIMsgInternalStart](midinotificationmessageid/msginternalstart.md)

## See Also

### Inspecting the Notification

- [messageID](midinotification/messageid.md): An identifier that describes the type of state change.
- [messageSize](midinotification/messagesize.md): The size of the message including its ID.
