> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmididriverpropertyusesserial](https://developer.apple.com/documentation/coremidi/kmididriverpropertyusesserial)

# kMIDIDriverPropertyUsesSerial (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** macOS 10.1+

A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.

## Declaration

```swift
let kMIDIDriverPropertyUsesSerial: CFString
```

## See Also

### Inspecting a Driver

- [MIDIGetDriverDeviceList(\_:)](midigetdriverdevicelist%28__%29.md): Returns the list of driver-created devices in the current MIDI setup.
- [MIDIDriverEnableMonitoring(\_:\_:)](mididriverenablemonitoring%28____%29.md): Enables monitoring of all outgoing MIDI packets.
- [MIDIGetDriverIORunLoop()](midigetdriveriorunloop%28%29.md): Returns the server’s driver I/O thread.
- [MIDIDriverInterface](mididriverinterface.md): The interface to a MIDI driver.
- [MIDIDriverRef](mididriverref.md): A MIDI driver object.

# kMIDIDriverPropertyUsesSerial (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** macOS 10.1+

A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.

## Declaration

```objectivec
extern CFStringRef const kMIDIDriverPropertyUsesSerial;
```

## See Also

### Inspecting a Driver

- [MIDIGetDriverDeviceList](midigetdriverdevicelist%28__%29.md): Returns the list of driver-created devices in the current MIDI setup.
- [MIDIDriverEnableMonitoring](mididriverenablemonitoring%28____%29.md): Enables monitoring of all outgoing MIDI packets.
- [MIDIGetDriverIORunLoop](midigetdriveriorunloop%28%29.md): Returns the server’s driver I/O thread.
- [MIDIDriverInterface](mididriverinterface.md): The interface to a MIDI driver.
- [MIDIDriverRef](mididriverref.md): A MIDI driver object.
