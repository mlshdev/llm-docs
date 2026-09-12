> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididriverinterface](https://developer.apple.com/documentation/coremidi/mididriverinterface)

# MIDIDriverInterface (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The interface to a MIDI driver.

## Declaration

```swift
struct MIDIDriverInterface
```

## Topics

### Properties

- [FindDevices](mididriverinterface/finddevices.md): Finds the available devices.
- [Start](mididriverinterface/start.md): Starts MIDI I/O.
- [Stop](mididriverinterface/stop.md): Stops MIDI I/O.
- [Configure](mididriverinterface/configure.md): The system doesn’t currently use this method.
- [Send](mididriverinterface/send.md): Sends a MIDI packet list to the specified destination endpoints.
- [EnableSource](mididriverinterface/enablesource.md): Tells the driver whether input from a particular source has listeners.
- [Flush](mididriverinterface/flush.md): Unschedules all pending output to the specified destination.
- [Monitor](mididriverinterface/monitor.md): Enables monitoring of MIDI packet lists by the specified driver.
- [MonitorEvents](mididriverinterface/monitorevents.md): Enables monitoring of MIDI event lists by the specified driver.
- [SendPackets](mididriverinterface/sendpackets.md): Sends a MIDI event list to the specified destination endpoints.
- [AddRef](mididriverinterface/addref.md)
- [QueryInterface](mididriverinterface/queryinterface.md)
- [Release](mididriverinterface/release.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Inspecting a Driver

- [MIDIGetDriverDeviceList(\_:)](midigetdriverdevicelist%28__%29.md): Returns the list of driver-created devices in the current MIDI setup.
- [MIDIDriverEnableMonitoring(\_:\_:)](mididriverenablemonitoring%28____%29.md): Enables monitoring of all outgoing MIDI packets.
- [MIDIGetDriverIORunLoop()](midigetdriveriorunloop%28%29.md): Returns the server’s driver I/O thread.
- [kMIDIDriverPropertyUsesSerial](kmididriverpropertyusesserial.md): A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.
- [MIDIDriverRef](mididriverref.md): A MIDI driver object.

# MIDIDriverInterface (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The interface to a MIDI driver.

## Declaration

```objectivec
struct MIDIDriverInterface;
```

## Topics

### Properties

- [FindDevices](mididriverinterface/finddevices.md): Finds the available devices.
- [Start](mididriverinterface/start.md): Starts MIDI I/O.
- [Stop](mididriverinterface/stop.md): Stops MIDI I/O.
- [Configure](mididriverinterface/configure.md): The system doesn’t currently use this method.
- [Send](mididriverinterface/send.md): Sends a MIDI packet list to the specified destination endpoints.
- [EnableSource](mididriverinterface/enablesource.md): Tells the driver whether input from a particular source has listeners.
- [Flush](mididriverinterface/flush.md): Unschedules all pending output to the specified destination.
- [Monitor](mididriverinterface/monitor.md): Enables monitoring of MIDI packet lists by the specified driver.
- [MonitorEvents](mididriverinterface/monitorevents.md): Enables monitoring of MIDI event lists by the specified driver.
- [SendPackets](mididriverinterface/sendpackets.md): Sends a MIDI event list to the specified destination endpoints.
- [AddRef](mididriverinterface/addref.md)
- [QueryInterface](mididriverinterface/queryinterface.md)
- [Release](mididriverinterface/release.md)

## See Also

### Inspecting a Driver

- [MIDIGetDriverDeviceList](midigetdriverdevicelist%28__%29.md): Returns the list of driver-created devices in the current MIDI setup.
- [MIDIDriverEnableMonitoring](mididriverenablemonitoring%28____%29.md): Enables monitoring of all outgoing MIDI packets.
- [MIDIGetDriverIORunLoop](midigetdriveriorunloop%28%29.md): Returns the server’s driver I/O thread.
- [kMIDIDriverPropertyUsesSerial](kmididriverpropertyusesserial.md): A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.
- [MIDIDriverRef](mididriverref.md): A MIDI driver object.
