> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertyadvancescheduletimemusec](https://developer.apple.com/documentation/coremidi/kmidipropertyadvancescheduletimemusec)

# kMIDIPropertyAdvanceScheduleTimeMuSec (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

The recommended number of microseconds in advance that clients should schedule output.

## Declaration

```swift
let kMIDIPropertyAdvanceScheduleTimeMuSec: CFString
```

<a id="Discussion"></a>

## Discussion

Only the driver that owns the object may set this property.

If this property value is nonzero, clients should treat the value as a minimum. For devices with a nonzero advance schedule time, drivers receive outgoing messages to the device at the time the client sends them using [MIDISend(\_:\_:\_:)](midisend%28______%29.md). The driver is responsible for scheduling events to play at the right times, according to their timestamps.

You can also set this property on any virtual destinations you create. When clients send messages to a virtual destination with an advance schedule time of 0, the destination receives the messages at the scheduled delivery time. If a virtual destination has a nonzero advance schedule time, it receives timestamped messages as soon as they’re sent, and must do its own internal scheduling of events it receives.

## See Also

### Timing

- [kMIDIPropertyTransmitsMTC](kmidipropertytransmitsmtc.md): A Boolean value that indicates whether the device or entity transmits MIDI Time Code messages.
- [kMIDIPropertyReceivesMTC](kmidipropertyreceivesmtc.md): A Boolean value that indicates whether the device or entity responds to MIDI Time Code messages.
- [kMIDIPropertyTransmitsClock](kmidipropertytransmitsclock.md): A Boolean value that indicates whether the device or entity transmits MIDI beat clock messages.
- [kMIDIPropertyReceivesClock](kmidipropertyreceivesclock.md): A Boolean value that indicates whether the device or entity responds to MIDI beat clock messages.

# kMIDIPropertyAdvanceScheduleTimeMuSec (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

The recommended number of microseconds in advance that clients should schedule output.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyAdvanceScheduleTimeMuSec;
```

<a id="Discussion"></a>

## Discussion

Only the driver that owns the object may set this property.

If this property value is nonzero, clients should treat the value as a minimum. For devices with a nonzero advance schedule time, drivers receive outgoing messages to the device at the time the client sends them using [MIDISend](midisend%28______%29.md). The driver is responsible for scheduling events to play at the right times, according to their timestamps.

You can also set this property on any virtual destinations you create. When clients send messages to a virtual destination with an advance schedule time of 0, the destination receives the messages at the scheduled delivery time. If a virtual destination has a nonzero advance schedule time, it receives timestamped messages as soon as they’re sent, and must do its own internal scheduling of events it receives.

## See Also

### Timing

- [kMIDIPropertyTransmitsMTC](kmidipropertytransmitsmtc.md): A Boolean value that indicates whether the device or entity transmits MIDI Time Code messages.
- [kMIDIPropertyReceivesMTC](kmidipropertyreceivesmtc.md): A Boolean value that indicates whether the device or entity responds to MIDI Time Code messages.
- [kMIDIPropertyTransmitsClock](kmidipropertytransmitsclock.md): A Boolean value that indicates whether the device or entity transmits MIDI beat clock messages.
- [kMIDIPropertyReceivesClock](kmidipropertyreceivesclock.md): A Boolean value that indicates whether the device or entity responds to MIDI beat clock messages.
