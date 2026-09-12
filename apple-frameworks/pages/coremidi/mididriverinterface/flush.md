> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididriverinterface/flush](https://developer.apple.com/documentation/coremidi/mididriverinterface/flush)

# Flush (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Unschedules all pending output to the specified destination.

## Declaration

```swift
var Flush: (MIDIDriverRef, MIDIEndpointRef, UnsafeMutableRawPointer?, UnsafeMutableRawPointer?) -> OSStatus
```

## See Also

### Properties

- [FindDevices](finddevices.md): Finds the available devices.
- [Start](start.md): Starts MIDI I/O.
- [Stop](stop.md): Stops MIDI I/O.
- [Configure](configure.md): The system doesn’t currently use this method.
- [Send](send.md): Sends a MIDI packet list to the specified destination endpoints.
- [EnableSource](enablesource.md): Tells the driver whether input from a particular source has listeners.
- [Monitor](monitor.md): Enables monitoring of MIDI packet lists by the specified driver.
- [MonitorEvents](monitorevents.md): Enables monitoring of MIDI event lists by the specified driver.
- [SendPackets](sendpackets.md): Sends a MIDI event list to the specified destination endpoints.
- [AddRef](addref.md)
- [QueryInterface](queryinterface.md)
- [Release](release.md)

# Flush (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Unschedules all pending output to the specified destination.

## Declaration

```objectivec
int (*)(struct MIDIDriverInterface **, unsigned int, void *, void *) Flush;
```

## See Also

### Properties

- [FindDevices](finddevices.md): Finds the available devices.
- [Start](start.md): Starts MIDI I/O.
- [Stop](stop.md): Stops MIDI I/O.
- [Configure](configure.md): The system doesn’t currently use this method.
- [Send](send.md): Sends a MIDI packet list to the specified destination endpoints.
- [EnableSource](enablesource.md): Tells the driver whether input from a particular source has listeners.
- [Monitor](monitor.md): Enables monitoring of MIDI packet lists by the specified driver.
- [MonitorEvents](monitorevents.md): Enables monitoring of MIDI event lists by the specified driver.
- [SendPackets](sendpackets.md): Sends a MIDI event list to the specified destination endpoints.
- [AddRef](addref.md)
- [QueryInterface](queryinterface.md)
- [Release](release.md)
