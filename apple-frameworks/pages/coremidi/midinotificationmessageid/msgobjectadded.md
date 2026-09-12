> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinotificationmessageid/msgobjectadded](https://developer.apple.com/documentation/coremidi/midinotificationmessageid/msgobjectadded)

# MIDINotificationMessageID.msgObjectAdded (Swift)

**Framework:** Core MIDI  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The system added a device, entity, or endpoint.

## Declaration

```swift
case msgObjectAdded
```

<a id="Discussion"></a>

## Discussion

This type’s data is [MIDIObjectAddRemoveNotification](../midiobjectaddremovenotification.md).

## See Also

### Change Types

- [MIDINotificationMessageID.msgSetupChanged](msgsetupchanged.md): Some aspect of the current MIDI setup changed.
- [MIDINotificationMessageID.msgObjectRemoved](msgobjectremoved.md): The system removed a device, entity, or endpoint.
- [MIDINotificationMessageID.msgPropertyChanged](msgpropertychanged.md): An object’s property value changed.
- [MIDINotificationMessageID.msgThruConnectionsChanged](msgthruconnectionschanged.md): The system created or disposed of a persistent MIDI Thru connection.
- [MIDINotificationMessageID.msgSerialPortOwnerChanged](msgserialportownerchanged.md): The system changed a serial port owner.
- [MIDINotificationMessageID.msgIOError](msgioerror.md): A driver I/O error occurred.

# kMIDIMsgObjectAdded (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The system added a device, entity, or endpoint.

## Declaration

```objectivec
kMIDIMsgObjectAdded
```

<a id="Discussion"></a>

## Discussion

This type’s data is [MIDIObjectAddRemoveNotification](../midiobjectaddremovenotification.md).

## See Also

### Change Types

- [kMIDIMsgSetupChanged](msgsetupchanged.md): Some aspect of the current MIDI setup changed.
- [kMIDIMsgObjectRemoved](msgobjectremoved.md): The system removed a device, entity, or endpoint.
- [kMIDIMsgPropertyChanged](msgpropertychanged.md): An object’s property value changed.
- [kMIDIMsgThruConnectionsChanged](msgthruconnectionschanged.md): The system created or disposed of a persistent MIDI Thru connection.
- [kMIDIMsgSerialPortOwnerChanged](msgserialportownerchanged.md): The system changed a serial port owner.
- [kMIDIMsgIOError](msgioerror.md): A driver I/O error occurred.
