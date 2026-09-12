> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinotification](https://developer.apple.com/documentation/coremidi/midinotification)

# MIDINotification (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A message that describes a system state change.

## Declaration

```swift
struct MIDINotification
```

## Topics

### Inspecting the Notification

- [MIDINotificationMessageID](midinotificationmessageid.md): The types of state changes the system supports.
- [messageID](midinotification/messageid.md): An identifier that describes the type of state change.
- [messageSize](midinotification/messagesize.md): The size of the message including its ID.

### Initializers

- [init()](midinotification/init%28%29.md)
- [init(messageID:messageSize:)](midinotification/init%28messageid_messagesize_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Callbacks

- [MIDINotifyProc](midinotifyproc.md): A callback function for notifying clients of state changes.

# MIDINotification (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A message that describes a system state change.

## Declaration

```objectivec
struct MIDINotification;
```

## Topics

### Inspecting the Notification

- [MIDINotificationMessageID](midinotificationmessageid.md): The types of state changes the system supports.
- [messageID](midinotification/messageid.md): An identifier that describes the type of state change.
- [messageSize](midinotification/messagesize.md): The size of the message including its ID.

## See Also

### Callbacks

- [MIDINotifyProc](midinotifyproc.md): A callback function for notifying clients of state changes.
