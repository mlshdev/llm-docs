> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midigetdriveriorunloop()](https://developer.apple.com/documentation/coremidi/midigetdriveriorunloop())

# MIDIGetDriverIORunLoop() (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns the server’s driver I/O thread.

## Declaration

```swift
func MIDIGetDriverIORunLoop() -> Unmanaged<CFRunLoop>
```

<a id="return-value"></a>

## Return Value

The [CFRunLoop](../corefoundation/cfrunloop.md) of the server’s driver I/O thread.

<a id="Discussion"></a>

## Discussion

Drivers typically need to receive asynchronous I/O completion callbacks on a high-priority thread. So that the system can efficiently manage resources, the MIDI server provides a thread which drivers may use. This is a realtime-priority thread that drivers shouldn’t use for anything other than I/O.

## See Also

### Inspecting a Driver

- [MIDIGetDriverDeviceList(\_:)](midigetdriverdevicelist%28__%29.md): Returns the list of driver-created devices in the current MIDI setup.
- [MIDIDriverEnableMonitoring(\_:\_:)](mididriverenablemonitoring%28____%29.md): Enables monitoring of all outgoing MIDI packets.
- [kMIDIDriverPropertyUsesSerial](kmididriverpropertyusesserial.md): A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.
- [MIDIDriverInterface](mididriverinterface.md): The interface to a MIDI driver.
- [MIDIDriverRef](mididriverref.md): A MIDI driver object.

# MIDIGetDriverIORunLoop (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

Returns the server’s driver I/O thread.

## Declaration

```objectivec
extern CFRunLoopRefMIDIGetDriverIORunLoop();
```

<a id="return-value"></a>

## Return Value

The [CFRunLoopRef](../corefoundation/cfrunloop.md) of the server’s driver I/O thread.

<a id="Discussion"></a>

## Discussion

Drivers typically need to receive asynchronous I/O completion callbacks on a high-priority thread. So that the system can efficiently manage resources, the MIDI server provides a thread which drivers may use. This is a realtime-priority thread that drivers shouldn’t use for anything other than I/O.

## See Also

### Inspecting a Driver

- [MIDIGetDriverDeviceList](midigetdriverdevicelist%28__%29.md): Returns the list of driver-created devices in the current MIDI setup.
- [MIDIDriverEnableMonitoring](mididriverenablemonitoring%28____%29.md): Enables monitoring of all outgoing MIDI packets.
- [kMIDIDriverPropertyUsesSerial](kmididriverpropertyusesserial.md): A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.
- [MIDIDriverInterface](mididriverinterface.md): The interface to a MIDI driver.
- [MIDIDriverRef](mididriverref.md): A MIDI driver object.
