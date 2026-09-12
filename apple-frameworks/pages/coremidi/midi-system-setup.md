> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midi-system-setup](https://developer.apple.com/documentation/coremidi/midi-system-setup)

# MIDI System Setup (Swift)

**Framework:** Core MIDI  
**Kind:** API Collection

Configure the global MIDI system.

<a id="overview"></a>

## Overview

The primary clients of this API are apps that present a user interface to configure the global MIDI system, and MIDI drivers that dynamically modify the system state as users connect and disconnect hardware.

## Topics

### Managing Devices

- [MIDISetupAddDevice(\_:)](midisetupadddevice%28__%29.md): Adds a driver-owned MIDI device to the current MIDI setup.
- [MIDISetupRemoveDevice(\_:)](midisetupremovedevice%28__%29.md): Removes a driver-owned MIDI device from the current MIDI setup.

### Managing External Devices

- [MIDIExternalDeviceCreate(\_:\_:\_:\_:)](midiexternaldevicecreate%28________%29.md): Creates an external MIDI device.
- [MIDISetupAddExternalDevice(\_:)](midisetupaddexternaldevice%28__%29.md): Adds an external MIDI device to the current MIDI setup.
- [MIDISetupRemoveExternalDevice(\_:)](midisetupremoveexternaldevice%28__%29.md): Removes an external MIDI device from the current MIDI setup.

### Managing Entities

- [MIDIDeviceNewEntity(\_:\_:\_:\_:\_:\_:\_:)](mididevicenewentity%28______________%29.md): Adds a new entity to a device.
- [MIDIDeviceRemoveEntity(\_:\_:)](midideviceremoveentity%28____%29.md): Removes an entity from a device.
- [MIDIEntityAddOrRemoveEndpoints(\_:\_:\_:)](midientityaddorremoveendpoints%28______%29.md): Adds or removes an entity’s endpoints.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

## See Also

### Services

- [MIDI Services](midi-services.md): Communicate with hardware using Universal MIDI Packets.
- [MIDI Bluetooth](midi-bluetooth.md): Connect to Bluetooth Low Energy MIDI peripherals.
- [MIDI Messages](midi-messages.md): Create and configure messages.
- [MIDI Thru Connection](midi-thru-connection.md): Create play-through connections between sources and destinations.
- [MIDI Networking](midi-networking.md): Create and manage devices connected over a local network.
- [MIDI Drivers](midi-drivers.md): Create driver plug-ins.
- [MIDI Capability Inquiry](midi-capability-inquiry.md): Provide support for bidirectional discovery and configuration of devices.

# MIDI System Setup (Objective-C)

**Framework:** Core MIDI  
**Kind:** API Collection

Configure the global MIDI system.

<a id="overview"></a>

## Overview

The primary clients of this API are apps that present a user interface to configure the global MIDI system, and MIDI drivers that dynamically modify the system state as users connect and disconnect hardware.

## Topics

### Managing Devices

- [MIDISetupAddDevice](midisetupadddevice%28__%29.md): Adds a driver-owned MIDI device to the current MIDI setup.
- [MIDISetupRemoveDevice](midisetupremovedevice%28__%29.md): Removes a driver-owned MIDI device from the current MIDI setup.

### Managing External Devices

- [MIDIExternalDeviceCreate](midiexternaldevicecreate%28________%29.md): Creates an external MIDI device.
- [MIDISetupAddExternalDevice](midisetupaddexternaldevice%28__%29.md): Adds an external MIDI device to the current MIDI setup.
- [MIDISetupRemoveExternalDevice](midisetupremoveexternaldevice%28__%29.md): Removes an external MIDI device from the current MIDI setup.

### Managing Entities

- [MIDIDeviceNewEntity](mididevicenewentity%28______________%29.md): Adds a new entity to a device.
- [MIDIDeviceRemoveEntity](midideviceremoveentity%28____%29.md): Removes an entity from a device.
- [MIDIEntityAddOrRemoveEndpoints](midientityaddorremoveendpoints%28______%29.md): Adds or removes an entity’s endpoints.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

## See Also

### Services

- [MIDI Services](midi-services.md): Communicate with hardware using Universal MIDI Packets.
- [MIDI Bluetooth](midi-bluetooth.md): Connect to Bluetooth Low Energy MIDI peripherals.
- [MIDI Messages](midi-messages.md): Create and configure messages.
- [MIDI Thru Connection](midi-thru-connection.md): Create play-through connections between sources and destinations.
- [MIDI Networking](midi-networking.md): Create and manage devices connected over a local network.
- [MIDI Drivers](midi-drivers.md): Create driver plug-ins.
- [MIDI Capability Inquiry](midi-capability-inquiry.md): Provide support for bidirectional discovery and configuration of devices.
