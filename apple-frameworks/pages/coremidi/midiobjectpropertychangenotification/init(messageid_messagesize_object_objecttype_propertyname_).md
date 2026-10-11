> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midiobjectpropertychangenotification/init(messageid:messagesize:object:objecttype:propertyname:)

# init(messageID:messageSize:object:objectType:propertyName:)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
init(messageID: MIDINotificationMessageID, messageSize: UInt32, object: MIDIObjectRef, objectType: MIDIObjectType, propertyName: Unmanaged<CFString>)
```
