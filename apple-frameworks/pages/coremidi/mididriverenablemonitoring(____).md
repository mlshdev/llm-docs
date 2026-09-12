> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididriverenablemonitoring(_:_:)](https://developer.apple.com/documentation/coremidi/mididriverenablemonitoring(_:_:))

# MIDIDriverEnableMonitoring(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** macOS 10.1+

Enables monitoring of all outgoing MIDI packets.

## Declaration

```swift
func MIDIDriverEnableMonitoring(_ driver: MIDIDriverRef, _ enabled: Bool) -> OSStatus
```

## Parameters

- `driver`: The driver for which to enable monitoring.
- `enabled`: A Boolean value that indicates whether to enable monitoring.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Some specialized drivers, like a MIDI monitor display, can intercept and inspect all outgoing MIDI messages. Enablng monitoring causes the system to call the [Monitor](mididriverinterface/monitor.md) function with the outgoing MIDI packets for all destinations in the system. The [Monitor](mididriverinterface/monitor.md) function can’t rely on the MIDI events arriving in order, due to the MIDI server’s schedule-ahead facilities.

## See Also

### Inspecting a Driver

- [MIDIGetDriverDeviceList(\_:)](midigetdriverdevicelist%28__%29.md): Returns the list of driver-created devices in the current MIDI setup.
- [MIDIGetDriverIORunLoop()](midigetdriveriorunloop%28%29.md): Returns the server’s driver I/O thread.
- [kMIDIDriverPropertyUsesSerial](kmididriverpropertyusesserial.md): A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.
- [MIDIDriverInterface](mididriverinterface.md): The interface to a MIDI driver.
- [MIDIDriverRef](mididriverref.md): A MIDI driver object.

# MIDIDriverEnableMonitoring (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** macOS 10.1+

Enables monitoring of all outgoing MIDI packets.

## Declaration

```objectivec
extern OSStatus MIDIDriverEnableMonitoring(MIDIDriverRef driver, Boolean enabled);
```

## Parameters

- `driver`: The driver for which to enable monitoring.
- `enabled`: A Boolean value that indicates whether to enable monitoring.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Some specialized drivers, like a MIDI monitor display, can intercept and inspect all outgoing MIDI messages. Enablng monitoring causes the system to call the [Monitor](mididriverinterface/monitor.md) function with the outgoing MIDI packets for all destinations in the system. The [Monitor](mididriverinterface/monitor.md) function can’t rely on the MIDI events arriving in order, due to the MIDI server’s schedule-ahead facilities.

## See Also

### Inspecting a Driver

- [MIDIGetDriverDeviceList](midigetdriverdevicelist%28__%29.md): Returns the list of driver-created devices in the current MIDI setup.
- [MIDIGetDriverIORunLoop](midigetdriveriorunloop%28%29.md): Returns the server’s driver I/O thread.
- [kMIDIDriverPropertyUsesSerial](kmididriverpropertyusesserial.md): A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.
- [MIDIDriverInterface](mididriverinterface.md): The interface to a MIDI driver.
- [MIDIDriverRef](mididriverref.md): A MIDI driver object.
