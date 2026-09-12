> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midibluetoothdriverdisconnect(_:)](https://developer.apple.com/documentation/coremidi/midibluetoothdriverdisconnect(_:))

# MIDIBluetoothDriverDisconnect(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Disconnect the Bluetooth MIDI driver from a Bluetooth Low Energy MIDI peripheral.

## Declaration

```swift
func MIDIBluetoothDriverDisconnect(_ uuid: CFString) -> OSStatus
```

## Parameters

- `uuid`: A unique identifier that represents the peripheral to disconnect.

<a id="return-value"></a>

## Return Value

A status code that indicates the result of the disconnect.

<a id="Discussion"></a>

## Discussion

If a [Core MIDI](../coremidi.md) device is in a connected state to a Bluetooth Low Energy MIDI peripheral with the identifier you specify, the system disconnects it.

## See Also

### Managing Device Connections

- [MIDIBluetoothDriverActivateAllConnections()](midibluetoothdriveractivateallconnections%28%29.md): Promote all active Bluetooth connections into an online MIDI device capable of input and output.

# MIDIBluetoothDriverDisconnect (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Disconnect the Bluetooth MIDI driver from a Bluetooth Low Energy MIDI peripheral.

## Declaration

```objectivec
extern OSStatus MIDIBluetoothDriverDisconnect(CFStringRef uuid);
```

## Parameters

- `uuid`: A unique identifier that represents the peripheral to disconnect.

<a id="return-value"></a>

## Return Value

A status code that indicates the result of the disconnect.

<a id="Discussion"></a>

## Discussion

If a [Core MIDI](../coremidi.md) device is in a connected state to a Bluetooth Low Energy MIDI peripheral with the identifier you specify, the system disconnects it.

## See Also

### Managing Device Connections

- [MIDIBluetoothDriverActivateAllConnections](midibluetoothdriveractivateallconnections%28%29.md): Promote all active Bluetooth connections into an online MIDI device capable of input and output.
