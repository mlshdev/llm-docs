> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midi-services](https://developer.apple.com/documentation/coremidi/midi-services)

# MIDI Services (Swift)

**Framework:** Core MIDI  
**Kind:** API Collection

Communicate with hardware using Universal MIDI Packets.

<a id="overview"></a>

## Overview

MIDI drivers own and control physical MIDI devices, which include hardware such as USB interfaces, MIDI keyboards, and so on. A MIDI device may have multiple logically distinct subcomponents. For example, one device may contain a MIDI synthesizer and a pair of MIDI ports, both addressable over a USB port. Each element of a device is a MIDI entity.

A MIDI entity can have any number of MIDI endpoints, each of which is a source or destination of a 16-channel MIDI stream. Grouping a device’s endpoints into entities provides the system enough information for an app to make reasonable default assumptions about how to communicate bidirectionally with each entity, as is necessary in MIDI librarian apps.

Core MIDI attaches a collection of properties to each object it manages. Object properties can be:

- Dynamic characteristics of a device, such as MIDI receive channel and system-exclusive (SysEx) IDs.
- Determined by user preference; for example, choice of icon, and whether or not the device appears in lists of possible controllers.
- Static properties that you can’t look up in a database using the device’s manufacturer and model name.

The Core MIDI framework uses interprocess communication (IPC) to communicate with a server process, the MIDI server. The server process in turn loads the MIDI driver and manages all communication with it.

## Topics

### MIDI object configuration

- [MIDIObjectFindByUniqueID(\_:\_:\_:)](midiobjectfindbyuniqueid%28______%29.md): Locates a device, entity, or endpoint by its unique identifier.
- [MIDIObjectRef](midiobjectref.md): The common base class for many of the framework’s objects.
- [MIDI Object Properties](midi-object-properties.md): Configure the properties of MIDI objects.

### Client management

- [Incorporating MIDI 2 into your apps](incorporating-midi-2-into-your-apps.md): Add precision and improve musical control for your MIDI apps.
- [MIDIClientCreate(\_:\_:\_:\_:)](midiclientcreate%28________%29.md): Creates a MIDI client.
- [MIDIClientCreateWithBlock(\_:\_:\_:)](midiclientcreatewithblock%28______%29.md): Creates a MIDI client with a callback block.
- [MIDIClientDispose(\_:)](midiclientdispose%28__%29.md): Disposes of a MIDI client.
- [MIDIClientRef](midiclientref.md): An object that maintains per-client state.

### Device lookup

- [MIDIGetNumberOfDevices()](midigetnumberofdevices%28%29.md): Returns the number of devices in the system.
- [MIDIGetDevice(\_:)](midigetdevice%28__%29.md): Returns a device from the system.
- [MIDIGetNumberOfExternalDevices()](midigetnumberofexternaldevices%28%29.md): Returns the number of external MIDI devices in the system.
- [MIDIGetExternalDevice(\_:)](midigetexternaldevice%28__%29.md): Returns one of the external devices in the system.
- [MIDIDeviceGetNumberOfEntities(\_:)](mididevicegetnumberofentities%28__%29.md): Returns the number of entities in a device.
- [MIDIDeviceGetEntity(\_:\_:)](mididevicegetentity%28____%29.md): Returns the device’s entity at a specific index.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.

### Entity lookup

- [MIDIEntityGetDevice(\_:\_:)](midientitygetdevice%28____%29.md): Returns an entity’s device.
- [MIDIEntityGetNumberOfSources(\_:)](midientitygetnumberofsources%28__%29.md): Returns the number of sources in an entity.
- [MIDIEntityGetSource(\_:\_:)](midientitygetsource%28____%29.md): Returns one of an entity’s sources.
- [MIDIEntityGetNumberOfDestinations(\_:)](midientitygetnumberofdestinations%28__%29.md): Returns the number of destinations in an entity.
- [MIDIEntityGetDestination(\_:\_:)](midientitygetdestination%28____%29.md): Returns one of an entity’s destinations.
- [MIDIEntityRef](midientityref.md): An entity that a device owns and that contains endpoints.

### Port management

- [MIDIInputPortCreateWithProtocol(\_:\_:\_:\_:\_:)](midiinputportcreatewithprotocol%28__________%29.md): Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIOutputPortCreate(\_:\_:\_:)](midioutputportcreate%28______%29.md): Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.
- [MIDIPortDispose(\_:)](midiportdispose%28__%29.md): Disposes of a MIDI port.
- [MIDIPortConnectSource(\_:\_:\_:)](midiportconnectsource%28______%29.md): Makes a connection from a source to a client input port.
- [MIDIPortDisconnectSource(\_:\_:)](midiportdisconnectsource%28____%29.md): Closes a previously established source-to-input port connection.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
- [MIDIReceiveBlock](midireceiveblock.md): A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.

### Endpoint management

- [MIDIEndpointDispose(\_:)](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetEntity(\_:\_:)](midiendpointgetentity%28____%29.md): Returns an endpoint’s entity.
- [MIDIEndpointGetRefCons(\_:\_:\_:)](midiendpointgetrefcons%28______%29.md): Returns contextual data assigned to an endpoint.
- [MIDIEndpointSetRefCons(\_:\_:\_:)](midiendpointsetrefcons%28______%29.md): Sets contextual data on an endpoint.
- [MIDISourceCreateWithProtocol(\_:\_:\_:\_:)](midisourcecreatewithprotocol%28________%29.md): Creates a virtual source in a client.
- [MIDIGetSource(\_:)](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources()](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIDestinationCreateWithProtocol(\_:\_:\_:\_:\_:)](mididestinationcreatewithprotocol%28__________%29.md): Creates a virtual destination in a client.
- [MIDIGetDestination(\_:)](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations()](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
- [MIDIEndpointRef](midiendpointref.md): A MIDI source or destination an entity owns.

### Event list management

- [MIDIEventListInit(\_:\_:)](midieventlistinit%28____%29.md): Initializes an event list.
- [MIDIEventListAdd(\_:\_:\_:\_:\_:\_:)](midieventlistadd%28____________%29.md): Adds an event to an event list.
- [MIDIEventPacketNext(\_:)](midieventpacketnext%28__%29.md): Advances a packet pointer to the next packet in memory, if the packet is part of an event list.
- [MIDISendEventList(\_:\_:\_:)](midisendeventlist%28______%29.md): Sends MIDI events to a destination.
- [MIDIReceivedEventList(\_:\_:)](midireceivedeventlist%28____%29.md): Distributes incoming MIDI events from a source to its connected client input ports.
- [MIDIEventList](midieventlist.md): A variable-length list of MIDI event packets.
- [MIDIEventPacket](midieventpacket.md): A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.
- [UnsafeMutableMIDIEventListPointer](unsafemutablemidieventlistpointer.md)
- [UnsafeMutableMIDIEventPacketPointer](unsafemutablemidieventpacketpointer.md)

### Packet list management

- [MIDIPacketNext(\_:)](midipacketnext%28__%29.md): Advances a MIDI packet pointer to the next packet in a package list.
- [MIDIPacket](midipacket.md): A collection of simultaneous MIDI events.
- [MIDIPacketList](midipacketlist.md): A list of MIDI events the system sends to or receives from an endpoint.
- [MIDITimeStamp](miditimestamp.md): The time on the host clock when the event occurred.
- [UnsafeMutableMIDIPacketListPointer](unsafemutablemidipacketlistpointer.md)
- [UnsafeMutableMIDIPacketPointer](unsafemutablemidipacketpointer.md)

### I/O management

- [MIDISysexSendRequest](midisysexsendrequest.md): A request to asynchronously send a single system-exclusive (SysEx) event to a destination.
- [MIDISysexSendRequestUMP](midisysexsendrequestump.md): A request to asynchronously send a single universal MIDI packet (UMP) system-exclusive (SysEx) event to a destination.
- [MIDIFlushOutput(\_:)](midiflushoutput%28__%29.md): Cancels all pending events that were previously scheduled to send.
- [MIDIRestart()](midirestart%28%29.md): Stops and restarts MIDI I/O.
- [MIDIIOErrorNotification](midiioerrornotification.md): A general I/O error notification.

### Errors

- [MIDI Services Errors](midi-services-errors.md): Error codes for Core MIDI operations XX.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

## See Also

### Services

- [MIDI System Setup](midi-system-setup.md): Configure the global MIDI system.
- [MIDI Bluetooth](midi-bluetooth.md): Connect to Bluetooth Low Energy MIDI peripherals.
- [MIDI Messages](midi-messages.md): Create and configure messages.
- [MIDI Thru Connection](midi-thru-connection.md): Create play-through connections between sources and destinations.
- [MIDI Networking](midi-networking.md): Create and manage devices connected over a local network.
- [MIDI Drivers](midi-drivers.md): Create driver plug-ins.
- [MIDI Capability Inquiry](midi-capability-inquiry.md): Provide support for bidirectional discovery and configuration of devices.

# MIDI Services (Objective-C)

**Framework:** Core MIDI  
**Kind:** API Collection

Communicate with hardware using Universal MIDI Packets.

<a id="overview"></a>

## Overview

MIDI drivers own and control physical MIDI devices, which include hardware such as USB interfaces, MIDI keyboards, and so on. A MIDI device may have multiple logically distinct subcomponents. For example, one device may contain a MIDI synthesizer and a pair of MIDI ports, both addressable over a USB port. Each element of a device is a MIDI entity.

A MIDI entity can have any number of MIDI endpoints, each of which is a source or destination of a 16-channel MIDI stream. Grouping a device’s endpoints into entities provides the system enough information for an app to make reasonable default assumptions about how to communicate bidirectionally with each entity, as is necessary in MIDI librarian apps.

Core MIDI attaches a collection of properties to each object it manages. Object properties can be:

- Dynamic characteristics of a device, such as MIDI receive channel and system-exclusive (SysEx) IDs.
- Determined by user preference; for example, choice of icon, and whether or not the device appears in lists of possible controllers.
- Static properties that you can’t look up in a database using the device’s manufacturer and model name.

The Core MIDI framework uses interprocess communication (IPC) to communicate with a server process, the MIDI server. The server process in turn loads the MIDI driver and manages all communication with it.

## Topics

### MIDI object configuration

- [MIDIObjectFindByUniqueID](midiobjectfindbyuniqueid%28______%29.md): Locates a device, entity, or endpoint by its unique identifier.
- [MIDIObjectRef](midiobjectref.md): The common base class for many of the framework’s objects.
- [MIDI Object Properties](midi-object-properties.md): Configure the properties of MIDI objects.

### Client management

- [Incorporating MIDI 2 into your apps](incorporating-midi-2-into-your-apps.md): Add precision and improve musical control for your MIDI apps.
- [MIDIClientCreate](midiclientcreate%28________%29.md): Creates a MIDI client.
- [MIDIClientCreateWithBlock](midiclientcreatewithblock%28______%29.md): Creates a MIDI client with a callback block.
- [MIDIClientDispose](midiclientdispose%28__%29.md): Disposes of a MIDI client.
- [MIDIClientRef](midiclientref.md): An object that maintains per-client state.

### Device lookup

- [MIDIGetNumberOfDevices](midigetnumberofdevices%28%29.md): Returns the number of devices in the system.
- [MIDIGetDevice](midigetdevice%28__%29.md): Returns a device from the system.
- [MIDIGetNumberOfExternalDevices](midigetnumberofexternaldevices%28%29.md): Returns the number of external MIDI devices in the system.
- [MIDIGetExternalDevice](midigetexternaldevice%28__%29.md): Returns one of the external devices in the system.
- [MIDIDeviceGetNumberOfEntities](mididevicegetnumberofentities%28__%29.md): Returns the number of entities in a device.
- [MIDIDeviceGetEntity](mididevicegetentity%28____%29.md): Returns the device’s entity at a specific index.
- [MIDIDeviceRef](midideviceref.md): A MIDI device that contains entities.

### Entity lookup

- [MIDIEntityGetDevice](midientitygetdevice%28____%29.md): Returns an entity’s device.
- [MIDIEntityGetNumberOfSources](midientitygetnumberofsources%28__%29.md): Returns the number of sources in an entity.
- [MIDIEntityGetSource](midientitygetsource%28____%29.md): Returns one of an entity’s sources.
- [MIDIEntityGetNumberOfDestinations](midientitygetnumberofdestinations%28__%29.md): Returns the number of destinations in an entity.
- [MIDIEntityGetDestination](midientitygetdestination%28____%29.md): Returns one of an entity’s destinations.
- [MIDIEntityRef](midientityref.md): An entity that a device owns and that contains endpoints.

### Port management

- [MIDIInputPortCreateWithProtocol](midiinputportcreatewithprotocol%28__________%29.md): Creates an input port through which the client may receive incoming MIDI messages from any MIDI source.
- [MIDIOutputPortCreate](midioutputportcreate%28______%29.md): Creates an output port through which a client sends outgoing MIDI messages to any MIDI destination.
- [MIDIPortDispose](midiportdispose%28__%29.md): Disposes of a MIDI port.
- [MIDIPortConnectSource](midiportconnectsource%28______%29.md): Makes a connection from a source to a client input port.
- [MIDIPortDisconnectSource](midiportdisconnectsource%28____%29.md): Closes a previously established source-to-input port connection.
- [MIDIPortRef](midiportref.md): A MIDI connection that a client maintains.
- [MIDIReceiveBlock](midireceiveblock.md): A block receiving MIDI input that includes the incoming messages and a refCon to identify the source.

### Endpoint management

- [MIDIEndpointDispose](midiendpointdispose%28__%29.md): Disposes of a virtual source or destination.
- [MIDIEndpointGetEntity](midiendpointgetentity%28____%29.md): Returns an endpoint’s entity.
- [MIDIEndpointGetRefCons](midiendpointgetrefcons%28______%29.md): Returns contextual data assigned to an endpoint.
- [MIDIEndpointSetRefCons](midiendpointsetrefcons%28______%29.md): Sets contextual data on an endpoint.
- [MIDISourceCreateWithProtocol](midisourcecreatewithprotocol%28________%29.md): Creates a virtual source in a client.
- [MIDIGetSource](midigetsource%28__%29.md): Returns a source in the system.
- [MIDIGetNumberOfSources](midigetnumberofsources%28%29.md): Returns the number of sources in the system.
- [MIDIDestinationCreateWithProtocol](mididestinationcreatewithprotocol%28__________%29.md): Creates a virtual destination in a client.
- [MIDIGetDestination](midigetdestination%28__%29.md): Returns a destination in the system.
- [MIDIGetNumberOfDestinations](midigetnumberofdestinations%28%29.md): Returns the number of destinations in the system.
- [MIDIEndpointRef](midiendpointref.md): A MIDI source or destination an entity owns.

### Event list management

- [MIDIEventListInit](midieventlistinit%28____%29.md): Initializes an event list.
- [MIDIEventListAdd](midieventlistadd%28____________%29.md): Adds an event to an event list.
- [MIDIEventPacketNext](midieventpacketnext%28__%29.md): Advances a packet pointer to the next packet in memory, if the packet is part of an event list.
- [MIDISendEventList](midisendeventlist%28______%29.md): Sends MIDI events to a destination.
- [MIDIReceivedEventList](midireceivedeventlist%28____%29.md): Distributes incoming MIDI events from a source to its connected client input ports.
- [MIDIEventList](midieventlist.md): A variable-length list of MIDI event packets.
- [MIDIEventPacket](midieventpacket.md): A series of simultaneous MIDI events in Universal MIDI Packets (UMP) format.

### Packet list management

- [MIDIPacketNext](midipacketnext%28__%29.md): Advances a MIDI packet pointer to the next packet in a package list.
- [MIDIPacket](midipacket.md): A collection of simultaneous MIDI events.
- [MIDIPacketList](midipacketlist.md): A list of MIDI events the system sends to or receives from an endpoint.
- [MIDITimeStamp](miditimestamp.md): The time on the host clock when the event occurred.

### I/O management

- [MIDISysexSendRequest](midisysexsendrequest.md): A request to asynchronously send a single system-exclusive (SysEx) event to a destination.
- [MIDISysexSendRequestUMP](midisysexsendrequestump.md): A request to asynchronously send a single universal MIDI packet (UMP) system-exclusive (SysEx) event to a destination.
- [MIDIFlushOutput](midiflushoutput%28__%29.md): Cancels all pending events that were previously scheduled to send.
- [MIDIRestart](midirestart%28%29.md): Stops and restarts MIDI I/O.
- [MIDIIOErrorNotification](midiioerrornotification.md): A general I/O error notification.

### Errors

- [MIDI Services Errors](midi-services-errors.md): Error codes for Core MIDI operations XX.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

## See Also

### Services

- [MIDI System Setup](midi-system-setup.md): Configure the global MIDI system.
- [MIDI Bluetooth](midi-bluetooth.md): Connect to Bluetooth Low Energy MIDI peripherals.
- [MIDI Messages](midi-messages.md): Create and configure messages.
- [MIDI Thru Connection](midi-thru-connection.md): Create play-through connections between sources and destinations.
- [MIDI Networking](midi-networking.md): Create and manage devices connected over a local network.
- [MIDI Drivers](midi-drivers.md): Create driver plug-ins.
- [MIDI Capability Inquiry](midi-capability-inquiry.md): Provide support for bidirectional discovery and configuration of devices.
