> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessory/supportoptions/bluetoothtransportbridging](https://developer.apple.com/documentation/accessorysetupkit/asaccessory/supportoptions/bluetoothtransportbridging)

# bluetoothTransportBridging (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The accessory supports bridging to Bluetooth classic transport.

## Declaration

```swift
static var bluetoothTransportBridging: ASAccessory.SupportOptions { get }
```

<a id="discussion"></a>

## Discussion

This option indicates that when connecting with low energy transport, the accessory supports activating Bluetooth classic transport profiles.

## See Also

### Bluetooth options

- [bluetoothPairingLE](bluetoothpairingle.md): The accessory supports Bluetooth Low Energy pairing.
- [bluetoothHID](bluetoothhid.md): The accessory supports Bluetooth Low Energy HID service.

# ASAccessorySupportBluetoothTransportBridging (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

The accessory supports bridging to Bluetooth classic transport.

## Declaration

```objectivec
ASAccessorySupportBluetoothTransportBridging
```

<a id="discussion"></a>

## Discussion

This option indicates that when connecting with low energy transport, the accessory supports activating Bluetooth classic transport profiles.

## See Also

### Bluetooth options

- [ASAccessorySupportBluetoothPairingLE](bluetoothpairingle.md): The accessory supports Bluetooth Low Energy pairing.
- [ASAccessorySupportBluetoothHID](bluetoothhid.md): The accessory supports Bluetooth Low Energy HID service.
