> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midigetdriverdevicelist(_:)](https://developer.apple.com/documentation/coremidi/midigetdriverdevicelist(_:))

# MIDIGetDriverDeviceList(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Returns the list of driver-created devices in the current MIDI setup.

## Declaration

```swift
func MIDIGetDriverDeviceList(_ driver: MIDIDriverRef) -> MIDIDeviceListRef
```

## Parameters

- `driver`: The driver for which you return devices.

<a id="return-value"></a>

## Return Value

The requested device list.

<a id="Discussion"></a>

## Discussion

Dispose this list when you’re finished working with it by calling [MIDIDeviceListDispose(\_:)](mididevicelistdispose%28__%29.md).

## See Also

### Inspecting a Driver

- [MIDIDriverEnableMonitoring(\_:\_:)](mididriverenablemonitoring%28____%29.md): Enables monitoring of all outgoing MIDI packets.
- [MIDIGetDriverIORunLoop()](midigetdriveriorunloop%28%29.md): Returns the server’s driver I/O thread.
- [kMIDIDriverPropertyUsesSerial](kmididriverpropertyusesserial.md): A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.
- [MIDIDriverInterface](mididriverinterface.md): The interface to a MIDI driver.
- [MIDIDriverRef](mididriverref.md): A MIDI driver object.

# MIDIGetDriverDeviceList (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

Returns the list of driver-created devices in the current MIDI setup.

## Declaration

```objectivec
extern MIDIDeviceListRef MIDIGetDriverDeviceList(MIDIDriverRef driver);
```

## Parameters

- `driver`: The driver for which you return devices.

<a id="return-value"></a>

## Return Value

The requested device list.

<a id="Discussion"></a>

## Discussion

Dispose this list when you’re finished working with it by calling [MIDIDeviceListDispose](mididevicelistdispose%28__%29.md).

## See Also

### Inspecting a Driver

- [MIDIDriverEnableMonitoring](mididriverenablemonitoring%28____%29.md): Enables monitoring of all outgoing MIDI packets.
- [MIDIGetDriverIORunLoop](midigetdriveriorunloop%28%29.md): Returns the server’s driver I/O thread.
- [kMIDIDriverPropertyUsesSerial](kmididriverpropertyusesserial.md): A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.
- [MIDIDriverInterface](mididriverinterface.md): The interface to a MIDI driver.
- [MIDIDriverRef](mididriverref.md): A MIDI driver object.
