> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midi-thru-connection](https://developer.apple.com/documentation/coremidi/midi-thru-connection)

# MIDI Thru Connection (Swift)

**Framework:** Core MIDI  
**Kind:** API Collection

Create play-through connections between sources and destinations.

<a id="overview"></a>

## Overview

Use play-through connections, instead of performing MIDI Thru operations, to reduce the overhead of moving MIDI messages between the server and the client. This API provides a simple interface to perform a variety of transformations.

## Topics

### Finding Connections

- [MIDIThruConnectionFind(\_:\_:)](midithruconnectionfind%28____%29.md): Finds the persistent thru connections for the specified client.

### Managing Connections

- [MIDIThruConnectionCreate(\_:\_:\_:)](midithruconnectioncreate%28______%29.md): Creates a MIDI thru connection.
- [MIDIThruConnectionDispose(\_:)](midithruconnectiondispose%28__%29.md): Disposes a MIDI thru connection.
- [MIDIThruConnectionRef](midithruconnectionref.md): An opaque reference to a play-through connection.
- [MIDIThruConnectionEndpoint](midithruconnectionendpoint.md): A source or destination in a MIDI thru connection.
- [Endpoint Configuration](endpoint-configuration.md): Values that define the supported endpoint configurations.

### Configuring Parameters

- [MIDIThruConnectionParams](midithruconnectionparams.md): A set of MIDI routings and transformations.
- [MIDIThruConnectionParamsSize(\_:)](midithruconnectionparamssize%28__%29.md): Returns the size of a MIDI thru connection parameters object.
- [MIDIThruConnectionParamsInitialize(\_:)](midithruconnectionparamsinitialize%28__%29.md): Initializes a parameters object with its default values.
- [MIDIThruConnectionGetParams(\_:\_:)](midithruconnectiongetparams%28____%29.md): Returns the thru connection’s parameters.
- [MIDIThruConnectionSetParams(\_:\_:)](midithruconnectionsetparams%28____%29.md): Updates a thru connection’s parameters.

### Transforming Values

- [MIDIValueMap](midivaluemap.md): A custom lookup table to transform MIDI 7-bit values, as contained in note numbers, velocities, control values, and so on.
- [MIDIControlTransform](midicontroltransform.md): A structure that describes the transformation of MIDI control change events.
- [MIDITransform](miditransform.md): The transformation of a single type of MIDI event.
- [MIDITransformType](miditransformtype.md): Values that specify the type of MIDI transformation.
- [MIDITransformControlType](miditransformcontroltype.md): A set of values that indicate how to interpret control numbers.

## See Also

### Services

- [MIDI Services](midi-services.md): Communicate with hardware using Universal MIDI Packets.
- [MIDI System Setup](midi-system-setup.md): Configure the global MIDI system.
- [MIDI Bluetooth](midi-bluetooth.md): Connect to Bluetooth Low Energy MIDI peripherals.
- [MIDI Messages](midi-messages.md): Create and configure messages.
- [MIDI Networking](midi-networking.md): Create and manage devices connected over a local network.
- [MIDI Drivers](midi-drivers.md): Create driver plug-ins.
- [MIDI Capability Inquiry](midi-capability-inquiry.md): Provide support for bidirectional discovery and configuration of devices.

# MIDI Thru Connection (Objective-C)

**Framework:** Core MIDI  
**Kind:** API Collection

Create play-through connections between sources and destinations.

<a id="overview"></a>

## Overview

Use play-through connections, instead of performing MIDI Thru operations, to reduce the overhead of moving MIDI messages between the server and the client. This API provides a simple interface to perform a variety of transformations.

## Topics

### Finding Connections

- [MIDIThruConnectionFind](midithruconnectionfind%28____%29.md): Finds the persistent thru connections for the specified client.

### Managing Connections

- [MIDIThruConnectionCreate](midithruconnectioncreate%28______%29.md): Creates a MIDI thru connection.
- [MIDIThruConnectionDispose](midithruconnectiondispose%28__%29.md): Disposes a MIDI thru connection.
- [MIDIThruConnectionRef](midithruconnectionref.md): An opaque reference to a play-through connection.
- [MIDIThruConnectionEndpoint](midithruconnectionendpoint.md): A source or destination in a MIDI thru connection.
- [Endpoint Configuration](endpoint-configuration.md): Values that define the supported endpoint configurations.

### Configuring Parameters

- [MIDIThruConnectionParams](midithruconnectionparams.md): A set of MIDI routings and transformations.
- [MIDIThruConnectionParamsSize](midithruconnectionparamssize%28__%29.md): Returns the size of a MIDI thru connection parameters object.
- [MIDIThruConnectionParamsInitialize](midithruconnectionparamsinitialize%28__%29.md): Initializes a parameters object with its default values.
- [MIDIThruConnectionGetParams](midithruconnectiongetparams%28____%29.md): Returns the thru connection’s parameters.
- [MIDIThruConnectionSetParams](midithruconnectionsetparams%28____%29.md): Updates a thru connection’s parameters.

### Transforming Values

- [MIDIValueMap](midivaluemap.md): A custom lookup table to transform MIDI 7-bit values, as contained in note numbers, velocities, control values, and so on.
- [MIDIControlTransform](midicontroltransform.md): A structure that describes the transformation of MIDI control change events.
- [MIDITransform](miditransform.md): The transformation of a single type of MIDI event.
- [MIDITransformType](miditransformtype.md): Values that specify the type of MIDI transformation.
- [MIDITransformControlType](miditransformcontroltype.md): A set of values that indicate how to interpret control numbers.

## See Also

### Services

- [MIDI Services](midi-services.md): Communicate with hardware using Universal MIDI Packets.
- [MIDI System Setup](midi-system-setup.md): Configure the global MIDI system.
- [MIDI Bluetooth](midi-bluetooth.md): Connect to Bluetooth Low Energy MIDI peripherals.
- [MIDI Messages](midi-messages.md): Create and configure messages.
- [MIDI Networking](midi-networking.md): Create and manage devices connected over a local network.
- [MIDI Drivers](midi-drivers.md): Create driver plug-ins.
- [MIDI Capability Inquiry](midi-capability-inquiry.md): Provide support for bidirectional discovery and configuration of devices.
