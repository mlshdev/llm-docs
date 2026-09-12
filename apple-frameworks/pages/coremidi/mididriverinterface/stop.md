> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididriverinterface/stop](https://developer.apple.com/documentation/coremidi/mididriverinterface/stop)

# Stop (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Stops MIDI I/O.

## Declaration

```swift
var Stop: (MIDIDriverRef) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

You should terminate all I/O operations that you started.

## See Also

### Properties

- [FindDevices](finddevices.md): Finds the available devices.
- [Start](start.md): Starts MIDI I/O.
- [Configure](configure.md): The system doesn’t currently use this method.
- [Send](send.md): Sends a MIDI packet list to the specified destination endpoints.
- [EnableSource](enablesource.md): Tells the driver whether input from a particular source has listeners.
- [Flush](flush.md): Unschedules all pending output to the specified destination.
- [Monitor](monitor.md): Enables monitoring of MIDI packet lists by the specified driver.
- [MonitorEvents](monitorevents.md): Enables monitoring of MIDI event lists by the specified driver.
- [SendPackets](sendpackets.md): Sends a MIDI event list to the specified destination endpoints.
- [AddRef](addref.md)
- [QueryInterface](queryinterface.md)
- [Release](release.md)

# Stop (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Stops MIDI I/O.

## Declaration

```objectivec
int (*)(struct MIDIDriverInterface **) Stop;
```

<a id="Discussion"></a>

## Discussion

You should terminate all I/O operations that you started.

## See Also

### Properties

- [FindDevices](finddevices.md): Finds the available devices.
- [Start](start.md): Starts MIDI I/O.
- [Configure](configure.md): The system doesn’t currently use this method.
- [Send](send.md): Sends a MIDI packet list to the specified destination endpoints.
- [EnableSource](enablesource.md): Tells the driver whether input from a particular source has listeners.
- [Flush](flush.md): Unschedules all pending output to the specified destination.
- [Monitor](monitor.md): Enables monitoring of MIDI packet lists by the specified driver.
- [MonitorEvents](monitorevents.md): Enables monitoring of MIDI event lists by the specified driver.
- [SendPackets](sendpackets.md): Sends a MIDI event list to the specified destination endpoints.
- [AddRef](addref.md)
- [QueryInterface](queryinterface.md)
- [Release](release.md)
