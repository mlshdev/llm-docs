> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi](https://developer.apple.com/documentation/coremidi)

# Core MIDI (Swift)

**Framework:** Core MIDI  
**Kind:** Framework  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Communicate with MIDI devices such as hardware keyboards and synthesizers.

<a id="overview"></a>

## Overview

The Core MIDI framework provides APIs to communicate with MIDI (Musical Instrument Digital Interface) devices, including hardware keyboards and synthesizers. Connect from an iOS device using the dock connector or a network. For more information about using the dock connector, see the [MFi Program](https://developer.apple.com/programs/mfi/).

## Topics

### Services

- [MIDI Services](coremidi/midi-services.md): Communicate with hardware using Universal MIDI Packets.
- [MIDI System Setup](coremidi/midi-system-setup.md): Configure the global MIDI system.
- [MIDI Bluetooth](coremidi/midi-bluetooth.md): Connect to Bluetooth Low Energy MIDI peripherals.
- [MIDI Messages](coremidi/midi-messages.md): Create and configure messages.
- [MIDI Thru Connection](coremidi/midi-thru-connection.md): Create play-through connections between sources and destinations.
- [MIDI Networking](coremidi/midi-networking.md): Create and manage devices connected over a local network.
- [MIDI Drivers](coremidi/midi-drivers.md): Create driver plug-ins.
- [MIDI Capability Inquiry](coremidi/midi-capability-inquiry.md): Provide support for bidirectional discovery and configuration of devices.

### Reference

- [Core MIDI Structures](coremidi/core-midi-structures.md)
- [Core MIDI Enumerations](coremidi/core-midi-enumerations.md)
- [Core MIDI Constants](coremidi/core-midi-constants.md)
- [Core MIDI Functions](coremidi/core-midi-functions.md)
- [Core MIDI Data Types](coremidi/core-midi-data-types.md)
- [Core MIDI Macros](coremidi/coremidi-macros.md)

### Articles

- [Deprecated Symbols](coremidi/midi_system_setup-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Classes

- [MIDI2DeviceInfo](coremidi/midi2deviceinfo.md)
- [MIDICIDevice](coremidi/midicidevice.md)
- [MIDICIDeviceManager](coremidi/midicidevicemanager.md)
- [MIDICIDiscoveredNode](coremidi/midicidiscoverednode.md): Deprecated. A discovered MIDI-CI node that represents a MIDI source and destination that respond to capability inquiries.
- [MIDIUMPCIProfile](coremidi/midiumpciprofile.md)
- [MIDIUMPEndpoint](coremidi/midiumpendpoint.md)
- [MIDIUMPEndpointManager](coremidi/midiumpendpointmanager.md)
- [MIDIUMPFunctionBlock](coremidi/midiumpfunctionblock.md)
- [MIDIUMPMutableEndpoint](coremidi/midiumpmutableendpoint.md)
- [MIDIUMPMutableFunctionBlock](coremidi/midiumpmutablefunctionblock.md)

### Variables

- [kMIDINoteAttributeManufacturerSpecific](coremidi/kmidinoteattributemanufacturerspecific.md): Deprecated.
- [kMIDINoteAttributeNone](coremidi/kmidinoteattributenone.md): Deprecated.
- [kMIDINoteAttributePitch](coremidi/kmidinoteattributepitch.md): Deprecated.
- [kMIDINoteAttributeProfileSpecific](coremidi/kmidinoteattributeprofilespecific.md): Deprecated.

# Core MIDI (Objective-C)

**Framework:** Core MIDI  
**Kind:** Framework  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Communicate with MIDI devices such as hardware keyboards and synthesizers.

<a id="overview"></a>

## Overview

The Core MIDI framework provides APIs to communicate with MIDI (Musical Instrument Digital Interface) devices, including hardware keyboards and synthesizers. Connect from an iOS device using the dock connector or a network. For more information about using the dock connector, see the [MFi Program](https://developer.apple.com/programs/mfi/).

## Topics

### Services

- [MIDI Services](coremidi/midi-services.md): Communicate with hardware using Universal MIDI Packets.
- [MIDI System Setup](coremidi/midi-system-setup.md): Configure the global MIDI system.
- [MIDI Bluetooth](coremidi/midi-bluetooth.md): Connect to Bluetooth Low Energy MIDI peripherals.
- [MIDI Messages](coremidi/midi-messages.md): Create and configure messages.
- [MIDI Thru Connection](coremidi/midi-thru-connection.md): Create play-through connections between sources and destinations.
- [MIDI Networking](coremidi/midi-networking.md): Create and manage devices connected over a local network.
- [MIDI Drivers](coremidi/midi-drivers.md): Create driver plug-ins.
- [MIDI Capability Inquiry](coremidi/midi-capability-inquiry.md): Provide support for bidirectional discovery and configuration of devices.

### Reference

- [Core MIDI Structures](coremidi/core-midi-structures.md)
- [Core MIDI Enumerations](coremidi/core-midi-enumerations.md)
- [Core MIDI Constants](coremidi/core-midi-constants.md)
- [Core MIDI Functions](coremidi/core-midi-functions.md)
- [Core MIDI Data Types](coremidi/core-midi-data-types.md)
- [Core MIDI Macros](coremidi/coremidi-macros.md)

### Articles

- [Deprecated Symbols](coremidi/midi_system_setup-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Classes

- [MIDI2DeviceInfo](coremidi/midi2deviceinfo.md)
- [MIDICIDevice](coremidi/midicidevice.md)
- [MIDICIDeviceManager](coremidi/midicidevicemanager.md)
- [MIDICIDiscoveredNode](coremidi/midicidiscoverednode.md): Deprecated. A discovered MIDI-CI node that represents a MIDI source and destination that respond to capability inquiries.
- [MIDIUMPCIProfile](coremidi/midiumpciprofile.md)
- [MIDIUMPEndpoint](coremidi/midiumpendpoint.md)
- [MIDIUMPEndpointManager](coremidi/midiumpendpointmanager.md)
- [MIDIUMPFunctionBlock](coremidi/midiumpfunctionblock.md)
- [MIDIUMPMutableEndpoint](coremidi/midiumpmutableendpoint.md)
- [MIDIUMPMutableFunctionBlock](coremidi/midiumpmutablefunctionblock.md)

### Variables

- [kMIDIPropertyUMPEnabled](coremidi/kmidipropertyumpenabled.md): kMIDIPropertyUMPEnabled

### Macros

- [MIDI_REALTIME_API](coremidi/midi_realtime_api.md)
