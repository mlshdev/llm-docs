> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midibluetoothdriveractivateallconnections()](https://developer.apple.com/documentation/coremidi/midibluetoothdriveractivateallconnections())

# MIDIBluetoothDriverActivateAllConnections() (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Promote all active Bluetooth connections into an online MIDI device capable of input and output.

## Declaration

```swift
func MIDIBluetoothDriverActivateAllConnections() -> OSStatus
```

<a id="return-value"></a>

## Return Value

A status code that indicates the result of the activation.

<a id="Discussion"></a>

## Discussion

To establish a Bluetooth MIDI driver connection to a Bluetooth Low Energy (BLE) MIDI peripheral, perform the following steps:

1. Scan for the peripheral’s advertised BLE MIDI service by using [Core Bluetooth](../corebluetooth.md).
2. Connect to the advertised peripheral by using [Core Bluetooth](../corebluetooth.md).
3. Call [MIDIBluetoothDriverActivateAllConnections()](midibluetoothdriveractivateallconnections%28%29.md) upon successful connection.
4. Confirm the peripheral’s registration by using [Core MIDI](../coremidi.md) and inspecting [MIDIDeviceRef](midideviceref.md).

If the device reference is present, [Core MIDI](../coremidi.md) owns a connection to the peripheral, so use [Core Bluetooth](../corebluetooth.md) to disconnect from the peripheral.

## See Also

### Managing Device Connections

- [MIDIBluetoothDriverDisconnect(\_:)](midibluetoothdriverdisconnect%28__%29.md): Disconnect the Bluetooth MIDI driver from a Bluetooth Low Energy MIDI peripheral.

# MIDIBluetoothDriverActivateAllConnections (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Promote all active Bluetooth connections into an online MIDI device capable of input and output.

## Declaration

```objectivec
extern OSStatus MIDIBluetoothDriverActivateAllConnections();
```

<a id="return-value"></a>

## Return Value

A status code that indicates the result of the activation.

<a id="Discussion"></a>

## Discussion

To establish a Bluetooth MIDI driver connection to a Bluetooth Low Energy (BLE) MIDI peripheral, perform the following steps:

1. Scan for the peripheral’s advertised BLE MIDI service by using [Core Bluetooth](../corebluetooth.md).
2. Connect to the advertised peripheral by using [Core Bluetooth](../corebluetooth.md).
3. Call [MIDIBluetoothDriverActivateAllConnections](midibluetoothdriveractivateallconnections%28%29.md) upon successful connection.
4. Confirm the peripheral’s registration by using [Core MIDI](../coremidi.md) and inspecting [MIDIDeviceRef](midideviceref.md).

If the device reference is present, [Core MIDI](../coremidi.md) owns a connection to the peripheral, so use [Core Bluetooth](../corebluetooth.md) to disconnect from the peripheral.

## See Also

### Managing Device Connections

- [MIDIBluetoothDriverDisconnect](midibluetoothdriverdisconnect%28__%29.md): Disconnect the Bluetooth MIDI driver from a Bluetooth Low Energy MIDI peripheral.
