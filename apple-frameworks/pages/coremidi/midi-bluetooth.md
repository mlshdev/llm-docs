> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midi-bluetooth](https://developer.apple.com/documentation/coremidi/midi-bluetooth)

# MIDI Bluetooth (Swift)

**Framework:** Core MIDI  
**Kind:** API Collection

Connect to Bluetooth Low Energy MIDI peripherals.

<a id="overview"></a>

## Overview

In macOS 13 or later and iOS 16 or later, the system automatically reconnects Bluetooth Low Energy (BLE) MIDI peripherals when powered on, if the device supports pairing. Previously, it was necessary to use Audio MIDI Setup to establish BLE MIDI connections.

For devices that don’t support pairing, [Core MIDI](../coremidi.md) can enable [Core Bluetooth](../corebluetooth.md) connections for input/output (I/O).

This API enables connection of BLE MIDI peripherals that don’t support pairing using [Core Bluetooth](../corebluetooth.md) with the following steps:

1. Scan for and connect to a BLE MIDI peripheral.
2. Confirm the peripheral has a BLE MIDI service.
3. Confirm the BLE MIDI service on the peripheral has a MIDI I/O characteristic for the MIDI service.

Once a BLE MIDI peripheral connects — and you confirm that it possess both the BLE MIDI service and BLE MIDI I/O characteristic — call [MIDIBluetoothDriverActivateAllConnections()](midibluetoothdriveractivateallconnections%28%29.md) to have [Core MIDI](../coremidi.md) enable I/O on those connections.

To disconnect a peripheral, obtain the [CBUUID](../corebluetooth/cbuuid.md) of the peripheral and call [MIDIBluetoothDriverDisconnect(\_:)](midibluetoothdriverdisconnect%28__%29.md).

## Topics

### Managing Device Connections

- [MIDIBluetoothDriverActivateAllConnections()](midibluetoothdriveractivateallconnections%28%29.md): Promote all active Bluetooth connections into an online MIDI device capable of input and output.
- [MIDIBluetoothDriverDisconnect(\_:)](midibluetoothdriverdisconnect%28__%29.md): Disconnect the Bluetooth MIDI driver from a Bluetooth Low Energy MIDI peripheral.

## See Also

### Services

- [MIDI Services](midi-services.md): Communicate with hardware using Universal MIDI Packets.
- [MIDI System Setup](midi-system-setup.md): Configure the global MIDI system.
- [MIDI Messages](midi-messages.md): Create and configure messages.
- [MIDI Thru Connection](midi-thru-connection.md): Create play-through connections between sources and destinations.
- [MIDI Networking](midi-networking.md): Create and manage devices connected over a local network.
- [MIDI Drivers](midi-drivers.md): Create driver plug-ins.
- [MIDI Capability Inquiry](midi-capability-inquiry.md): Provide support for bidirectional discovery and configuration of devices.

# MIDI Bluetooth (Objective-C)

**Framework:** Core MIDI  
**Kind:** API Collection

Connect to Bluetooth Low Energy MIDI peripherals.

<a id="overview"></a>

## Overview

In macOS 13 or later and iOS 16 or later, the system automatically reconnects Bluetooth Low Energy (BLE) MIDI peripherals when powered on, if the device supports pairing. Previously, it was necessary to use Audio MIDI Setup to establish BLE MIDI connections.

For devices that don’t support pairing, [Core MIDI](../coremidi.md) can enable [Core Bluetooth](../corebluetooth.md) connections for input/output (I/O).

This API enables connection of BLE MIDI peripherals that don’t support pairing using [Core Bluetooth](../corebluetooth.md) with the following steps:

1. Scan for and connect to a BLE MIDI peripheral.
2. Confirm the peripheral has a BLE MIDI service.
3. Confirm the BLE MIDI service on the peripheral has a MIDI I/O characteristic for the MIDI service.

Once a BLE MIDI peripheral connects — and you confirm that it possess both the BLE MIDI service and BLE MIDI I/O characteristic — call [MIDIBluetoothDriverActivateAllConnections](midibluetoothdriveractivateallconnections%28%29.md) to have [Core MIDI](../coremidi.md) enable I/O on those connections.

To disconnect a peripheral, obtain the [CBUUID](../corebluetooth/cbuuid.md) of the peripheral and call [MIDIBluetoothDriverDisconnect](midibluetoothdriverdisconnect%28__%29.md).

## Topics

### Managing Device Connections

- [MIDIBluetoothDriverActivateAllConnections](midibluetoothdriveractivateallconnections%28%29.md): Promote all active Bluetooth connections into an online MIDI device capable of input and output.
- [MIDIBluetoothDriverDisconnect](midibluetoothdriverdisconnect%28__%29.md): Disconnect the Bluetooth MIDI driver from a Bluetooth Low Energy MIDI peripheral.

## See Also

### Services

- [MIDI Services](midi-services.md): Communicate with hardware using Universal MIDI Packets.
- [MIDI System Setup](midi-system-setup.md): Configure the global MIDI system.
- [MIDI Messages](midi-messages.md): Create and configure messages.
- [MIDI Thru Connection](midi-thru-connection.md): Create play-through connections between sources and destinations.
- [MIDI Networking](midi-networking.md): Create and manage devices connected over a local network.
- [MIDI Drivers](midi-drivers.md): Create driver plug-ins.
- [MIDI Capability Inquiry](midi-capability-inquiry.md): Provide support for bidirectional discovery and configuration of devices.
