> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinotificationmessageid/msgpropertychanged](https://developer.apple.com/documentation/coremidi/midinotificationmessageid/msgpropertychanged)

# MIDINotificationMessageID.msgPropertyChanged (Swift)

**Framework:** Core MIDI  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object’s property value changed.

## Declaration

```swift
case msgPropertyChanged
```

<a id="Discussion"></a>

## Discussion

This type’s data is [MIDIObjectPropertyChangeNotification](../midiobjectpropertychangenotification.md).

## See Also

### Change Types

- [MIDINotificationMessageID.msgSetupChanged](msgsetupchanged.md): Some aspect of the current MIDI setup changed.
- [MIDINotificationMessageID.msgObjectAdded](msgobjectadded.md): The system added a device, entity, or endpoint.
- [MIDINotificationMessageID.msgObjectRemoved](msgobjectremoved.md): The system removed a device, entity, or endpoint.
- [MIDINotificationMessageID.msgThruConnectionsChanged](msgthruconnectionschanged.md): The system created or disposed of a persistent MIDI Thru connection.
- [MIDINotificationMessageID.msgSerialPortOwnerChanged](msgserialportownerchanged.md): The system changed a serial port owner.
- [MIDINotificationMessageID.msgIOError](msgioerror.md): A driver I/O error occurred.

# kMIDIMsgPropertyChanged (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object’s property value changed.

## Declaration

```objectivec
kMIDIMsgPropertyChanged
```

<a id="Discussion"></a>

## Discussion

This type’s data is [MIDIObjectPropertyChangeNotification](../midiobjectpropertychangenotification.md).

## See Also

### Change Types

- [kMIDIMsgSetupChanged](msgsetupchanged.md): Some aspect of the current MIDI setup changed.
- [kMIDIMsgObjectAdded](msgobjectadded.md): The system added a device, entity, or endpoint.
- [kMIDIMsgObjectRemoved](msgobjectremoved.md): The system removed a device, entity, or endpoint.
- [kMIDIMsgThruConnectionsChanged](msgthruconnectionschanged.md): The system created or disposed of a persistent MIDI Thru connection.
- [kMIDIMsgSerialPortOwnerChanged](msgserialportownerchanged.md): The system changed a serial port owner.
- [kMIDIMsgIOError](msgioerror.md): A driver I/O error occurred.
