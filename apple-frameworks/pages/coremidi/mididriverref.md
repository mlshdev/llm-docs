> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididriverref](https://developer.apple.com/documentation/coremidi/mididriverref)

# MIDIDriverRef (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A MIDI driver object.

## Declaration

```swift
typealias MIDIDriverRef = UnsafeMutablePointer<UnsafeMutablePointer<MIDIDriverInterface>>
```

## See Also

### Inspecting a Driver

- [MIDIGetDriverDeviceList(\_:)](midigetdriverdevicelist%28__%29.md): Returns the list of driver-created devices in the current MIDI setup.
- [MIDIDriverEnableMonitoring(\_:\_:)](mididriverenablemonitoring%28____%29.md): Enables monitoring of all outgoing MIDI packets.
- [MIDIGetDriverIORunLoop()](midigetdriveriorunloop%28%29.md): Returns the server’s driver I/O thread.
- [kMIDIDriverPropertyUsesSerial](kmididriverpropertyusesserial.md): A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.
- [MIDIDriverInterface](mididriverinterface.md): The interface to a MIDI driver.

# MIDIDriverRef (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A MIDI driver object.

## Declaration

```objectivec
typedef MIDIDriverInterface ** MIDIDriverRef;
```

## See Also

### Inspecting a Driver

- [MIDIGetDriverDeviceList](midigetdriverdevicelist%28__%29.md): Returns the list of driver-created devices in the current MIDI setup.
- [MIDIDriverEnableMonitoring](mididriverenablemonitoring%28____%29.md): Enables monitoring of all outgoing MIDI packets.
- [MIDIGetDriverIORunLoop](midigetdriveriorunloop%28%29.md): Returns the server’s driver I/O thread.
- [kMIDIDriverPropertyUsesSerial](kmididriverpropertyusesserial.md): A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.
- [MIDIDriverInterface](mididriverinterface.md): The interface to a MIDI driver.
