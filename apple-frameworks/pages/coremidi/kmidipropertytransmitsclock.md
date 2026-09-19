> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/kmidipropertytransmitsclock

# kMIDIPropertyTransmitsClock (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

A Boolean value that indicates whether the device or entity transmits MIDI beat clock messages.

## Declaration

```swift
let kMIDIPropertyTransmitsClock: CFString
```

## See Also

### Timing

- [kMIDIPropertyTransmitsMTC](kmidipropertytransmitsmtc.md): A Boolean value that indicates whether the device or entity transmits MIDI Time Code messages.
- [kMIDIPropertyReceivesMTC](kmidipropertyreceivesmtc.md): A Boolean value that indicates whether the device or entity responds to MIDI Time Code messages.
- [kMIDIPropertyReceivesClock](kmidipropertyreceivesclock.md): A Boolean value that indicates whether the device or entity responds to MIDI beat clock messages.
- [kMIDIPropertyAdvanceScheduleTimeMuSec](kmidipropertyadvancescheduletimemusec.md): The recommended number of microseconds in advance that clients should schedule output.

# kMIDIPropertyTransmitsClock (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

A Boolean value that indicates whether the device or entity transmits MIDI beat clock messages.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyTransmitsClock;
```

## See Also

### Timing

- [kMIDIPropertyTransmitsMTC](kmidipropertytransmitsmtc.md): A Boolean value that indicates whether the device or entity transmits MIDI Time Code messages.
- [kMIDIPropertyReceivesMTC](kmidipropertyreceivesmtc.md): A Boolean value that indicates whether the device or entity responds to MIDI Time Code messages.
- [kMIDIPropertyReceivesClock](kmidipropertyreceivesclock.md): A Boolean value that indicates whether the device or entity responds to MIDI beat clock messages.
- [kMIDIPropertyAdvanceScheduleTimeMuSec](kmidipropertyadvancescheduletimemusec.md): The recommended number of microseconds in advance that clients should schedule output.
