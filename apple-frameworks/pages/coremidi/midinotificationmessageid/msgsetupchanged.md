> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinotificationmessageid/msgsetupchanged](https://developer.apple.com/documentation/coremidi/midinotificationmessageid/msgsetupchanged)

# MIDINotificationMessageID.msgSetupChanged (Swift)

**Framework:** Core MIDI  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Some aspect of the current MIDI setup changed.

## Declaration

```swift
case msgSetupChanged
```

<a id="Discussion"></a>

## Discussion

This type provides no data. Ignore this message if you’re explicitly handling other state changes.

## See Also

### Change Types

- [MIDINotificationMessageID.msgObjectAdded](msgobjectadded.md): The system added a device, entity, or endpoint.
- [MIDINotificationMessageID.msgObjectRemoved](msgobjectremoved.md): The system removed a device, entity, or endpoint.
- [MIDINotificationMessageID.msgPropertyChanged](msgpropertychanged.md): An object’s property value changed.
- [MIDINotificationMessageID.msgThruConnectionsChanged](msgthruconnectionschanged.md): The system created or disposed of a persistent MIDI Thru connection.
- [MIDINotificationMessageID.msgSerialPortOwnerChanged](msgserialportownerchanged.md): The system changed a serial port owner.
- [MIDINotificationMessageID.msgIOError](msgioerror.md): A driver I/O error occurred.

# kMIDIMsgSetupChanged (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Some aspect of the current MIDI setup changed.

## Declaration

```objectivec
kMIDIMsgSetupChanged
```

<a id="Discussion"></a>

## Discussion

This type provides no data. Ignore this message if you’re explicitly handling other state changes.

## See Also

### Change Types

- [kMIDIMsgObjectAdded](msgobjectadded.md): The system added a device, entity, or endpoint.
- [kMIDIMsgObjectRemoved](msgobjectremoved.md): The system removed a device, entity, or endpoint.
- [kMIDIMsgPropertyChanged](msgpropertychanged.md): An object’s property value changed.
- [kMIDIMsgThruConnectionsChanged](msgthruconnectionschanged.md): The system created or disposed of a persistent MIDI Thru connection.
- [kMIDIMsgSerialPortOwnerChanged](msgserialportownerchanged.md): The system changed a serial port owner.
- [kMIDIMsgIOError](msgioerror.md): A driver I/O error occurred.
