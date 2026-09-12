> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididriverinterface/finddevices](https://developer.apple.com/documentation/coremidi/mididriverinterface/finddevices)

# FindDevices (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Finds the available devices.

## Declaration

```swift
var FindDevices: (MIDIDriverRef, MIDIDeviceListRef) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

Don’t hold strong references to the created devices and entities.

## See Also

### Properties

- [Start](start.md): Starts MIDI I/O.
- [Stop](stop.md): Stops MIDI I/O.
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

# FindDevices (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Finds the available devices.

## Declaration

```objectivec
int (*)(struct MIDIDriverInterface **, unsigned int) FindDevices;
```

<a id="Discussion"></a>

## Discussion

Don’t hold strong references to the created devices and entities.

## See Also

### Properties

- [Start](start.md): Starts MIDI I/O.
- [Stop](stop.md): Stops MIDI I/O.
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
