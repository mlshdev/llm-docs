> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midi-drivers](https://developer.apple.com/documentation/coremidi/midi-drivers)

# MIDI Drivers (Swift)

**Framework:** Core MIDI  
**Kind:** API Collection

Create driver plug-ins.

## Topics

### Managing Device Lifecyle

- [MIDIDeviceCreate(\_:\_:\_:\_:\_:)](mididevicecreate%28__________%29.md): Creates a new device object that corresponds to the available hardware.
- [MIDIDeviceDispose(\_:)](mididevicedispose%28__%29.md): Disposes of a MIDI device.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.

### Managing Device Lists

- [MIDIDeviceListGetNumberOfDevices(\_:)](mididevicelistgetnumberofdevices%28__%29.md): Retrieves the number of devices in a device list.
- [MIDIDeviceListGetDevice(\_:\_:)](mididevicelistgetdevice%28____%29.md): Retrieves a MIDI device from a device list.
- [MIDIDeviceListAddDevice(\_:\_:)](mididevicelistadddevice%28____%29.md): Adds the specified device to the device list.
- [MIDIDeviceListDispose(\_:)](mididevicelistdispose%28__%29.md): Disposes of a device list, but not its devices.
- [MIDIDeviceListRef](mididevicelistref.md): A list of MIDI devices.

### Inspecting a Driver

- [MIDIGetDriverDeviceList(\_:)](midigetdriverdevicelist%28__%29.md): Returns the list of driver-created devices in the current MIDI setup.
- [MIDIDriverEnableMonitoring(\_:\_:)](mididriverenablemonitoring%28____%29.md): Enables monitoring of all outgoing MIDI packets.
- [MIDIGetDriverIORunLoop()](midigetdriveriorunloop%28%29.md): Returns the server’s driver I/O thread.
- [kMIDIDriverPropertyUsesSerial](kmididriverpropertyusesserial.md): A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.
- [MIDIDriverInterface](mididriverinterface.md): The interface to a MIDI driver.
- [MIDIDriverRef](mididriverref.md): A MIDI driver object.

## See Also

### Services

- [MIDI Services](midi-services.md): Communicate with hardware using Universal MIDI Packets.
- [MIDI System Setup](midi-system-setup.md): Configure the global MIDI system.
- [MIDI Bluetooth](midi-bluetooth.md): Connect to Bluetooth Low Energy MIDI peripherals.
- [MIDI Messages](midi-messages.md): Create and configure messages.
- [MIDI Thru Connection](midi-thru-connection.md): Create play-through connections between sources and destinations.
- [MIDI Networking](midi-networking.md): Create and manage devices connected over a local network.
- [MIDI Capability Inquiry](midi-capability-inquiry.md): Provide support for bidirectional discovery and configuration of devices.

# MIDI Drivers (Objective-C)

**Framework:** Core MIDI  
**Kind:** API Collection

Create driver plug-ins.

## Topics

### Managing Device Lifecyle

- [MIDIDeviceCreate](mididevicecreate%28__________%29.md): Creates a new device object that corresponds to the available hardware.
- [MIDIDeviceDispose](mididevicedispose%28__%29.md): Disposes of a MIDI device.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.

### Managing Device Lists

- [MIDIDeviceListGetNumberOfDevices](mididevicelistgetnumberofdevices%28__%29.md): Retrieves the number of devices in a device list.
- [MIDIDeviceListGetDevice](mididevicelistgetdevice%28____%29.md): Retrieves a MIDI device from a device list.
- [MIDIDeviceListAddDevice](mididevicelistadddevice%28____%29.md): Adds the specified device to the device list.
- [MIDIDeviceListDispose](mididevicelistdispose%28__%29.md): Disposes of a device list, but not its devices.
- [MIDIDeviceListRef](mididevicelistref.md): A list of MIDI devices.

### Inspecting a Driver

- [MIDIGetDriverDeviceList](midigetdriverdevicelist%28__%29.md): Returns the list of driver-created devices in the current MIDI setup.
- [MIDIDriverEnableMonitoring](mididriverenablemonitoring%28____%29.md): Enables monitoring of all outgoing MIDI packets.
- [MIDIGetDriverIORunLoop](midigetdriveriorunloop%28%29.md): Returns the server’s driver I/O thread.
- [kMIDIDriverPropertyUsesSerial](kmididriverpropertyusesserial.md): A value that indicates whether the driver uses serial ports and is eligible to have serial ports assigned to it.
- [MIDIDriverInterface](mididriverinterface.md): The interface to a MIDI driver.
- [MIDIDriverRef](mididriverref.md): A MIDI driver object.

## See Also

### Services

- [MIDI Services](midi-services.md): Communicate with hardware using Universal MIDI Packets.
- [MIDI System Setup](midi-system-setup.md): Configure the global MIDI system.
- [MIDI Bluetooth](midi-bluetooth.md): Connect to Bluetooth Low Energy MIDI peripherals.
- [MIDI Messages](midi-messages.md): Create and configure messages.
- [MIDI Thru Connection](midi-thru-connection.md): Create play-through connections between sources and destinations.
- [MIDI Networking](midi-networking.md): Create and manage devices connected over a local network.
- [MIDI Capability Inquiry](midi-capability-inquiry.md): Provide support for bidirectional discovery and configuration of devices.
