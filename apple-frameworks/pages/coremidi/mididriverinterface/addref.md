> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididriverinterface/addref](https://developer.apple.com/documentation/coremidi/mididriverinterface/addref)

# AddRef (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
var AddRef: (UnsafeMutableRawPointer) -> ULONG
```

## See Also

### Properties

- [FindDevices](finddevices.md): Finds the available devices.
- [Start](start.md): Starts MIDI I/O.
- [Stop](stop.md): Stops MIDI I/O.
- [Configure](configure.md): The system doesn’t currently use this method.
- [Send](send.md): Sends a MIDI packet list to the specified destination endpoints.
- [EnableSource](enablesource.md): Tells the driver whether input from a particular source has listeners.
- [Flush](flush.md): Unschedules all pending output to the specified destination.
- [Monitor](monitor.md): Enables monitoring of MIDI packet lists by the specified driver.
- [MonitorEvents](monitorevents.md): Enables monitoring of MIDI event lists by the specified driver.
- [SendPackets](sendpackets.md): Sends a MIDI event list to the specified destination endpoints.
- [QueryInterface](queryinterface.md)
- [Release](release.md)

# AddRef (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
unsigned int (*)(void *) AddRef;
```

## See Also

### Properties

- [FindDevices](finddevices.md): Finds the available devices.
- [Start](start.md): Starts MIDI I/O.
- [Stop](stop.md): Stops MIDI I/O.
- [Configure](configure.md): The system doesn’t currently use this method.
- [Send](send.md): Sends a MIDI packet list to the specified destination endpoints.
- [EnableSource](enablesource.md): Tells the driver whether input from a particular source has listeners.
- [Flush](flush.md): Unschedules all pending output to the specified destination.
- [Monitor](monitor.md): Enables monitoring of MIDI packet lists by the specified driver.
- [MonitorEvents](monitorevents.md): Enables monitoring of MIDI event lists by the specified driver.
- [SendPackets](sendpackets.md): Sends a MIDI event list to the specified destination endpoints.
- [QueryInterface](queryinterface.md)
- [Release](release.md)
