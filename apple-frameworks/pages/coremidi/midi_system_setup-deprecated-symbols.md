> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midi_system_setup-deprecated-symbols](https://developer.apple.com/documentation/coremidi/midi_system_setup-deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** Core MIDI  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Managing System Setup

- [MIDISetupRef](midisetupref.md): A type that represents the global state of the MIDI system, that contains lists of the devices and serial port owners.

### Managing MIDI Devices

- [MIDIDeviceAddEntity(\_:\_:\_:\_:\_:\_:)](midideviceaddentity%28____________%29.md): Deprecated. Specifies one of the entities that make up a device.

# Deprecated Symbols (Objective-C)

**Framework:** Core MIDI  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Managing System Setup

- [MIDISetupCreate](midisetupcreate.md): Deprecated. Queries drivers to discover what hardware is available.
- [MIDISetupDispose](midisetupdispose.md): Deprecated. Disposes the specified setup object.
- [MIDISetupFromData](midisetupfromdata.md): Deprecated. Creates a MIDISetup object from an XML stream.
- [MIDISetupGetCurrent](midisetupgetcurrent.md): Deprecated. Returns the system’s current MIDISetup.
- [MIDISetupInstall](midisetupinstall.md): Deprecated. Installs a MIDISetup as the system’s current state.
- [MIDISetupToData](midisetuptodata.md): Deprecated. Creates an XML representation of a MIDISetup object.
- [MIDISetupRef](midisetupref.md): A type that represents the global state of the MIDI system, that contains lists of the devices and serial port owners.

### Managing Serial Ports

- [MIDIGetSerialPortOwner](midigetserialportowner.md): Deprecated. Returns the MIDI driver that owns a serial port.
- [MIDISetSerialPortOwner](midisetserialportowner.md): Deprecated. Specifies the MIDI driver that owns a serial port.
- [MIDIGetSerialPortDrivers](midigetserialportdrivers.md): Deprecated. Returns a list of installed MIDI drivers for serial port MIDI devices.

### Managing MIDI Devices

- [MIDIDeviceAddEntity](midideviceaddentity%28____________%29.md): Deprecated. Specifies one of the entities that make up a device.
